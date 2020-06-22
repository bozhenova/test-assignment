import React from 'react';
import Contributor from '../contributor';
import './contributors.css';

const Contributors = ({ users }) => {
  return (
    <div className='contributor__container'>
      {users.map(user => (
        <li key={user.id}>
          <Contributor user={user} />
        </li>
      ))}
    </div>
  );
};

export default Contributors;
