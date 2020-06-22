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

const languagesRequested = () => {
  return {
    type: types.FETCH_LANGUAGES_REQUEST
  };
};

const languagesLoaded = languages => {
  return {
    type: types.FETCH_LANGUAGES_SUCCESS,
    payload: languages
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

export const fetchRepos = (githubService, dispatch) => async page => {
  try {
    dispatch(reposRequested());
    const data = await githubService.getMostPopularRepos(page);
    dispatch(reposLoaded(data.items));
  } catch (err) {
    dispatch(dataError(err));
  }
};

export const fetchReposByQuery = (githubService, dispatch) => async (
  query,
  page
) => {
  try {
    dispatch(reposRequested());
    const data = await githubService.getReposByQuery(query, page);
    dispatch(reposLoaded(data.items));
  } catch (err) {
    dispatch(dataError(err));
  }
};

export const fetchRepo = (githubService, dispatch) => async id => {
  try {
    dispatch(repoRequested());
    const data = await githubService.getRepoById(id);
    dispatch(repoLoaded(data));

    dispatch(languagesRequested());
    const languagesData = await githubService.getRepoLanguages(
      data.languages_url
    );
    dispatch(languagesLoaded(languagesData));

    dispatch(contributorsRequested());
    const contributorsData = await githubService.getMostActiveContributors(
      data.contributors_url
    );
    dispatch(contributorsLoaded(contributorsData.slice(0, 10)));
  } catch (err) {
    dispatch(dataError(err));
  }
};
