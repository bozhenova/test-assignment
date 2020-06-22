import * as types from './actions/actionTypes';

const reducer = (state, action) => {
  if (state === undefined) {
    return {
      repos: [],
      contributors: [],
      currentRepo: null,
      loading: true,
      error: null
    };
  }

  switch (action.type) {
    case types.FETCH_REPOS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };

    case types.FETCH_REPOS_SUCCESS:
      return {
        ...state,
        repos: action.payload,
        loading: false,
        error: null
      };

    case types.FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    case types.FETCH_REPO_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };

    case types.FETCH_REPO_SUCCESS:
      return {
        ...state,
        currentRepo: action.payload,
        loading: false,
        error: null
      };

    case types.FETCH_CONTRIBUTORS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };

    case types.FETCH_CONTRIBUTORS_SUCCESS:
      return {
        ...state,
        contributors: action.payload,
        loading: false,
        error: null
      };

    default:
      return state;
  }
};

export default reducer;
