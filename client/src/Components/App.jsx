import React from 'react';
import Filter from './Filter.jsx';
import EventList from './EventList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [],
      filteredEvents: [],
    }
    this.getEvents = this.getEvents.bind(this);
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

  render() {
    return (
      <div className="app">
       <h2>Events in San Francisco</h2>
       <hr></hr>
       <div className="main">
          <Filter getEvents={this.getEvents}/>
          <div className="post">
            <div className="san-francisco"></div>
            <input className="post-event" type="submit" value="Create an Event"/>
          </div>
       </div>
       <div className="events-list">
          <label>Select categories and click GO!</label>
          <div>all events for next 5 days only!</div>
          <EventList events={this.state.filteredEvents}/>
       </div>
       </div>
    );
  }
}

export default App;