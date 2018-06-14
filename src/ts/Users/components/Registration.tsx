import * as React from 'react';
import { Redirect } from 'react-router-dom';

import RegistrationForm from './RegistrationForm';
import { UserState, Role } from '../model';
import { InstructorType } from '../../Instructors/model';
import { PageTitle } from '../../main';
import { RedirectState } from '../../main/model';

/**
 * Props for registration
 * @interface RegistrationProps
 */
interface RegistrationProps {
  createUser: (user: UserState) => void;
  createInstructor: (instructor: InstructorType) => void;
  searchZipCode: (user: UserState) => void;
}

interface AgeDisclaimerState {
  showAgeDisclaimer: boolean;
}

/**
 * FieldApi to simulate touched and error
 *
 * @interface FieldApi
 */
interface FieldApi {
  touched: boolean;
  error: string|undefined;
}

interface ValidatorsInterface {
  fieldName: string;
  validators: Array<(value: string, touched: boolean) => string>;
}

/**
 * State Validator
 *
 * @interface RegistrationValidatorState
 */
interface RegistrationValidatorState {
  fields: {[key: string]: FieldApi};
}
/**
 * State for Registration
 * @interface RegistrationState
 */
interface RegistrationState extends 
UserState,
RedirectState,
RegistrationValidatorState,
AgeDisclaimerState {}

/**
 * Contains a form to register new users
 * @class Registration
 * @extends React.Component<RegistrationProps, UserState & RedirectState>
 */
export class Registration extends React.Component<RegistrationProps, RegistrationState> {
private validators: Array<ValidatorsInterface>;
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
      showAgeDisclaimer: false,
      fields: 
        {
          firstName: {touched: false, error: undefined },
          lastName: { touched: false, error: undefined },
          zipCode: { touched: false, error: undefined },
          email: { touched: false, error: undefined },
          password: { touched: false, error: undefined },
          hearAboutUs: { touched: false, error: undefined }
        }
    };

    this.validators = [
      {
        fieldName: 'firstName',
        validators: [
          (value: string, touched: boolean) => {
            return touched && !(/^[A-Za-z]{2,}$/).test( value ) ?
              'Firstname must have at least two character and only letters! '
            :
              ''
            ;
          },
          (value: string, touched: boolean) => {
            return (/^\s*$/).test(value) ?
              'Firstname is a mandatory field! '
              :
              ''
              ;
          }
        ]
      },
      {
        fieldName: 'lastName' ,
        validators: [
          (value: string, touched: boolean) => {
            return touched && !(/^[A-Za-z]{2,}$/).test(value) ?
              'Lastname must have at least two character and only letters! '
              :
              ''
              ;
          },
          (value: string, touched: boolean) => {
            return (/^\s*$/).test(value) ?
              'Lastname is a mandatory field!'
              :
              ''
              ;
          }
        ]
      },
      { fieldName: 'email',
        validators: [
          (value: string, touched: boolean) => {
            // tslint:disable-next-line
            return touched && !(/^([a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]{1,64}@([a-zA-Z0-9-]+.[a-zA-Z0-9-]{2,}){1,255}){1,320}$/).test(value) ?
              'Email value is not valid! '
              :
              ''
              ;
          },
          (value: string, touched: boolean) => {
            return (/^\s*$/).test(value) ?
              'Email is a mandatory field!'
              :
              ''
              ;
          }
        ]
      },
      { fieldName: 'zipCode',
        validators: [
          (value: string, touched: boolean) => {
            return touched && !(/^\ d{ 5} (-\ d{ 4} )?$/).test(value) ? 
              'Must be a valid Zip Code' 
              :
              ''
              ;
          },
          (value: string, touched: boolean) => {
            return (/^\s*$/).test(value) ?
              'Zip Code is a mandatory field!'
              :
              ''
              ;
          }
        ]
      },
      {
        fieldName: 'password',
        validators: [
          (value: string, touched: boolean) => {
            return touched && !(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/).test(value) ?
              'Password must have a least 5 character one letter, one number'
              :
              ''
              ;
          },
          (value: string, touched: boolean) => {
            return (/^\s*$/).test(value) ?
              'Password is a mandatory field!'
              :
              ''
              ;
          }
        ]
      },
      {
        fieldName: 'hearAboutUs',
        validators: [
          (value: string, touched: boolean) => {
            return (/^\s*$/).test(value) ?
              'Must select how you heard about us!'
              :
              ''
              ;
          }
        ]
      }
    ];

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBirthdayChange = this.handleBirthdayChange.bind(this);
  }

  public handleBirthdayChange(dateData: any, hasError: boolean): void {
    let day = parseInt(dateData.day, 10);
    let month = parseInt(dateData.month, 10) - 1; // javascript month starts on 0
    let year = parseInt(dateData.year, 10);
    let newBD = new Date(year, month, day);
    
    this.setState({
      ...this.state,
      'birthday': newBD
    });
  }

  public handleChange(event: any): void {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    let newFieldsValue = Object.assign({}, this.state.fields);
    if ( this.state.fields[name] && true ) {
        newFieldsValue[name].touched = true;
    }

    this.setState({
      ...this.state,
      [name]: value,
      fields: newFieldsValue
    });
  }

  public handleSubmit(event: React.SyntheticEvent<HTMLInputElement>): void {

    if (event) {
      event.preventDefault();
    }

    // Create validations 
    let newValidateFields = Object.assign({}, this.state.fields);
    let hasErrors: boolean = false;
    this.validators.map(
      (valField) => {
        if ( this.state.fields[valField.fieldName] ) {
            let errors: string = valField.validators.map(
              (fun) => {
                let value = this.state[valField.fieldName];
                return fun(value, newValidateFields[valField.fieldName].touched );
              }
            ).join(' ');
            if ( !((/^\s*$/).test(errors) && true) ) {
              newValidateFields[valField.fieldName].error = errors;
              hasErrors = true;
            } else {
              newValidateFields[valField.fieldName].error = '';
            }
        }
      }
    );

    if ( hasErrors && true) {
      this.setState({fields: newValidateFields});
    } else {
      this.setState({ id: this.generateId() });

      if (!this.state.fireRedirect) {
        this.setState({ fireRedirect: true }, () => {
          this.createUser();
        });
      }
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
            handleBirthdayChange={this.handleBirthdayChange}
            hearAboutUs={this.state.hearAboutUs}
            selectedRole={this.state.role}
            fields={this.state.fields}
          />
        </div>
        {this.state.fireRedirect && this.state.role === 'instructor' && (
          <Redirect to={`welcome-instructor/${this.state.id}`} />
        )}
      </div>
    );
  }
}

export default Registration;
