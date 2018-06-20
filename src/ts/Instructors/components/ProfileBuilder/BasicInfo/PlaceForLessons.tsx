import * as React from 'react';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import { FormGroup, FormControlLabel } from 'material-ui/Form';
import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';

import { placeForLessonsOptions } from '../../../model';

interface PlaceForLessonsProps {
  handleChange: (event: React.FormEvent<{}>) => void;
  handleChangePlaceForLessons: (event: React.FormEvent<{}>) => void;
  home: boolean;
  studio: boolean;
  online: boolean;
  studioAddress: string;
  updateStudioAddress: (event: React.FormEvent<{}>) => void;
}

const PlaceForLessons: React.StatelessComponent<PlaceForLessonsProps> = props => {
  const studioAddressTextfield = props.studio && (
    <TextField
      fullWidth={true}
      name="studioAddress"
      onChange={props.handleChange}
      required={true}
      className="nabi-margin-top-xsmall"
      placeholder="Enter your studio address"
      onBlur={props.updateStudioAddress}
    />
  );

  return (
    <div>
      <Typography className="nabi-margin-top-small nabi-margin-bottom-xsmall" variant="body2">
        Place for lessons
      </Typography>
      <FormGroup className="nabi-margin-left-small">
        <FormControlLabel
          control={
            <Checkbox
              name={placeForLessonsOptions.Home.name}
              checked={props.home}
              onChange={props.handleChangePlaceForLessons}
            />
          }
          label={placeForLessonsOptions.Home.label}
        />
        <FormControlLabel
          control={
            <Checkbox
              name={placeForLessonsOptions.Studio.name}
              checked={props.studio}
              onChange={props.handleChangePlaceForLessons}
            />
          }
          label={placeForLessonsOptions.Studio.label}
        />
        <FormControlLabel
          control={
            <Checkbox
              name={placeForLessonsOptions.Online.name}
              checked={props.online}
              onChange={props.handleChangePlaceForLessons}
            />
          }
          label={placeForLessonsOptions.Online.label}
        />
      </FormGroup>
      {studioAddressTextfield}
      <Divider className="nabi-margin-top-small"/>
    </div>
  );
};

export default (PlaceForLessons);
