import * as React from 'react';
import { Redirect } from 'react-router-dom';

import RegistrationForm from './RegistrationForm';
import { UserState, Role } from '../model';
import { InstructorState } from '../../Instructors/model';
import { PageTitle } from '../../main';

interface RegistrationProps {
  createUser: (user: UserState) => void;
  createInstructor: (instructor: InstructorState) => void;
  searchZipCode: (user: UserState) => void;
}

interface RedirectState {
  fireRedirect: boolean;
}

interface ErrorDialogState {
  showBDErrorDialogue: boolean;
}

export class Registration extends React.Component<RegistrationProps, 
  UserState & RedirectState & ErrorDialogState> {
  constructor(props: RegistrationProps) {
    super(props);

    this.state = {
      id: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      zipCode: '',
      role: Role.student,
      hearAboutUs: '',
      fireRedirect: false,
      displayName: '',
      showBDErrorDialogue: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  public handleChange(event: any): void {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    
    this.setState({
      ...this.state,
      [name]: value
    });
  }

  public handleSubmit(event: React.SyntheticEvent<HTMLInputElement>): void {
    if (event) {
      event.preventDefault();
    }

    this.setState({ id: this.generateId() });

    if (!this.state.fireRedirect) {
      this.setState({ fireRedirect: true }, () => {
        this.createUser();
      });
    }
  }
  
  public createUser(): void {
    if (this.state.fireRedirect === false) {
      this.setState({ fireRedirect: true });
    }
    
    const userValues: UserState = {
      id: this.state.id,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      zipCode: this.state.zipCode,
      role: this.state.role,
      hearAboutUs: this.state.hearAboutUs,
      displayName: `${this.state.firstName} ${this.state.lastName}`
    };
    
    this.props.createUser(userValues);

    const userId: any = {
      userId: this.state.id,
    };

    if ( this.state.role === Role.instructor) {
      this.props.createInstructor(userId);
    }

    if ( this.state.zipCode && true) {
      this.props.searchZipCode(userValues);
    }
  }
  
  /* The userID should be generated by the api
  TODO: remove this method when the api is hooked */
  public generateId(): string {
    return `uniqueid${new Date().getUTCMilliseconds()}`;
  }

  public render (): JSX.Element {
    return (
      <div className="nabi-container">
        <PageTitle pageTitle="REGISTRATION" />
        
        <div className="nabi-background-white nabi-section">
          <RegistrationForm
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            hearAboutUs={this.state.hearAboutUs}
            selectedRole={this.state.role}
          />
        </div>
        {this.state.fireRedirect && this.state.role === 'instructor' && (
          <Redirect to={`profile-builder/${this.state.id}`} />
        )}
      </div>
    );
  }
}

export default Registration;
