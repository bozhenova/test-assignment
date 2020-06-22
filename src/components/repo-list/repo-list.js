import React from 'react';
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

export default RepoList;
