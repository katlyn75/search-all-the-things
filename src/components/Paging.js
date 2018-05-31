import React, { Component } from 'react';

export default class Paging extends Component {
  handlePage(page) {
    const { page } = this.props;

  }

  render() {
    const { page } = this.props;

    const totalPages = Math.ceil(totalResults/ perPage);

    return (
      <div>
        <span>Page {page} of {totalPages}</span>
        <button onClick={() => this.handlePage}></button>
      </div>
    );
  }
}