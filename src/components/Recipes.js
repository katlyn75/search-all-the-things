import React, { Component } from 'react';
import Recipe from './Recipe';

export default class Recipes extends Component {

  render() {

    const { recipes } = this.props
    console.log(recipes);
    return (
      <ul>
        {recipes.map((recipe, i) => (
          <Recipe key={i} recipe={recipe}/>
        ))}
      </ul>
    );
  }
}