import React from 'react';

var DisplayEvent = (props) => {
    const catagory = ['General','Acadmic','Art','Cars','Family','Kids','Marketing','Musical','Nature','Politics','Social','Technology'];
    return (
    <div className="display-event">
        <form>
            <label>Name</label>
            <input type="text" placeholder={props.event.name}></input>

            <label>Title</label>
            <input type="text" placeholder={props.event.title}></input>

            <label>catagory</label>
            <input type="text" placeholder={catagory[props.event.catagory]}></input>

            <label>Date</label>
            <input type="text" placeholder={('' + props.event.date).slice(0,10)}></input>

            <label>Time</label>
            <input type="text" placeholder={props.event.time}></input>

            <label>Description</label>
            <input type="text" placeholder={props.event.description}></input>

        </form>
    </div>
  );
};

export default DisplayEvent;