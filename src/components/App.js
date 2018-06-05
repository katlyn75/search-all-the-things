import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import styles from './App.css'
import Search from './Search';
import Paging from './Paging';




export default class App extends Component {

  handlePage = ({ page }) => {
    this.setState({ page }, this.searchRecipes);
  };

  render() {
    // const { recipes, loading, totalResults, page, perPage, error } = this.state;
    return (
      
      <Router>
        <div>
          <Header/>
          <main>
            <Route exact path="/" component={Home}/>
            <Route exact path="/search" component={Search}/>
            {/* <section className= "page-results">
              {loading && <div>Loading...</div>}
              <Paging
                totalResults={totalResults}
                page={page}
                perPage={perPage}
                onPage={this.handlePage}/>
              <Recipes recipes={recipes}/>
            </section> */}
            <footer className="footer-text">
            Recipe Nirvana || 2018
            </footer>
          </main>
        </div>
      </Router>
    );
  }
}