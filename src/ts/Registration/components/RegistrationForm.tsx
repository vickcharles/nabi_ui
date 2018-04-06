import * as React from 'react';
import { FormLabel, FormControl, FormControlLabel } from 'material-ui/Form';
import Radio, { RadioGroup } from 'material-ui/Radio';
import TextField from 'material-ui/TextField';
import { Theme, withStyles, WithStyles } from 'material-ui/styles';

const styles = (theme: Theme) => ({
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: '100%'
    }
});

interface Props {

}

type PropsWithStyles = Props & WithStyles<'textField'>;

const RegistrationForm: React.StatelessComponent<PropsWithStyles> = props => {
  const { classes } = props;
  
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
        className={classes.textField}
      />

      <TextField
        required={true}
        id="lastName"
        label="Last Name"
        margin="normal"
        name="lastName"
        className={classes.textField}
      />

      <TextField
        required={true}
        id="zipCode"
        label="ZIP Code"
        margin="normal"
        name="zipCode"
        className={classes.textField}
      />

      <TextField
        required={true}
        id="email"
        label="Email"
        margin="normal"
        name="email"
        className={classes.textField}
      />

      <TextField
        required={true}
        id="password"
        label="Password"
        margin="normal"
        name="password"
        className={classes.textField}
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
    </form>
  );
};

export default withStyles(styles)<Props>(RegistrationForm);

// TODO: ADD SELECT FIELD 
/* 
TODO: ADD PROPTYPES 
RegistrationForm.propTypes = {
  classes : PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  selectedRole: PropTypes.string.isRequired,
  onSave: PropTypes.func.isRequired
} */
