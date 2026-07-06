import React from 'react';
import './SiteMap.css';
import Nav from '../components/Nav';

interface SiteMapEntry {
  path: string;
  label: string;
  description: string;
  category: string;
}

const pages: SiteMapEntry[] = [
  {
    category: 'Main',
    path: '/',
    label: 'Home',
    description: 'The T4TCLT homepage — upcoming events, calendar, zine previews, newsletter signup, and a quick overview of who we are.',
  },
  {
    category: 'Main',
    path: '/about',
    label: 'About',
    description: 'Learn about T4T Charlotte, our mission, programs, organizing team, and how to get in touch.',
  },
  {
    category: 'Main',
    path: '/events',
    label: 'Events',
    description: 'Browse upcoming events on our calendar and explore the types of events we host, with details on venues, attendance, and what to expect.',
  },
  {
    category: 'Main',
    path: '/resources',
    label: 'Resources',
    description: 'A collection of T4T resources, local services, mutual aid programs, and community links for trans and gender-expansive folks in Charlotte.',
  },
  {
    category: 'Main',
    path: '/anime',
    label: 'Trans Representation in Anime',
    description: 'A guide to understanding gender, identity, and representation in anime and manga — with a searchable database, panel notes, and evaluation framework.',
  },
  {
    category: 'Community',
    path: '/discord',
    label: 'Discord',
    description: 'Everything you need to know about our verified Discord community — what\'s inside, the rules, channels, and how to get an invite.',
  },
  {
    category: 'Community',
    path: '/buddy',
    label: 'Welcome Buddy Program',
    description: 'New to T4T or nervous about coming to events alone? Meet our Welcome Buddies, who are here to help you feel grounded and connected from the start.',
  },
  {
    category: 'Community',
    path: '/members',
    label: 'Members',
    description: 'A look at our community through demographics, event participation data, and engagement stats.',
  },
  {
    category: 'Programs',
    path: '/swap',
    label: 'Clothes Swaps',
    description: 'Free, gender-affirming clothing exchanges for trans and gender-expansive folks — upcoming swap dates, what to expect, and how to volunteer or donate.',
  },
  {
    category: 'Programs',
    path: '/zine',
    label: 'Zine',
    description: 'Read and download our community zine, featuring art, poetry, and writing from Charlotte\'s trans+ community. Submit your work for upcoming issues.',
  },
  {
    category: 'Get Involved',
    path: '/volunteer',
    label: 'Volunteer',
    description: 'Explore coordinator and volunteer roles with T4TCLT, from event organizing and social media to food share and clothes swap support.',
  },
  {
    category: 'Get Involved',
    path: '/community-standards',
    label: 'Community Standards',
    description: 'Our shared agreements for in-person and online spaces — covering respect, communication, conflict resolution, allyship, and privacy.',
  },
];

const categories = pages.map(p => p.category).filter((cat, i, arr) => arr.indexOf(cat) === i);

function SiteMap() {
  return (
    <div className="sitemap-page-container">
      <Nav />

      <div className="sitemap-hero">
        <h1 className="sitemap-hero-title">Site Map</h1>
        <p className="sitemap-hero-subtitle">Find your way around T4TCLT.com</p>
      </div>

      <div className="sitemap-content-section">
        <div className="sitemap-content">
          {categories.map(category => (
            <div key={category} className="sitemap-category">
              <h2 className="sitemap-category-title">{category}</h2>
              <div className="sitemap-entries">
                {pages.filter(p => p.category === category).map(page => (
                  <a key={page.path} href={page.path} className="sitemap-entry">
                    <div className="sitemap-entry-header">
                      <span className="sitemap-entry-label">{page.label}</span>
                      <span className="sitemap-entry-path">{page.path}</span>
                    </div>
                    <p className="sitemap-entry-description">{page.description}</p>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SiteMap;
