export interface SwapSortingEvent {
  id: string;
  startAt: Date;
  endAt: Date;
  dateLabel: string;
  title: string;
  location: string;
  address: string;
  description: string;
}

const SORTING_DESCRIPTION =
  "Help sort donations ahead of our upcoming swaps, drop off clothes, or come by if you're looking for something specific. If there's a size or category you're especially hoping for, let us know and we can try to bring those bins.";

export const SWAP_SORTING_EVENTS: SwapSortingEvent[] = [
  {
    id: '2026-07-30',
    startAt: new Date(2026, 6, 30, 16, 0, 0),
    endAt: new Date(2026, 6, 30, 19, 0, 0),
    dateLabel: 'Thursday, July 30 · 4–7 PM',
    title: 'Clothes Sorting',
    location: 'South Blvd Library, Community Room',
    address: '4429 South Blvd',
    description: SORTING_DESCRIPTION,
  },
  {
    id: '2026-08-27',
    startAt: new Date(2026, 7, 27, 16, 0, 0),
    endAt: new Date(2026, 7, 27, 19, 0, 0),
    dateLabel: 'Thursday, August 27 · 4–7 PM',
    title: 'Clothes Sorting',
    location: 'South Blvd Library, Community Room',
    address: '4429 South Blvd',
    description: SORTING_DESCRIPTION,
  },
  {
    id: '2026-09-24',
    startAt: new Date(2026, 8, 24, 16, 0, 0),
    endAt: new Date(2026, 8, 24, 19, 0, 0),
    dateLabel: 'Thursday, September 24 · 4–7 PM',
    title: 'Clothes Sorting',
    location: 'South Blvd Library, Community Room',
    address: '4429 South Blvd',
    description: SORTING_DESCRIPTION,
  },
  {
    id: '2026-10-22',
    startAt: new Date(2026, 9, 22, 16, 0, 0),
    endAt: new Date(2026, 9, 22, 19, 0, 0),
    dateLabel: 'Thursday, October 22 · 4–7 PM',
    title: 'Clothes Sorting',
    location: 'South Blvd Library, Community Room',
    address: '4429 South Blvd',
    description: SORTING_DESCRIPTION,
  },
  {
    id: '2026-11-17',
    startAt: new Date(2026, 10, 17, 16, 0, 0),
    endAt: new Date(2026, 10, 17, 19, 0, 0),
    dateLabel: 'Tuesday, November 17 · 4–7 PM',
    title: 'Clothes Sorting',
    location: 'South Blvd Library, Community Room',
    address: '4429 South Blvd',
    description: SORTING_DESCRIPTION,
  },
  {
    id: '2026-12-03',
    startAt: new Date(2026, 11, 3, 16, 0, 0),
    endAt: new Date(2026, 11, 3, 19, 0, 0),
    dateLabel: 'Thursday, December 3 · 4–7 PM',
    title: 'Clothes Sorting',
    location: 'South Blvd Library, Community Room',
    address: '4429 South Blvd',
    description: SORTING_DESCRIPTION,
  },
];

export function getUpcomingSwapSortingEvents({
  now = new Date(),
}: {
  now?: Date;
} = {}): SwapSortingEvent[] {
  return SWAP_SORTING_EVENTS
    .filter((event) => event.endAt >= now)
    .sort((left, right) => left.startAt.getTime() - right.startAt.getTime());
}

export function getNextSwapSortingEvent({
  now = new Date(),
}: {
  now?: Date;
} = {}): SwapSortingEvent | undefined {
  return getUpcomingSwapSortingEvents({ now })[0];
}
