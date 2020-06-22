import * as types from './actionTypes';

const reposRequested = () => {
  return {
    type: types.FETCH_REPOS_REQUEST
  };
};

const reposLoaded = repos => {
  return {
    type: types.FETCH_REPOS_SUCCESS,
    payload: repos
  };
};

const dataError = error => {
  return {
    type: types.FETCH_FAILURE,
    payload: error
  };
};

const repoRequested = () => {
  return {
    type: types.FETCH_REPO_REQUEST
  };
};

const repoLoaded = currentRepo => {
  return {
    type: types.FETCH_REPO_SUCCESS,
    payload: currentRepo
  };
};

const contributorsRequested = () => {
  return {
    type: types.FETCH_CONTRIBUTORS_REQUEST
  };
};

const contributorsLoaded = contributors => {
  return {
    type: types.FETCH_CONTRIBUTORS_SUCCESS,
    payload: contributors
  };
};

export const fetchRepos = (githubService, dispatch) => page => {
  dispatch(reposRequested());

  githubService
    .getMostPopularRepos(page)
    .then(data => {
      dispatch(reposLoaded(data.items));
    })
    .catch(err => dispatch(dataError(err)));
};

export const fetchReposByQuery = (githubService, dispatch) => (query, page) => {
  dispatch(reposRequested());

  githubService
    .getReposByQuery(query, page)
    .then(data => {
      dispatch(reposLoaded(data.items));
    })
    .catch(err => dispatch(dataError(err)));
};

export const fetchRepo = (githubService, dispatch) => id => {
  dispatch(repoRequested());

  githubService
    .getRepoById(id)
    .then(data => {
      dispatch(repoLoaded(data));
      dispatch(contributorsRequested());

      githubService
        .getMostActiveContributors(data.contributors_url)
        .then(data => {
          dispatch(contributorsLoaded(data.slice(0, 10)));
        });
    })
    .catch(err => dispatch(dataError(err)));
};
