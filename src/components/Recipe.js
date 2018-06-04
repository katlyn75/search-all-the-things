import React, { Component } from 'react';

export default class Recipe extends Component {

  render() {
    const { recipe } = this.props;

    return (
      <li>
        <h2>{recipe} by {category}</h2>
        <a href={url} target="_blank">view recipes</a>
      </li>
    );
  }
}