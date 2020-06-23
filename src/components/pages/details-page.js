import React from 'react';
import PropTypes from 'prop-types';

import { parseDate, parseStargazersCount } from '../../utils';
import './details-page.css';

const DetailsPage = ({ currentRepo, languages }) => {
  const {
    html_url,
    name,
    stargazers_count,
    updated_at,
    description,
    owner: { login, html_url: url, avatar_url }
  } = currentRepo;

  const langs = Object.keys(languages).join(', ');

  return (
    <div className='details__container'>
      <h3 className='details__name'>
        <a href={html_url} rel='noopener noreferrer' target='_blanc'>
          {name}
        </a>
      </h3>
      <div>
        <div>{parseStargazersCount(stargazers_count)} stars</div>
        <p className='details__info'>Updated {parseDate(updated_at)}</p>
        <img className='details__userpic' src={avatar_url} alt='userpic' />
        <h3>
          <a
            href={url}
            rel='noopener noreferrer'
            target='_blanc'
            className='__nickname'
          >
            {login}
          </a>
        </h3>
        {langs ? (
          <div className='details__language'>
            <b>Languages:</b> ${langs}
          </div>
        ) : null}
        <p className='details__description'>{description}</p>
      </div>
    </div>
  );
};

DetailsPage.propTypes = {
  currentRepo: PropTypes.object.isRequired,
  languages: PropTypes.object
};

export default DetailsPage;
