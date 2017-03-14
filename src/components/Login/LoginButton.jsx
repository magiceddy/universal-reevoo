import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {RaisedButton} from 'material-ui';
import {login} from './actions';
import { Link } from 'react-router';

class LoginButton extends Component {

  constructor(props) {
    super(props);
    this.logIn = this.logIn.bind(this);
  }

  logIn() {
    const {uport} = this.context;
    this.props.login(uport);
  }

  render() {

    return(
    <Link to="/dashboard">
      <RaisedButton label="Log In" 
                    secondary={true} 
                    onClick={this.logIn} 
      />
    </Link>
    );
  }
}

LoginButton.contextTypes = {
  uport: PropTypes.object
};

LoginButton.PropTypes = {
  login: PropTypes.func
};

export default connect(
  (state) => ({}),
  {login}
)(LoginButton);