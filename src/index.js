import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { getRoutes } from './routes';
import store from './store';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//flexboxgrid style
import * as flexbox from 'flexboxgrid/css/flexboxgrid.css';

injectTapEventPlugin();


const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render((
  <MuiThemeProvider>
    <Provider store={store}>
      <IntlProvider locale="en">
        <Router history={history}>
          {getRoutes}
        </Router>
      </IntlProvider>
    </Provider>
  </MuiThemeProvider>
  ),
  document.getElementById('root')
);
