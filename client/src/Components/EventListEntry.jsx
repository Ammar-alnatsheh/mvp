import React from 'react';

var EventListEntry = (props) => (
  <div className="event-entry">
    <div>
      <label className="event-name">{props.event.name}</label>
      <label className="event-title">{props.event.title}</label>
      <label className="event-catagory">{props.event.catagory}</label>
      <label className="event-date">{props.event.date}</label>
      <label className="event-time">{props.event.time}</label>
      <label className="event-description">{props.event.description}</label>
    </div>
    
  </div>
);

export default EventListEntry;