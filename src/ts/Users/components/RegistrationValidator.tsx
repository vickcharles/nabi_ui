/**
 * FieldApi to simulate touched and error
 *
 * @interface FieldApi
 */
export interface FieldApi {
  touched: boolean;
  error: string | undefined;
}

export interface ValidatorsInterface {
  fieldName: string;
  validators: Array<(value: string, touched: boolean) => string>;
}

/**
 * FieldApi to simulate touched and error
 *
 * @interface FieldApi
 */
export interface FieldApi {
  touched: boolean;
  error: string | undefined;
}

export interface ValidatorsInterface {
  fieldName: string;
  validators: Array<(value: string, touched: boolean) => string>;
}

/**
 * State Validator
 *
 * @interface RegistrationValidatorState
 */
export interface RegistrationValidatorState {
  fields: { [key: string]: FieldApi };
}

export const fields = {
  firstName: { touched: false, error: undefined },
  lastName: { touched: false, error: undefined },
  zipCode: { touched: false, error: undefined },
  email: { touched: false, error: undefined },
  password: { touched: false, error: undefined },
  hearAboutUs: { touched: false, error: undefined }
};

export const validators = [
  {
    fieldName: 'firstName',
    validators: [
      (value: string, touched: boolean) => {
        return (touched && !(/^[A-Za-z]{2,}$/).test(value)) || (/^\s*$/).test(value) ?
          'Invalid name. Must contain at least two characters and alphabetical letters only'
          :
          ''
          ;
      }
    ]
  },
  {
    fieldName: 'lastName',
    validators: [
      (value: string, touched: boolean) => {
        return (touched && !(/^[A-Za-z]{2,}$/).test(value)) || (/^\s*$/).test(value) ?
          'Invalid last name. Must contain at least two characters and alphabetical letters only'
          :
          ''
          ;
      }
    ]
  },
  {
    fieldName: 'email',
    validators: [
      (value: string, touched: boolean) => {
        // tslint:disable-next-line
        return (touched && !(/^([a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]{1,64}@([a-zA-Z0-9-]+.[a-zA-Z0-9-]{2,}){1,255}){1,320}$/).test(value)) || (/^\s*$/).test(value) ?
          'Invalid email. Enter a valid email address.'
          :
          ''
          ;
      }
    ]
  },
  {
    fieldName: 'zipCode',
    validators: [
      (value: string, touched: boolean) => {
        return (touched && !(/^\ d{ 5} (-\ d{ 4} )?$/).test(value)) || (/^\s*$/).test(value) ?
          'Invalid zip code. Must contain 5 characters and only numbers'
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
        return (touched && !(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/).test(value)) || (/^\s*$/).test(value) ?
          'Invalid password. Must contain at least 5 characters and at least one letter and one number.'
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
          'Invalid. An option must be selected!'
          :
          ''
          ;
      }
    ]
  }
];

export function validateFields(state: any, _validators: Array<ValidatorsInterface>) {
  let hasErrors: boolean = false;
  _validators.map(
    (valField) => {
      if (state.fields[valField.fieldName]) {
        let errors: string = valField.validators.map(
          (fun) => {
            let value = state[valField.fieldName];
            return fun(value, state.fields[valField.fieldName].touched);
          }
        ).join(' ');
        if (!((/^\s*$/).test(errors) && true)) {
          state.fields[valField.fieldName].error = errors;
          hasErrors = true;
        } else {
          state.fields[valField.fieldName].error = '';
        }
      }
    }
  );
  return {
    hasErrors,
    newValidateFields : state.fields 
  };
}