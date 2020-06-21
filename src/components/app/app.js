import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../header';
import { MainPageContainer, DetailsPageContainer } from '../../containers';
import './app.css';

const App = () => {
  return (
    <main role='main' className='container'>
      <Header />
      <Switch>
        <Route exact path='/' component={MainPageContainer} />
        <Route path='/:details/:id' component={DetailsPageContainer} />
      </Switch>
    </main>
  );
};

export default App;
