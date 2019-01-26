import React from 'react';
import axios from 'axios';
//import Filter from './Filter.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      events: []
    }
    this.getEvents = this.getEvents.bind(this);
  }

  componentDidMount() {
    this.getEvents(0);
  }

  getEvents(catagory) {
    axios.get(`/events/${catagory}`)
      .then(res => {
        this.setState({
          events: res.data,
        });
      });
  }



  render() {
    return (
      <div className="app">
       <h2>Events in san Francisco</h2>
       <hr></hr>
       <div className="main">
        {/* <Filter/> */}
       </div>
       </div>
    );
  }
}

export default App;