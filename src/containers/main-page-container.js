import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import debounceRender from 'react-debounce-render';

import { compose } from '../utils';
import Spinner from '../components/spinner';
import RepoList from '../components/repo-list';
import Pagination from '../components/pagination';
import { withGithubService } from '../components/hoc';
import { fetchRepos, fetchReposByQuery } from '../redux/actions/actions';
import ErrorIndicator from '../components/error-indicator';
import './main-page-container.css';

class MainPageContainer extends Component {
  static defaultProps = {
    error: null
  };

  static propTypes = {
    repos: PropTypes.arrayOf(PropTypes.object.isRequired),
    loading: PropTypes.bool.isRequired,
    error: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.inputRef = React.createRef();

    this.state = {
      currentPage: 1,
      searchValue: ''
    };
  }

  componentDidMount() {
    this.inputRef.current.focus();
    const searchValue = localStorage.getItem('searchValue') || '';
    const currentPage = localStorage.getItem('currentPage') || 1;
    this.setState({ searchValue, currentPage }, () => {
      this.updateData();
    });
  }

  updateData = () => {
    this.state.searchValue
      ? this.props.fetchReposByQuery(
          this.state.searchValue,
          this.state.currentPage
        )
      : this.props.fetchRepos(this.state.currentPage);
  };

  saveDataToLocalStorage = () => {
    const { currentPage, searchValue } = this.state;
    localStorage.setItem('currentPage', currentPage);
    localStorage.setItem('searchValue', searchValue);
  };

  handleInputChange = () => {
    const searchValue = this.inputRef.current.value;
    this.setState({ searchValue }, () => {
      this.saveDataToLocalStorage();
      this.updateData();
    });
  };

  handlePageClick = data => {
    const selected = data.selected;

    this.setState({ currentPage: selected + 1 }, () => {
      this.saveDataToLocalStorage();
      this.updateData();
    });
  };

  render() {
    const { repos, loading, error } = this.props;
    const { searchValue, currentPage } = this.state;

    return (
      <>
        <input
          value={searchValue}
          ref={this.inputRef}
          className='search-bar'
          type='text'
          onChange={this.handleInputChange}
        />
        <div className='main'>
          {loading && <Spinner />}
          {error && <ErrorIndicator />}
        </div>
        {!error && !loading && <RepoList repos={repos} />}
        <Pagination
          currentPage={currentPage - 1}
          handlePageClick={this.handlePageClick}
        />
      </>
    );
  }
}

const mapDispatchToProps = (dispatch, { githubService }) => {
  return {
    fetchRepos: fetchRepos(githubService, dispatch),
    fetchReposByQuery: fetchReposByQuery(githubService, dispatch)
  };
};

const mapStateToProps = ({ repos, loading, error }) => {
  return { repos, loading, error };
};

const debouncedMainPageContainer = debounceRender(MainPageContainer, 500);

export default compose(
  withGithubService(),
  connect(mapStateToProps, mapDispatchToProps)
)(debouncedMainPageContainer);
