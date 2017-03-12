import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {RaisedButton, SvgIcon} from 'material-ui';
import {login} from './actions';
import { Link } from 'react-router';
import centerInPage from '../../style/app.css';

class Login extends Component {

  constructor(props) {
    super(props);
    this.logIn = this.logIn.bind(this);
  }

  logIn() {
    const {uport} = this.context;
    this.props.login(uport);
  }

  render() {
    const centerInPage = {
      'margin-top': '150px'
    };

    return(
      <div className="row center-xs">
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-4">
          <Link to="/dashboard">
            <RaisedButton label="Log In" 
                          secondary={true} 
                          onClick={this.logIn} 
                          fullWidth={true} 
                          style={centerInPage} 
            />
          </Link>
        </div>
      </div>
    );
  }
}

Login.contextTypes = {
  uport: PropTypes.object
};

Login.PropTypes = {
  login: PropTypes.func
};

export default connect(
  (state) => ({}),
  {login}
)(Login);