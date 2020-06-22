import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { compose } from '../utils';
import Spinner from '../components/spinner';
import Contributors from '../components/contributors';
import { withGithubService } from '../components/hoc';
import ErrorIndicator from '../components/error-indicator';
import DetailsPage from '../components/pages/details-page';
import { fetchRepo } from '../redux/actions/actions';

class DetailsPageContainer extends Component {
  static propTypes = {
    currentRepo: PropTypes.object,
    fetchRepo: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    languages: PropTypes.object,
    error: PropTypes.object,
    contributors: PropTypes.array.isRequired
  };

  static defaultProps = {
    error: null
  };

  componentDidMount() {
    const { fetchRepo } = this.props;
    const id = this.props.match.params.id;
    fetchRepo(id);
  }

  render() {
    const { currentRepo, loading, languages, error, contributors } = this.props;

    return (
      <>
        {error && <ErrorIndicator />}
        {loading && <Spinner />}
        {currentRepo && !error && !loading && (
          <DetailsPage currentRepo={currentRepo} languages={languages} />
        )}
        {contributors && !error && !loading && (
          <Contributors users={contributors} />
        )}
      </>
    );
  }
}

const mapDispatchToProps = (dispatch, { githubService }) => {
  return {
    fetchRepo: fetchRepo(githubService, dispatch)
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
