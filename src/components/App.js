import React, { Component } from 'react';
import styles from './App.css'
import { search } from '../services/recipeApi';
import Search from './Search';
import Paging from './Paging';
import Recipes from './Recipes';
import Recipe from './Recipe'


export default class App extends Component {

  state = {
    category: "",
    loading: false,
    error: null,
    totalResults: 0,
    page: 1,
    perPage: 5,
    recipes: []
  };

  searchRecipes = () => {
    const { category, page, perPage } = this.state;

    this.setState({ loading: true });

    search({ category }, { page, perPage })
      .then(({ recipes, totalResults }) => {
        this.setState({ recipes, totalResults, error: null });
      }, error => {
        this.setState({ error })
      })
      .then(() => this.setState({ loading: false }));
  };


  handleSearch = ({ category }) => {
    this.setState({ category: category }, this.searchRecipes);
  };

  handlePage = ({ page }) => {
    this.setState({ page }, this.searchRecipes);
  };

  render() {
    const { recipe, recipes, page, perPage, totalResults, loading, error } = this.state;
    return (
      <div>
        <header>
          <div className="header-container">
            <h1>Recipe Rescue</h1>
          </div>
          <div className="search-container">
            {loading && <div>Loading...</div>}
            {error && <div>Error :{ error.message}</div>}
            <label>
              <Search onSearch={this.handleSearch}/>
            </label>
          </div>
        </header>
        <main>
          <section className= "page">
            <label>
              <Search
              search={search}
              onSearch={this.handleSearch}/>
              </label>
              <Paging
              totalResults={totalResults}
              page={page}
              onPage={this.handlePage}/>
              <Recipes recipes={recipes}/>
          </section>
          <footer>
          Recipe Nirvana || 2018
          </footer>
        </main>
      </div>
    );
  }
}