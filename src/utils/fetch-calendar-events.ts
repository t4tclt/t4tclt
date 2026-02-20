interface CalendarEvent {
  title: string;
  start: Date;
  end: Date;
  description?: string;
  location?: string;
}

const CALENDAR_ID = 'dc8fd8df8554e9e4e5d34ea13918977ac6b9c3e617d5f701073d9af220df680e@group.calendar.google.com';
const ICAL_FEED_URL = `https://calendar.google.com/calendar/ical/${encodeURIComponent(CALENDAR_ID)}/public/basic.ics`;

export async function fetchCalendarEvents(): Promise<CalendarEvent[]> {
  try {
    const response = await fetch(ICAL_FEED_URL);
    const text = await response.text();
    
    const events: CalendarEvent[] = [];
    const lines = text.split(/\r?\n/);
    
    let currentEvent: Partial<CalendarEvent> = {};
    let inEvent = false;
    let currentKey = '';
    let currentValue = '';
    
    for (let i = 0; i < lines.length; i++) {
      let line = lines[i];
      
      if (line.startsWith(' ') || line.startsWith('\t')) {
        currentValue += line.substring(1);
        continue;
      }
      
      if (currentKey && currentValue) {
        const value = unescapeICalValue({ value: currentValue });
        if (currentKey === 'SUMMARY') {
          currentEvent.title = value;
        } else if (currentKey === 'DTSTART') {
          currentEvent.start = parseICalDate({ dateStr: value });
        } else if (currentKey === 'DTEND') {
          currentEvent.end = parseICalDate({ dateStr: value });
        } else if (currentKey === 'DESCRIPTION') {
          currentEvent.description = value;
        } else if (currentKey === 'LOCATION') {
          currentEvent.location = value;
        }
        currentKey = '';
        currentValue = '';
      }
      
      line = line.trim();
      
      if (line === 'BEGIN:VEVENT') {
        inEvent = true;
        currentEvent = {};
      } else if (line === 'END:VEVENT') {
        if (currentEvent.title && currentEvent.start) {
          events.push({
            title: currentEvent.title,
            start: currentEvent.start,
            end: currentEvent.end || currentEvent.start,
            description: currentEvent.description,
            location: currentEvent.location,
          });
        }
        inEvent = false;
        currentEvent = {};
      } else if (inEvent && line.includes(':')) {
        const colonIndex = line.indexOf(':');
        currentKey = line.substring(0, colonIndex).split(';')[0];
        currentValue = line.substring(colonIndex + 1);
      }
    }
    
    if (currentKey && currentValue && inEvent) {
      const value = unescapeICalValue({ value: currentValue });
      if (currentKey === 'SUMMARY') {
        currentEvent.title = value;
      } else if (currentKey === 'DTSTART') {
        currentEvent.start = parseICalDate({ dateStr: value });
      } else if (currentKey === 'DTEND') {
        currentEvent.end = parseICalDate({ dateStr: value });
      }
    }
    
    return events.sort((a, b) => a.start.getTime() - b.start.getTime());
  } catch (error) {
    console.error('Error fetching calendar events:', error);
    return [];
  }
}

function unescapeICalValue({ value }: { value: string }): string {
  return value
    .replace(/\\n/g, '\n')
    .replace(/\\,/g, ',')
    .replace(/\\;/g, ';')
    .replace(/\\\\/g, '\\');
}

function parseICalDate({ dateStr }: { dateStr: string }): Date {
  const cleanStr = dateStr.replace(/[^0-9TZ]/g, '');
  
  if (cleanStr.length === 8) {
    const year = parseInt(cleanStr.substring(0, 4), 10);
    const month = parseInt(cleanStr.substring(4, 6), 10) - 1;
    const day = parseInt(cleanStr.substring(6, 8), 10);
    return new Date(year, month, day);
  } else if (cleanStr.length >= 15) {
    const year = parseInt(cleanStr.substring(0, 4), 10);
    const month = parseInt(cleanStr.substring(4, 6), 10) - 1;
    const day = parseInt(cleanStr.substring(6, 8), 10);
    const hour = parseInt(cleanStr.substring(9, 11), 10) || 0;
    const minute = parseInt(cleanStr.substring(11, 13), 10) || 0;
    const second = parseInt(cleanStr.substring(13, 15), 10) || 0;
    
    if (dateStr.includes('Z')) {
      return new Date(Date.UTC(year, month, day, hour, minute, second));
    }
    return new Date(year, month, day, hour, minute, second);
  }
  return new Date();
}

export function getUpcomingEvents({ events, limit }: { events: CalendarEvent[]; limit?: number }): CalendarEvent[] {
  const now = new Date();
  const upcoming = events.filter(event => event.start >= now);
  return limit ? upcoming.slice(0, limit) : upcoming;
}

export function getEventTypeFromTitle({ title }: { title: string }): string {
  const lowerTitle = title.toLowerCase();
  
  if (lowerTitle.includes('clothes swap') || lowerTitle.includes('swap')) {
    return 'Clothes Swap';
  }
  if (lowerTitle.includes('craft night') || lowerTitle.includes('craft')) {
    return 'Craft Night';
  }
  if (lowerTitle.includes('board game') || lowerTitle.includes('game night')) {
    return 'Board Game Night';
  }
  if (lowerTitle.includes('party') || lowerTitle.includes('t4t party')) {
    return 'T4T Party';
  }
  if (lowerTitle.includes('social supper') || lowerTitle.includes('supper')) {
    return 'Social Supper';
  }
  if (lowerTitle.includes('movie night') || lowerTitle.includes('movie')) {
    return 'Movie Night';
  }
  if (lowerTitle.includes('transgiving')) {
    return 'Transgiving';
  }
  if (lowerTitle.includes('picnic')) {
    return 'Picnic';
  }
  if (lowerTitle.includes('discord game') || lowerTitle.includes('discord')) {
    return 'Discord Game Night';
  }
  if (lowerTitle.includes('pool party') || lowerTitle.includes('pool')) {
    return 'Pool party';
  }
  if (lowerTitle.includes('fairy tea') || lowerTitle.includes('tea party')) {
    return 'Fairy Tea Party';
  }
  if (lowerTitle.includes('battle jacket')) {
    return 'Battle Jacket Night';
  }
  if (lowerTitle.includes('food not bombs')) {
    return 'Food Not Bombs Picnic';
  }
  if (lowerTitle.includes('speed friending') || lowerTitle.includes('speed friend')) {
    return 'Speed Friending';
  }
  if (lowerTitle.includes('skillshare') || lowerTitle.includes('skill share')) {
    return 'Skillshare';
  }
  if (lowerTitle.includes('bonfire') || lowerTitle.includes('backyard')) {
    return 'Backyard Bonfire';
  }
  if (lowerTitle.includes('makeup')) {
    return 'Makeup lessons';
  }
  if (lowerTitle.includes('magic the gathering') || lowerTitle.includes('mtg')) {
    return 'Magic the Gathering';
  }
  if (lowerTitle.includes('know your rights') || lowerTitle.includes('rights')) {
    return 'Know your Rights';
  }
  if (lowerTitle.includes('prom') || lowerTitle.includes('masquerade')) {
    return 'Prom/masquerade';
  }
  
  return 'Other events';
}
