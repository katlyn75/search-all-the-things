import React, { Component } from 'react';
import './Search.css';

export default class Search extends Component {

  state = {
    search: ''
  };

  handleChange = ({ target }) => {
    this.setState({ search:target.value});
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSearch(this.state);
  };

  render(){
    const { search } = this.state;

    return(
      <form className="search-bar" onSubmit={event => this.handleSubmit(event)}>
        <label>
          Search Categories: &nbsp;
          <input value={search} onChange={this.handleChange}/>
        </label>
        <button className="search-button">Search</button>
      </form>
    );
  }
}