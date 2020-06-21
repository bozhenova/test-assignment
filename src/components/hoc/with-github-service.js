import React from 'react';
import { GithubServiceConsumer } from '../github-service-context';

const withGithubService = () => Wrapped => {
  return props => {
    return (
      <GithubServiceConsumer>
        {githubService => <Wrapped {...props} githubService={githubService} />}
      </GithubServiceConsumer>
    );
  };
};

export default withGithubService;
