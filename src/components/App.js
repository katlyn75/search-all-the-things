import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Search from './Search';
import Paging from './Paging';
import RecipeDetail from './RecipeDetail';
import styles from './App.css';


export default class App extends Component {

  handlePage = ({ page }) => {
    this.setState({ page }, this.searchRecipes);
  };

  render() {

    // const { loading, totalResults, page, perPage, error } = this.state;
    return (
      <Router>
        <div>
          <Header/>
          <main>
            <Route exact path="/" component={Home}/>
            <Route path="/search" component={Search}/>
            <Route path="/recipes/:id" render={({ match, history }) => {
              return <RecipeDetail id={match.params.id} history={history}/>;}}/>
              {/*className= "page-results">
              {loading && <div>Loading...</div>}
              <Paging
                totalResults={totalResults}
                page={page}
                perPage={perPage}
                onPage={this.handlePage}/>
              */}
            <footer className="footer-text">
            Recipe Nirvana || 2018
            </footer>
          </main>
        </div>
      </Router>
    );
  }
}