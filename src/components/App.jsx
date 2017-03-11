import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {default as buildedContracts} from '../contracts';
import ContractProvider from './ContractProvider';
import { isLoading} from '../components/Loader/selector';
import { closeModal } from '../components/Modal/action';
import { getModalStatus } from '../components/Modal/selector';
import { CircularProgress } from 'material-ui';
import ModalDialog from '../components/Modal/modalDialog';

class App extends Component {

  showModal() {
    const status = this.props.modal;
    return status ? <ModalDialog open={status} onClose={this.props.closeModal} /> : null;
  }

  showLoader() {
    const modalStyle = {
      'position': 'absolute', 
      'top': '50%', 
      'right': '50%'
    };

    return (
      this.props.isLoading ?
        <CircularProgress
          style={modalStyle}
          size={60}
          thickness={7}
        /> : null
    );
  }

  render() {
    return (
      <ContractProvider contracts={buildedContracts}>
        {this.props.children}
        {this.showLoader()}
        {this.showModal()}
      </ContractProvider>
    );
  }
}

App.propTypes = {
  isLoading: PropTypes.bool,
  modal: PropTypes.bool,
  closeModal: PropTypes.func
};

export default connect(
  (state) => ({
    isLoading: isLoading(state),
    modal: getModalStatus(state)
  }),
  {closeModal}
)(App);
