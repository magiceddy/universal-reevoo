import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import {login} from './actions';
import { Link } from 'react-router';


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
    return(
      <Link to="/dashboard">
        <RaisedButton label="Log In" secondary={true} onClick={this.logIn} />
      </Link>
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