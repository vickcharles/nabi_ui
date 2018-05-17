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

/**
 * Props for EditName
 * @interface {EditNameProps}
 */
interface EditNameProps {
  displayName: string;
  firstName: string;
  lastName: string;
  isFormDialogOpen: boolean;
  closeHandler: () => void;
  handleChange: (event: React.FormEvent<{}>) => void;
  handleSubmit: (event: React.FormEvent<{}>) => void;
}

/**
 * Displays a dialog to change the user's displayName
 * @param {EditNameProps} props - The component's props
 */
const EditName: React.StatelessComponent<EditNameProps> = props => {
  const lastNameinitial = props.lastName.charAt(0);
  const fullName = `${props.firstName} ${props.lastName}`;
  const nameAndLasInitial = `${props.firstName} ${lastNameinitial}.`;

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
            value={props.displayName}
            onChange={props.handleChange}
          >
            <FormControlLabel 
              className="nabi-margin-bottom-xsmall"
              value={fullName}
              control={<Radio />} 
              label={`Show my full name: ${fullName}`} 
            />
            <FormControlLabel 
              value={nameAndLasInitial}
              control={<Radio />} 
              label={`Show only my first name and last initial: ${nameAndLasInitial}`}
            />
          </RadioGroup>
        </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.closeHandler} color="default">
            Close
          </Button>
          <Button variant="raised" onClick={props.handleSubmit} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EditName;
