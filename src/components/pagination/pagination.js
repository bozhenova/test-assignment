import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import './pagination.css';

class Pagination extends Component {
  state = { currentPage: 1 };

  render() {
    return (
      <ReactPaginate
        initialPage={0}
        pageCount={10}
        pageRangeDisplayed={4}
        marginPagesDisplayed={1}
        forcePage={this.props.currentPage}
        onPageChange={this.props.handlePageClick}
        containerClassName='pagination'
        pageClassName='pagination__item'
        activeClassName='pagination__item--active'
        pageLinkClassName='pagination__item-link'
      />
    );
  }
}

export default Pagination;
