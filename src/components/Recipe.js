import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Recipes from './Recipes';

export default class Recipe extends Component {

  static propTypes = {
    //recipe: PropTypes.string,
    //category: PropTypes.string,
    strMeal: PropTypes.string,
    strMealThumb: PropTypes.image
  };

  render() {
    const { strMeal, strMealThumb } = this.props.recipe;

    return (
      <li>
        <Link to={`/recipes/${Recipes.recipe}`}>
          <div>
            {/* <a href={url} target="_blank">view recipes</a>  */}
            <p>{strMeal}</p>
            <img src={strMealThumb}/>
          </div>
        </Link>
      </li>
    );
  }
}