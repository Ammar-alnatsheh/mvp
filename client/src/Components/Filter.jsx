import React from 'react';

class Filter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        category: [],
        name: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({
        category: [true,false,false,false,false,false,false,false,false,false,false,false],
        name: '',
    });
  }
  handleChange(event) {
    let category = this.state.category;
    const idx = event.target.value;
    category[idx] = !category[idx];
    this.setState({
        category: category,
        name: this.state.name,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
        <form className="filter">
            <input type="checkbox" name="category" value="0" onChange={this.handleChange} checked>General</input>
            <input type="checkbox" name="category" value="1" onChange={this.handleChange} >Acadmic</input>
            <input type="checkbox" name="category" value="2" onChange={this.handleChange} >Art</input>
            <input type="checkbox" name="category" value="3" onChange={this.handleChange} >Cars</input>
            <input type="checkbox" name="category" value="4" onChange={this.handleChange} >Family</input>
            <input type="checkbox" name="category" value="5" onChange={this.handleChange} >Kids</input>
            <input type="checkbox" name="category" value="6" onChange={this.handleChange} >Marketing</input>
            <input type="checkbox" name="category" value="7" onChange={this.handleChange} >Musical</input>
            <input type="checkbox" name="category" value="8" onChange={this.handleChange} >Nature</input>
            <input type="checkbox" name="category" value="9" onChange={this.handleChange} >Politics</input>
            <input type="checkbox" name="category" value="10" onChange={this.handleChange}>Social</input>
            <input type="checkbox" name="category" value="11" onChange={this.handleChange}>Technology</input>

            <input type="submit" value="Submit"></input>
        </form>
    );
  }
}

export default Filter;