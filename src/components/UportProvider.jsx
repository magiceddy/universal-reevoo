import React, {Component, PropTypes} from 'react';
import { Connect } from 'uport-connect';

class UportProvider extends Component {

  constructor(props) {
    super(props);
    this.uport = new Connect('Universal-Reevoo');
    this.web3 = this.uport.getWeb3();
  }

  getChildContext() {
    return {
      uport: this.uport,
      web3: this.web3
    };
  }

  render() {
    return <div>{ this.props.children}</div>;
  }
}

UportProvider.childContextTypes = {
  uport: PropTypes.object,
  web3: PropTypes.object
};

export default UportProvider;