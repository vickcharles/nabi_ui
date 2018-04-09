import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import Header from './Header';
import Homepage from './Homepage';
import { createUser, Registration } from '../../Registration';
import { Route, withRouter, Switch } from 'react-router-dom';
import { UserState } from '../../Registration/model';

export interface AppContainerStateProps {
  dispatch: Dispatch<{}>;
}

interface AppContainerProps extends AppContainerStateProps {}

class AppContainer extends React.Component<AppContainerProps, {}> {
  public render(): JSX.Element {
    
    const { dispatch } = this.props;

    const dispatchCreateUser: any = (user: UserState) => dispatch(createUser(user));
    
    return (
      <>
        <Header />
        <Switch>
          <Route exact={true} path="/" component={Homepage} />
          <Route 
            exact={true} 
            path="/registration" 
            render={() => <Registration createUser={dispatchCreateUser} />}
          />
        </Switch>
      </>
    );
  }
}

const mapStateToProps = (state: any, _ownProps: any) => ({

});

export default withRouter(connect(mapStateToProps)(AppContainer));
