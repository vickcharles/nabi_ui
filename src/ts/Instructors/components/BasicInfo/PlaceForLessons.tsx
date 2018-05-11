import * as React from 'react';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import { FormGroup, FormControlLabel } from 'material-ui/Form';
import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';

import { PlaceForLessonsOptions } from '../../model';

const PlaceForLessons: React.StatelessComponent<{}> = props => {

  return (
    <div>
      <Typography className="nabi-margin-top-small nabi-margin-bottom-xsmall" variant="body2">
        Place for lessons
      </Typography>
      <FormGroup className="nabi-margin-left-small">
        <FormControlLabel
          control={
            <Checkbox
              // checked={this.state.gilad}
              // onChange={this.handleChange('gilad')}
              value=""
            />
          }
          label={PlaceForLessonsOptions.home}
        />
        <FormControlLabel
          control={
            <Checkbox
              // checked={this.state.jason}
              // onChange={this.handleChange('jason')}
              value=""
            />
          }
          label={PlaceForLessonsOptions.studio}
        />
        <FormControlLabel
          control={
            <Checkbox
              // checked={this.state.antoine}
              // onChange={this.handleChange('antoine')}
              value=""
            />
          }
          label={PlaceForLessonsOptions.online}
        />
      </FormGroup>
      <TextField
        fullWidth={true}
        // id={list.name}
        // name={list.name}
        // onChange={props.handleChange}
        required={true}
        className="nabi-margin-top-xsmall"
        placeholder="Enter your studio address"
        type="number"
        // onBlur={props.updateRates}
      />
      <Divider className="nabi-margin-top-small"/>
    </div>
  );
};

export default (PlaceForLessons);
