import React from 'react';
import './Events.css';

function Events() {

  return (
    <div className="events-container">
      <h1 className="events-title">Upcoming Events</h1>
      

        <div className="eventbrite-container">
          <h2>Register for Events</h2>
          {/* Eventbrite embed code would go here */}
          <div className="eventbrite-placeholder">
            Eventbrite Widget
          </div>
        </div>
      </div>
  );
}

export default Events;
