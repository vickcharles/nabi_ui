import * as React from 'react';
import Typography from 'material-ui/Typography';
import RegistrationForm from './RegistrationForm';

class Registration extends React.Component<{}, {}> {
  public render (): JSX.Element {
    return (
      <div className="nabi-container">
        <Typography className="nabi-page-title">
          REGISTRATION
        </Typography>
        <div className="nabi-background-white nabi-section ">
          <RegistrationForm/>
        </div>
      </div>
    );
  }
}

export default Registration;
