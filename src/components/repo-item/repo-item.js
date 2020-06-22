import React from 'react';
import './repo-item.css';
import { Link } from 'react-router-dom';
import { parseDate, parseStargazersCount } from '../../utils';

const RepoItem = ({ id, name, stargazers_count, updated_at, html_url }) => {
  return (
    <div className='repo__card'>
      <h3 className='repo__name'>
        <Link to={`details/${id}`}>{name}</Link>
      </h3>
      <div className='repo__info'>
        <div className='repo__star'>
          {parseStargazersCount(stargazers_count)} stars
        </div>
        <div>Updated {parseDate(updated_at)}</div>
      </div>
      <Link to={html_url} target='_blank'>
        {html_url}
      </Link>
    </div>
  );
};

export default RepoItem;
