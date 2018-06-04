import React, { Component } from 'react';

export default class Search extends Component {

  state = {
    category: ''
  };

  handleChange = ({ target }) => {
    this.setState({ category: target.value});
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSearch(this.state);
  };

  render(){
    const { category } = this.state;

    return(
      <form>
        <div className="search-category" onSubmit={event => this.handleSubmit(event)}>
          <label>
          Search Categories:&nbsp;
          <input value={category} onChange={this.handleChange}/>
          </label>
          <button className="search-button">
          Search
          </button>
        </div>
      </form>
    );
  }
}