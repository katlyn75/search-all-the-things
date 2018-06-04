import React, { Component } from 'react';

export default class Search extends Component {

  state = {
    category: ''
  };

  handleChange = ({ target }) => {
    this.setState({ category: target.value});
    console.log('handling change', target.value);
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSearch(this.state);
    console.log('handle submit');
    
  };

  render(){
    const { category } = this.state;
    //console.log(category);

    return(
      <form className="search-category" onSubmit={event => this.handleSubmit(event)}>
        <label>
        Search Categories:&nbsp;
          <input value={category} onChange={this.handleChange}/>
        </label>
        <button className="search-button">
        Search
        </button>
      </form>
    );
  }
}