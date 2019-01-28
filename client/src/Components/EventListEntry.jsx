import React from 'react';

var EventListEntry = (props) => {
  var catagory = ['General','Acadmic','Art','Cars','Family','Kids','Marketing','Musical','Nature','Politics','Social'];
  return (<div className="event-entry">
    <div>
      <label className="event-name">{props.event.name}</label>
      <label className="event-title">{props.event.title}</label>
      <label className="event-catagory">{catagory[props.event.catagory]}</label>
      <label className="event-date">{('' + props.event.date).slice(0,10)}</label>
      <label className="event-time">{props.event.time}</label>
      <label className="event-description">{props.event.description}</label>
    </div>
    
  </div>);
};

export default EventListEntry;