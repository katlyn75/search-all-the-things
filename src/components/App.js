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
      .then(({ meals, totalResults }) => {
        this.setState({ meals, error: null });
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
    const { meals, page, loading } = this.state;
    return (
      <div>
        <header>
          <div className="header-container">
            <h1>Recipe Rescue</h1>
          </div>
          <div className="search-container">
            <label>
              <Search onSearch={this.handleSearch}/>
              {loading && <div>Loading...</div>}
            </label>
          </div>
        </header>
        <main>
          <section className= "page">
            <Paging
              page={page}
              onPage={this.handlePage}
              meals={meals}/>
          </section>
          <footer>
          Recipe Nirvana || 2018
          </footer>
        </main>
      </div>
    );
  }
}