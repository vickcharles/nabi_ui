import * as React from 'react';

import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';

interface AgeDisclaimerProps {
  isFormDialogOpen: boolean;
  closeHandler: () => void;
}

const AgeDisclaimer: React.StatelessComponent <AgeDisclaimerProps> = props => {
  return (
    <div>
      <Dialog
        open={props.isFormDialogOpen}
        onClose={props.closeHandler}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">AGE DISCLAIMER NOTICE</DialogTitle>
        <DialogContent>
            <DialogContentText>
              You must be 13 years of age or older to create an account. Please have
              your parent or guardian assist you. For more assistance contact us at
              info@nabimusic.com.
            </DialogContentText>
        </DialogContent>
        <DialogActions>
        <Button variant="raised" onClick={props.closeHandler} color="primary">
          Okay
        </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AgeDisclaimer;
