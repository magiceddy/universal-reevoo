import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import { getRoutes } from './routes';
import store from './store';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();


const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render((
    <Provider store={store}>
      <Router history={history}>
        {getRoutes}
      </Router>
    </Provider>
  ),
  document.getElementById('root')
);
