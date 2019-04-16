import React from 'react';
import { PortalWithState } from 'react-portal';
import Filter from './Filter.jsx';
import EventList from './EventList.jsx';
import EventForm from './EventForm.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [],
      filteredEvents: [],
    }
    this.getEvents = this.getEvents.bind(this);
    this.postEvent = this.postEvent.bind(this);
    this.deleteEvent = this.deleteEvent.bind(this);
  }

  componentDidMount() {
    fetch('/events')
    .then(response => response.json())
      .then(data => {
        this.setState({
          events: data,
          filteredEvents: data,
        });
      });
  }

  deleteEvent() {
    const id = parseInt(prompt("Please enter the post id you want to delete"));
    fetch(`/event/${id}/`, {
      method: 'DELETE',
    })
    .then(response => {
      alert('event is succsessfuly deleted', response);
    })
    .catch(err => {
      alert('cant delete event', err);
    });
    
  }

  getEvents(catagories) {
    const records = this.state.events;
    let result = [];

    records.forEach(event => {
      const name = event.name.toLowerCase();
      const searchName = catagories.name.toLowerCase();
      if (catagories.name === '' || name.indexOf(searchName) !== -1) {
        if ( catagories.category.length === 0 || catagories.category.includes(event.catagory) ) {
          result.push(event);
        }
      }
    });

    this.setState({
      events: this.state.events,
      filteredEvents: result,
    });

  }

  postEvent(event) {
    fetch(`/event`, {
      method: 'POST',
      mode: "cors", // no-cors, cors, *same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
          "Content-Type": "application/json",
          // "Content-Type": "application/x-www-form-urlencoded",
      },
      redirect: "follow", // manual, *follow, error
      referrer: "no-referrer", // no-referrer, *client
      body: JSON.stringify(event),
    })
    .then(response => {
      alert('event is succsessfuly posted');
    })
    .catch(err => {
      alert('cant post event', err);
    });
  }

  render() {
    return (
      <div className="app">
       <h2>Events in San Francisco</h2>
       <hr></hr>
       <div className="main">
          <Filter getEvents={this.getEvents}/>
          <div className="post">
            <div className="san-francisco"></div>
            <PortalWithState closeOnOutsideClick closeOnEsc>
              {({ openPortal, closePortal, isOpen, portal }) => (
                <React.Fragment>
                  <input className="post-event" type="submit" value="Create an Event" onClick={openPortal}/>
                  {portal(
                    <div className="portal">
                    <EventForm postEvent={this.postEvent}/>
                    </div>
                  )}
                </React.Fragment>
              )}
            </PortalWithState>
          </div>
       </div>
       <div className="events-list">
          <label>Select categories and click GO!</label>
          <div>all events for next 5 days only!</div>
          <EventList events={this.state.filteredEvents}/>
       </div>
       <button className="delete-events" onClick={this.deleteEvent}>Delete Event</button>
       </div>
    );
  }
}

export default App;