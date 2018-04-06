import * as React from 'react';
import Typography from 'material-ui/Typography';
import RegistrationForm from './RegistrationForm';

const Registration = () => {
  return (
    <div className="nabi-container">
      <Typography className="nabi-page-title">
        REGISTRATION
      </Typography>
      <RegistrationForm/>
    </div>
  );
};

export default Registration;
