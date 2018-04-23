import * as React from 'react';

import Button from 'material-ui/Button';
import { FormControl, FormControlLabel } from 'material-ui/Form';
import Radio, { RadioGroup } from 'material-ui/Radio';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';

interface EditNameProps {
  firstName: string;
  lastName: string;
  isFormDialogOpen: boolean;
  closeHandler: () => void;
}
const EditName: React.StatelessComponent<EditNameProps> = props => {
  const lastNameinitial = props.lastName.charAt(0);

  return (
    <div>
      <Dialog
        open={props.isFormDialogOpen}
        onClose={props.closeHandler}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Edit Name</DialogTitle>
        <DialogContent>
          <DialogContentText className="nabi-margin-bottom-small">
            Choose display name
          </DialogContentText>
          <FormControl component="fieldset" required={true}>
          <RadioGroup
            name="displayName"
            value=""
          >
            <FormControlLabel 
              className="nabi-margin-bottom-xsmall"
              value="" 
              control={<Radio />} 
              label={`Show my full name: ${props.firstName} ${props.lastName}`} 
            />
            <FormControlLabel 
              value="" 
              control={<Radio />} 
              label={`Show only my first name and last initial: ${props.firstName} ${lastNameinitial}.`}
            />
          </RadioGroup>
        </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.closeHandler} color="default">
            Close
          </Button>
          <Button variant="raised" onClick={props.closeHandler} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EditName;
