import React from 'react';
import EventListEntry from './EventListEntry.jsx';

var EventList = (props) => (
  <div className="event-list">
    <div className="event-header">
      <label>Name</label><label>Title</label><label>Catagory</label><label>Date</label><label>Time</label><label>Description</label>
    </div>
    {
      props.events.map(event => (
        <EventListEntry key={event.id} event={event}/>
      ))
    }
  </div>
);

export default EventList;