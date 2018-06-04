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
      <div className="page">
        <span className="page-numbers">Page {page} of {totalPages}</span>&nbsp;
        <button className="page-button"onClick={() => this.handlePage(-1)} disable={page===1}>&lt; Prev</button>
        <button className="page-button" onClick={() => this.handlePage(+1)} disable={page===totalPages}>Next&gt;</button>
      </div>
    );
  }
}