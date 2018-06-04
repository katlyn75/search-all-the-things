import React, { Component } from 'react';
//import ReactDropdown from 'react-dropdown';
import './Search.css';

export default class Search extends Component {

  state = {
    category: '',
    //options: ''
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
      <main>
        <div className="categories"
          onSelect={event => this._onSelect(event)}>
          <label>
          Search Categories:&nbsp;
          <input value={category} onChange={this.handleChange}/>
          </label>
          <button className="search-button">
          Search
          </button>
        </div>
      </main>
    );
  }
}