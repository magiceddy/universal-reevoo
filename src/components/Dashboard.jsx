import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import Paper from 'material-ui/Paper';
import {redA700, lightBlue400} from 'material-ui/styles/colors';
import ProductForm from './ProductForm/ProductForm';
import {getUsername} from './Login/selector';

class Dashboard extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const title = `Welcome ${this.props.username} this is your Dashboard!`;
    const titleStyle = {
      fontSize: '2em',
      fontFamily: 'monospace',
      color: redA700
    };

    const paperStyle = {
      marginTop: '15%',
      height: '200px',
    };

    return (
      <div>
        <div className="row center-xs">
          <p style={titleStyle}>
            Welcome <span style={{textDecoration: 'underline'}}>{ this.props.username }</span> this is your Dashboard!
          </p>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
            <Paper zDepth={2} style={paperStyle}>
              <ProductForm />
            </Paper>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.contextTypes = {
  contracts: React.PropTypes.object.isRequired
};

Dashboard.propTypes = {
  username: PropTypes.string
};

export default connect(
  (state) =>({
    username: getUsername(state)
  })
)(Dashboard);