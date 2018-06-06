import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Search from './Search';
import Paging from './Paging';
import RecipeDetail from './RecipeDetail';
//import styles from './App.css';


export default class App extends Component {

  render() {
    
    return (
      <Router>
        <div>
          <Header/>
          <main>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/search" component={Search}/>
              <Route path="/paging" component={Paging}/>
              <Route path="/recipes/:id" render={({ match, history }) => {
                return <RecipeDetail id={match.params.id} history={history}/>;}}/>
              <Redirect to="/"/>
              
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