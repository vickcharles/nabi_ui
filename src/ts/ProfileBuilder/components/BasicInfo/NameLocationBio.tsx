import * as React from 'react';
import Typography from 'material-ui/Typography';

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
    </div>
  );
};

export default NameLocationBio;
