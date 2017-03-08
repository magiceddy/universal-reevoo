import React, {Component, PropTypes} from 'react';
import { default as Web3 } from 'web3';
import { default as contract } from 'truffle-contract';
//import Products from '../../build/contracts/Products.json';
import TruffleConfig from '../../truffle-config';

class TruffleContractWrapper extends Component {

  constructor(props) {
    super(props);
    this.web3Provided;
    this.web3Inizialize = this.web3Inizialize.bind(this);
    this.buildTruffleContracts = this.buildTruffleContracts.bind(this);
  }

  componentWillMount() {
    this.web3Inizialize();
  }

  web3Inizialize() {
    let { NODE_ENV = 'development' } = process.env;
    let {
      host = 'localhost', 
      port = 8545 } = TruffleConfig.networks[NODE_ENV];
    let web3Location = `http://${host}:${port}`;

    if (typeof web3 !== 'undefined') {                            
      // Use the Mist/wallet provider.     
      // DEVELOPER NOTE: removing the next commented line will break the app
      // eslint-disable-next-line
      this.web3Provided = new Web3(web3.currentProvider);
    } else {                                                      
      // DEVELOPER NOTE: What happens in the wild if the 
      // user does not have a browser based wallet? What happens
      // if the Web3 object cannot be initialized with the httpProvider
      // given from the loction in the truffle-config file?
      this.web3Provided = new Web3(new Web3.providers.HttpProvider(web3Location));
    }
  }

  buildTruffleContracts() {
    let contracts = {};
    let meta;

    this.props.contracts.forEach( (_contract) => {
      let {contract_name = ''} = _contract;
      meta = contract(_contract);
      meta.setProvider(this.web3Provided.currentProvider);
      contracts[contract_name] = meta;
    });
    return contracts;
  }

  getChildContext() {
    let contracts = this.buildTruffleContracts();
    return { contracts, web3: this.web3Provided };
  }

  render() {
    return <div>{this.props.children}</div>;
  }
}

TruffleContractWrapper.childContextTypes = {
  contracts: React.PropTypes.object,
  web3: React.PropTypes.object
};

TruffleContractWrapper.propTypes = {
  contracts: React.PropTypes.array.isRequired
};

export default TruffleContractWrapper;