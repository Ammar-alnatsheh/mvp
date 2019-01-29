import React from 'react';
import { PortalWithState } from 'react-portal';
import DisplayEvent from './DisplayEvent.jsx';

class EventListEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isHidden: true,
      catagory: ['General','Acadmic','Art','Cars','Family','Kids','Marketing','Musical','Nature','Politics','Social','Technology'],
    }
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
        <PortalWithState closeOnOutsideClick closeOnEsc>
            {({ openPortal, closePortal, isOpen, portal }) => (
              <React.Fragment>
                <td className="show-description" onClick={openPortal}></td>
                {portal(
                  <div className="portal">
                  <button className="close-botton" onClick={closePortal}>X</button>
                  <DisplayEvent event={this.props.event}/>
                  </div>
                )}
              </React.Fragment>
            )}
        </PortalWithState>
    </tr>
    );
  }
}

export default EventListEntry;