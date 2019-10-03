import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Router } from 'react-router';
import Footer from './components/common/Footer';
import history from './utils/history';
import landingPageComponent from './components/landingPageComponent';
import selectChurchComponent from './components/selectChurchComponent';
import homePageComponent from './components/homePageComponent';
import notificationComponent from './components/notificationComponent';
import userProfileComponent from './components/userProfileComponent';
import churchProfileComponent from './components/churchProfileComponent';

function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={landingPageComponent} />
        <Route exact path="/select" component={selectChurchComponent} />
        <Route exact path="/home" component={homePageComponent} />
        <Route exact path="/notifications" component={notificationComponent} />
        <Route exact path="/home" component={homePageComponent} />
        <Route exact path="/church-profiles" component={churchProfileComponent} />
        <Route exact path="/user-profile" component={userProfileComponent} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default Routes;
