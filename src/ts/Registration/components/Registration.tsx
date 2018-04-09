import * as React from 'react';
import Typography from 'material-ui/Typography';
import RegistrationForm from './RegistrationForm';
import { UserState, Role } from '../model';
import { Redirect } from 'react-router-dom';

interface RegistrationProps {
  createUser: (user: UserState) => void;
}

interface RedirectState {
  fireRedirect: boolean;
}

export class Registration extends React.Component<RegistrationProps, UserState & RedirectState> {
  constructor(props: RegistrationProps) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      zipCode: '',
      role: Role.student,
      hearAboutUs: '',
      fireRedirect: false
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
     
    const userValues: UserState = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      zipCode: this.state.zipCode,
      role: this.state.role,
      hearAboutUs: this.state.hearAboutUs
    };
    
    if (!this.state.fireRedirect) {
      this.setState({ fireRedirect: true }, () => {
        this.props.createUser(userValues);
      });
    }
  }

  public render (): JSX.Element {
    return (
      <div className="nabi-container">
        <Typography variant="title" className="nabi-margin-top-medium nabi-margin-bottom-medium">
          REGISTRATION
        </Typography>
        
        <div className="nabi-background-white nabi-section ">
          <RegistrationForm
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            hearAboutUs={this.state.hearAboutUs}
            selectedRole={this.state.role}
          />
        </div>
        {this.state.fireRedirect && (
          <Redirect to="profile-builder" />
        )}
      </div>
    );
  }
}

export default Registration;
