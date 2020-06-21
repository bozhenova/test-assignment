import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import store from './redux/store';
import App from './components/app/app';
import GithubService from './services/github-service';
import ErrorBoundary from './components/error-boundary';
import { GithubServiceProvider } from './components/github-service-context';

const githubService = new GithubService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <GithubServiceProvider value={githubService}>
        <Router>
          <App />
        </Router>
      </GithubServiceProvider>
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root')
);
