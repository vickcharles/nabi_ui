import * as React from 'react';
import Typography from 'material-ui/Typography';

interface NameAndLocationProps {
    firstName: string;
    zipCode: string;
  }

const NameAndLocation: React.StatelessComponent<NameAndLocationProps> = props => {
    return (
        <Typography variant="title" className="nabi-margin-top-medium nabi-margin-bottom-medium">
            {props.firstName}
            {props.zipCode}
        </Typography>
    );
};

export default NameAndLocation;
