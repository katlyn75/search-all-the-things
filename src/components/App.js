import React, { Component } from 'react';
import styles from './App.css'
import { search } from '../services/recipeApi';
import Search from './Search';
import Paging from './Paging';
import Recipes from './Recipes';


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
      .then(({ meals }) => {
        this.setState({ recipes: meals, error: null });
      }, error => {
        this.setState({ error });
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
    const { recipes, loading, totalResults, page, perPage, error } = this.state;
    return (
      <div>
        <header>
          <div className="header-container">
            <h1>Recipe Rescue</h1>
            <label>
              <Search onSearch={this.handleSearch}/>
            </label>
          </div>
        </header>
        <main>
          <section className= "page-results">
            {loading && <div>Loading...</div>}
            <Paging
              totalResults={totalResults}
              page={page}
              perPage={perPage}
              onPage={this.handlePage}/>
            <Recipes recipes={recipes}/>
          </section>
          <footer className="footer-text">
          Recipe Nirvana || 2018
          </footer>
        </main>
      </div>
    );
  }
}