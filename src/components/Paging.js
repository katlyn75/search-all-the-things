import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Paging extends Component {

  static propTypes = {
    totalRecipes: PropTypes.number,
    page: PropTypes.number,
    perPage: PropTypes.number,
    onPaging: PropTypes.func.isRequired
  };
  state = {
    current: this.props.page || 1,
  };

  UNSAFE_componentWillReceiveProps({ page }) {
    if(page !== this.state.current) {
      this.setState({ current: page || 1 });
    }
  }
  handlePage(increment) {
    event.preventDefault();
    const { page } = this.props;
    this.setState({ current: page + increment }, () => {
      this.callPage();
    });
  }

  callPage() {
    const { current } = this.state;
    if(!current) return;
    this.props.onPaging(current);
  }

  render() {
    const { totalResults, page, perPage } = this.props;

    if(!totalResults) return <div>No results, try a different search</div>;

    const totalPages = Math.ceil(totalResults / perPage);

    return (
      <div className="page">
        <span className="page-numbers">Page {page} of {totalPages}</span>&nbsp;
        <button className="page-button"onClick={() => this.handlePage(-1)} disabled={page === 1}>Prev&lt;</button>
        <button className="page-button" onClick={() => this.handlePage(+1)} disabled={page === totalPages }>Next&gt;</button>
      </div>
    );
  }
}