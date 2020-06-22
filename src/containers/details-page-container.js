import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { compose } from '../utils';
import Spinner from '../components/spinner';
import Contributors from '../components/contributors';
import { withGithubService } from '../components/hoc';
import ErrorIndicator from '../components/error-indicator';
import DetailsPage from '../components/pages/details-page';
import {
  fetchRepo,
  fetchContributors,
  fetchLanguages
} from '../redux/actions/actions';

class DetailsPageContainer extends Component {
  static propTypes = {
    currentRepo: PropTypes.object.isRequired,
    fetchRepo: PropTypes.func.isRequired,
    fetchLanguages: PropTypes.func.isRequired,
    fetchContributors: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    languages: PropTypes.object,
    error: PropTypes.object,
    contributors: PropTypes.array.isRequired
  };
  static defaultProps = {
    error: null
  };
  componentDidMount() {
    const {
      currentRepo,
      fetchRepo,
      fetchLanguages,
      fetchContributors
    } = this.props;

    const id = this.props.match.params.id;

    Promise.resolve(currentRepo)
      .then(() => fetchRepo(parseInt(id)))
      .catch(e => {
        console.log(e);
      });
    Promise.resolve()
      .then(() => fetchLanguages(currentRepo.languages_url))
      .catch(e => {
        console.log(e);
      });
    Promise.resolve()
      .then(() => fetchContributors(currentRepo.contributors_url))
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { currentRepo, loading, languages, error, contributors } = this.props;

    return (
      <>
        {error && <ErrorIndicator />}
        {loading && <Spinner />}
        {!error && !loading && (
          <DetailsPage currentRepo={currentRepo} languages={languages} />
        )}
        {!error && !loading && <Contributors users={contributors} />}
      </>
    );
  }
}

const mapDispatchToProps = (dispatch, { githubService }) => {
  return {
    fetchRepo: fetchRepo(githubService, dispatch),
    fetchLanguages: fetchLanguages(githubService, dispatch),
    fetchContributors: fetchContributors(githubService, dispatch)
  };
};

const mapStateToProps = ({
  currentRepo,
  languages,
  contributors,
  loading,
  error
}) => {
  return { currentRepo, languages, contributors, loading, error };
};

export default compose(
  withGithubService(),
  connect(mapStateToProps, mapDispatchToProps)
)(DetailsPageContainer);
