import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {RaisedButton} from 'material-ui';
import {register} from './actions';
import { Link } from 'react-router';

class RegisterButton extends Component {

  constructor(props) {
    super(props);
    this.register = this.register.bind(this);
  }

  register() {
    const {uport} = this.context;
    this.props.login(uport);
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
  
};

RegisterButton.PropTypes = {
  register: PropTypes.func
};

export default connect(
  (state) => ({}),
  {register}
)(RegisterButton);