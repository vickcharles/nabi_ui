import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Route, withRouter, Switch } from 'react-router-dom';

import Header from './Header';
import Homepage from './Homepage';
import Welcome from './Welcome';
import { createUser, changeAvatar, Registration, fetchZipCodeAddress } from '../../Users/';
import { UserState } from '../../Users/model';
import { createInstructor, ProfileBuilder } from '../../Instructors';
import { InstructorType } from '../../Instructors/model';

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
 * AppContainer, this is the application's main container, it handles redux config and routes
 * @class AppContainer
 * @extends React.Component<AppContainerProps, {}>
 */
class AppContainer extends React.Component<AppContainerProps, {}> {
  public render(): JSX.Element {
    
    const { dispatch, users } = this.props;

    const dispatchCreateUser: any = (user: UserState) => dispatch(createUser(user));
    const dispatchCreateInstructor: any = (instructor: InstructorType) => dispatch(createInstructor(instructor));
    const dispatchChangeAvatar: any = (id: string, avatar: string) => dispatch(changeAvatar(id, avatar ));
    const dispatchZipCodeSearch: any = (user: UserState) => dispatch(fetchZipCodeAddress( user ));

    /** 
     * Renders Registration component
     */
    const renderRegistration = (props: any) => (
      <Registration 
        createUser={dispatchCreateUser} 
        createInstructor={dispatchCreateInstructor}
        searchZipCode={dispatchZipCodeSearch}
      />
    );

    /** 
     * Renders Welcome for instructors
     */
    const renderWelcomeInstructors = (props: any) => (
      <Welcome 
        welcomeText="Now is time to build your profile and start finding teaching jobs."
        actionText="BUILD PROFILE"
        actionUrl="profile-builder"
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
            path="/welcome-instructor/:id"
            render={renderWelcomeInstructors}
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
