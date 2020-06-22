import React from 'react';
import PropTypes from 'prop-types';

import RepoItem from '../repo-item';

const RepoList = ({ repos }) => {
  return (
    <ul>
      {repos.map(repo => (
        <li key={repo.id}>
          <RepoItem {...repo} />
        </li>
      ))}
    </ul>
  );
};

RepoList.propTypes = {
  repos: PropTypes.arrayOf(PropTypes.object.isRequired)
};

export default RepoList;
