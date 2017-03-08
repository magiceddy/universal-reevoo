import React, { Component } from 'react';
import {default as buildedContracts} from '../contracts';
import ContractProvider from './ContractProvider';

class App extends Component {
  render() {
    return (
      <ContractProvider contracts={buildedContracts}>
        {this.props.children}
      </ContractProvider>
    );
  }
}

export default App;
