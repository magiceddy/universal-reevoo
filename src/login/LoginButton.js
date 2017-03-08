import React, { Component, PropTypes } from 'react';

// Images
/*import uPortLogo from '../img/uport-logo.svg';

const LoginButton = ({ onLoginUserClick }) => {
  return(
    <li className="pure-menu-item">
      <a href="#" className="pure-menu-link" onClick={(event) => onLoginUserClick(event)}><img className="uport-logo" src={uPortLogo} alt="UPort Logo" />Login with UPort</a>
    </li>
  );
};

export default LoginButton;*/

class LoginButton extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.context);
    return <div>Ciao</div>;
  }
}

LoginButton.contextTypes = {
  contracts: React.PropTypes.object,
  web3: React.PropTypes.object
};

export default LoginButton;