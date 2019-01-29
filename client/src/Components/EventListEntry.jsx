import React from 'react';
import EventForm from './EventForm.jsx';

class EventListEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isHidden: true,
      catagory: ['General','Acadmic','Art','Cars','Family','Kids','Marketing','Musical','Nature','Politics','Social','Technology'],
    }
    this.showEvent = this.showEvent.bind(this);
  }

  showEvent() {
    alert(this.props.event.description);
  }

  render() {
    return (
    <tr className="event-entry">
        <td>{this.props.event.name}</td>
        <td>{this.props.event.title}</td>
        <td>{this.state.catagory[this.props.event.catagory]}</td>
        <td>{('' + this.props.event.date).slice(0,10)}</td>
        <td>{this.props.event.time}</td>
        <td className="event-description">{this.props.event.description}</td>
        <td className="show-description" onClick={this.showEvent}></td>
    </tr>
    );
  }
}

export default EventListEntry;