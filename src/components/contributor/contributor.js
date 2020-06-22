import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './contributor.css';

const Contributor = ({ user }) => {
  const { login, avatar_url, html_url, id } = user;

  return (
    <div className='contributor__card' key={id}>
      <h3 className='contributor__name'>
        <Link to={html_url} target='_blank'>
          {login}
        </Link>
      </h3>
      <img className='contributor__userpic' src={avatar_url} alt='userpic' />
    </div>
  );
};

Contributor.propTypes = {
  user: PropTypes.object
};

export default Contributor;
