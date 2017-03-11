import React, {PropTypes, Component} from 'react';
import Paper from 'material-ui/Paper';
import ProductForm from './ProductForm/ProductForm';

class Dashboard extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
          <Paper zDepth={2}>
            <ProductForm />
          </Paper>
        </div>
      </div>
    );
  }
}

Dashboard.contextTypes = {
  contracts: React.PropTypes.object.isRequired
};

export default Dashboard;