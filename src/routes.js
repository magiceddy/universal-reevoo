import React from 'react';
import { Route, IndexRoute, browserHistory } from 'react-router';
import { UserIsAuthenticated, UserIsNotAuthenticated } from './util/wrappers.js';
import { default as components } from './components';

export const getRoutes = 
      <Route path={'/'} component={UserIsNotAuthenticated(components.App)}>
        <Route path="dashboard" component={UserIsAuthenticated(components.Dashboard)} />
      </Route>;

//  <IndexRoute component={UserIsNotAuthenticated(components.Login)} />

