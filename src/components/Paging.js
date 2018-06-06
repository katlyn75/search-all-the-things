import React, { Component } from 'react';

export default class Paging extends Component {

  handlePage = ({ page }) => {
    this.setState({ page }, this.searchRecipes);
  };

  handlePage(increment) {
    const { page, onPage } = this.props;
    onPage({ page: page + increment });
  }

  render() {
    
    const {  page, /*totalResults, perPage, loading, error */} = this.props;

    //if(!totalResults) return <div>No results, try a different search</div>;

    //const Results = Math.ceil(totalResults / perPage);

    return (
      <div className="page-results">
        <span className="page-numbers">Page {page} of { totalResults }</span>&nbsp;
        <button className="page-button"
          disabled={page === 1}
          onClick={() => this.onPage(+page - 1)}>&lt;
          Prev
        </button>
        {page}
        <button className="page-button" onClick={() => this.onPage(+page + 1)}>&gt;
          Next
        </button>
      </div>
    );
  }
}

{/*className= "page-results">
              {loading && <div>Loading...</div>}
              <Paging
                totalResults={totalResults}
                page={page}
                perPage={perPage}
                onPage={this.handlePage}/>
              */}