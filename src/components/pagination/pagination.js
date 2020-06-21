import React from 'react';
import ReactPaginate from 'react-paginate';
import './pagination.css';

const Pagination = () => {
  return (
    <ReactPaginate
      pageCount={10}
      pageRangeDisplayed={5}
      marginPagesDisplayed={1}
      initialPage={0}
      onPageChange={() => {}}
      containerClassName='pagination'
      pageClassName='pagination__item'
      activeClassName='pagination__item--active'
      pageLinkClassName='pagination__item-link'
    />
  );
};

export default Pagination;
