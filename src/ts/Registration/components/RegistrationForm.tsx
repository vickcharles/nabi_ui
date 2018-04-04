import * as React from 'react';
import { FormLabel, FormControlLabel } from 'material-ui/Form';
import Radio, { RadioGroup } from 'material-ui/Radio';
import Typography from 'material-ui/Typography/Typography';

const RegistrationForm = () => {
  return (
    <form className="nabi-general-form nabi-margin-top-medium" noValidate={true} autoComplete="off">
      <FormLabel component="legend">
        <Typography>What would you like to do? *</Typography>
      </FormLabel>
      <RadioGroup
        aria-label="role"
        name="role"
      >
        <FormControlLabel value="student" control={<Radio />} label="Find a music instructor" />
        <FormControlLabel value="instructor" control={<Radio />} label="Find teaching jobs" />
      </RadioGroup>
    </form>
  );
};

export default RegistrationForm;

/* RegistrationForm.propTypes = {
    classes : PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    selectedRole: PropTypes.string.isRequired,
    onSave: PropTypes.func.isRequired,
} */
