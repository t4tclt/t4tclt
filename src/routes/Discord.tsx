import React from 'react';
import './Discord.css';
import Nav from '../components/Nav';

function Discord() {
  return (
    <div className="discord-page-container">
      <Nav />
      
      <div className="discord-hero">
        <h1 className="discord-hero-title">T4TCLT Discord</h1>
        <p className="discord-hero-subtitle">A trans-led community space for Charlotte (18+ / trans+ only)</p>
      </div>

      <div className="discord-content-section">
        <div className="discord-content">
          <div className="discord-intro-section">
            <p className="discord-intro-text">
              Welcome! The T4TCLT Discord is our online home for staying connected between events—sharing resources, coordinating mutual aid, making friends, and keeping up with what's happening in the community.
            </p>
            <p className="discord-intro-text">
              This server is for trans, non-binary, gender-expansive, gender non-conforming, and questioning folks (not allies). You don't need to be "actively transitioning" to belong here.
            </p>
          </div>

          <div className="discord-section">
            <h3 className="discord-section-title">What You'll Find in the Discord</h3>
            <div className="discord-features">
              <div className="discord-feature">
                <h4 className="discord-feature-title">Day-to-day community hangouts</h4>
                <ul>
                  <li>Chatting in topic channels</li>
                  <li>Posting memes and lighter conversation</li>
                  <li>Voice lounge hangs (sometimes while people do chores, game, or craft)</li>
                </ul>
              </div>
              <div className="discord-feature">
                <h4 className="discord-feature-title">Mutual aid + community care</h4>
                <ul>
                  <li>#food-share to coordinate requests and surplus food</li>
                  <li>Mutual aid discussions + request spaces</li>
                  <li>Community care support and check-ins</li>
                </ul>
              </div>
              <div className="discord-feature">
                <h4 className="discord-feature-title">Event planning + reminders</h4>
                <ul>
                  <li>Events posted in the Discord Events tab</li>
                  <li>A notification role (so you only get pinged for what you want)</li>
                </ul>
              </div>
              <div className="discord-feature">
                <h4 className="discord-feature-title">Resources + local knowledge</h4>
                <ul>
                  <li>Local providers, services, and trans community resources</li>
                  <li>Zines, guides, and shared docs</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="discord-section">
            <h3 className="discord-section-title">Safety, Politics, and What We Expect</h3>
            <p className="discord-text">
              T4TCLT is a community-led mutual aid org. Because we serve the trans community, this is inherently political.
            </p>
            <p className="discord-text">
              <strong>This is an anti-fascist, anti-racist, intersectional space.</strong> We believe All Cops Are Bastards and no one is free until we're all free. We don't expect perfection, but we do expect people to listen when called in, reflect, and learn.
            </p>
          </div>

          <div className="discord-section">
            <h3 className="discord-section-title">Core Rules</h3>
            <ul className="discord-rules-list">
              <li>18+ only (no minors)</li>
              <li>No hate speech, slurs, or targeted harassment</li>
              <li>Respect identities (pronouns, sexuality, race, religion, etc.)</li>
              <li>Keep channels on topic (suggest new channels if needed)</li>
              <li>Don't DM people without asking first</li>
              <li>If conflict happens, we may ask you to participate in mediation before returning to Discord and/or events</li>
            </ul>
            <p className="discord-text">
              If you see harm or need help, use modmail or DM a mod.
            </p>
          </div>

          <div className="discord-section">
            <h3 className="discord-section-title">Channels</h3>
            <p className="discord-text">Our Discord is organized into categories to help you find what you're looking for. Here's what's available:</p>
            
            <div className="discord-channels-grid">
              <div className="discord-channel-category">
                <h4 className="discord-category-title">Information</h4>
                <ul className="discord-channel-list">
                  <li>#t4t-announcements</li>
                  <li>#verified-community-links</li>
                  <li>#server-suggestions</li>
                  <li>#t4t-volunteering</li>
                  <li>#nsfw-rules</li>
                  <li>#politics-rules</li>
                </ul>
              </div>

              <div className="discord-channel-category">
                <h4 className="discord-category-title">WELCOME</h4>
                <ul className="discord-channel-list">
                  <li>#introductions</li>
                  <li>#newbies</li>
                  <li>#welcome-buddy-info</li>
                </ul>
              </div>

              <div className="discord-channel-category">
                <h4 className="discord-category-title">MEMES</h4>
                <ul className="discord-channel-list">
                  <li>#memes</li>
                  <li>#nsfw-memes</li>
                </ul>
              </div>

              <div className="discord-channel-category">
                <h4 className="discord-category-title">VOICE CHANNELS</h4>
                <ul className="discord-channel-list">
                  <li>Lounge</li>
                  <li>Coffee shop</li>
                </ul>
              </div>

              <div className="discord-channel-category">
                <h4 className="discord-category-title">QTBIPOC</h4>
                <ul className="discord-channel-list">
                  <li>#qtbipoc-resources</li>
                  <li>#bipoc-owned-local</li>
                  <li>#bipoc-artists</li>
                </ul>
                <p className="discord-channel-note">These channels are open to everyone so we can share and uplift QTBIPOC community members and resources.</p>
              </div>

              <div className="discord-channel-category">
                <h4 className="discord-category-title">MEDIA</h4>
                <ul className="discord-channel-list">
                  <li>#books</li>
                  <li>#music</li>
                  <li>#tv-movies</li>
                  <li>#anime-manga</li>
                </ul>
              </div>

              <div className="discord-channel-category">
                <h4 className="discord-category-title">VIDEO GAMES</h4>
                <ul className="discord-channel-list">
                  <li>#video-games-general</li>
                  <li>#minecraft-X</li>
                  <li>#pokemon</li>
                  <li>#Gayming voice</li>
                </ul>
              </div>

              <div className="discord-channel-category">
                <h4 className="discord-category-title">SERIOUS-TOPICS</h4>
                <ul className="discord-channel-list">
                  <li>#positive-news</li>
                  <li>#activism</li>
                  <li>#politics</li>
                  <li>#headlines</li>
                </ul>
              </div>

              <div className="discord-channel-category">
                <h4 className="discord-category-title">TEXT CHANNELS</h4>
                <ul className="discord-channel-list">
                  <li>#general</li>
                  <li>#off-topic</li>
                  <li>#gratitude</li>
                  <li>#disability-neurodiversity</li>
                  <li>#community-care</li>
                </ul>
              </div>

              <div className="discord-channel-category">
                <h4 className="discord-category-title">TRANS CHATS</h4>
                <ul className="discord-channel-list">
                  <li>#transitioning</li>
                  <li>#trans-feminine</li>
                  <li>#trans-masculine</li>
                  <li>#non-binary</li>
                  <li>#intersex</li>
                </ul>
              </div>

              <div className="discord-channel-category">
                <h4 className="discord-category-title">QTBIPOC (Opt-in)</h4>
                <ul className="discord-channel-list">
                  <li>#QTBIPOC-general</li>
                  <li>#black</li>
                  <li>#native</li>
                  <li>#latine</li>
                  <li>#east-asian</li>
                  <li>#south-asian</li>
                </ul>
                <p className="discord-channel-note">These channels are closed to the community they refer to (not for allies). Please only opt in if you are part of that community.</p>
              </div>

              <div className="discord-channel-category">
                <h4 className="discord-category-title">T4T PROGRAMS</h4>
                <ul className="discord-channel-list">
                  <li>#clothes-swap</li>
                  <li>#food-share</li>
                  <li>#t4taxi-rides-carpool</li>
                  <li>#rideshare-coordination</li>
                  <li>#rideshare-info</li>
                  <li>#welcome-coordination</li>
                  <li>#aid-coordination</li>
                </ul>
              </div>

              <div className="discord-channel-category">
                <h4 className="discord-category-title">EVENTS</h4>
                <ul className="discord-channel-list">
                  <li>#t4t-event-discussion</li>
                  <li>#informal-meetups</li>
                  <li>#community-events</li>
                  <li>#event-buddies</li>
                  <li>#event-polls-announcements</li>
                  <li>#pride-meetup-planning</li>
                  <li>#event-stage</li>
                  <li>#event-voice</li>
                </ul>
              </div>

              <div className="discord-channel-category">
                <h4 className="discord-category-title">PICTURES</h4>
                <ul className="discord-channel-list">
                  <li>#irl-photos</li>
                  <li>#outfits</li>
                  <li>#makeup</li>
                  <li>#food</li>
                  <li>#pets</li>
                  <li>#art</li>
                  <li>#event-pics</li>
                  <li>#body-mods</li>
                </ul>
              </div>

              <div className="discord-channel-category">
                <h4 className="discord-category-title">ADVICE AND ASSISTANCE</h4>
                <ul className="discord-channel-list">
                  <li>#mutual-aid-discussion</li>
                  <li>#advice</li>
                  <li>#mutual-aid-forum</li>
                  <li>#free-stuff</li>
                  <li>#t4t-barter-trade</li>
                  <li>#housing</li>
                  <li>#jobs-employment-opportunities</li>
                  <li>#body-doubling</li>
                </ul>
              </div>

              <div className="discord-channel-category">
                <h4 className="discord-category-title">INTERESTS</h4>
                <ul className="discord-channel-list">
                  <li>#astrology-spirituality-religion</li>
                  <li>#sports</li>
                  <li>#tech-and-science</li>
                  <li>#writing</li>
                  <li>#dating-and-polyamory</li>
                  <li>#plants-and-gardening</li>
                  <li>#info-dump</li>
                  <li>#tabletop-games</li>
                  <li>#add-follow-share</li>
                  <li>#automobile</li>
                  <li>#school-education</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="discord-section">
            <h3 className="discord-section-title">How Verification Works</h3>
            <p className="discord-text">
              As a brand new member, you'll only have access to select channels at first.
            </p>
            <p className="discord-text">
              All users will answer an application asking if they are trans+ and local. This helps us maintain a safe space for our community.
            </p>
            <p className="discord-text">
              To get the Verified Attendee role (which unlocks the full server), you need to:
            </p>
            <ol className="discord-steps-list">
              <li>Attend a T4TCLT event, and</li>
              <li>Talk to a mod afterward (quick, friendly verification)</li>
            </ol>
            <p className="discord-text">
              This is for safety and to protect our community.
            </p>
          </div>

          <div className="discord-section">
            <h3 className="discord-section-title">Full Server Rules</h3>
            <p className="discord-text">
              <strong>Welcome to the T4T CLT Discord!</strong>
            </p>
            <p className="discord-text">
              This Discord is an 18+ trans+ safe space.
            </p>
            <p className="discord-text">
              As a new member, you will only have access to select channels. To get the verified attendee role and gain access to the rest of the server, you must attend an event and speak to a mod. This is for safety reasons.
            </p>
            <p className="discord-text">
              T4T is inherently political due to serving the trans community. We are not a 501c3 and we do not allow cops or right wing ideology in our spaces.
            </p>
            
            <h4 className="discord-subsection-title">Common rules</h4>
            <ul className="discord-rules-list">
              <li>18+ only</li>
              <li>Don't be a jerk. No hate speech.</li>
              <li>Keep channels on topic. Suggest new channels if needed.</li>
              <li>Respect identities and pronouns.</li>
              <li>Discussions must be in good faith; move to DMs if needed. Use "I statements."</li>
              <li>Don't delete/edit posts to be disingenuous.</li>
              <li>Don't post issues about another member publicly; bring it to the person (if safe) or use modmail.</li>
              <li>Try to "call in" not "call out." If called in, listen and reflect.</li>
              <li>Don't speak on behalf of others.</li>
              <li>Don't DM without asking first.</li>
              <li>Keep NSFW content to NSFW channels.</li>
              <li>Keep outside events to the correct channel.</li>
              <li>By joining, you agree you may be asked to participate in mediation if conflict arises.</li>
            </ul>
            <p className="discord-text">
              If you notice rule-breaking, tag a mod or DM modmail.
            </p>
            
            <h4 className="discord-subsection-title">Anti-fascist / anti-racist commitment</h4>
            <p className="discord-text">
              This is an anti-fascist, anti-racist, intersectional space. We believe ACAB and no one is free until we're all free. We don't expect perfection; we expect listening, reflection, and learning.
            </p>
          </div>

          <div className="discord-cta-section">
            <h3 className="discord-section-title">Ready to Join?</h3>
            <p className="discord-text">
              To join the T4TCLT Discord, reach out below, and/or attend one of our events and speak with a moderator to get verified. This helps us maintain a safe space for our community.
            </p>
            <p className="discord-text">
              Check out our <a href="/events">events page</a> to see upcoming events where you can get verified, or reach out below for an invite!
            </p>
          </div>

          <div className="discord-contact-section">
            <h3 className="discord-section-title">Contact Us</h3>
            <div className="discord-contact-content">
              <form
                action="https://formsubmit.co/t4tcharlottenc@gmail.com"
                method="POST"
                className="discord-contact-form"
              >
                <div className="discord-form-group">
                  <label htmlFor="discord-name">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="discord-name"
                    required
                    placeholder="Your name"
                  />
                </div>
                <div className="discord-form-group">
                  <label htmlFor="discord-email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="discord-email"
                    required
                    placeholder="Your email"
                  />
                </div>
                <div className="discord-form-group">
                  <label htmlFor="discord-subject">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    id="discord-subject"
                    required
                    placeholder="Subject"
                    defaultValue="Discord Invite"
                  />
                </div>
                <div className="discord-form-group">
                  <label htmlFor="discord-message">Message</label>
                  <textarea
                    name="message"
                    id="discord-message"
                    required
                    placeholder="Your message"
                    rows={5}
                  ></textarea>
                </div>
                <button type="submit" className="discord-submit-button">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Discord;
