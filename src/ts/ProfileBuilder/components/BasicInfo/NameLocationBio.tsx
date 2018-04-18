import * as React from 'react';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';

interface NameLocationBioProps {
    firstName: string;
    lastName: string;
    zipCode: string;
    changeBio: (event: React.FormEvent<{}>) => void;
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

      <Typography className="nabi-margin-top-small" variant="body2">
        Bio *
      </Typography>

      <TextField
        id="bio"
        margin="normal"
        name="bio"
        onChange={props.changeBio}
        placeholder="What would you like your students to know  about you?"
        required={true}
        multiline={true}
        fullWidth={true}
        rows={6}
      />

      <Divider className="nabi-margin-top-small"/>
    </div>
  );
};

export default NameLocationBio;
