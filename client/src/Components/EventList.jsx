import React from 'react';
import EventListEntry from './EventListEntry.jsx';

var EventList = (props) => (
  <table className="event-list">
    <tbody>
      <tr className="event-header">
        <th>Name</th><th>Title</th><th>Catagory</th><th>Date</th><th>Time</th><th>Description</th><th>Show</th>
      </tr>
      {
        props.events.map(event => (
          <EventListEntry key={event.id} event={event}/>
        ))
      }
    </tbody>
  </table>
);

export default EventList;