import axios from 'axios';

export default class GithubService {
  API_BASE = `https://api.github.com`;
  REPOS_PER_PAGE = 10;

  getMostPopularRepos = async () => {
    const response = await axios.get(
      `${this.API_BASE}/search/repositories?q=stars:>=1&per_page=${this.REPOS_PER_PAGE}&sort=stars&order=desc`
    );
    return response.data;
  };

  getRepoById = async id => {
    const response = await axios.get(`${this.API_BASE}/repositories/${id}`);
    return response.data;
  };

  getMostActiveContributors = async url => {
    const response = await axios.get(url);
    return response.data;
  };

  getReposByQuery = async (query, page = 1) => {
    const response = await axios.get(
      `${this.API_BASE}/search/repositories?q=${query}&page=${page}&per_page=${this.REPOS_PER_PAGE}&sort=stars&order=desc`
    );
    return response.data;
  };
}
