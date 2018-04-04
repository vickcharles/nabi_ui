import * as React from 'react';
import { FormLabel, FormControl, FormControlLabel } from 'material-ui/Form';
import Radio, { RadioGroup } from 'material-ui/Radio';
import TextField from 'material-ui/TextField';

const RegistrationForm = () => {
  return (
    <form className="nabi-general-form nabi-margin-top-medium" noValidate={true} autoComplete="off">
      <FormControl component="fieldset" required={true}>
        <FormLabel component="legend">What would you like to do?</FormLabel>
        
        <RadioGroup
          aria-label="role"
          name="role"
        >
          <FormControlLabel value="student" control={<Radio />} label="Find a music instructor" />
          <FormControlLabel value="instructor" control={<Radio />} label="Find teaching jobs" />
        </RadioGroup>
      </FormControl>

      <TextField
        required={true}
        id="firstName"
        label="First Name"
        margin="normal"
        name="firstName"
      />

      <TextField
        required={true}
        id="lastName"
        label="Last Name"
        margin="normal"
        name="lastName"
      />

      <TextField
        required={true}
        id="zipCode"
        label="ZIP Code"
        margin="normal"
        name="zipCode"
      />

      <TextField
        required={true}
        id="email"
        label="Email"
        margin="normal"
        name="email"
      />

      <TextField
        required={true}
        id="password"
        label="Password"
        margin="normal"
        name="password"
      />
      <FormControl component="fieldset" required={true}>
        <FormLabel component="legend">Are the lessons for you or for your child?</FormLabel>
        <RadioGroup
          aria-label="role"
          name="role"
        >
          <FormControlLabel value="student" control={<Radio />} label="For me" />
          <FormControlLabel value="parent" control={<Radio />} label="For my child" />
        </RadioGroup>
      </FormControl>

      // TODO: ADD SELECT FIELD 
    </form>
  );
};

export default RegistrationForm;

/* 
TODO: ADD PROPTYPES 
RegistrationForm.propTypes = {
  classes : PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  selectedRole: PropTypes.string.isRequired,
  onSave: PropTypes.func.isRequired
} */
