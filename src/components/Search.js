import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { search } from '../services/recipeApi';
import Paging from './components/Paging';
import Recipes from './Recipes';

const getSearch = location => location ? location.search : '';

export default class Search extends Component {

  static propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
  };

  state = {
    category: '',
    loading: false,
    error: null,
    totalResults: 0,
    page: 1,
    perPage: 5,
    recipes: []
  };

  componentDidMount() {
    this.searchQuery(this.props.location.search);
  }

  UNSAFE_componentWillReceiveProps({ location }) {
    const next = getSearch(location);
    const current = getSearch(this.props.location);
    if(current === next) return;
    this.searchQuery(next);
  }

  searchQuery(query) {
    const { search: searchCategory } = queryString.parse(query);
    this.setState({ searchCategory });
    if(!searchCategory) return;
  }

  this.setState({ loading: true });

  search(searchCategory, page, perPage)
    .then(({ recipes }) => {
      this.setState({ recipes: recipes});
    })
    .catch(error => {
      this.setState({ error });
    });

  this.setState({ loading: false });



  searchRecipes = () => {
    const { category, page } = this.state;

    this.setState({ loading: true });

    search({ category }, { page })
      .then(({ meals }) => {
        this.setState({ recipes: meals, error: null });
      }, error => {
        this.setState({ error });
      })
      .then(() => this.setState({ loading: false }));
  };

  handleChange = ({ target }) => {
    this.setState({ category: target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.handleSearch(this.state.category);
  };

  handleSearch = category => {
    this.setState({ category: category }, this.searchRecipes);
  };


  render() {
    const { searchCategory, category, recipes, error, totalRecipes, loading, page, perPage } = this.state;

    return (
      <div>
        <form className="search-category" onSubmit={event => this.handleSubmit(event)}>
          <label>
          Search Categories:&nbsp;
            <input value={category} onChange={this.handleChange}/>
          </label>
          <button className="search-button">
          Search
          </button>
        </form>
        {(!error && recipes) && <Recipes recipes={recipes}/>}
      </div>
    );
  }
}