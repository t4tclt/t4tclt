import React from 'react';
import './Swap.css';
import Nav from '../components/Nav';

function Swap() {
  return (
    <div className="swap-page-container">
      <Nav />

      <div className="swap-hero">
        <h1 className="swap-hero-title">Clothes Swaps</h1>
        <p className="swap-hero-subtitle">Free, gender-affirming clothing for trans, nonbinary, and gender-expansive people in Charlotte</p>
      </div>

      <div className="swap-content-section">
        <div className="swap-content">

          <div className="swap-intro">
            <p>T4TCLT's clothes swaps are one of our core mutual aid projects. We offer free clothing, shoes, accessories, binders, and other gender-affirming items in a space that is welcoming, low-barrier, and rooted in care.</p>
            <p>Our swaps are donation-based and always pay-what-you-can, if anything. You do not need to donate in order to take what you need.</p>
            <p>We want the swap to feel warm, accessible, and affirming — without policing bodies, gatekeeping style, or creating pressure. This is a space for self-expression, dignity, and community care.</p>
            <div className="swap-intro-buttons">
              <a href="#upcoming" className="swap-button primary">See Upcoming Swap Opportunities</a>
              <a href="#volunteer" className="swap-button secondary">Volunteer for a Swap</a>
            </div>
          </div>

          <div className="swap-section">
            <h2 className="swap-section-title">What to Expect</h2>
            <p>At our swaps, you may find:</p>
            <ul className="swap-list">
              <li>Clothes in a wide range of sizes</li>
              <li>Binders and gender gear</li>
              <li>Shoes and accessories</li>
              <li>Professional wear</li>
              <li>Seasonal items</li>
              <li>Wigs, jewelry, bags, and more</li>
            </ul>
            <p>Everything is offered through a mutual aid model. Take what you need. If you are able to chip in financially, those donations go directly back into supporting future swaps and related community care efforts.</p>
          </div>

          <div className="swap-section">
            <h2 className="swap-section-title">Who Is This For?</h2>
            <p>Our clothes swaps are trans-led and trans-focused, centering trans, nonbinary, and gender-expansive people. If you're questioning, exploring, or identify anywhere outside the binary, this space is for you. No proof, labels, or explanation needed.</p>
            <p>Allies are welcome too, especially to support by donating items, funds, or volunteer labor.</p>
          </div>

          <div className="swap-section">
            <h2 className="swap-section-title">Rooted in Mutual Aid</h2>
            <p>This event is not just a clothing exchange. It is part of T4TCLT's broader ecosystem of care.</p>
            <p>The clothes swap helps meet material needs while also creating space for joy, gender exploration, connection, and practical support. Every sorted bin, every binder, every pair of shoes, and every kind welcome is part of building a stronger community.</p>
          </div>

          <div className="swap-section" id="upcoming">
            <h2 className="swap-section-title">Upcoming Swap Opportunities</h2>

            <div className="swap-events-grid">
              <div className="swap-event-card">
                <div className="swap-event-header">
                  <h3 className="swap-event-title">Donation Sorting</h3>
                  <span className="swap-event-date">April 16 · 3:30–7:00 PM</span>
                </div>
                <div className="swap-event-location">
                  <strong>Allegra Westbrooks Library Community Room</strong>
                  <span>2412 Beatties Ford Rd, Charlotte, NC 28216</span>
                </div>
                <p>Help sort donations ahead of our upcoming swaps, drop off clothes, or come by if you're looking for something specific. If there's a size or category you're especially hoping for, let us know and we can try to bring those bins.</p>
              </div>

              <div className="swap-event-card">
                <div className="swap-event-header">
                  <h3 className="swap-event-title">Quarterly Clothes Swap + Name Change Clinic</h3>
                  <span className="swap-event-date">April 19 · 12:00–4:00 PM</span>
                </div>
                <div className="swap-event-location">
                  <strong>NAMI</strong>
                  <span>1930 Abbott St #403, Charlotte, NC 28203</span>
                </div>
                <p>Our quarterly swap returns with free clothing and accessories, plus support from the Pauli Murray LGBT Bar Association for name change and gender marker correction. There will also be a station for repairing and mending clothes.</p>
                <p>Most of the swap will take place outside in the parking lot, with indoor support stations available.</p>
                <p className="swap-event-note">Note: this event is not rain or shine. If weather requires a reschedule, the backup date is Sunday, April 26.</p>
              </div>

              <div className="swap-event-card swap-event-card-featured">
                <div className="swap-event-header">
                  <h3 className="swap-event-title">Plus-Sized Swap</h3>
                  <span className="swap-event-date">May 7 · 1:00–7:00 PM</span>
                </div>
                <div className="swap-event-location">
                  <strong>University Regional Library Community Room</strong>
                  <span>5528 Waters Edge Village Drive, Charlotte, NC 28262</span>
                </div>
                <p>This swap centers clothing sized XL and up, along with accessories, shoes, undergarments, jewelry, wigs, and more.</p>
              </div>
            </div>
          </div>

          <div className="swap-section" id="volunteer">
            <h2 className="swap-section-title">Volunteer</h2>
            <p>Clothes swaps happen because community members show up for each other. Volunteering can mean a lot of different things, and there are many ways to help before, during, and after an event.</p>

            <div className="swap-two-col">
              <div className="swap-col">
                <h3 className="swap-subsection-title">What volunteering can look like</h3>
                <ul className="swap-list">
                  <li>Spreading the word about upcoming swaps</li>
                  <li>Encouraging donations or volunteer signups</li>
                  <li>Moving bins, tables, racks, and supplies</li>
                  <li>Sorting clothes by size and type</li>
                  <li>Tagging clothing with size and date</li>
                  <li>Removing damaged or unsuitable items</li>
                  <li>Running the donation sorting station</li>
                  <li>Welcoming people at the info table</li>
                  <li>Helping restock items during the event</li>
                  <li>Mending or tailoring damaged clothes</li>
                  <li>Packing up and reorganizing inventory after the swap</li>
                </ul>
              </div>

              <div className="swap-col">
                <h3 className="swap-subsection-title">What it means to volunteer</h3>
                <p>Volunteering at a clothes swap is about more than logistics. It means helping make the space feel safe, friendly, and affirming.</p>
                <p>We ask volunteers to:</p>
                <ul className="swap-list">
                  <li>Welcome people warmly</li>
                  <li>Avoid policing what people take</li>
                  <li>Respect people's privacy and autonomy</li>
                  <li>Offer help without hovering</li>
                  <li>Help keep things organized and accessible</li>
                  <li>Ask a core organizer for support if harm or conflict comes up</li>
                </ul>
              </div>
            </div>

            <div className="swap-centered-block">
              <h3 className="swap-subsection-title">What to wear</h3>
              <ul className="swap-list swap-list-centered">
                <li>Closed-toe shoes</li>
                <li>Comfortable clothes you can move in</li>
                <li>Layers if needed — setup and sorting can get warm</li>
              </ul>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfxNWVDrRQdg9Y8ophlxUMQMsmHTnGhwiuznD40jIurQnT2Mg/viewform?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="swap-button primary"
              >
                Sign Up to Volunteer
              </a>
            </div>
          </div>

          <div className="swap-section">
            <h2 className="swap-section-title">Want to Donate?</h2>
            <p>You're welcome to bring clothing donations to a swap or sorting day. Financial donations are also appreciated and help sustain future swaps and direct aid.</p>
            <p>We receive a lot of clothes, so we try to be intentional about what we keep. We especially appreciate items that are:</p>
            <ul className="swap-list">
              <li>Clean and in good condition</li>
              <li>Gender-affirming or expressive</li>
              <li>Stylish, practical, or in-demand</li>
              <li>Size-inclusive</li>
              <li>Useful for work, daily wear, or special occasions</li>
            </ul>
            <p>Items that are stained, torn, very worn, or unlikely to be used may be redirected to textile recycling, mending, washing, or re-donation.</p>
          </div>

          <div className="swap-section">
            <h2 className="swap-section-title">Learn More About Swap Logistics</h2>
            <p>Want the fuller behind-the-scenes picture? We keep a detailed procedure guide for volunteers and organizers that covers setup and layout, supply lists, inventory prep and breakdown, donation sorting guidelines, info table responsibilities, how we organize by size and category, and community agreements and values.</p>
            <p>This is a great place to start if you want to volunteer regularly, help organize future swaps, or better understand how the project runs.</p>
            <div className="swap-cta-block">
              <a
                href="https://docs.google.com/document/d/18oPeR2_y3eoo-YLlWJl5Q0d76Ot2-yCVHDVgD58_oFQ/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="swap-button secondary"
              >
                Read the Procedure Guide
              </a>
            </div>
          </div>

          <div className="swap-section">
            <h2 className="swap-section-title">Accessibility and Care</h2>
            <p>We aim for swaps to be as accessible and low-pressure as possible. Depending on the event and venue, this may include:</p>
            <ul className="swap-list">
              <li>Indoor and outdoor areas</li>
              <li>Masks available</li>
              <li>Earplugs and fidgets</li>
              <li>Water and electrolytes</li>
              <li>Seating at some stations</li>
              <li>Gender-neutral restrooms at some venues</li>
              <li>Volunteers available to help answer questions</li>
            </ul>
            <p>If you have specific access needs, reach out and we'll do our best to support you.</p>
          </div>

          <div className="swap-section">
            <h2 className="swap-section-title">FAQ</h2>
            <div className="swap-faq">
              <div className="swap-faq-item">
                <h3 className="swap-faq-question">Do I need to donate to take clothes?</h3>
                <p>No. Everything is free. We ask people to pay what they can only if they're able.</p>
              </div>
              <div className="swap-faq-item">
                <h3 className="swap-faq-question">Is this really all free?</h3>
                <p>Yes. This is mutual aid. Donations help keep the project going, but no one is required to pay.</p>
              </div>
              <div className="swap-faq-item">
                <h3 className="swap-faq-question">Can I come if I'm questioning or not sure how I identify?</h3>
                <p>Yes. This space centers trans, nonbinary, gender-expansive, and questioning people, but everyone is welcome.</p>
              </div>
              <div className="swap-faq-item">
                <h3 className="swap-faq-question">Can I try things on?</h3>
                <p>Usually yes, in whatever ways the venue allows. You can often layer items over clothes or use restrooms to try things more privately, depending on the space.</p>
              </div>
              <div className="swap-faq-item">
                <h3 className="swap-faq-question">What happens to extra clothes?</h3>
                <p>Items may be saved for future swaps, distributed through direct aid, or re-donated if they are not a good fit for the project.</p>
              </div>
              <div className="swap-faq-item">
                <h3 className="swap-faq-question">How can I stay updated?</h3>
                <p>Join our <a href="/discord">Discord</a>, follow us on social media, or sign up for our newsletter to hear about future swaps and other events.</p>
              </div>
              <div className="swap-faq-item">
                <h3 className="swap-faq-question">How can I donate?</h3>
                <p>If you'd like to contribute financially, head to our <a href="https://opencollective.com/t4t-charlotte" target="_blank" rel="noopener noreferrer">Open Collective</a>. If you'd like to donate clothes or items, please bring them to one of our upcoming swaps or sorts. If you are not able to make it to one of these events, feel free to email us or fill out the form below.</p>
              </div>
            </div>
          </div>

          <div className="swap-cta-section">
            <h2 className="swap-section-title">Get Involved</h2>
            <p>Whether you want to donate clothes, sort inventory, help at the info table, mend garments, move bins, or help organize future swaps, we'd love to have you involved.</p>
            <p>This project works because people keep showing up for one another.</p>
            <div className="swap-cta-buttons">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfxNWVDrRQdg9Y8ophlxUMQMsmHTnGhwiuznD40jIurQnT2Mg/viewform?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="swap-button primary"
              >
                Volunteer
              </a>
              <a
                href="https://docs.google.com/document/d/18oPeR2_y3eoo-YLlWJl5Q0d76Ot2-yCVHDVgD58_oFQ/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="swap-button secondary"
              >
                Learn the Logistics
              </a>
            </div>
          </div>

          <div className="swap-section">
            <h2 className="swap-section-title swap-contact-title">Contact Us</h2>
            <form
              action="https://formsubmit.co/t4tcharlottenc@gmail.com"
              method="POST"
              className="swap-contact-form"
            >
              <div className="swap-form-group">
                <label htmlFor="swap-name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="swap-name"
                  required
                  placeholder="Your name"
                />
              </div>
              <div className="swap-form-group">
                <label htmlFor="swap-email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="swap-email"
                  required
                  placeholder="Your email"
                />
              </div>
              <div className="swap-form-group">
                <label htmlFor="swap-subject">Subject</label>
                <input
                  type="text"
                  name="subject"
                  id="swap-subject"
                  required
                  placeholder="Subject"
                  defaultValue="Clothes Swap"
                />
              </div>
              <div className="swap-form-group">
                <label htmlFor="swap-message">Message</label>
                <textarea
                  name="message"
                  id="swap-message"
                  required
                  placeholder="Your message"
                  rows={5}
                ></textarea>
              </div>
              <button type="submit" className="swap-submit-button">Send Message</button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Swap;
