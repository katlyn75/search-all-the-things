import React, { Component } from 'react';

export default class Recipe extends Component {

  render() {
    const { recipe } = this.props;

    return (
      <ul>
        {recipe.map((recipes, i) => (
          <Recipes key={i} recipes={recipes}/>
        ))}
      </ul>
    );
  }
}