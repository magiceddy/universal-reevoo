import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {RaisedButton} from 'material-ui';
import {registration} from './actions';
import { Link } from 'react-router';

class RegisterButton extends Component {

  constructor(props) {
    super(props);
    this.register = this.register.bind(this);
  }

  register() {
    const {
      uport = null,
      web3 = null,
      contracts: {
        SimpleUserManager = null }} = this.context;

    this.props.registration({
      uport,
      SimpleUserManager,
      web3
    });
  }

  render() {

    return(
      <Link to="/dashboard">
      <RaisedButton label="Register" 
                    primary={true} 
                    onClick={this.register} 
      />
    </Link>
    );
  }
}

RegisterButton.contextTypes = {
  uport: PropTypes.object.isRequired,
  contracts: PropTypes.object.isRequired,
  web3: PropTypes.object.isRequired
};

RegisterButton.PropTypes = {
  register: PropTypes.func
};

export default connect(
  (state) => ({}),
  {registration}
)(RegisterButton);