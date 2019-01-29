import React from 'react';

var DisplayEvent = (props) => {
    const catagory = ['General','Acadmic','Art','Cars','Family','Kids','Marketing','Musical','Nature','Politics','Social','Technology'];
    return (
    <form className="display-event">
        <label></label>
        <label>Name</label>
        <input type="text" placeholder={props.event.name} disabled></input>
        <label></label>
        <label>Title</label>
        <input type="text" placeholder={props.event.title} disabled></input>
        <label>Description</label>
        <textarea className="description" disabled>{props.event.description}</textarea>
        <br></br>
        <label>ESC or click outside to close</label>

    </form>
  );
};

export default DisplayEvent;