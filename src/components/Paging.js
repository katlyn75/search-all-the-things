import React, { Component } from 'react';

export default class Paging extends Component {
  handlePage(increment) {
    const { page, onPage } = this.props;
    onPage({ page: page + increment });
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