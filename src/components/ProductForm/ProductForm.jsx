import React, {Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { WrapperTextField, WrapperRaisedButton } from '../../util/materialWrappers';
import { productCode, productName } from './FormFieldsConstants';
import RaisedButton from 'material-ui/RaisedButton';
import registerProduct from './ProductsContracts';
import * as action from './actions';

class ProductForm extends Component {

  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  submit(values) {
    const { Products } = this.context.contracts;
    this.props.addProduct(Products, values);
  }

  render() {
    const { handleSubmit, pristine, submitting } = this.props;
    const { submit } = this;

    return (
      <form onSubmit={handleSubmit(submit)}>
        <div className="row">
          <div className="col-xs-offset-1 col-xs-5">
            <Field  name="productCode" 
                    component={WrapperTextField} 
                    config={productCode} 
            />
          </div>
          <div className="col-xs-5">
            <Field  name="productName" 
                    component={WrapperTextField} 
                    config={productName} 
            />
          </div>
        </div>
        <div className="row center-xs">
          <div style={{marginTop: '10%'}}>
            <RaisedButton type="submit" 
                          disabled={pristine || submitting} 
                          label="Register Product" 
                          primary={true} 
            />
          </div>
        </div>
      </form>
    );
  }
}

ProductForm.contextTypes = {
  contracts: PropTypes.object.isRequired,
  web3: PropTypes.object
};

ProductForm.propTypes = {
  addProduct: PropTypes.func,
};

ProductForm = connect(
  (state) => ({}),
  action
)(ProductForm);

export default reduxForm({
  form: 'ProductForm'
})(ProductForm);