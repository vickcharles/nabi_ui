import * as React from 'react';

import Typography from 'material-ui/Typography/Typography';
/**
 * RequestForm component
 */
const RequestForm = () => {
    return (
      <form
        className="nabi-general-form nabi-margin-top-medium"
        noValidate={true}
        autoComplete="off"
      >
      <Typography className="nabi-margin-top-small" variant="body2">
        Register as an instructor
      </Typography>
      </form>
    );
  };
export default RequestForm;