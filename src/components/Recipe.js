import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Recipe extends Component {

  render() {
    const { strMeal, strMealThumb, idMeal } = this.props.recipe;

    return (
      <li>
        <Link to={`/recipes/${idMeal}`}>
          <p>{strMeal}</p>
          <img src={strMealThumb}/>
        </Link>
      </li>
    );
  }
}