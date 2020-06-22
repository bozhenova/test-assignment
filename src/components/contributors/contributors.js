import React from 'react';
import Contributor from '../contributor';
import PropTypes from 'prop-types';

import './contributors.css';

const Contributors = ({ users }) => {
  return (
    <ul className='contributor__container'>
      {users.map(user => (
        <li key={user.id}>
          <Contributor user={user} />
        </li>
      ))}
    </ul>
  );
};

Contributors.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object)
};

export default Contributors;
