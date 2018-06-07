import React, { Component } from 'react';
import { search } from '../services/recipeApi';
import Recipes from './Recipes';

export default class Search extends Component {

  state = {
    category: '',
    loading: false,
    error: null,
    totalResults: 0,
    page: 1,
    perPage: 5,
    recipes: []
  };

  searchRecipes = () => {
    const { category, page } = this.state;

    this.setState({ loading: true });

    search({ category }, { page })
      .then(({ meals }) => {
        this.setState({ recipes: meals, error: null });
      }, error => {
        this.setState({ error });
      })
      .then(() => this.setState({ loading: false }));
  };

  handleChange = ({ target }) => {
    this.setState({ category: target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.handleSearch(this.state.category);
  };

  handleSearch = category => {
    this.setState({ category: category }, this.searchRecipes);
  };


  render(){
    const { category, recipes, error } = this.state;

    return (
      <div>
        <form className="search-category" onSubmit={event => this.handleSubmit(event)}>
          <label>
          Search Categories:&nbsp;
            <input value={category} onChange={this.handleChange}/>
          </label>
          <button className="search-button">
          Search
          </button>
        </form>
        {(!error && recipes) && <Recipes recipes={recipes}/>}
      </div>
    );
  }
}