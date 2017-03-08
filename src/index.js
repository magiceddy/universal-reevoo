import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import { getRoutes } from './routes';
import store from './store';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

injectTapEventPlugin();


const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render((
  <MuiThemeProvider>
    <Provider store={store}>
      <Router history={history}>
        {getRoutes}
      </Router>
    </Provider>
  </MuiThemeProvider>
  ),
  document.getElementById('root')
);
