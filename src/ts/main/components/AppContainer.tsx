import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import Header from './Header';
import Homepage from './Homepage';
import { createUser, Registration } from '../../Registration';
import { Route, withRouter, Switch } from 'react-router-dom';
import { UserState } from '../../Registration/model';
import { ProfileBuilder } from '../../ProfileBuilder';

export interface AppContainerStateProps {
  users: UserState[];
  dispatch: Dispatch<{}>;
}

export interface AppContainerProps extends AppContainerStateProps {}

class AppContainer extends React.Component<AppContainerProps, {}> {
  public render(): JSX.Element {
    
    const { dispatch, users } = this.props;

    const dispatchCreateUser: any = (user: UserState) => dispatch(createUser(user));

    const renderRegistration = (props: any) => (
      <Registration 
        createUser={dispatchCreateUser} 
      />
    );

    const renderProfileBuilder = (props: any) => (
      <ProfileBuilder 
        users={users} 
        classes={null}
      />
    );

    return (
      <div>
        <Header />
        <Switch>
          <Route 
            exact={true} 
            path="/" 
            component={Homepage} 
          />
          <Route 
            exact={true} 
            path="/registration" 
            render={renderRegistration}
          />
          <Route 
            exact={true} 
            path="/profile-builder/:id" 
            render={renderProfileBuilder}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state: any, _ownProps: any) => ({
  users: state.userReducer
});

export default withRouter(connect(mapStateToProps)(AppContainer));
