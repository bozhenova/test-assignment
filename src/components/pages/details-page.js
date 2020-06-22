import React from 'react';
import { Link } from 'react-router-dom';
import { parseDate, parseStargazersCount } from '../../utils';
import './details-page.css';

const DetailsPage = ({ currentRepo }) => {
  const {
    html_url,
    name,
    stargazers_count,
    updated_at,
    description,
    language,
    owner: { login, html_url: url, avatar_url }
  } = currentRepo;

  return (
    <div className='details__container'>
      <h3 className='details__name'>
        <Link to={html_url}>{name}</Link>
      </h3>
      <div className='details__info'>
        <div>{parseStargazersCount(stargazers_count)} stars</div>
        <p className='details__info'>
          <i>Updated {parseDate(updated_at)}</i>
        </p>
        <img className='details__userpic' src={avatar_url} alt='userpic' />
        <h3 className='details__info'>
          <Link to={url} className='__nickname'>
            {login}
          </Link>
        </h3>
        <div className='details__language'>
          <b>Language:</b> {language}
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default DetailsPage;
