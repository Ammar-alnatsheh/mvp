import React from 'react';
import axios from 'axios';
import Filter from './Filter.jsx';
import EventList from './EventList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      events: []
    }
    this.getEvents = this.getEvents.bind(this);
  }

  componentDidMount() {
    const obj = {
      category: [false,false,false,false,false,false,false,false,false,false,false,false],
      name: '',
    }
    this.getEvents(obj);
  }

  getEvents(catagories) {
    axios.get('/events')
      .then(res => {
        console.log(res.data);
        this.setState({
          events: res.data,
        });
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
          <EventList events={this.state.events}/>
       </div>
       </div>
    );
  }
}

export default App;