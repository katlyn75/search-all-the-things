import React, { Component } from 'react';

export default class Recipes extends Component {

  render() {

    const {recipes, categories} = this.props.recipes;

    return (
      <li>
        <h2>{recipe} by {category}</h2>
        <a href={url} target="_blank">view recipes</a>
      </li>
    );
  }
}