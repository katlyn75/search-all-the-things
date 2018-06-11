import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Search from './Search';
import Recipes from './Recipes';
//import Paging from './Paging';
//import styles from './App.css';


export default class App extends Component {


  render() {
    // const { loading , totalResults, page, perPage, error } = this.state;
    return (
      
      <Router>
        <div>
          <Header/>
          <main>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/search" component={Search}/>
              <Route path="/recipes/" render={({ match, history }) => {
                return <Recipes id={match.params.id} history={history}/>;
              }}/>
            </Switch>
            <footer className="footer-text">
            Recipe Nirvana || 2018
            </footer>
          </main>
        </div>
      </Router>
    );
  }
}