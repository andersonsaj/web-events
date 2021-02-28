import React from 'react';
import { Switch } from 'react-router-dom';
import Home from '../pages/Home';
import ListSubscription from '../pages/ListSubscription';
import RegisterEvent from '../pages/RegisterEvent';
import RegisterSubscription from '../pages/RegisterSubscription';
import SignIn from '../pages/SignIn/intex';
import SignUp from '../pages/SignUp/index';
import Route from './Route';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/home" component={Home} isPrivate />
    <Route path="/registerEvent" component={RegisterEvent} isPrivate />
    <Route
      path="/registerSubscription"
      component={RegisterSubscription}
      isPrivate
    />
    <Route path="/listSubscription" component={ListSubscription} isPrivate />
  </Switch>
);

export default Routes;
