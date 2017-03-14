import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {RaisedButton} from 'material-ui';
import {logout} from './actions';
import {Link} from 'react-router';

class LogoutButton extends Component {

  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    this.logout();
  }

  render() {

    return (
      <Link to="/">
        <RaisedButton label="Log Out" 
                      primary="true" 
                      onClick={this.logout}
        />
      </Link>
    );
  }
}

LogoutButton.propTypes = {
  logout: PropTypes.func
};

export default connect(
  (state) => ({}),
  {logout}
)(LogoutButton);