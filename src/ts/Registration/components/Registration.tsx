import * as React from 'react';
import Typography from 'material-ui/Typography';
import RegistrationForm from './RegistrationForm';

interface RegistrationProps {

}

interface RegistrationState {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  zipCode: string;
  role: string;
  hearAboutUs: string;
}

class Registration extends React.Component<RegistrationProps, RegistrationState> {
  constructor(props: RegistrationProps) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      zipCode: '',
      role: 'student',
      hearAboutUs: ''
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
    event.preventDefault();
    const userValues = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      zipCode: this.state.zipCode,
      role: this.state.role,
      hearAboutUs: this.state.hearAboutUs
    };
    console.log(userValues);
  }

  public render (): JSX.Element {
    return (
      <div className="nabi-container">
        <Typography className="nabi-page-title">
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
      </div>
    );
  }
}

export default Registration;
