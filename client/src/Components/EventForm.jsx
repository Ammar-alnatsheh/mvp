import React from 'react';

class EventForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    let obj = {};
    obj.name = event.target.name.value || '';
    obj.title = event.target.title.value || '';
    obj.description = event.target.description.value || '';
    obj.catagory = parseInt(event.target.catagory.value) || 0;
    obj.date = event.target.date.value || new Date();
    let time = '' + event.target.time.value || '00:00';
    time = parseFloat(time.slice(0,2) + '.' + time.slice(3,5));
    obj.time = time;
    
    this.props.postEvent(obj)
  }

  render() {
    const catagory = ['General','Acadmic','Art','Cars','Family','Kids','Marketing','Musical','Nature','Politics','Social','Technology'];
    return (
    <form className="event-form" onSubmit={this.handleChange}>
        <label></label>
        <label>Name</label>
        <input type="text" name="name"></input>
        <label></label>
        <label>Title</label>
        <input type="text" name="title"></input>
        <label>Date</label>
        <input type="date" name="date"></input>
        <label>Time</label>
        <input type="time" name="time"></input>
        <label>catagory</label>
        <select name="catagory">
          {
            catagory.map((item, idx) => {
              return <option key={idx} value={idx}>{item}</option>
            })
          }
        </select>
        <br></br>
        <label>Description</label>
        <textarea className="description" name="description"></textarea>
        <br></br>
        <button type="submit" className="submit-event">Post Event</button>
        <br></br>
        <label>ESC or click outside to close</label>

    </form>
  )}
}

export default EventForm;