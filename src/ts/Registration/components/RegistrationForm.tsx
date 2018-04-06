import * as React from 'react';
import { FormLabel, FormControl, FormControlLabel } from 'material-ui/Form';
import Button from 'material-ui/Button';
import { MenuItem } from 'material-ui/Menu';
import Input, { InputLabel } from 'material-ui/Input';
import Radio, { RadioGroup } from 'material-ui/Radio';
import Select from 'material-ui/Select';
import TextField from 'material-ui/TextField';
import { Theme, withStyles, WithStyles } from 'material-ui/styles';

const styles = (theme: Theme) => ({
    formFields: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: '100%'
    }
});

interface Props {

}

type PropsWithStyles = Props & WithStyles<'formFields'>;

const RegistrationForm: React.StatelessComponent<PropsWithStyles> = props => {
  const { classes } = props;
  
  return (
    <form 
      className="nabi-general-form nabi-margin-top-medium" 
      noValidate={true} 
      autoComplete="off"
    >
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
        placeholder="First Name"
        margin="normal"
        name="firstName"
        className={classes.formFields}
      />

      <TextField
        required={true}
        id="lastName"
        placeholder="Last Name"
        margin="normal"
        name="lastName"
        className={classes.formFields}
      />

      <TextField
        required={true}
        id="zipCode"
        placeholder="ZIP Code"
        margin="normal"
        name="zipCode"
        className={classes.formFields}
      />

      <TextField
        required={true}
        id="email"
        placeholder="Email"
        margin="normal"
        name="email"
        className={classes.formFields}
      />

      <TextField
        required={true}
        id="password"
        placeholder="Password"
        margin="normal"
        name="password"
        className={classes.formFields}
        type="password"
      />

      <FormControl component="fieldset" required={true} className={classes.formFields}>
        <FormLabel component="legend">Are the lessons for you or for your child?</FormLabel>
        <RadioGroup
          aria-label="role"
          name="role"
        >
          <FormControlLabel value="student" control={<Radio />} label="For me" />
          <FormControlLabel value="parent" control={<Radio />} label="For my child" />
        </RadioGroup>
      </FormControl>
      
      <FormControl className={classes.formFields}>
          <InputLabel htmlFor="hear-about-us">How did you hear about us?</InputLabel>
          <Select
            value=""
            input={<Input name="hear-about-us" id="hear-about-us" />}
            className={classes.formFields}
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
          <Button variant="raised" color="primary">
              Submit
          </Button>
        </div>
    </form>
  );
};

export default withStyles(styles)<Props>(RegistrationForm);
