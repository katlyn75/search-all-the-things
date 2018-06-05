import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
//import styles from './Header.css';

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1>Recipe Remedy</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/search">Search</Link></li>
            <Route path="/recipes" render={() => <li>only on recipes!</li>}/>
          </ul>
        </nav>
      </header>
    );
  }  
}