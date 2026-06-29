import './Anime.css';
import Nav from '../components/Nav';

const SPREADSHEET_LINK =
  'https://docs.google.com/spreadsheets/d/1RAGFgfxsFJCaiNvmvz7g1qVpm3gXo6Em_gMJOZppL64/edit?usp=sharing';
const PRESENTATION_LINK =
  'https://docs.google.com/presentation/d/1vI9EP-uLYQJm_ULzJ7LDis3NsDbJxOax/edit?usp=sharing&ouid=114256623348464794490&rtpof=true&sd=true';
const PANEL_NOTES_LINK =
  'https://docs.google.com/document/d/1GJgt9ACR6ILp6__j_jyaGLgtEKCKmO3preeWeHtGK3Q/edit?usp=sharing';

function Anime() {
  return (
    <div className="anime-page-container">
      <Nav />

      <div className="anime-hero">
        <h1 className="anime-hero-title">Trans Representation in Anime</h1>
        <p className="anime-hero-subtitle">
          A guide to understanding gender, identity, and representation in anime and manga
        </p>
      </div>

      <div className="anime-content-section">
        <div className="anime-content">

          <div className="anime-intro">
            <p>
              Anime has a long and fascinating relationship with gender. Long before terms like transgender, nonbinary, and genderqueer became widely known, manga and anime were exploring questions about identity, gender roles, transformation, and self-expression.
            </p>
            <p>That history is complicated.</p>
            <p>
              Some series have become beloved by transgender audiences because they portray authentic, nuanced characters. Others are historically important despite relying on stereotypes or outdated language. Still others aren't "trans representation" at all but explore gender in ways that resonate with many trans and gender-diverse people.
            </p>
            <p>This guide is designed to help distinguish those differences.</p>
            <p>Rather than asking "Is this anime trans?", we encourage asking:</p>
            <ul className="anime-questions">
              <li>What kind of story is this trying to tell?</li>
              <li>Does it respect its characters?</li>
              <li>Does it reinforce stereotypes or challenge them?</li>
              <li>What can we learn from it?</li>
            </ul>
            <p>
              Whether you're looking for your next series to watch, researching representation, or preparing a convention panel, we hope these resources help you discover both the history and future of trans representation in anime.
            </p>
          </div>

          <div className="anime-section">
            <h2 className="anime-section-title">What Makes Good Representation?</h2>
            <p>Good representation isn't simply about including a transgender character.</p>
            <p>
              A story can include an explicitly trans character while still reinforcing harmful stereotypes. Likewise, some works without explicitly transgender characters have resonated deeply with trans audiences because of the questions they ask about identity, bodies, gender roles, and authenticity.
            </p>
            <p>When evaluating representation, we focus on four broad questions:</p>

            <div className="anime-criteria-grid">
              <div className="anime-criteria-card">
                <h3>Community</h3>
                <p>Does the character have people who support them?</p>
                <p>
                  Many older stories isolate queer characters or make them the only LGBTQ+ person in the world. More recent works increasingly show trans people building friendships, finding community, and experiencing chosen family.
                </p>
                <p><strong>Questions to ask:</strong></p>
                <ul className="anime-list">
                  <li>Are they surrounded by supportive people?</li>
                  <li>Do they have queer community?</li>
                  <li>Are they constantly isolated?</li>
                  <li>Are relationships healthy and reciprocal?</li>
                </ul>
              </div>

              <div className="anime-criteria-card">
                <h3>Agency</h3>
                <p>Does the character get to define themselves?</p>
                <p>
                  One of the strongest indicators of respectful representation is whether a character determines their own identity rather than having it imposed on them.
                </p>
                <p><strong>Questions to ask:</strong></p>
                <ul className="anime-list">
                  <li>Do they choose how they present themselves?</li>
                  <li>Are they allowed to define their own identity?</li>
                  <li>Are major decisions made by them rather than for them?</li>
                  <li>Is transition (if present) something they actively pursue?</li>
                </ul>
              </div>

              <div className="anime-criteria-card">
                <h3>Respect</h3>
                <p>How does the story treat them?</p>
                <p>
                  Conflict and prejudice can absolutely exist in good representation. The important question is whether the story itself respects the character, even when other characters do not.
                </p>
                <p><strong>Questions to ask:</strong></p>
                <ul className="anime-list">
                  <li>Does the narrative affirm their identity?</li>
                  <li>Is misgendering portrayed as harmful or normal?</li>
                  <li>Are they treated as a joke?</li>
                  <li>Is their gender used primarily for shock value?</li>
                </ul>
              </div>

              <div className="anime-criteria-card">
                <h3>Depth</h3>
                <p>Are they a complete person?</p>
                <p>
                  Good representation means being more than "the trans character." The strongest characters have personalities, ambitions, flaws, relationships, hobbies, strengths, fears, and growth that exist alongside their gender identity.
                </p>
                <p><strong>Questions to ask:</strong></p>
                <ul className="anime-list">
                  <li>Would they still be interesting if they weren't trans?</li>
                  <li>Do they have goals unrelated to gender?</li>
                  <li>Are they emotionally complex?</li>
                  <li>Do they change throughout the story?</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="anime-section">
            <h2 className="anime-section-title">Common Patterns in Anime</h2>
            <p>As we researched hundreds of anime and manga, several recurring themes appeared.</p>

            <div className="anime-patterns-list">
              <div className="anime-pattern-card">
                <h3>Excellent Representation</h3>
                <p>These works generally feature:</p>
                <ul className="anime-list">
                  <li>Characters with agency over their identities.</li>
                  <li>Supportive friendships and communities.</li>
                  <li>Respectful treatment by the narrative.</li>
                  <li>Rich characterization beyond gender.</li>
                  <li>Queer joy alongside struggle.</li>
                </ul>
                <p>
                  Examples include modern works such as <em>Wandering Son</em>, <em>Love Me for Who I Am</em>, <em>Boys Run the Riot</em>, and <em>Zombieland Saga</em>.
                </p>
              </div>

              <div className="anime-pattern-card">
                <h3>Historically Important Representation</h3>
                <p>
                  Some anime were groundbreaking when they were released but have aged unevenly. They often deserve recognition for opening doors while also benefiting from critical discussion.
                </p>
                <p>Examples include:</p>
                <ul className="anime-list">x
                  <li><em>Stop!! Hibari-kun!</em></li>
                  <li><em>Princess Knight</em></li>
                  <li><em>The Rose of Versailles</em></li>
                  <li><em>Family Compo</em></li>
                </ul>
                <p>
                  These works help us understand where representation has come from, even if they wouldn't be considered best practices today.
                </p>
              </div>

              <div className="anime-pattern-card">
                <h3>Gender Exploration vs. Trans Representation</h3>
                <p>Many anime explore gender without featuring explicitly transgender characters.</p>
                <p>Stories involving:</p>
                <ul className="anime-list">
                  <li>body swapping</li>
                  <li>reincarnation</li>
                  <li>magical transformation</li>
                  <li>cross-dressing</li>
                  <li>reversed gender roles</li>
                  <li>androgynous characters</li>
                  <li>genderless beings</li>
                </ul>
                <p>
                  can all create meaningful conversations about gender identity, even when the creators were not specifically telling trans stories.
                </p>
                <p>
                  These works shouldn't necessarily be called "trans representation," but they often resonate strongly with transgender and nonbinary audiences.
                </p>
              </div>

              <div className="anime-pattern-card">
                <h3>Representation That Doesn't Hold Up</h3>
                <p>Not every work ages well. Some older anime rely on:</p>
                <ul className="anime-list">
                  <li>trans panic jokes</li>
                  <li>forced gender transformation as punishment</li>
                  <li>deceptive "trap" stereotypes</li>
                  <li>characters existing only as comic relief</li>
                  <li>repeated misgendering</li>
                  <li>queer coding without humanity</li>
                </ul>
                <p>
                  These series remain useful discussion pieces, but they are generally not examples of healthy representation. Understanding why they are problematic is just as valuable as celebrating great representation.
                </p>
              </div>
            </div>
          </div>

          <div className="anime-section">
            <h2 className="anime-section-title">Our Representation Ratings</h2>
            <p>
              Throughout our spreadsheet, you'll find our own representation rating. This score is not a measure of whether a series is good. Instead, it reflects the quality of its transgender or gender-diverse representation.
            </p>
            <p>When assigning ratings, we consider:</p>
            <ul className="anime-list">
              <li>Community</li>
              <li>Agency</li>
              <li>Respect</li>
              <li>Depth</li>
              <li>Historical context</li>
              <li>Overall impact on LGBTQ+ audiences</li>
            </ul>
            <p>
              A classic anime may receive a lower representation score while still being historically essential. Likewise, a niche manga may receive a perfect representation score because it depicts trans people with remarkable authenticity.
            </p>
          </div>

          <div className="anime-section">
            <h2 className="anime-section-title">Explore the Database</h2>
            <p>
              We've assembled the most comprehensive list of transgender and gender-diverse anime and manga that we could create, please add to it!
            </p>
            <p>Our spreadsheet includes:</p>
            <ul className="anime-list">
              <li>Anime and manga ratings</li>
              <li>Representation type</li>
              <li>Representation quality rating</li>
              <li>Trigger warnings</li>
              <li>Genres</li>
              <li>Years released</li>
              <li>Runtime</li>
              <li>Character notes</li>
              <li>Historical context</li>
              <li>Presentation recommendations</li>
              <li>Discussion notes</li>
            </ul>
            <div className="anime-cta-block">
              <a
                href={SPREADSHEET_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="anime-button"
              >
                View the Anime Representation Spreadsheet
              </a>
            </div>
          </div>

          <div className="anime-section">
            <h2 className="anime-section-title">View the Convention Panel</h2>
            <p>
              This resource accompanies our convention panel: <strong>Trans+ Representation in Anime</strong>
            </p>
            <p>The presentation explores:</p>
            <ul className="anime-list">
              <li>The history of trans representation in anime</li>
              <li>What makes representation meaningful</li>
              <li>Explicitly trans characters</li>
              <li>Nonbinary and gender-nonconforming representation</li>
              <li>Gender transformation stories</li>
              <li>Historical classics</li>
              <li>Modern recommendations</li>
              <li>Problematic portrayals and why they matter</li>
            </ul>
            <p>
              Whether you're attending one of our panels or exploring on your own, we hope it serves as a starting point for thoughtful conversations about gender in anime.
            </p>
            <div className="anime-cta-block">
              <a
                href={PRESENTATION_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="anime-button"
              >
                View the Presentation Slides
              </a>
              <a
                href={PANEL_NOTES_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="anime-button secondary"
              >
                View the Presentation Notes
              </a>
            </div>
          </div>

          <div className="anime-section">
            <h2 className="anime-section-title">Want to Help?</h2>
            <p>
              Representation is constantly changing. New anime, manga, visual novels, and games are released every year, and community perspectives evolve over time.
            </p>
            <p>
              If we've missed a series, gotten something wrong, or you'd like to suggest additional resources, we'd love to hear from you. Leave a comment on any of the docs or submit a contact form below.
            </p>
            <p>
              This project is intended to grow alongside the community. Together, we can build a resource that helps people discover thoughtful, affirming, and historically important stories for years to come.
            </p>
          </div>

          <div className="anime-section">
            <h2 className="anime-section-title anime-contact-title">Contact Us</h2>
            <form
              action="https://formsubmit.co/t4tcharlottenc@gmail.com"
              method="POST"
              className="anime-contact-form"
            >
              <div className="anime-form-group">
                <label htmlFor="anime-name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="anime-name"
                  required
                  placeholder="Your name"
                />
              </div>
              <div className="anime-form-group">
                <label htmlFor="anime-email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="anime-email"
                  required
                  placeholder="Your email"
                />
              </div>
              <div className="anime-form-group">
                <label htmlFor="anime-subject">Subject</label>
                <input
                  type="text"
                  name="subject"
                  id="anime-subject"
                  required
                  placeholder="Subject"
                  defaultValue="Anime"
                />
              </div>
              <div className="anime-form-group">
                <label htmlFor="anime-message">Message</label>
                <textarea
                  name="message"
                  id="anime-message"
                  required
                  placeholder="Your message"
                  rows={5}
                ></textarea>
              </div>
              <button type="submit" className="anime-submit-button">Send Message</button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Anime;
