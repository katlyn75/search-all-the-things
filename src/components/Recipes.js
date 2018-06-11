import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Recipe from './Recipe';

export default class Recipes extends Component {

  static propTypes = {
    recipes: PropTypes.array,
  };

  render() {

    const { recipes } = this.props;

    return (
      <ul>
        {recipes.map(recipe => (
          <Recipe key={recipe.meal} {...recipe}/>
        ))}
      </ul>
    );
  }
}