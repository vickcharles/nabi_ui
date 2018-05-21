import * as React from 'react';

import { FormLabel, FormControl, FormControlLabel } from 'material-ui/Form';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import Radio, { RadioGroup } from 'material-ui/Radio';
import Select from 'material-ui/Select';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography/Typography';

import { Role, hearAboutUsInfo } from '../model';

/**
 * Props for RegistrationForm
 * @interface {RegistrationFormProps}
 */
interface RegistrationFormProps {
  handleChange: (event: React.FormEvent<{}>) => void;
  handleSubmit: (event: React.FormEvent<{}>) => void;
  hearAboutUs: string;
  selectedRole: string;
}

/**
 * Contains the registration form fields 
 * @param RegistrationFormProps props - The component's props
 */
const RegistrationForm: React.StatelessComponent<RegistrationFormProps> = props => {
  const { handleChange, handleSubmit, hearAboutUs, selectedRole } = props;
  
  const selectOptions: any = [];
  
  for (const [key, value] of Object.entries(hearAboutUsInfo)) {
    selectOptions.push(<MenuItem key={key} value={value.value}>{value.label}</MenuItem>);
  }

  return (
    <form 
      className="nabi-general-form nabi-margin-top-medium" 
      noValidate={true} 
      autoComplete="off"
    >
      <FormControl component="fieldset" required={true}>
        <FormLabel className="nabi-margin-bottom-xsmall" component="legend">What would you like to do?</FormLabel>
        <RadioGroup
          name="role"
          onChange={handleChange}
          value={(selectedRole !== Role.instructor) ? Role.student : Role.instructor}
        >
          <FormControlLabel value={Role.student} control={<Radio />} label="Find a music instructor" />
          <FormControlLabel value={Role.instructor} control={<Radio />} label="Find teaching jobs" />
        </RadioGroup>
      </FormControl>

      {
        (selectedRole !== Role.instructor) ?
          <div className="nabi-margin-top-small">
            <FormControl fullWidth={true} component="fieldset" required={true}>
              <FormLabel 
                className="nabi-margin-bottom-xsmall" 
                component="legend"
              >
                Are the lessons for you or for your child?
              </FormLabel>
              <RadioGroup
                name="role"
                onChange={handleChange}
                value={selectedRole}
              >
                <FormControlLabel control={<Radio />} label="For me" value={Role.student} />
                <FormControlLabel control={<Radio />} label="For my child" value={Role.parent} />
              </RadioGroup>
            </FormControl>
          </div>
        : ''
      }

      <Divider className="nabi-margin-top-small"/>

      <Typography className="nabi-margin-top-small" variant="body2">
        {(selectedRole === Role.student) ?  'Register as a student' : 
        (selectedRole === Role.parent) ? 'Register as a parent' :
        'Register as an instructor'}  
      </Typography>

      <TextField
        fullWidth={true}
        id="firstName"
        margin="normal"
        name="firstName"
        onChange={handleChange}
        placeholder="First Name"
        required={true}
      />

      <TextField
        fullWidth={true}
        id="lastName"
        margin="normal"
        name="lastName"
        onChange={handleChange}
        placeholder="Last Name"
        required={true}
      />

      <TextField
        fullWidth={true}
        id="zipCode"
        margin="normal"
        name="zipCode"
        onChange={handleChange}
        placeholder="ZIP Code"
        required={true}
      />

      <TextField
        fullWidth={true}
        id="email"
        margin="normal"
        name="email"
        onChange={handleChange}
        placeholder="Email"
        required={true}
      />

      <TextField
        fullWidth={true}
        id="password"
        margin="normal"
        name="password"
        onChange={handleChange}
        placeholder="Password"
        required={true}
        type="password"
      />
      
      <FormControl fullWidth={true} required={true}>
        <InputLabel htmlFor="hearAboutUs">How did you hear about us?</InputLabel>
        <Select
          fullWidth={true}
          input={<Input id="hearAboutUs" name="hearAboutUs" />}
          onChange={handleChange}
          value={hearAboutUs}
        >
          {selectOptions}
        </Select>
      </FormControl>

      <div className="nabi-text-center nabi-margin-top-large">
        <Button color="primary" onClick={handleSubmit} variant="raised">
            Submit
        </Button>
      </div>
    </form>
  );
};

export default RegistrationForm;
