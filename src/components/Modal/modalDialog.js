import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {FormattedMessage} from 'react-intl';
import { Dialog, FlatButton } from 'material-ui';
import { getModalConfig } from './selector';

class ModalDialog extends Component {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.props.onClose();
  }

  getActions() {
    return (
      <FlatButton
        label="Close"
        primary={true}
        onClick={this.handleClose}
      />
    );
  }

  render() {
    const {open} = this.props;
    const {title = null, message = null} = this.props.config;

    return (
      <Dialog
        title={title ? title : ''}
        modal={true}
        open={open}
        actions={this.getActions()}
      >
        { message ? message : '' }
      </Dialog>
    );
  }
}

ModalDialog.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
  config: PropTypes.object
};

export default connect(
  (state) => ({
    config: getModalConfig(state)
  })
)(ModalDialog);

