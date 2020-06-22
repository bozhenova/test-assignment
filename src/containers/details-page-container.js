import React, { Component } from 'react';
import { connect } from 'react-redux';

import { compose } from '../utils';
import Spinner from '../components/spinner';
import Contributors from '../components/contributors';
import { withGithubService } from '../components/hoc';
import ErrorIndicator from '../components/error-indicator';
import DetailsPage from '../components/pages/details-page';
import { fetchRepo } from '../redux/actions/actions';

class DetailsPageContainer extends Component {
  componentDidMount() {
    const { fetchRepo } = this.props;

    const id = this.props.match.params.id;
    fetchRepo(parseInt(id));
  }

  render() {
    const { currentRepo, loading, error, contributors } = this.props;
    return (
      <>
        {error && <ErrorIndicator />}
        {loading && <Spinner />}
        {currentRepo && !error && !loading && (
          <DetailsPage currentRepo={currentRepo} />
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

const mapStateToProps = ({ currentRepo, contributors, loading, error }) => {
  return { currentRepo, contributors, loading, error };
};

export default compose(
  withGithubService(),
  connect(mapStateToProps, mapDispatchToProps)
)(DetailsPageContainer);
