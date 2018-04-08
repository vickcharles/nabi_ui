import * as React from 'react';
import Header from './Header';
import Homepage from './Homepage';
import Registration from '../../Registration/components/Registration';
import { Route, Switch } from 'react-router-dom';

class AppContainer extends React.Component {
  render() {
    return (
      <>
        <Header/>
        <Switch>
          <Route exact={true} path="/" component={Homepage} />
          <Route exact={true} path="/registration" component={Registration}/>
        </Switch>
      </>
    );
  }
}

export default AppContainer;
