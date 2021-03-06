import * as React from 'react';
import { Redirect } from 'react-router-dom';
import * as moment from 'moment';

import RegistrationForm from './RegistrationForm';
import { UserState, Role } from '../model';
import { InstructorType } from '../../Instructors/model';
import { PageTitle } from '../../main';
import { RedirectState } from '../../main/model';
import AgeDisclaimer from './AgeDisclaimer';

/**
 * Props for registration
 * @interface RegistrationProps
 */
interface RegistrationProps {
  createUser: (user: UserState) => void;
  createInstructor: (instructor: InstructorType) => void;
  searchZipCode: (user: UserState) => void;
  role?: Role;
}

interface OpenModalState {
  openModal: boolean;
}

/**
 * State for Registration
 * @interface RegistrationState
 */
interface RegistrationState extends
UserState,
RedirectState,
OpenModalState {}

/**
 * Contains a form to register new users
 * @class Registration
 * @extends React.Component<RegistrationProps, UserState & RedirectState>
 */
export class Registration extends React.Component<RegistrationProps, RegistrationState> {
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
      birthday: moment(),
      fireRedirect: false,
      displayName: '',
      openModal: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBirthdayChange = this.handleBirthdayChange.bind(this);
  }

  componentWillMount() {
    if (this.props.role) {
        this.setState({role: this.props.role});
    }
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

  public handleBirthdayChange(date: moment.Moment): void {
    this.setState({ birthday: date });
  }

  public displayAgeDisclaimer(): void {
    if (this.state.birthday) {
      const userAge = Math.abs(this.state.birthday.diff(moment(), 'years'));

      if (userAge <= 17) {
        this.setState({ openModal: true });
      } else {
        if (!this.state.fireRedirect && !this.state.openModal) {
          this.setState({ fireRedirect: true }, () => {
            this.createUser();
          });
        }
      }
    }
  }

  public handleSubmit(event: React.SyntheticEvent<HTMLInputElement>): void {
    if (event) {
      event.preventDefault();
    }

    this.displayAgeDisclaimer();
    this.setState({ id: this.generateId() });
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

    const userId = {
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
    const closeModal = () => { this.setState({ openModal: false}); };

    return (
      <div className="nabi-container">
        <PageTitle pageTitle="REGISTRATION" />

        <div className="nabi-background-white nabi-section">
          <RegistrationForm
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            handleBirthdayChange={this.handleBirthdayChange}
            hearAboutUs={this.state.hearAboutUs}
            birthday={this.state.birthday}
            selectedRole={this.state.role}
          />
        </div>
        <AgeDisclaimer
          isFormDialogOpen={this.state.openModal}
          closeHandler={closeModal}
        />
          {this.state.fireRedirect && (
          this.state.role === Role.instructor ?
          <Redirect to={`welcome-instructor/${this.state.id}`} /> :
          <Redirect to={`welcome-student/${this.state.id}`} />
        )}
      </div>
    );
  }
}

export default Registration;
