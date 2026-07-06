import React from 'react';
import './CommunityStandards.css';
import Nav from '../components/Nav';

function CommunityStandards() {
  return (
    <div className="standards-page-container">
      <Nav />

      <div className="standards-hero">
        <h1 className="standards-hero-title">Community Standards</h1>
        <p className="standards-hero-subtitle">T4Tclt is a trans-led community dedicated to mutual aid, transformative justice, and safe, inclusive spaces</p>
      </div>

      <div className="standards-content-section">
        <div className="standards-content">

          <div className="standards-intro">
            <p>To ensure everyone feels respected and supported, we ask community members to uphold the following standards when interacting in person and online.</p>
          </div>

          <div className="standards-section">
            <h2 className="standards-section-title">General Guidelines</h2>
            <div className="standards-rules-list">
              <div className="standards-rule">
                <h3 className="standards-rule-title">18+ Only</h3>
                <p>This community is exclusively for individuals aged 18 and above. An exception is made for our community-based events like the Clothes Swap.</p>
              </div>
              <div className="standards-rule">
                <h3 className="standards-rule-title">Respect Above All</h3>
                <p>Absolutely no hate speech, targeted harassment, or disrespectful language.</p>
              </div>
              <div className="standards-rule">
                <h3 className="standards-rule-title">Friendly and Welcoming</h3>
                <p>Always approach interactions with kindness, warmth, and openness to build a genuine sense of community.</p>
              </div>
              <div className="standards-rule">
                <h3 className="standards-rule-title">Honor Identities</h3>
                <p>Respect (without questioning) each other's identities, pronouns, sexualities, races, religions, and experiences.</p>
              </div>
              <div className="standards-rule">
                <h3 className="standards-rule-title">Inclusive Introductions</h3>
                <p>Share your name and pronouns when introducing yourself. Example: "Hi, I'm Taylor, and I use they/them pronouns."</p>
              </div>
              <div className="standards-rule">
                <h3 className="standards-rule-title">Avoid Gender Assumptions</h3>
                <p>Never assume someone's gender or pronouns based on appearance.</p>
              </div>
              <div className="standards-rule">
                <h3 className="standards-rule-title">No Gatekeeping</h3>
                <p>Labels are tools, not rules. Everyone's identity and expression are valid. If you'd like to know more about someone's identity, ask respectfully. Example: "I heard you say you're a demi-boy — that's not something I'm familiar with. Can you tell me more or point me where to look?"</p>
              </div>
            </div>
          </div>

          <div className="standards-section">
            <h2 className="standards-section-title">Healthy and Constructive Communication</h2>
            <div className="standards-rules-list">
              <div className="standards-rule">
                <h3 className="standards-rule-title">Good Faith Discussions</h3>
                <p>Engage with kindness, using "I statements" to speak from personal experience without generalizing.</p>
              </div>
              <div className="standards-rule">
                <h3 className="standards-rule-title">Calling In vs. Calling Out</h3>
                <p>Gently invite individuals to improve through private, respectful conversations rather than public criticisms.</p>
              </div>
              <div className="standards-rule">
                <h3 className="standards-rule-title">Allow for Mistakes</h3>
                <p>If corrected, respond with openness and humility. Mistakes are learning opportunities, not causes for conflict.</p>
              </div>
              <div className="standards-rule">
                <h3 className="standards-rule-title">Speak for Yourself</h3>
                <p>Avoid speaking on behalf of others, even if well-intended.</p>
              </div>
            </div>
          </div>

          <div className="standards-section">
            <h2 className="standards-section-title">Conflict Resolution & Transformative Justice</h2>
            <div className="standards-rules-list">
              <div className="standards-rule">
                <h3 className="standards-rule-title">Commitment to Mediation</h3>
                <p>By participating in our events, you agree that if there is a conflict or issue, you may be required to meet with our conflict mediation team before rejoining our community.</p>
              </div>
              <div className="standards-rule">
                <h3 className="standards-rule-title">Transformative Justice Approach</h3>
                <p>We utilize the <a href="https://www.creative-interventions.org/toolkit/" target="_blank" rel="noopener noreferrer">Creative Interventions toolkit</a> to guide our mediation and transformative justice processes, promoting healing and accountability within our community.</p>
              </div>
            </div>
          </div>

          <div className="standards-section">
            <h2 className="standards-section-title">Privacy and Boundaries</h2>
            <div className="standards-rules-list">
              <div className="standards-rule">
                <h3 className="standards-rule-title">Consent and Boundaries</h3>
                <p>Always ask for consent before physical interactions or personal conversations. Respect individuals' stated boundaries.</p>
              </div>
              <div className="standards-rule">
                <h3 className="standards-rule-title">Confidentiality</h3>
                <p>Keep personal details private unless explicit permission to share is given.</p>
              </div>
            </div>
          </div>

          <div className="standards-section">
            <h2 className="standards-section-title">Allyship 101</h2>
            <div className="standards-rules-list">
              <div className="standards-rule">
                <h3 className="standards-rule-title">Listen and Learn</h3>
                <p>Center trans voices by actively listening to and learning from trans people's experiences and stories.</p>
              </div>
              <div className="standards-rule">
                <h3 className="standards-rule-title">Normalize Pronouns</h3>
                <p>Regularly share your pronouns and politely ask others for theirs to create inclusive spaces.</p>
              </div>
              <div className="standards-rule">
                <h3 className="standards-rule-title">Correcting Mistakes Gracefully</h3>
                <p>Quickly acknowledge mistakes in pronoun or name usage with a simple thank you or brief correction, then move on. A "thank you" is always better than a "sorry."</p>
              </div>
              <div className="standards-rule">
                <h3 className="standards-rule-title">Educate Yourself</h3>
                <p>Use resources like <a href="https://genderdiversity.org" target="_blank" rel="noopener noreferrer">genderdiversity.org</a>, <a href="https://genderspectrum.org" target="_blank" rel="noopener noreferrer">genderspectrum.org</a>, <a href="https://glaad.org" target="_blank" rel="noopener noreferrer">glaad.org</a>, <a href="https://mypronouns.org" target="_blank" rel="noopener noreferrer">mypronouns.org</a>, and <a href="https://transequality.org" target="_blank" rel="noopener noreferrer">transequality.org</a> to educate yourself on gender diversity and trans issues.</p>
              </div>
              <div className="standards-rule">
                <h3 className="standards-rule-title">Respect Transition Privacy</h3>
                <p>Details about someone's gender transition may be private. Always seek consent before asking personal questions or sharing details with others.</p>
              </div>
            </div>
          </div>

          <div className="standards-section">
            <h2 className="standards-section-title">For Organizations & Collaborators</h2>
            <p>If you represent an organization, venue, or community group wanting to work with T4T, we have a collaboration guide that covers inclusive communication, allyship tips, and how to engage thoughtfully with our community.</p>
            <a
              href="https://docs.google.com/document/d/18aW0cW93O-lwlHUvd7uKNH_lD8eOjGE17lXqUTD9idI/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="standards-button"
            >
              T4T Collaboration Guide
            </a>
          </div>

          <div className="standards-cta-section">
            <h2 className="standards-cta-title">Support T4Tclt</h2>
            <p>We appreciate your involvement in building our community! Consider supporting us by donating to our <a href="https://opencollective.com/t4t-charlotte/donate" target="_blank" rel="noopener noreferrer">Open Collective</a> or by volunteering your time and energy.</p>
            <div className="standards-cta-buttons">
              <a href="/volunteer" className="standards-button">Volunteer with Us</a>
              <a
                href="https://opencollective.com/t4t-charlotte/donate"
                target="_blank"
                rel="noopener noreferrer"
                className="standards-button secondary"
              >
                Donate
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default CommunityStandards;
