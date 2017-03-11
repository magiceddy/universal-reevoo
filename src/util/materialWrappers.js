import React from 'react';
import { RaisedButton, TextField, Checkbox } from 'material-ui';
import * as _ from 'lodash';
import { red500 } from 'material-ui/styles/colors';

/**
 * @dev It return material-Ui TextField
 * @name WrapperTextField
 * @params {Object} input - input value
 * @params {config} config - material props
 * @params {Object} meta - meta info about form field status
 * @returns {TextField} - return Material TextField
 */
const WrapperTextField = ({ input = {}, meta: { touched, error } = {}, config = {} }) => {

  if (touched) {
    config = _.assign(config, {errorText: error, errorStyle: red500});
  }

  return ( 
    <TextField {...input} {...config} /> 
  );
};

/**
 * @dev It return material-Ui CheckBox
 * @name WrapperCheckbox
 * @params {Object} input - input value
 * @params {string} label - checkbox label
 * @returns {Checkbox} - return Material Checkbox
 */
const WrapperCheckbox = ({ input = {}, label = {} }) => (
  <Checkbox
    label={ label }
    checked={input.value ? true : false}
    onCheck={input.onChange} />
);

/**
 * @dev It return material-Ui CheckBox
 * @name WrapperRaisedButton
 * @params {Object} input - input value
 * @params {string} label - RaisedButton label
 * @params {Object} formStatus - fields about from status
 * @returns {RaisedButton} - return Material RaisedButton
 */
const WrapperRaisedButton = ({label = {}, formStatus: {submitting, invalid}, type = ''}) => (
  <RaisedButton label={label} type={type} disabled={invalid || submitting} />
);

module.exports = {
  WrapperTextField,
  WrapperCheckbox,
  WrapperRaisedButton
};
