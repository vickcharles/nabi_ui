import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Route, withRouter, Switch } from 'react-router-dom';

import Header from './Header';
import Homepage from './Homepage';
import { createUser, changeAvatar, Registration } from '../../Users/';
import { UserState } from '../../Users/model';
import { createInstructor, ProfileBuilder } from '../../Instructors';
import { InstructorState } from '../../Instructors/model';

/**
 * State props to use with Redux connect
 * @interface AppContainerStateProps
 */
export interface AppContainerStateProps {
  users: UserState[];
  dispatch: Dispatch<{}>;
}
/**
 * Props for AppContainer
 * @interface AppContainerProps
 * @extends AppContainerStateProps
 */
export interface AppContainerProps extends AppContainerStateProps {}
/**
 * This is the application's main container
 * @class AppContainer
 * @extends React.Component<AppContainerProps, {}>
 */
class AppContainer extends React.Component<AppContainerProps, {}> {
  public render(): JSX.Element {
    
    const { dispatch, users } = this.props;

    const dispatchCreateUser: any = (user: UserState) => dispatch(createUser(user));
    const dispatchCreateInstructor: any = (instructor: InstructorState) => dispatch(createInstructor(instructor));
    const dispatchChangeAvatar: any = (id: string, avatar: string) => dispatch(changeAvatar(id, avatar ));
    /** 
     * Renders Registration component
     */
    const renderRegistration = (props: any) => (
      <Registration 
        createUser={dispatchCreateUser} 
        createInstructor={dispatchCreateInstructor}
      />
    );
    /** 
     * Renders ProfileBuilder component
     */
    const renderProfileBuilder = (props: any) => (
      <ProfileBuilder 
        users={users} 
        classes={null}
        changeAvatar={dispatchChangeAvatar}
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
/** 
 * Maps redux store state to props
 */
const mapStateToProps = (state: any, _ownProps: any) => ({
  users: state.users
});

export default withRouter(connect(mapStateToProps)(AppContainer));
