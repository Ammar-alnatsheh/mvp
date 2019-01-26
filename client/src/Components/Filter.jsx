import React from 'react';

class Filter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        category: [],
        name: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({
        category: [false,false,false,false,false,false,false,false,false,false,false,false],
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
  handleNameChange(event) {
    this.setState({
        category: this.state.category,
        name: event.target.value,
    });
  }

  handleSubmit(event) {
      console.log(this.state);
    event.preventDefault();
  }

  render() {
    return (
        <form className="filter" onSubmit={this.handleSubmit}>

            <div className="nav-bar">
                <label>Posted by: </label>
                <input className="search-bar" type="text" placeholder="Search.." onChange={this.handleNameChange}/>
                <input className="search-bar-bttn" type="submit" value="GO!" />
            </div>

            <div className="category">
                <div className="category-row">
                    <input type="checkbox" name="category_0" value="0" onChange={this.handleChange} />
                    <label>General</label>
                    <input type="checkbox" name="category_1" value="1" onChange={this.handleChange} />
                    <label>Acadmic</label>
                    <input type="checkbox" name="category_2" value="2" onChange={this.handleChange} />
                    <label>Art</label>
                    <input type="checkbox" name="category_3" value="3" onChange={this.handleChange} />
                    <label>Cars</label>
                </div>
                <div className="category-row">
                    <input type="checkbox" name="category_4" value="4" onChange={this.handleChange} />
                    <label>Family</label>
                    <input type="checkbox" name="category_5" value="5" onChange={this.handleChange} />
                    <label>Kids</label>
                    <input type="checkbox" name="category_6" value="6" onChange={this.handleChange} />
                    <label>Marketing</label>
                    <input type="checkbox" name="category_7" value="7" onChange={this.handleChange} />
                    <label>Musical</label>
                </div>
                <div className="category-row">
                    <input type="checkbox" name="category_8" value="8" onChange={this.handleChange} />
                    <label>Nature</label>
                    <input type="checkbox" name="category_9" value="9" onChange={this.handleChange} />
                    <label>Politics</label>
                    <input type="checkbox" name="category_10" value="10" onChange={this.handleChange} />
                    <label>Social</label>
                    <input type="checkbox" name="category_11" value="11" onChange={this.handleChange} />
                    <label>Technology</label>
                </div>
            </div>
            
        </form>
    );
  }
}

export default Filter;