import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1>Recipe Remedy</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/search">Search</Link></li>
            <Route path="/recipes" render={() => <li>Recipes</li>}/>
          </ul>
        </nav>
      </header>
    );
  }  
}