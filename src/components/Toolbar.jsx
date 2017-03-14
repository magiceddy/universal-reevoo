import React, {Component, PropTypes} from 'react';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import { switchAuthComponent } from '../util/wrappers.js';
import { LoginButton, LogoutButton, RegisterButton } from './Login';
import { APP_NAME } from '../constants';

class TopToolbar extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    /*const onlyAuthContext = VisibleOnlyAuth( () => 
      <LogoutButton />
    );

    const onlyGuessContext = HiddenOnlyAuth( () => 
      <div>
        <RegisterButton />
        <LoginButton />
      </div>
    );*/

    const toggleAuthComponent = switchAuthComponent( () => (
        <onlyAuthContext />,
        <onlyGuessContext />
    ));

    const authContext = <LogoutButton />;
    const noAuthContext = <div><RegisterButton /><LoginButton /></div>;

    const pippo = {
      pippo: switchAuthComponent(
        () => authContext, 
        () => noAuthContext 
      )
    };

    return (
      <Toolbar>
        <ToolbarGroup firstChild={true}>
          <ToolbarTitle text={APP_NAME} />
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarSeparator />
            <pippo.pippo />
        </ToolbarGroup>
      </Toolbar>
    );
  }
}

export default TopToolbar;