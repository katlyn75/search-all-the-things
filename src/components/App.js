import React, { Component } from 'react';
import styles from './App.css'
import { search } from '../services/menuApi';
import Paging from './Paging';


export default class App extends Component {

  state = {
    //ingredients: [],
    loading: false,
    error: null,
    totalResults: 0,
    page: 1,
    perPage: 5,
    recipes: []
  };

  searchMenu = () => {
    const { recipes, page, perPage } = this.state;

    this.setState({ loading: true });

    search({ recipes }, { page, perPage })
      .then(({ recipes, totalResults }) => {
        this.setState({ recipes, totalResults, error: null });
      }, error => {
        this.setState({ error })
      })
      .then(() => this.setState({ loading: false }));
  };


  handleSearch = ({ search }) => {
    this.setState({ recipes: search }, this.searchRecipes);
  };

  handlePage = ({ page }) => {
    this.setState({ page }, this.searchMenu);
  };

  render() {
    const { recipes, page } = this.state;
    return (
      <div>
        <header>
          <div className="header-container">
            <h1>Search Recipes</h1>
          </div>
          <div className="search-container">
            <Search onSearch={this.handleSearch}/>
          </div>
        </header>
        <main>
          <section>
            <Paging
              page={page}
              onPage={this.handlePage}
              recipes={recipes}/>
          </section>
        </main>
      </div>
    );
  }
}