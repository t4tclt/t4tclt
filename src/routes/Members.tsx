import './Members.css';
import Nav from '../components/Nav';
import T4TLogo from '../T4T_WebsiteLogo.svg';
import { 
  FaCalendarAlt, 
  FaHandshake, 
  FaLaptop, 
  FaUsers, 
  FaTshirt, 
  FaUtensils, 
  FaHeart, 
  FaGraduationCap,
  FaGamepad,
  FaPalette,
  FaFilm,
  FaBirthdayCake,
  FaSwimmingPool,
  FaFire,
  FaTheaterMasks,
  FaGavel,
  FaMagic,
  FaDice,
  FaGift,
  FaCar
} from 'react-icons/fa';

interface Testimonial {
  quote: string;
  author?: string;
}

function Members() {
  // Demographics data parsed from survey
  const totalResponses = 43;
  
  const genderIdentity = {
    'Trans femme': 16,
    'Non-binary': 15,
    'Trans woman': 9,
    'Gender fluid': 7,
    'Trans masc': 6,
    'Gender non-conforming': 6,
    'Questioning': 2,
    'Demigender': 2,
    'Trans man': 2,
    'Agender': 2,
    'Two-spirit': 1,
    'Cis-ish': 1,
    'Intersex': 1,
    'Plural / Other complex identities': 1
  };

  const sexuality = {
    'Queer': 12,
    'T4T': 9,
    'Bisexual': 9,
    'Sapphic': 8,
    'Demisexual': 7,
    'Pansexual': 6,
    'Lesbian': 5,
    'Polysexual': 3,
    'Asexual': 2,
    'Gay': 1,
    'Questioning / Other': 2
  };

  const ethnicity = {
    'White/Caucasian': 30,
    'Latine': 3,
    'Black': 1,
    'South Asian': 1,
    'Indigenous': 2,
    'Multiracial': 1,
    'Prefer not to say': 0
  };

  const ageGroups = {
    '18-21': 1,
    '21-25': 8,
    '26-30': 14,
    '31-40': 13,
    '40+': 4
  };

  const disabilityStatus = {
    'Yes': 26,
    'Undiagnosed or seeking diagnosis': 7,
    'No': 6,
    'Prefer not to say': 1
  };

  const involvementLength = {
    '6–12 months': 12,
    'Over a year': 12,
    'Less than 3 months': 10,
    '3–6 months': 7
  };

  const heardAboutT4T = {
    'Word of mouth/from a community member/friend': 18,
    'Social media/online': 8,
    'Carolina Trans Network Discord': 6,
    'Therapist/Doctor/Service Provider': 3,
    'Got info from T4T\'s table at a pride or vending event': 2,
    'Stumbled across T4T having an event': 1,
    'Other/Unknown': 5
  };

  const engagementTypes = {
    'Attend events': 25,
    'Receive or offer mutual aid': 19,
    'Volunteer': 17,
    'Online community only': 8,
    'Organizer / coordinator': 8
  };

  const accessToResources = {
    'Yes': 23,
    'Have not tried to access resources': 12,
    'No': 1
  };

  const eventsAttended = {
    'Clothes Swap': 20,
    'Craft Night': 19,
    'Board Game Night': 19,
    'T4T Party': 14,
    'Social Supper': 11,
    'Movie Night': 10,
    'Transgiving': 9,
    'Picnic': 9,
    'Discord Game Night': 9,
    'Pool party': 7,
    'Fairy Tea Party': 7,
    'Battle Jacket Night': 5,
    'Food Not Bombs Picnic': 5,
    'Speed Friending': 5,
    'Skillshare': 5,
    'Backyard Bonfire': 4,
    'Makeup lessons': 3,
    'Magic the Gathering': 2,
    'Know your Rights': 2,
    'Other events': 5
  };

  const preferredVenues = {
    'Spaces that have private sections for us': 22,
    'Spaces that are free': 19,
    'Libraries': 17,
    'Coffee Shops': 13,
    'Board game/card game shops': 9,
    'Hattie\'s': 8,
    'Divine Barrel': 7,
    'Triple C Brewing': 3,
    'Other venues': 4
  };

  const favoriteEvents = {
    'Backyard Bonfire': 17,
    'Craft Night': 14,
    'Board Game Night': 14,
    'Prom/masquerade': 13,
    'Pool Party': 11,
    'Transgiving': 10,
    'Social Supper': 10,
    'T4T Party': 10,
    'Skillshare': 10,
    'Speed Friending': 10,
    'Picnics': 10,
    'Makeup lessons': 9,
    'Movie Night': 9,
    'Clothes Swap': 9,
    'Fairy Tea Party': 7,
    'Food Not Bombs Picnic': 6,
    'Know your Rights': 6,
    'Battle Jacket Night': 5,
    'Other events': 3
  };

  // T4T's Reach data
  const programsParticipated = {
    'Events / social support': 21,
    'Clothes swaps': 20,
    'Rideshare': 12,
    'Mutual aid / financial help': 12,
    'Community care / emotional support': 12,
    'Food share / meals': 11,
    'Skill-shares / education': 9
  };

  const clothesSwapParticipation = {
    'Yes, I donated and received clothes!': 14,
    'No, not yet': 11,
    'Yes, I received clothes!': 5,
    'Yes, I donated clothes!': 4
  };

  const foodShareParticipation = {
    'No': 13,
    'No, I would like to participate or help with this in the future (reach out to Quinn!)': 10,
    'Yes, several times because I struggle accessing resources': 3,
    'Yes, once or twice while I got situated on resources': 3,
    'Yes, I have helped pick up stuff at a food bank for someone': 2,
    'Yes, I have given food to others': 2
  };

  const rideshareUsage = {
    'No, I have consistent access to transportation': 19,
    'No, but I have given rides to others': 6,
    'No, not yet but I will': 4,
    'Yes, several times (3-10)': 2,
    'No, but I\'d like to help drive': 2,
    'Yes, all the time (10+)': 1
  };

  const resourcesAccessed = {
    'Yes, I found them helpful': 18,
    'No, but I will take a look in the future': 10,
    'No, I haven\'t used them': 6
  };

  const newsletterHelpful = {
    'Yes': 18,
    'Maybe I will in the future': 16,
    'No response': 4
  };

  const communityConnection = {
    'Yes, definitely': 27,
    'Somewhat': 6,
    'Not sure': 2,
    'Not yet': 1
  };

  const comfortInCharlotte = {
    'Significantly': 20,
    'Somewhat': 9,
    'When I\'m with the group': 3,
    'No': 3,
    'Not yet': 1
  };

  // Testimonials - quotes from survey where permission was given
  const testimonials: Testimonial[] = [
    {
      quote: "T4t has helped me to be more confident joining social situations. Because I know that kind and welcoming people exist."
    },
    {
      quote: "Being a safe place for me to explore who i really am during a time where what i thought i knew about myself was flipped upside down."
    },
    {
      quote: "I had been unemployed for almost a year and I was running extremely low on funds for food. I was put in contact with PATH, who then got me into a food bank program. [T4T] also continues to offer food and resources to those like myself who need it, which has been incredibly helpful."
    },
    {
      quote: "I have met so many amazing people through the group."
    },
    {
      quote: "This year I made a great new friend, and attended events where I truly got to feel like myself for the first time"
    },
    {
      quote: "of all the million ways T4T CLT has supported and impacted me, one stand-out way is the lasting relationships i've gotten from the speed-friending events 💖💖💖"
    },
    {
      quote: "Gets me out touchin grass and organizing"
    },
    {
      quote: "I was able to meet the love of my life, and my partner at a T4T event!"
    },
    {
      quote: "Mutual aid and zines and stickers and hope"
    },
    {
      quote: "Through T4T events I've met people that I wouldn't have come across otherwise and made close friends, I've explored the city more and felt more at home knowing there's a community around me"
    },
    {
      quote: "T4T helped me to meet other trans people and feel less alone in my identity"
    },
    {
      quote: "I'm very overworked and have a lot of social anxiety. Volunteering with T4T has been a nice way to be a little social while also being useful. Having *a reason* to be at a place helps regulate my anxiety about just being around people. Those people being so openly and proudly queer has helped me explore parts of myself."
    },
    {
      quote: "Helped me feel less alone"
    },
    {
      quote: "T4TCLT has helped me feel part of the trans community. Before I found T4TCLT, I barely knew any trans people in real life. Now, I know I have a whole community of trans people who support me. T4TCLT has also helped me feel more comfortable being \"visibly\" gender-nonconforming and nonbinary in public spaces, especially at their events like the social suppers, board game nights, craft nights, movie nigh, pool party & tea party. I also have used the T4Taxi channel in the discord and have been able to help give other community members rides. The food bank has also been helpful for me to get groceries and nutritious food when I couldn't afford it and was only eating instant ramen/junk food. Most of all, I've met wonderful people I am thankful to call my friends. I appreciate T4TCLT for all their support and I'm proud to be part of the community."
    },
    {
      quote: "The path program provided me a lot of food and other health care"
    },
    {
      quote: "it's full of friends.  people who care about each other and aren't afraid to show it."
    },
    {
      quote: "Finally for the first time in my life connecting with other trans people, building a whole new social circle that accepts and embraces the real me. I haven't been on here long but this community has been really impactful on my life."
    },
    {
      quote: "Game nights have gotten me more into gaming with the boyfriend in general, which is nice and great for the relationship."
    },
    {
      quote: "Community to be safe with, financial mutual aid, a place to volunteer where I can be myself, connections to other resources, just in general T4T makes me feel seen"
    },
    {
      quote: "I've connected with other individuals and found additional groups through the connections i made in t4t"
    },
    {
      quote: "T4T has been one of the most inclusive groups I have ever joined. From a point of friendship and fulfillment T4T truly gives me something new to wake up to every day. The community is one of the best I have ever experianced"
    },
    {
      quote: "Very friendly and welcoming. I don't have a lot of friends lmao"
    },
    {
      quote: "I was very happy to see that T4TCLT exists. I finally went to my first meeting a few days ago."
    },
    {
      quote: "Thanks to t4t, I have trans friends in the Charlotte area. I am not alone, and my mental health has been improving since I met these wonderful folks."
    },
    {
      quote: "Having access to wider variety of info and meeting a lot of great people (I'm a huge introvert + deaf...)"
    },
    {
      quote: "Fostering local community building."
    },
    {
      quote: "Seeing other people's experiences in the discord has helped me as I process my own transition."
    },
    {
      quote: "T4T has shown me that I can live in Charlotte and still be me. For a long time I thought I would have to leave this city if I truly wanted to be myself."
    },
    {
      quote: "I have received numerous forms of resources, one of the best of which being a community of people who I can ask questions to. Ive been transitioning a long time (12 years) and there are still so many things to learn everyday. Beyond that I've received free affirming clothing and been connected with PATH. I feel as if I have finally found a crowd of people who understand me and I dont have to mask around. My social needs were not being met before T4TCLT and now they are."
    },
    {
      quote: "They helped me not feel so alone and helped me be more courageous"
    },
    {
      quote: "T4T has connected me to events and local spaces where I can feel safe to be myself and build my community since moving from another state. It's a huge weight off my shoulders to have these resources."
    },
    {
      quote: "I have more access to resources and community than I've had in a long time. I was nervous about moving back to Charlotte this year and it was reassuring to meet such a welcoming group."
    },
    {
      quote: "I'm finally starting to build the community and support network I was missing for so long. I've never been in a room with so many other trans people before. The group has done so much to help me feel less alone."
    }
  ];

  // Calculate summary statistics
  const summaryStats = {
    totalMembers: totalResponses,
    feelConnected: Math.round((communityConnection['Yes, definitely'] / totalResponses) * 100),
    feelComfortable: Math.round((comfortInCharlotte['Significantly'] / totalResponses) * 100),
    newsletterHelpful: Math.round((newsletterHelpful['Yes'] / totalResponses) * 100),
    accessResources: Math.round((accessToResources['Yes'] / totalResponses) * 100)
  };

  // Donut chart component
  const renderDonutChart = ({ data, colors, size = 200 }: { data: Record<string, number>; colors: string[]; size?: number }) => {
    const entries = Object.entries(data).filter(([_, value]) => value > 0);
    const total = entries.reduce((sum, [_, value]) => sum + value, 0);
    const radius = size / 2 - 10;
    const circumference = 2 * Math.PI * radius;
    
    let currentOffset = 0;
    const segments = entries.map(([label, value], index) => {
      const percentage = (value / total) * 100;
      const dashLength = (percentage / 100) * circumference;
      const gapLength = circumference - dashLength;
      const strokeDashoffset = -currentOffset;
      currentOffset += dashLength;
      
      return {
        label,
        value,
        percentage: Math.round(percentage),
        strokeDasharray: `${dashLength} ${gapLength}`,
        strokeDashoffset,
        color: colors[index % colors.length]
      };
    });

    return (
      <div className="members-donut-chart-container">
        <svg width={size} height={size} className="members-donut-chart">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#e2e8f0"
            strokeWidth="20"
          />
          {segments.map((segment, index) => (
            <circle
              key={index}
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke={segment.color}
              strokeWidth="20"
              strokeDasharray={segment.strokeDasharray}
              strokeDashoffset={segment.strokeDashoffset}
              strokeLinecap="round"
              transform={`rotate(-90 ${size / 2} ${size / 2})`}
            />
          ))}
          <text
            x={size / 2}
            y={size / 2 - 10}
            textAnchor="middle"
            className="members-donut-total"
          >
            {total}
          </text>
          <text
            x={size / 2}
            y={size / 2 + 10}
            textAnchor="middle"
            className="members-donut-label"
          >
            Responses
          </text>
        </svg>
        <div className="members-donut-legend">
          {segments.map((segment, index) => (
            <div key={index} className="members-donut-legend-item">
              <div 
                className="members-donut-legend-color" 
                style={{ backgroundColor: segment.color }}
              ></div>
              <span className="members-donut-legend-label">{segment.label}</span>
              <span className="members-donut-legend-value">{segment.value} ({segment.percentage}%)</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Icon mapping for events
  const eventIcons: Record<string, any> = {
    'Clothes Swap': FaTshirt,
    'Craft Night': FaPalette,
    'Board Game Night': FaDice,
    'T4T Party': FaGift,
    'Social Supper': FaUtensils,
    'Movie Night': FaFilm,
    'Transgiving': FaBirthdayCake,
    'Picnic': FaFire,
    'Discord Game Night': FaGamepad,
    'Pool party': FaSwimmingPool,
    'Fairy Tea Party': FaMagic,
    'Battle Jacket Night': FaTshirt,
    'Food Not Bombs Picnic': FaUtensils,
    'Speed Friending': FaUsers,
    'Skillshare': FaGraduationCap,
    'Backyard Bonfire': FaFire,
    'Makeup lessons': FaPalette,
    'Magic the Gathering': FaDice,
    'Know your Rights': FaGavel,
    'Prom/masquerade': FaTheaterMasks
  };

  // Icon mapping for engagement types
  const engagementIcons: Record<string, any> = {
    'Attend events': FaCalendarAlt,
    'Volunteer': FaHandshake,
    'Online community only': FaLaptop,
    'Receive or offer mutual aid': FaHeart,
    'Organizer / coordinator': FaUsers
  };

  // Icon mapping for programs & support
  const programIcons: Record<string, any> = {
    'Events / social support': FaCalendarAlt,
    'Clothes swaps': FaTshirt,
    'Rideshare': FaCar,
    'Mutual aid / financial help': FaHeart,
    'Community care / emotional support': FaHandshake,
    'Food share / meals': FaUtensils,
    'Skill-shares / education': FaGraduationCap
  };


  const renderStatBar = ({ label, value, total, color, icon }: { label: string; value: number; total: number; color?: string; icon?: any }) => {
    const percentage = Math.round((value / total) * 100);
    
    // Generate color based on percentage if not provided
    let barColor = color;
    if (!barColor) {
      // Use a gradient from light to dark based on percentage
      const hue = 200; // Blue base
      const saturation = 60;
      const lightness = Math.max(30, 100 - (percentage * 0.5));
      barColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    }
    
    const IconComponent = icon;
    
    return (
      <div className="members-stat-item">
        <div className="members-stat-header">
          {IconComponent && (
            <IconComponent className="members-stat-icon" />
          )}
          <span className="members-stat-label">{label}</span>
          <span className="members-stat-value">{value} ({percentage}%)</span>
        </div>
        <div className="members-stat-bar">
          <div 
            className="members-stat-bar-fill" 
            style={{ width: `${percentage}%`, background: barColor }}
          ></div>
        </div>
      </div>
    );
  };

  return (
    <div className="members-page-container">
      <Nav />
      <div className="pattern-background"></div>
      <div className="logo-container">
        <img src={T4TLogo} alt="T4T Logo" className="members-logo" />
      </div>

      <div className="members-hero">
        <h1 className="members-hero-title">Our Members</h1>
        <p className="members-hero-subtitle">A snapshot of our community based on our 2025 Year-End Survey</p>
        <p className="members-hero-note">Based on {totalResponses} survey responses</p>
      </div>

      {/* Summary Statistics */}
      <div className="members-section members-section-summary">
        <div className="members-summary-grid">
          <div className="members-summary-card">
            <div className="members-summary-number">{summaryStats.totalMembers}</div>
            <div className="members-summary-label">Members Surveyed</div>
          </div>
          <div className="members-summary-card">
            <div className="members-summary-number">{summaryStats.feelConnected}%</div>
            <div className="members-summary-label">Feel More Connected to Community</div>
          </div>
          <div className="members-summary-card">
            <div className="members-summary-number">{summaryStats.feelComfortable}%</div>
            <div className="members-summary-label">Feel Significantly More Comfortable in Charlotte</div>
          </div>
          <div className="members-summary-card">
            <div className="members-summary-number">{summaryStats.newsletterHelpful}%</div>
            <div className="members-summary-label">Find Newsletter Helpful</div>
          </div>
          <div className="members-summary-card">
            <div className="members-summary-number">{summaryStats.accessResources}%</div>
            <div className="members-summary-label">Easier Access to Support & Resources</div>
          </div>
        </div>
      </div>

      {/* Year-End Survey Flyer */}
      <div className="members-flyer-section">
        <div className="members-flyer-content">
          <div className="members-flyer-images">
            <img src="/assets/yearendsurvey.png" alt="T4T Year End Survey" className="members-flyer-image main-image" />
          </div>
          <div className="members-flyer-text">
            <h2 className="members-flyer-title">YEAR END SURVEY</h2>
            <div className="members-flyer-description">
              <p>Your feedback is incredibly important to us! Please take a few minutes to fill out our year-end survey. Your responses help us understand what we're doing well and where we can improve, directly shaping our programs and events for the coming year.</p>
              <p>We'll be compiling all the feedback and presenting a comprehensive report in the new year to share insights and our plans moving forward. Your voice makes a difference!</p>
              <div className="members-flyer-buttons">
                <a 
                  href="https://forms.gle/xtddWZvz5rzZC3JF7" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="members-flyer-button tickets"
                >
                  Take the Survey
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Demographics Section */}
      <div className="members-section members-section-demographics">
        <h2 className="members-section-title">Demographics</h2>
        <div className="members-content">
          <div className="members-donut-grid">
            <div className="members-stat-card members-donut-card">
              <h3 className="members-stat-card-title">Gender Identity</h3>
              <p className="members-stat-card-subtitle">What is your gender identity?</p>
              {renderDonutChart({ 
                data: genderIdentity, 
                colors: ['#51c6f1', '#f5b0be', '#a8e6cf', '#ffd3a5', '#c7ceea', '#ffaaa5', '#ff8b94', '#a8dadc', '#f1c0e8', '#cfbaf0', '#90dbf4', '#98f5e1', '#b9fbc0', '#fde4cf', '#fbf8cc']
              })}
            </div>

            <div className="members-stat-card members-donut-card">
              <h3 className="members-stat-card-title">Sexuality</h3>
              <p className="members-stat-card-subtitle">What is your sexuality?</p>
              {renderDonutChart({ 
                data: sexuality, 
                colors: ['#51c6f1', '#f5b0be', '#a8e6cf', '#ffd3a5', '#c7ceea', '#ffaaa5', '#ff8b94', '#a8dadc', '#f1c0e8', '#cfbaf0', '#90dbf4', '#98f5e1']
              })}
            </div>

            <div className="members-stat-card members-donut-card">
              <h3 className="members-stat-card-title">Ethnicity</h3>
              <p className="members-stat-card-subtitle">What is your ethnicity?</p>
              {renderDonutChart({ 
                data: ethnicity, 
                colors: ['#51c6f1', '#f5b0be', '#a8e6cf', '#ffd3a5', '#c7ceea', '#ffaaa5', '#ff8b94']
              })}
            </div>
          </div>
          
          <div className="members-stats-grid">

            <div className="members-stat-card members-donut-card">
              <h3 className="members-stat-card-title">Age Groups</h3>
              <p className="members-stat-card-subtitle">How old are you?</p>
              {renderDonutChart({ 
                data: ageGroups, 
                colors: ['#4ecdc4', '#51c6f1', '#a8dadc', '#90dbf4', '#98f5e1']
              })}
            </div>

            <div className="members-stat-card members-donut-card">
              <h3 className="members-stat-card-title">Disability / Neurodivergence</h3>
              <p className="members-stat-card-subtitle">Do you identify as disabled, neurodivergent, or chronically ill?</p>
              {renderDonutChart({ 
                data: disabilityStatus, 
                colors: ['#3498db', '#95a5a6', '#f39c12', '#e74c3c']
              })}
            </div>

            <div className="members-stat-card members-donut-card">
              <h3 className="members-stat-card-title">Time Involved</h3>
              <p className="members-stat-card-subtitle">How long have you been involved with T4T?</p>
              {renderDonutChart({ 
                data: involvementLength, 
                colors: ['#2ecc71', '#3498db', '#f39c12', '#e67e22']
              })}
            </div>

            <div className="members-stat-card">
              <h3 className="members-stat-card-title">How You Heard About T4T</h3>
              <p className="members-stat-card-subtitle">How did you hear about T4T?</p>
              {Object.entries(heardAboutT4T)
                .sort(([, a], [, b]) => b - a)
                .map(([label, value]) => {
                  const percentage = Math.round((value / totalResponses) * 100);
                  const color = `hsl(200, 60%, ${Math.max(30, 100 - (percentage * 0.5))}%)`;
                  return renderStatBar({ label, value, total: totalResponses, color });
                })}
            </div>

            <div className="members-stat-card">
              <h3 className="members-stat-card-title">Engagement Types</h3>
              <p className="members-stat-card-subtitle">How do you engage with T4TCLT?</p>
              {Object.entries(engagementTypes)
                .sort(([, a], [, b]) => b - a)
                .map(([label, value]) => {
                  const percentage = Math.round((value / totalResponses) * 100);
                  const color = `hsl(200, 60%, ${Math.max(30, 100 - (percentage * 0.5))}%)`;
                  return renderStatBar({ label, value, total: totalResponses, color });
                })}
            </div>

            <div className="members-stat-card">
              <h3 className="members-stat-card-title">Access to Resources</h3>
              <p className="members-stat-card-subtitle">Has T4T made it easier for you to access support or resources?</p>
              {Object.entries(accessToResources).map(([label, value]) => {
                let color = '#4ecdc4';
                if (label.includes('Yes')) {
                  color = '#2ecc71';
                } else if (label.includes('Somewhat')) {
                  color = '#f39c12';
                } else if (label.includes('No')) {
                  color = '#e74c3c';
                }
                return renderStatBar({ label, value, total: totalResponses, color });
              })}
            </div>

          </div>
        </div>
      </div>

      {/* T4T's Reach Section */}
      <div className="members-section members-section-programs">
        <h2 className="members-section-title">T4T's Reach</h2>
        <div className="members-content">
          {/* Engagement Types - Icon Based */}
          <div className="members-reach-card members-icon-card">
            <h3 className="members-reach-card-title">Engagement Types</h3>
            <p className="members-reach-card-subtitle">How do you engage with T4TCLT?</p>
            <div className="members-icon-grid">
              {Object.entries(engagementTypes).map(([label, value]) => {
                const Icon = engagementIcons[label] || FaUsers;
                const percentage = Math.round((value / totalResponses) * 100);
                return (
                  <div key={label} className="members-icon-item">
                    <div className="members-icon-wrapper">
                      <Icon className="members-icon" />
                    </div>
                    <div className="members-icon-label">{label}</div>
                    <div className="members-icon-value">{value} ({percentage}%)</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Programs & Support - Bar Chart */}
          <div className="members-reach-card">
            <h3 className="members-reach-card-title">Programs & Support</h3>
            <p className="members-reach-card-subtitle">Which of these forms of support have you benefited from or participated in?</p>
            {Object.entries(programsParticipated)
              .sort(([, a], [, b]) => b - a)
              .map(([label, value]) => {
                const percentage = Math.round((value / totalResponses) * 100);
                const color = `hsl(30, 80%, ${Math.max(30, 100 - (percentage * 0.5))}%)`;
                const Icon = programIcons[label] || FaCalendarAlt;
                return renderStatBar({ label, value, total: totalResponses, color, icon: Icon });
              })}
          </div>

          {/* Events Attended - Icon Based */}
          <div className="members-reach-card members-icon-card" style={{ marginTop: '2rem' }}>
            <h3 className="members-reach-card-title">Events Attended</h3>
            <p className="members-reach-card-subtitle">Which events have you attended with us?</p>
            <div className="members-events-grid">
              {Object.entries(eventsAttended)
                .sort(([, a], [, b]) => b - a)
                .map(([label, value]) => {
                  const Icon = eventIcons[label] || FaCalendarAlt;
                  return (
                    <div key={label} className="members-event-item">
                      <div className="members-event-icon-wrapper">
                        <Icon className="members-event-icon" />
                      </div>
                      <div className="members-event-label">{label}</div>
                      <div className="members-event-count">{value}</div>
                    </div>
                  );
                })}
            </div>
          </div>

          <div className="members-reach-grid">

            <div className="members-reach-card">
              <h3 className="members-reach-card-title">Clothes Swap Participation</h3>
              <p className="members-reach-card-subtitle">Have you participated in the Clothes Swap?</p>
              {Object.entries(clothesSwapParticipation)
                .sort(([, a], [, b]) => b - a)
                .map(([label, value]) => {
                  let color = '#ff9a56';
                  if (label.includes('Yes, I donated and received')) {
                    color = '#2ecc71';
                  } else if (label.includes('Yes, I received')) {
                    color = '#3498db';
                  } else if (label.includes('Yes, I donated')) {
                    color = '#9b59b6';
                  } else {
                    color = '#95a5a6';
                  }
                  return renderStatBar({ label, value, total: totalResponses, color });
                })}
            </div>

            <div className="members-reach-card">
              <h3 className="members-reach-card-title">Food Share Program</h3>
              <p className="members-reach-card-subtitle">Have you participated in the food-share program?</p>
              {Object.entries(foodShareParticipation)
                .sort(([, a], [, b]) => b - a)
                .map(([label, value]) => {
                  let color = '#ff9a56';
                  if (label.includes('Yes')) {
                    color = '#2ecc71';
                  } else if (label.includes('No, I would like')) {
                    color = '#3498db';
                  } else {
                    color = '#95a5a6';
                  }
                  return renderStatBar({ label, value, total: totalResponses, color });
                })}
            </div>

            <div className="members-reach-card">
              <h3 className="members-reach-card-title">Rideshare Program</h3>
              <p className="members-reach-card-subtitle">Have you received any rides from the #t4taxi-rides-carpool channel?</p>
              {Object.entries(rideshareUsage)
                .sort(([, a], [, b]) => b - a)
                .map(([label, value]) => {
                  let color = '#ff9a56';
                  if (label.includes('Yes')) {
                    color = '#2ecc71';
                  } else if (label.includes('No, but I have given')) {
                    color = '#3498db';
                  } else if (label.includes('No, but I\'d like')) {
                    color = '#9b59b6';
                  } else {
                    color = '#95a5a6';
                  }
                  return renderStatBar({ label, value, total: totalResponses, color });
                })}
            </div>

            <div className="members-reach-card">
              <h3 className="members-reach-card-title">Resources Accessed</h3>
              <p className="members-reach-card-subtitle">Have you accessed the resources we have created? Or participated in one of our skillshares?</p>
              {Object.entries(resourcesAccessed)
                .sort(([, a], [, b]) => b - a)
                .map(([label, value]) => {
                  let color = '#ff9a56';
                  if (label.includes('Yes')) {
                    color = '#2ecc71';
                  } else if (label.includes('No, but I will')) {
                    color = '#3498db';
                  } else {
                    color = '#95a5a6';
                  }
                  return renderStatBar({ label, value, total: totalResponses, color });
                })}
            </div>

            <div className="members-reach-card members-donut-card">
              <h3 className="members-reach-card-title">Newsletter Engagement</h3>
              <p className="members-reach-card-subtitle">Do you find the monthly newsletter helpful?</p>
              {renderDonutChart({ 
                data: newsletterHelpful, 
                colors: ['#2ecc71', '#f39c12', '#95a5a6']
              })}
            </div>

            <div className="members-reach-card">
              <h3 className="members-reach-card-title">Preferred Venues</h3>
              <p className="members-reach-card-subtitle">Which venues would you like to see us use more?</p>
              {Object.entries(preferredVenues)
                .sort(([, a], [, b]) => b - a)
                .map(([label, value]) => {
                  const percentage = Math.round((value / totalResponses) * 100);
                  const color = `hsl(30, 80%, ${Math.max(30, 100 - (percentage * 0.5))}%)`;
                  return renderStatBar({ label, value, total: totalResponses, color });
                })}
            </div>
          </div>

          {/* Favorite Events - On its own line */}
          <div className="members-reach-card members-icon-card" style={{ marginTop: '2rem' }}>
            <h3 className="members-reach-card-title">Favorite Events</h3>
            <p className="members-reach-card-subtitle">Which events are your favorite or would you like to see more of?</p>
            <div className="members-events-grid">
              {Object.entries(favoriteEvents)
                .sort(([, a], [, b]) => b - a)
                .map(([label, value]) => {
                  const Icon = eventIcons[label] || FaCalendarAlt;
                  return (
                    <div key={label} className="members-event-item">
                      <div className="members-event-icon-wrapper">
                        <Icon className="members-event-icon" />
                      </div>
                      <div className="members-event-label">{label}</div>
                      <div className="members-event-count">{value}</div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="members-section members-section-impact">
        <h2 className="members-section-title">Community Impact</h2>
        <div className="members-content">
          <div className="members-reach-grid">
            <div className="members-reach-card members-donut-card">
              <h3 className="members-reach-card-title">Community Connection</h3>
              <p className="members-reach-card-subtitle">Has being involved with T4Tclt helped you feel more connected to community?</p>
              {renderDonutChart({ 
                data: communityConnection, 
                colors: ['#2ecc71', '#f39c12', '#95a5a6', '#e74c3c']
              })}
            </div>

            <div className="members-reach-card members-donut-card">
              <h3 className="members-reach-card-title">Comfort in Charlotte</h3>
              <p className="members-reach-card-subtitle">Have you felt more comfortable in Charlotte due to being part of T4Tclt?</p>
              {renderDonutChart({ 
                data: comfortInCharlotte, 
                colors: ['#2ecc71', '#f39c12', '#3498db', '#e74c3c', '#95a5a6']
              })}
            </div>

            <div className="members-reach-card members-donut-card">
              <h3 className="members-reach-card-title">Newsletter Engagement</h3>
              <p className="members-reach-card-subtitle">Do you find the monthly newsletter helpful?</p>
              {renderDonutChart({ 
                data: newsletterHelpful, 
                colors: ['#2ecc71', '#f39c12', '#95a5a6']
              })}
            </div>

            <div className="members-reach-card">
              <h3 className="members-reach-card-title">Access to Resources</h3>
              <p className="members-reach-card-subtitle">Has T4T made it easier for you to access support or resources?</p>
              {Object.entries(accessToResources).map(([label, value]) => 
                renderStatBar({ label, value, total: totalResponses })
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="members-section">
        <h2 className="members-section-title">Member Testimonials</h2>
        <p className="members-section-subtitle">Please share an example of how T4TCLT has supported or impacted you this year.</p>
        <div className="members-content">
          <div className="members-testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="members-testimonial-card">
                <p className="members-testimonial-quote">"{testimonial.quote}"</p>
                {testimonial.author && (
                  <p className="members-testimonial-author">— {testimonial.author}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Members;

