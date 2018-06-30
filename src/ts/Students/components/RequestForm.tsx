import * as React from 'react';

import Typography from 'material-ui/Typography/Typography';
import { FormControl } from 'material-ui/Form';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import Select from 'material-ui/Select';
import { instruments } from '../../../assets/data/instruments';

/**
 * RequestForm component
 */
const RequestForm = () => {
  const instumentSelectItems = instruments.map(instrument => {
    const instrumentName = instrument.charAt(0).toUpperCase() + instrument.slice(1);
    return (
      <MenuItem key={instrument} value={instrument}>{instrumentName}</MenuItem>
    );
  });
  return (
      <form
        className="nabi-general-form nabi-margin-top-medium"
        noValidate={true}
        autoComplete="off"
      >
      <Typography className="nabi-margin-top-small" variant="body2">
        Register as an instructor
      </Typography>

      <FormControl className="nabi-instruments-select">
        <InputLabel htmlFor="instrument"> Select instrument</InputLabel>
        <Select
          input={<Input id="instrument" name="instrument" />}
          value={'hola'}
        >
          {instumentSelectItems}
        </Select>
      </FormControl>
      </form>
    );
  };
export default RequestForm;