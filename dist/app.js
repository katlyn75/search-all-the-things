import React, { Component } from 'react';
import Search from './Search';


export default class App extends Component {

  state = {
    topic: '',
    loading: false,
    error: null,
    totalResults: 0,
    page: 1,
    perPage: 25,
    articles: []
  };

  searchNews = () => {
    const { page, perPage } = this.state;

    this.setState({ loading: true});

    search { page, perPage }
      .then(() => this.setState({ loading: false }));
  }
};

handleSearch = ({ search }) => {
  this.setState({ this.searchNews });
};

handlePage = ({ page }) => {
  this.setState({ this.searchNews});
};

render() {
  const { page, perPage } = this.state;

  return (
    <div>
      <header>
        <div className="header-container">
          <h1>Search News</h1>
        </div>
        <div className="search-container">
          <Search onSearch={this.handleSearch}/>
        </div>
      <header>
      <main>
        <section>
          <Paging
          page={page}
          onPage={this.handlePage}/>
        </section>
      </main>
    </div>
  );
}