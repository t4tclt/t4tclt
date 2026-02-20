import React, { useEffect, useState } from 'react';
import './Events.css';
import Nav from '../components/Nav';
import { 
  FaCalendarAlt, 
  FaTshirt, 
  FaUtensils, 
  FaGraduationCap,
  FaGamepad,
  FaPalette,
  FaFilm,
  FaFire,
  FaTheaterMasks,
  FaMagic,
  FaDice,
  FaGift,
  FaUsers,
  FaLaptop,
  FaMicrophone,
  FaHandsHelping,
  FaBook,
  FaHeart,
  FaUmbrellaBeach
} from 'react-icons/fa';
import { fetchCalendarEvents, getUpcomingEvents, getEventTypeFromTitle } from '../utils/fetch-calendar-events';

interface CalendarEvent {
  title: string;
  start: Date;
  end: Date;
  description?: string;
  location?: string;
}

const CALENDAR_ID = 'dc8fd8df8554e9e4e5d34ea13918977ac6b9c3e617d5f701073d9af220df680e@group.calendar.google.com';
const CALENDAR_SCHEDULE_VIEW_URL = `https://calendar.google.com/calendar/embed?src=${encodeURIComponent(CALENDAR_ID)}&ctz=America%2FNew_York&mode=AGENDA`;

const eventIcons: Record<string, any> = {
  'Clothes Swap': FaTshirt,
  'Clothes Swap / Name Change': FaTshirt,
  'Craft Night': FaPalette,
  'Board Game Night': FaDice,
  'T4T Party': FaGift,
  'Social Supper': FaUtensils,
  'Movie Night': FaFilm,
  'Picnic': FaFire,
  'Discord Game Night': FaGamepad,
  'Food Not Bombs Picnic': FaUtensils,
  'Speed Friending': FaUsers,
  'Skillshare': FaGraduationCap,
  'Backyard Bonfire': FaFire,
  'Magic the Gathering': FaDice,
  'Prom/masquerade': FaTheaterMasks,
  'Other events': FaCalendarAlt,
  'Clothes Sorting': FaTshirt,
  'Coworking': FaLaptop,
  'Food Share': FaUtensils,
  'Fundraiser': FaHeart,
  'Karaoke': FaMicrophone,
  'Mutual Aid': FaHandsHelping,
  'Open Mic': FaMicrophone,
  'Outreach / Tabling': FaHandsHelping,
  'Outreach / Volunteering': FaHandsHelping,
  'Potluck': FaUtensils,
  'Seasonal Outing': FaUmbrellaBeach,
  'Support Group': FaUsers,
  'Tarot Night': FaMagic,
  'Variety Show': FaTheaterMasks,
  'Vigil': FaHeart,
  'Zine': FaBook
};

const previousEventsData: Record<string, number> = {
  'Discord Game Night': 27,
  'Outreach / Tabling': 23,
  'T4T Party': 21,
  'Craft Night': 18,
  'Skillshare': 17,
  'Social Supper': 15,
  'Board Game Night': 12,
  'Karaoke': 10,
  'Magic the Gathering': 9,
  'Movie Night': 9,
  'Clothes Swap': 11,
  'Clothes Swap / Name Change': 2,
  'Other events': 5,
  'Clothes Sorting': 5,
  'Coworking': 4,
  'Food Not Bombs Picnic': 4,
  'Speed Friending': 4,
  'Zine': 4,
  'Backyard Bonfire': 3,
  'Food Share': 3,
  'Mutual Aid': 3,
  'Picnic': 3,
  'Seasonal Outing': 3,
  'Variety Show': 3,
  'Prom/masquerade': 1,
  'Fundraiser': 1,
  'Open Mic': 1,
  'Outreach / Volunteering': 1,
  'Potluck': 1,
  'Support Group': 1,
  'Tarot Night': 1,
  'Vigil': 1
};

interface EventDetails {
  venue: string;
  attendees: string;
  whatToExpect: string;
}

const eventDetails: Record<string, EventDetails> = {
  'Board Game Night': {
    venue: 'Breweries / cafés / game stores; sometimes library meeting rooms',
    attendees: '15–50',
    whatToExpect: 'Casual drop-in play. Mix of light + medium games, folks teaching rules, social-first vibe. Bring a game if you want, or play with ours; showing up solo is normal.'
  },
  'Backyard Bonfire': {
    venue: 'Private home/backyard',
    attendees: '10–30',
    whatToExpect: 'Cozy hang with firepit, snacks, chatting, maybe music. Usually RSVP/DM for address. Dress for being outdoors; bring a chair/blanket if you can.'
  },
  'Clothes Swap': {
    venue: 'Libraries / community centers / student unions / partner venues',
    attendees: '40–120',
    whatToExpect: 'Gender-affirming swap with sorting racks/tables. You can take items without bringing. Expect lots of browsing, and volunteers helping sort sizes/organization.'
  },
  'Clothes Swap / Name Change': {
    venue: 'Libraries / community centers / student unions / partner venues',
    attendees: '40–120',
    whatToExpect: 'Combined event: gender-affirming clothes swap plus name change resources/workshop. You can take items without bringing. Expect lots of browsing, volunteers helping sort sizes/organization, and information about legal name change processes.'
  },
  'Craft Night': {
    venue: 'Breweries / libraries / cafés',
    attendees: '10–25',
    whatToExpect: 'Bring-your-own craft or use shared supplies. Conversational, easy to join. Sometimes themed (patches, embroidery, zines, clothes altering).'
  },
  'Discord Game Night': {
    venue: 'Online (Discord voice + game channels)',
    attendees: '5–25',
    whatToExpect: 'Jackbox/party games/board-game sims/chaotic fun. Accessible for folks who can\'t travel. Usually includes drop-in rules explanation and rotating games.'
  },
  'T4T Party': {
    venue: 'Bars/breweries/cafés; sometimes private houses',
    attendees: '15–80',
    whatToExpect: 'General hangouts: chatting, mingling, sometimes theme (tea party, bonfire, zine release, dance). Usually easiest "newcomer" entry point.'
  },
  'Social Supper': {
    venue: 'Markets/restaurants with many options (Common Market, 7th St Market, Alley 51, etc.)',
    attendees: '10–45',
    whatToExpect: 'Low-pressure community meal. People arrive/leave as able, split into small tables, lots of intro-friendly conversation.'
  },
  'Movie Night': {
    venue: 'Visart / private home',
    attendees: '6–35',
    whatToExpect: 'Cozy watch party. At Visart/cinema: show up early, snacks; at homes: RSVP/capacity, shoes off vibes, bring a snack optional.'
  },
  'Picnic': {
    venue: 'Parks (Latta/Reedy Creek/etc.)',
    attendees: '10–70',
    whatToExpect: 'Outdoor blankets/chairs, snacks, casual conversation. Bring water, sunscreen/bug spray. Great for low-cost social time.'
  },
  'Food Not Bombs Picnic': {
    venue: 'First Ward Park',
    attendees: '20–50',
    whatToExpect: 'Mutual aid meal share/distro energy. Often vegan food from FNB + community contributions. Bring water/blanket; masks encouraged when not eating.'
  },
  'Speed Friending': {
    venue: 'Breweries / libraries / community rooms',
    attendees: '15–30',
    whatToExpect: 'Structured rotations with prompts; often optional contact exchange at end. Good facilitation matters; expect some nerves + lots of laughter.'
  },
  'Skillshare': {
    venue: 'Libraries / partner orgs / studios',
    attendees: '10–35',
    whatToExpect: 'Skill/education sessions (rights, safety, binding, resumes, etc.). Expect a facilitator, handouts/resources, Q&A, and sometimes RSVP caps.'
  },
  'Magic the Gathering': {
    venue: 'Game store (Mighty Meeple / YLGS)',
    attendees: '8–20',
    whatToExpect: 'Usually Commander/casual pods; sometimes draft. Expect folks to help match power levels. Bring a deck; welcome to newer players.'
  },
  'Know your Rights': {
    venue: 'Libraries / partner orgs / studios',
    attendees: '10–35',
    whatToExpect: 'Skill/education sessions (rights, safety, binding, resumes, etc.). Expect a facilitator, handouts/resources, Q&A, and sometimes RSVP caps.'
  },
  'Prom/masquerade': {
    venue: 'Large venue / partner space / high visibility',
    attendees: '50-150',
    whatToExpect: 'One of our signature gatherings (often seasonal). Expect bigger crowd, more logistics, volunteers, possibly tabling/resources, photos, and a strong community vibe.'
  },
  'Other events': {
    venue: 'One-off social formats (show & tell, thrifting, etc.)',
    attendees: '6–40',
    whatToExpect: '"Wildcard" socials. Expect a simple structure (meet time/place, optional activity), lots of chatting, and flexible participation.'
  },
  'Clothes Sorting': {
    venue: 'Libraries / breweries / community space',
    attendees: '5–10 (volunteers)',
    whatToExpect: 'Volunteer-friendly "hands busy" work: sorting by size/type, labeling bins, light lifting. Often relaxed + chatty; great for low-spoons social time or low-key access to our clothes bins.'
  },
  'Coworking': {
    venue: 'Coffee shops / coworking spaces',
    attendees: '3–15',
    whatToExpect: 'Quiet-ish "body doubling" and accountability. People work on laptops, resumes, planning, crafts. Low-pressure socializing; often check-in at start.'
  },
  'Food Share': {
    venue: 'Partner venue / community room / Hattie\'s-style meetup spot',
    attendees: '10–40',
    whatToExpect: 'Pantry staples redistribution + communal meal vibes. People may bring extras; some org-provided supplies. Expect "take what you need" norms.'
  },
  'Fundraiser': {
    venue: 'Partner studio (pole/fitness/etc.) or event venue',
    attendees: '10–40',
    whatToExpect: 'Pay what you can or suggested donation event supporting a cause. Expect clear donation asks, raffle/prizes sometimes, and "first-timers welcome" framing.'
  },
  'Karaoke': {
    venue: 'Bar/venue with karaoke night (Starlight on 22nd)',
    attendees: '5-20',
    whatToExpect: 'Supportive crowd, low-judgment singing (or just watching). Often "reserved-ish" section; expect rotating song queue and cheering culture.'
  },
  'Mutual Aid': {
    venue: 'SEAC / community spaces / pop-up fairs',
    attendees: '20–120',
    whatToExpect: 'Resources distribution, community org tables, sometimes services (harm reduction, legal info, healthcare navigation). Volunteer roles + "take what you need."'
  },
  'Open Mic': {
    venue: 'Brewery/bar stage night',
    attendees: '15–30',
    whatToExpect: 'Music/poetry/comedy. Some folks perform, others hang back. Expect sign-up list, supportive crowd, and variable pacing.'
  },
  'Outreach / Tabling': {
    venue: 'Festivals, Pride events, markets, concerts, block parties',
    attendees: '2–10 (volunteers) + 100s passersby',
    whatToExpect: 'Staff a table: zines/resources, donation jar, convo with community. Expect setup/tear-down, lots of short interactions, and weather planning.'
  },
  'Outreach / Volunteering': {
    venue: 'Partner site / community project',
    attendees: '5–30',
    whatToExpect: 'Hands-on support role (setup, staffing, distro). Similar to sorting days but tied to an external event/service.'
  },
  'Potluck': {
    venue: 'Brewery back room / community room / house',
    attendees: '10–40',
    whatToExpect: 'Bring a dish if you can; no shame if you can\'t. Shared table, labeling allergens is helpful. Often includes "community announcements" moment.'
  },
  'Seasonal Outing': {
    venue: 'Theme park/haunt/Ren Faire/holiday activities',
    attendees: '10–20',
    whatToExpect: 'Group meetup at a destination. Expect coordination via Discord, tickets/transport planning, and sub-groups forming for rides/food.'
  },
  'Support Group': {
    venue: 'Community spaces / partner venues',
    attendees: '5–15',
    whatToExpect: 'Structured peer support space with facilitation. Expect confidentiality norms, check-ins, and shared resources. RSVP sometimes required.'
  },
  'Tarot Night': {
    venue: 'Bar/café/partner venue',
    attendees: '20–30',
    whatToExpect: 'Casual readings (sometimes peer-to-peer), vibes-focused, often social plus introspection. Bring a deck if you have one; spectating is normal.'
  },
  'Variety Show': {
    venue: 'Venue stage night (Hattie\'s/Starlight/etc.)',
    attendees: '30–60',
    whatToExpect: 'Drag/poetry/music/comedy mix. Expect a host, lineup, tipping, fundraising asks sometimes. Higher energy and more spectators.'
  },
  'Vigil': {
    venue: 'Public memorial space / community venue',
    attendees: '15–30',
    whatToExpect: 'Quiet gathering for remembrance/solidarity. Expect candles, short speeches, shared grief care, and strong community support norms.'
  },
  'Zine': {
    venue: 'Breweries/libraries/houses',
    attendees: '8–30',
    whatToExpect: 'Collaborative zine-making or release party. Expect supplies (paper, collage, markers), chill creativity, and sharing/printing plans.'
  }
};

function Events() {
  const [upcomingEvents, setUpcomingEvents] = useState<CalendarEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedEventType, setExpandedEventType] = useState<string | null>(null);

  useEffect(() => {
    async function loadEvents() {
      setLoading(true);
      try {
        const allEvents = await fetchCalendarEvents();
        const upcoming = getUpcomingEvents({ events: allEvents });
        setUpcomingEvents(upcoming);
      } catch (error) {
        console.error('Error loading events:', error);
      } finally {
        setLoading(false);
      }
    }
    
    loadEvents();
  }, []);

  const formatDate = ({ date }: { date: Date }): string => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const formatTime = ({ date }: { date: Date }): string => {
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    });
  };

  return (
    <div className="events-page-container">
      <Nav />
      
      <div className="events-hero">
        <h1 className="events-hero-title">Events</h1>
        <p className="events-hero-subtitle">Stay up to date with all T4T Charlotte events and activities</p>
      </div>

      <div className="events-content-section">
        <div className="events-content">
          <div className="events-calendar-section">
            <h2 className="events-section-title">Calendar</h2>
            <div className="events-calendar-wrapper">
              <iframe 
                title="T4T Charlotte Events Calendar - Schedule View"
                src={CALENDAR_SCHEDULE_VIEW_URL}
                className="events-calendar-iframe"
              ></iframe>
            </div>
          </div>

          {loading ? (
            <div className="events-loading">
              <p>Loading events...</p>
            </div>
          ) : (
            <>
              {upcomingEvents.length > 0 && (
                <div className="events-upcoming-section">
                  <h2 className="events-section-title">Upcoming Events</h2>
                  <div className="events-list">
                    {upcomingEvents.map((event, index) => {
                      const eventType = getEventTypeFromTitle({ title: event.title });
                      const Icon = eventIcons[eventType] || FaCalendarAlt;
                      const isPink = index % 2 === 0;
                      
                      return (
                        <div key={index} className="event-item">
                          <div className={`event-icon-wrapper ${isPink ? 'event-icon-pink' : 'event-icon-blue'}`}>
                            <Icon className="event-icon" />
                          </div>
                          <div className="event-details">
                            <h3 className="event-title">{event.title}</h3>
                            <div className="event-meta">
                              <span className="event-date">{formatDate({ date: event.start })}</span>
                              {event.start.getHours() > 0 && (
                                <span className="event-time">{formatTime({ date: event.start })}</span>
                              )}
                              {event.location && (
                                <span className="event-location">{event.location}</span>
                              )}
                            </div>
                            {event.description && (
                              <p className="event-description">{event.description}</p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              <div className="events-previous-section">
                <h2 className="events-section-title">Event Types</h2>
                <p className="events-section-subtitle">Types of events we've hosted, click on one to learn more</p>
                <div className="events-grid">
                    {Object.entries(previousEventsData)
                    .sort(([, a], [, b]) => b - a)
                    .map(([eventType, count], index) => {
                      const Icon = eventIcons[eventType] || FaCalendarAlt;
                      const isPink = index % 2 === 0;
                      const isExpanded = expandedEventType === eventType;
                      
                      return (
                        <div 
                          key={eventType} 
                          className={`event-type-item ${isExpanded ? 'event-type-item-expanded' : ''}`}
                          onClick={() => setExpandedEventType(isExpanded ? null : eventType)}
                        >
                          <div className="event-type-item-header">
                            <div className={`event-type-icon-wrapper ${isPink ? 'event-type-icon-pink' : 'event-type-icon-blue'}`}>
                              <Icon className="event-type-icon" />
                            </div>
                            <div className="event-type-label">{eventType}</div>
                            <div className="event-type-count">{count}</div>
                          </div>
                          {isExpanded && (
                            <div className="event-type-expanded-content">
                              {eventDetails[eventType] ? (
                                <>
                                  <div className="event-type-detail">
                                    <span className="event-type-detail-label">Venue:</span>
                                    <span className="event-type-detail-value">{eventDetails[eventType].venue}</span>
                                  </div>
                                  <div className="event-type-detail">
                                    <span className="event-type-detail-label">Usual number of attendees:</span>
                                    <span className="event-type-detail-value">{eventDetails[eventType].attendees}</span>
                                  </div>
                                  <div className="event-type-detail">
                                    <span className="event-type-detail-label">What to expect:</span>
                                    <span className="event-type-detail-value">{eventDetails[eventType].whatToExpect}</span>
                                  </div>
                                </>
                              ) : (
                                <>
                                  <div className="event-type-detail">
                                    <span className="event-type-detail-label">Venue:</span>
                                    <span className="event-type-detail-value"></span>
                                  </div>
                                  <div className="event-type-detail">
                                    <span className="event-type-detail-label">Usual number of attendees:</span>
                                    <span className="event-type-detail-value"></span>
                                  </div>
                                  <div className="event-type-detail">
                                    <span className="event-type-detail-label">What to expect:</span>
                                    <span className="event-type-detail-value"></span>
                                  </div>
                                </>
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}
                </div>
              </div>

              <div className="events-welcome-section">
                <p className="events-welcome-text">
                  T4Tclt events are open to everyone, whether you're just starting your journey with transition, been in the community for a while or you're an ally wanting to learn more or participate in queer spaces. Come join us at any of our upcoming events or <a href="/discord">learn more about our Discord</a>!
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Events;
