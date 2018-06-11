import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { search } from '../services/recipeApi';
import Paging from './components/Paging';
import Recipes from './components/Recipes';
import queryString from 'query-string';
import SearchForm from './SearchForm';


const getSearch = location => location ? location.search : '';

export default class Search extends Component {

  static propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
  };

  state = {
    searchCategory: '',
    category: '',
    loading: false,
    error: null,
    totalRecipes: 0,
    page: 1,
    perPage: 5,
    recipes: []
  };

  componentDidMount() {
    this.searchFormQuery(this.props.location.search);
  }

  UNSAFE_componentWillReceiveProps({ location }) {
    const next = getSearch(location);
    const current = getSearch(this.props.location);
    if(current === next) return;
    this.searchFormQuery(next);
  }

  searchFormQuery(query) {
    const { search: searchCategory } = queryString.parse(query);
    const { page, perPage } = this.state;
    this.setState({ searchCategory });
    if(!searchCategory) return;
  

    this.setState({ loading: true });

    search(searchCategory, page, perPage)
      .then(({ recipes, totalRecipes }) => {
        this.setState({ recipes: recipes, totalRecipes: totalRecipes });
      })
      .catch(error => {
        this.setState({ error });
      });

    this.setState({ loading: false });

  }

  makeSearch = () => {
    this.setState({ error: null });
    const { searchCategory, page } = this.state;

    const query = {
      search: searchCategory || '',
      page: page || 1
    };

    this.props.history.push({
      search: queryString.stringify(query)
    });
  };

  handleSearch = searchCategory => {
    this.setState({
      error: null,
      searchCategory,
      Paging: 1
    }, this.makeSearch);
  };

  handlePaging = page => {
    this.setState({
      error: null,
      page
    }, this.makeSearch);
  };



  // searchRecipes = () => {
  //   const { category, page } = this.state;

  //   this.setState({ loading: true });

  //   search({ category }, { page })
  //     .then(({ meals }) => {
  //       this.setState({ recipes: meals, error: null });
  //     }, error => {
  //       this.setState({ error });
  //     })
  //     .then(() => this.setState({ loading: false }));
  // };

  // handleChange = ({ target }) => {
  //   this.setState({ category: target.value });
  // };

  // handleSubmit = event => {
  //   event.preventDefault();
  //   this.handleSearch(this.state.category);
  // };

  // handleSearch = category => {
  //   this.setState({ category: category }, this.searchRecipes);
  // };


  render() {
    const { searchCategory, recipes, error, totalRecipes, loading, page, perPage } = this.state;

    return (
      <div>
        <SearchForm searchCategory={searchCategory} onSearch={this.handleSearch}/>
        {loading && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {searchCategory && <p>Results for: {searchCategory}</p>}
        {(!error && totalRecipes) && <Paging totalRecipes={totalRecipes} page={page} perPage={perPage} onPaging= {this.handlePaging}/>}
        {(!error && recipes) && <Recipes recipes={recipes}/>}
      </div>
    );
  }
}