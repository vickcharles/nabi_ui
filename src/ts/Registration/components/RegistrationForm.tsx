import * as React from 'react';
import { FormLabel, FormControl, FormControlLabel } from 'material-ui/Form';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import Radio, { RadioGroup } from 'material-ui/Radio';
import Select from 'material-ui/Select';
import TextField from 'material-ui/TextField';
import { Theme, withStyles, WithStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography/Typography';

const styles = (theme: Theme) => ({
    formFields: {
      width: '100%'
    }
});

interface RegistrationFormProps {
  handleChange: (event: React.FormEvent<{}>) => void;
  handleSubmit: (event: React.FormEvent<{}>) => void;
  hearAboutUs: string;
  selectedRole: string;
}

type PropsWithStyles = RegistrationFormProps & WithStyles<'formFields'>;

const RegistrationForm: React.StatelessComponent<PropsWithStyles> = props => {
  const { classes, handleChange, handleSubmit, hearAboutUs, selectedRole } = props;
  
  return (
    <form 
      className="nabi-general-form nabi-margin-top-medium" 
      noValidate={true} 
      autoComplete="off"
    >
      <FormControl component="fieldset" required={true}>
        <FormLabel component="legend">What would you like to do?</FormLabel>
        <RadioGroup
          name="role"
          onChange={handleChange}
          value={(selectedRole !== 'instructor') ? 'student' : 'instructor'}
        >
          <FormControlLabel value="student" control={<Radio />} label="Find a music instructor" />
          <FormControlLabel value="instructor" control={<Radio />} label="Find teaching jobs" />
        </RadioGroup>
      </FormControl>

      <Divider className="nabi-margin-top-small"/>

      <Typography className="nabi-margin-top-small" variant="body2">
        {(selectedRole === 'student') ?  'Register as a student' : 
        (selectedRole === 'parent') ? 'Register as a parent' :
        'Register as an instructor'}  
      </Typography>

      <TextField
        className={classes.formFields}
        id="firstName"
        margin="normal"
        name="firstName"
        onChange={handleChange}
        placeholder="First Name"
        required={true}
      />

      <TextField
        className={classes.formFields}
        id="lastName"
        margin="normal"
        name="lastName"
        onChange={handleChange}
        placeholder="Last Name"
        required={true}
      />

      <TextField
        className={classes.formFields}
        id="zipCode"
        margin="normal"
        name="zipCode"
        onChange={handleChange}
        placeholder="ZIP Code"
        required={true}
      />

      <TextField
        className={classes.formFields}
        id="email"
        margin="normal"
        name="email"
        onChange={handleChange}
        placeholder="Email"
        required={true}
      />

      <TextField
        className={classes.formFields}
        id="password"
        margin="normal"
        name="password"
        onChange={handleChange}
        placeholder="Password"
        required={true}
        type="password"
      />
      {
        (selectedRole !== 'instructor') ?
          <div className="nabi-margin-top-small">
            <FormControl className={classes.formFields} component="fieldset" required={true}>
              <FormLabel component="legend">Are the lessons for you or for your child?</FormLabel>
              <RadioGroup
                name="role"
                onChange={handleChange}
                value={selectedRole}
              >
                <FormControlLabel control={<Radio />} label="For me" value="student" />
                <FormControlLabel control={<Radio />} label="For my child" value="parent" />
              </RadioGroup>
            </FormControl>
          </div>
      : ''
    }
      
      <FormControl className={classes.formFields}>
        <InputLabel htmlFor="hearAboutUs">How did you hear about us?</InputLabel>
        <Select
          className={classes.formFields}
          input={<Input id="hearAboutUs" name="hearAboutUs" />}
          onChange={handleChange}
          value={hearAboutUs}
        >
          <MenuItem value="google">Google</MenuItem>
          <MenuItem value="facebook">Facebook</MenuItem>
          <MenuItem value="craigslist">Craigslist</MenuItem>
          <MenuItem value="printAds">Print Ads</MenuItem>
          <MenuItem value="wordofmouth">Word of Mouth</MenuItem>
          <MenuItem value="studentReferral">Student Referral</MenuItem>
          <MenuItem value="other">Other</MenuItem>
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

export default withStyles(styles)<RegistrationFormProps>(RegistrationForm);
