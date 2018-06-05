import React, { Component } from 'react';
import { getRecipe } from '../services/recipeApi';

export default class RecipeDetail extends Component {
  
  state = {
    recipe: null
  };

  componentDidMount() {
    getRecipe(this.props.id)
      .then(recipe => this.setState({ recipe:recipe.meals[0] }));
  }
  
  handleBack = event => {
    event.preventDefault();
    event.stopPropagation();
    this.props.history.goBack();
  };
  
  render() {

    const { recipe } = this.state;

    if(recipe === null) return null;

    return (
      <div className="container">
        Recipe to the Rescue
        <h2>{recipe.strCategory}</h2>
        <h3>{recipe.strArea}</h3>
        <p>{recipe.strInstructions}</p>
        <p>{recipe.strIngredient}</p>
        <p>{recipe.strMeasure}</p>
      </div>
    );
  }
}

