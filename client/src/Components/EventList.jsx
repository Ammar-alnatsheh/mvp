import React from 'react';
import EventListEntry from './EventListEntry.jsx';

var EventList = (props) => (
  <div className="event-list">
    {
      props.events.map(event => (
        <EventListEntry event={event}/>
      ))
    }
  </div>
);

export default EventList;