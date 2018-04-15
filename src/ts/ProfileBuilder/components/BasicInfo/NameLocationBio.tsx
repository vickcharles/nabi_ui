import * as React from 'react';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';

interface NameLocationBioProps {
    firstName: string;
    lastName: string;
    zipCode: string;
  }

const NameLocationBio: React.StatelessComponent<NameLocationBioProps> = props => {
  return (
    <div>
      <Typography className="nabi-text-center nabi-text-mediumbold nabi-margin-bottom-xsmall">
        {`${props.firstName} ${props.lastName}`}
      </Typography>
      <Typography className="nabi-text-center nabi-margin-bottom-medium">
        {props.zipCode}
      </Typography>
      <TextField
        id="bio"
        margin="normal"
        name="bio"
        label="Bio"
        InputLabelProps={{
          shrink: true,
        }}
        // TODO: add onChange
        // onChange={handleChange}
        placeholder="Bio"
        required={true}
        multiline={true}
        fullWidth={true}
        rows={9}
      />
    </div>
  );
};

export default NameLocationBio;
