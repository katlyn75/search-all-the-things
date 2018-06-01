import React, { Component } from 'react';

export default class Paging extends Component {
  handlePage(increment) {
    const { page, onPage } = this.props;
    onPage({ page: page + increment });
  }

  render() {
    const { totalResults, page, perPage } = this.props;

    const totalPages = Math.ceil(totalResults / perPage);

    return (
      <div>
        <span>Page {page} of {totalPages}</span>
        <button onClick={() => this.handlePage}></button>
      </div>
    );
  }
}