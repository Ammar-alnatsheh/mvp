import React from 'react';

var EventListEntry = (props) => (
  <div className="event-entry">
    <div>
      {props.event.name}
    </div>
    
  </div>
);

export default EventListEntry;