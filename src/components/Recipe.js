import React, { Component } from 'react';

export default class Recipe extends Component {

  render() {
    const { strMeal, strMealThumb } = this.props.recipe;

    return (
      <li>
        {/* <h2>{recipes} by {category}</h2> */}
        {/* <a href={url} target="_blank">view recipes</a> */}
        <p>{strMeal}</p>
        <img src={strMealThumb}/>
      </li>
    );
  }
}