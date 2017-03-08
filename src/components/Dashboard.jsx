import React, {PropTypes, Component} from 'react';

class Dashboard extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>Ciao</div>
    );
  }
}

Dashboard.contextTypes = {
  contracts: React.PropTypes.object.isRequired
};

export default Dashboard;