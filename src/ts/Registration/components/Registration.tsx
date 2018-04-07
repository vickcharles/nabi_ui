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
  }

  public handleChange(event: React.SyntheticEvent<HTMLInputElement>): void {
    const target = event.currentTarget;
    const value = target.value;
    const name = target.name;
    this.setState({
      ...this.state,
      [name]: value
    });
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
            selectedRole={this.state.role}
          />
        </div>
      </div>
    );
  }
}

export default Registration;
