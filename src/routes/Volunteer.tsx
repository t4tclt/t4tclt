import React from 'react';
import './Volunteer.css';
import Nav from '../components/Nav';

function Volunteer() {
  return (
    <div className='volunteer-page-container'>
      <Nav />

      <div className='volunteer-hero'>
        <h1 className='volunteer-hero-title'>Get Involved</h1>
        <p className='volunteer-hero-subtitle'>
          Help build gender-affirming community in Charlotte
        </p>
      </div>

      <div className='volunteer-content-section'>
        <div className='volunteer-content'>
          <div className='volunteer-intro'>
            <h2 className='volunteer-section-title'>
              🌟 T4TCLT Is Looking for New Coordinators! 🌟
            </h2>
            <p>
              We wanted to thank everyone for being a part of this community
              and we'd like to invite you to help us make it happen! We have
              big visions for T4T but often get so wrapped up in day-to-day
              running things that we can't get everything done.
            </p>
            <p>
              If you're looking for a low-impact way to stay updated, subscribe
              to our volunteer role in <a href='/discord'>Discord</a>. If
              you'd like to get more involved, we have several roles and needs
              as a community.
            </p>
            <p>
              These are non-hierarchical, shared roles: we support each other,
              take breaks when needed, and no one is expected to do everything
              alone. Training, support, and community backing are all part of
              the process.
            </p>
            <p>
              <strong>
                You don't have to be "experienced" — you just have to care
                about trans+ people and be ready to learn with us.
              </strong>
            </p>
            <div className='volunteer-intro-buttons'>
              <a
                href='https://forms.gle/4Y8V8jhguRSocQ6e9'
                target='_blank'
                rel='noopener noreferrer'
                className='volunteer-button primary'
              >
                Apply Now
              </a>
              <a
                href='https://docs.google.com/document/d/1FH-r6aKA2CwOTz_diNSp5pQMqF2zaA8cdphtFfCqIrk/edit?usp=sharing'
                target='_blank'
                rel='noopener noreferrer'
                className='volunteer-button secondary'
              >
                Volunteer Onboarding Guide
              </a>
              <a
                href='/community-standards'
                className='volunteer-button secondary'
              >
                Community Standards
              </a>
            </div>
          </div>

          <div className='volunteer-pride-flyer'>
            <h2 className='volunteer-pride-title'>
              🏳️‍⚧️ Pride Season Volunteering 🏳️‍⚧️
            </h2>
            <p className='volunteer-pride-subtitle'>
              We're tabling and volunteering at Pride events across the region
              this summer. Come represent T4T with us!
            </p>
            <ul className='volunteer-pride-list'>
              <li>Catawba Valley Trans Pride</li>
              <li>Belmont Pride</li>
              <li>Huntersville Pride</li>
              <li>Rock Hill Pride</li>
              <li>Pride in The Park</li>
              <li>Charlotte Pride</li>
              <li>Catawba Valley Pride</li>
              <li>Union County Pride</li>
              <li>Matthews Pride</li>
            </ul>
            <p className='volunteer-pride-cta'>
              Next up: <strong>Pride in the Park — June 27th</strong> at Mint Museum Randolph. Sign up for a shift!
            </p>
            <a
              href='https://forms.gle/2uGHYq6MsTQEvVD98'
              target='_blank'
              rel='noopener noreferrer'
              className='volunteer-pride-button'
            >
              Sign Up to Volunteer at Pride
            </a>
          </div>

          <div className='volunteer-section'>
            <h2 className='volunteer-section-title'>Coordinator Roles</h2>
            <div className='volunteer-roles-grid'>
              <div className='volunteer-role-card volunteer-role-card-full'>
                <h3 className='volunteer-role-title'>Event Coordinator</h3>
                <span className='volunteer-role-tag'>Partially virtual</span>
                <p>
                  Support the planning and execution of our community events.
                  You'll help brainstorm ideas, find venues, make flyers, and
                  help make our events feel warm and welcoming.
                </p>
                <p>Duties typically include:</p>
                <ul className='volunteer-role-duties'>
                  <li>Making polls and announcements about events</li>
                  <li>Planning and hosting events</li>
                  <li>Communicating with venues</li>
                  <li>Weekly event coordinator meeting Wednesdays at 5</li>
                  <li>
                    Writing event descriptions with accessibility info and
                    adding events to calendars
                  </li>
                </ul>
                <p className='volunteer-role-note'>
                  Currently need help with weeknight events like Second Monday
                  Karaoke, weeknight sober events like Social Supper or board
                  games, and Third Saturday Board Game Night.
                </p>
              </div>

              <div className='volunteer-role-card volunteer-role-card-full'>
                <h3 className='volunteer-role-title'>
                  Clothes Swap Muscle / Sorter / Mender
                </h3>
                <p>
                  This position supports our Clothes Swap with manual labor like
                  sorting, moving bins, and/or mending and tailoring clothes.
                  This gives you a role in our Discord to chat with the clothes
                  swap coordinators about best dates and times to help out.
                  Driver's License and vehicle helpful but by no means required
                  — if you have a truck or van, <strong>we especially want you!</strong>
                </p>
              </div>

              <div className='volunteer-role-card volunteer-role-card-full'>
                <h3 className='volunteer-role-title'>Clothes Swap Coordinator</h3>
                <p>
                  Help keep our clothes swap running! It takes a lot of work and
                  we'd love to have more folks interested in helping. Duties
                  typically include:
                </p>
                <ul className='volunteer-role-duties'>
                  <li>Planning sorting days and clothes swaps as a team</li>
                  <li>Gathering volunteers for sorting and moving bins</li>
                  <li>Directing volunteers sorting</li>
                  <li>Organizing and tagging clothes</li>
                </ul>
              </div>

              <div className='volunteer-role-card'>
                <h3 className='volunteer-role-title'>
                  Social Media Coordinator
                </h3>
                <span className='volunteer-role-tag'>Fully virtual</span>
                <p>
                  Help share our events and mutual aid efforts with the world!
                  You'll manage Instagram and Facebook posts, help with
                  captions, post flyers, respond to DMs, and keep our content
                  aligned with our values. You don't need to be fancy with
                  design or reels — clear, kind, and consistent posts are what
                  matter most.
                </p>
              </div>

              <div className='volunteer-role-card'>
                <h3 className='volunteer-role-title'>Newsletter Coordinator</h3>
                <span className='volunteer-role-tag'>Fully virtual</span>
                <p>
                  Prepare the monthly newsletter, working with the social media
                  and event teams to compile upcoming events, community
                  spotlights, affirmations, and new resources. The newsletter
                  goes out on the first of every month.
                </p>
              </div>

              <div className='volunteer-role-card'>
                <h3 className='volunteer-role-title'>
                  Resource & Outreach Coordinator
                </h3>
                <span className='volunteer-role-tag'>Fully virtual</span>
                <p>
                  Help keep the resource guide updated, potentially build
                  connections with other local orgs, and work with the aid
                  coordinators to research resources needed in the area. Could
                  also coordinate partnerships or guest speakers at events.
                </p>
              </div>

              <div className='volunteer-role-card'>
                <h3 className='volunteer-role-title'>
                  Mediation & Conflict Coordinator
                </h3>
                <span className='volunteer-role-tag'>Fully Virtual</span>
                <p>
                  Be part of our conflict support and transformative justice
                  work. This role helps hold space when harm happens, supports
                  accountability processes, and helps create repair rooted in
                  care, not punishment. We utilize the{' '}
                  <a
                    href='https://www.creative-interventions.org/toolkit/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Creative Interventions toolkit
                  </a>{' '}
                  to guide our mediation and transformative justice processes,
                  promoting healing and accountability within our community. The
                  mediation team meets weekly on Thursdays at 5pm.
                </p>
              </div>

              <div className='volunteer-role-card'>
                <h3 className='volunteer-role-title'>
                  Care Coordinator
                </h3>
                <span className='volunteer-role-tag'>Fully virtual</span>
                <p>
                  Monitor the community care channel and reach out to folks that
                  are struggling, especially when someone expresses great need or
                  suicidality. Some care coordinators also post mood check-ins.
                </p>
                <p className='volunteer-role-note'>
                  This role does not require you to respond to everyone or be
                  available at all times — it requires someone who is good at
                  setting and holding boundaries.
                </p>
              </div>

              <div className='volunteer-role-card'>
                <h3 className='volunteer-role-title'>Discord Moderator</h3>
                <span className='volunteer-role-tag'>Fully virtual</span>
                <p>
                  Help keep our online community safe, kind, and aligned with
                  our values. You'll respond to Modmail, hold boundaries, and
                  keep space flowing with curiosity and care, not control.
                </p>
              </div>

              <div className='volunteer-role-card'>
                <h3 className='volunteer-role-title'>Welcome Buddy</h3>
                <span className='volunteer-role-tag volunteer-role-tag-urgent'>Needed ASAP!</span>
                <p>
                  We are really lacking buddies right now and could use folks
                  ASAP! Welcome Buddies are simply there to offer a friendly
                  vibe, information, and presence. That can look like:
                </p>
                <ul className='volunteer-role-list'>
                  <li>Saying hi and checking in every so often</li>
                  <li>Answering questions about events or T4Tclt culture</li>
                  <li>Attending an event together if you're both up for it</li>
                  <li>Helping new folks feel seen and included</li>
                </ul>
                <p className='volunteer-role-note'>
                  There's no pressure to attend every event or provide emotional
                  labor beyond your capacity. You can always ask for help or
                  take a break.
                </p>
              </div>

              <div className='volunteer-role-card'>
                <h3 className='volunteer-role-title'>
                  Welcome Coordinator
                </h3>
                <span className='volunteer-role-tag volunteer-role-tag-urgent'>Needed ASAP!</span>
                <p>
                  We need at least one new Welcome Coordinator to ensure there
                  is no undue burden on a single person. As a Welcome
                  Coordinator, you match new community members to a suitable
                  Welcome Buddy:
                </p>
                <ul className='volunteer-role-list'>
                  <li>Claim incoming requests when pinged by the admin team</li>
                  <li>Review what the new member is looking for</li>
                  <li>Message the best-fit Welcome Buddy to check capacity</li>
                  <li>Connect the buddy and new member once confirmed</li>
                  <li>Check in after a couple of weeks to see how things are going</li>
                  <li>Act as a resource and answer questions from Welcome Buddies</li>
                </ul>
              </div>

              <div className='volunteer-role-card'>
                <h3 className='volunteer-role-title'>Fundraiser Coordinator</h3>
                <span className='volunteer-role-tag'>Fully Virtual</span>
                <p>
                  Help T4T find creative and sustainable ways to keep our work
                  going — applying to grants, hosting raffles, auctions, you
                  name it. Currently T4T gains most of its funds through
                  pay-what-you-can merch tabling at Pride events. If you have
                  something you'd like to donate for T4T to raffle or sell for
                  mutual aid, let us know!
                </p>
              </div>
            </div>
          </div>

          <div className='volunteer-section'>
            <h2 className='volunteer-section-title'>Food Share Roles</h2>
            <p>
              Silver has been holding down the Food Share program, and recently
              P.U.N.K. has volunteered to be the point person for the weekly
              work — but there are additional duties that need covered. You can
              do as little or as much as you would like; the goal is
              consistency. Having these roles filled means we can increase food
              security, decrease food waste, and have a stronger community!
            </p>
            <div className='volunteer-roles-grid'>
              <div className='volunteer-role-card'>
                <h3 className='volunteer-role-title'>Food Share Coordinator</h3>
                <p>
                  Help hold the Food Share program together, provide guidance to
                  those involved, and coordinate the broader food share
                  ecosystem.
                </p>
              </div>

              <div className='volunteer-role-card'>
                <h3 className='volunteer-role-title'>
                  Food Pantry Host Volunteer
                </h3>
                <p>
                  Accept food items (perishables, baked goods, and/or dry goods)
                  and distribute them to the community. You can choose to only
                  host one kind. The goal is to have folks in many parts of the
                  city to minimize driving around.
                </p>
              </div>

              <div className='volunteer-role-card'>
                <h3 className='volunteer-role-title'>
                  Food Distribution Volunteer
                </h3>
                <p>
                  Coordinate with P.U.N.K. to distribute items listed each week
                  to community members that need them. Work with Host Volunteers
                  to get food items to those who need them.
                </p>
              </div>

              <div className='volunteer-role-card'>
                <h3 className='volunteer-role-title'>
                  Food Collection Volunteer
                </h3>
                <p>
                  Travel to locations where food items are available, collect
                  them, and get them to Host Volunteers and/or Food Distribution
                  Volunteers. The goal is to have folks across the city who can
                  go to various food shares to collect goods at least twice a
                  month.
                </p>
              </div>

              <div className='volunteer-role-card'>
                <h3 className='volunteer-role-title'>
                  Bulk Processing Food Volunteer
                </h3>
                <p>
                  Help sort and preserve large quantities of food from partners
                  on short notice. This could look like sorting chopped veggies
                  and packaging them, or turning a box of bananas into banana
                  bread to distribute. Volunteers can choose what types of
                  things they're willing to help sort.
                </p>
              </div>

              <div className='volunteer-role-card'>
                <h3 className='volunteer-role-title'>Meal Share Volunteer</h3>
                <p>
                  Help host our monthly meal share where a volunteer prepares a
                  meal to share with community members (using food items from
                  the T4T pantry). Can be completed by a single individual or a
                  group. We need at least four volunteers to make this
                  sustainable.
                </p>
              </div>
            </div>
          </div>

          <div className='volunteer-cta-section'>
            <p>
              Interested? Fill out our short interest form below. Let us know if
              you have any questions in <a href='/discord'>Discord</a> or DM us
              on Instagram. We're so excited to build this community with you!
            </p>
            <a
              href='https://forms.gle/4Y8V8jhguRSocQ6e9'
              target='_blank'
              rel='noopener noreferrer'
              className='volunteer-button primary'
            >
              Apply Now
            </a>
          </div>

          <div className='volunteer-section'>
            <h2 className='volunteer-section-title'>For Organizations</h2>
            <p>
              Interested in partnering with or collaborating with T4T? Coalition
              building is real. If you represent a group, venue, or resource
              that could be a good partner, we'd love to connect.
            </p>
            <a
              href='https://docs.google.com/document/d/18aW0cW93O-lwlHUvd7uKNH_lD8eOjGE17lXqUTD9idI/edit?usp=sharing'
              target='_blank'
              rel='noopener noreferrer'
              className='volunteer-button secondary'
            >
              T4T Collaboration Guide
            </a>
          </div>

          <div className='volunteer-section'>
            <h2 className='volunteer-section-title'>Stay Connected</h2>
            <p>
              Sign up for our newsletter to stay informed about upcoming
              volunteer opportunities and events.
            </p>
            <div className='volunteer-email-signup'>
              <iframe
                width='600'
                height='604'
                title='Email Signup'
                src='https://sibforms.com/serve/MUIFAPoIxaiYsNaOfWYXlUhl8vtAN1NRAImpopsucj2mDCWHaxb6XI5aiFnegh-ZrrlBfNbK221EwbLe1qvBERzUhalVpcCaMVpyh_ivZ_7yf9FquySuS3tDKTS9pzcDSUHcvV-VI7PyErLyUh4ALOa9jhDEeF7NajbbDqfdu8flA9FMLpwAWZTw9NdO5gtf3hEK7OOiw9uQfKjN'
              ></iframe>
            </div>
          </div>

          <div className='volunteer-section'>
            <h2 className='volunteer-contact-title'>
              Got Questions About Volunteering?
            </h2>
            <form
              action='https://formsubmit.co/t4tcharlottenc@gmail.com'
              method='POST'
              className='volunteer-contact-form'
            >
              <div className='volunteer-form-group'>
                <label htmlFor='vol-name'>Name</label>
                <input
                  type='text'
                  name='name'
                  id='vol-name'
                  required
                  placeholder='Your name'
                />
              </div>
              <div className='volunteer-form-group'>
                <label htmlFor='vol-email'>Email</label>
                <input
                  type='email'
                  name='email'
                  id='vol-email'
                  required
                  placeholder='Your email'
                />
              </div>
              <div className='volunteer-form-group'>
                <label htmlFor='vol-subject'>Subject</label>
                <input
                  type='text'
                  name='subject'
                  id='vol-subject'
                  required
                  placeholder='Subject'
                  defaultValue='Volunteering'
                />
              </div>
              <div className='volunteer-form-group'>
                <label htmlFor='vol-message'>Message</label>
                <textarea
                  name='message'
                  id='vol-message'
                  required
                  placeholder='Your message'
                  rows={5}
                ></textarea>
              </div>
              <button type='submit' className='volunteer-submit-button'>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Volunteer;
