import * as React from 'react';
import Typography from 'material-ui/Typography';

interface NameAndLocationProps {
    firstName: string;
    zipCode: string;
  }

const NameAndLocation: React.StatelessComponent<NameAndLocationProps> = props => {
    return (
        <Typography className="">
            {props.firstName}
            {props.zipCode}
        </Typography>
    );
};

export default NameAndLocation;
