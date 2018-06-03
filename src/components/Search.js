import React, { Component } from 'react';
import ReactDropdown from 'react-dropdown';
import './Search.css';

export default class Search extends Component {

  state = {
    category: '',
    options: ''
  };

  handleChange = ({ target }) => {
    this.setState({ category: target.value});
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSearch(this.state);
  };

  render(){
    const { category, options } = this.state;

    return(
      <div className="drop-down">
      <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select a category"/>
        <label>
          Search Categories: &nbsp;
          <input value={category} onChange={this.handleChange}/>
        </label>
        <button className="search-button">Search</button>
      </div>
    );
  }
}