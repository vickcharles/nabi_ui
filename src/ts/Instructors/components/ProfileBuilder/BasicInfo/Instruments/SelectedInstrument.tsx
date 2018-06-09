import * as React from 'react';
import {
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

interface SelectedInstrumentProps {
  instrument: string;
  skillLevel: string;
  deleteInstrument: (instrumentName: string) => void;
}

const SelectedInstrument: React.StatelessComponent<SelectedInstrumentProps> = props => {
  const instrumentNameUppercase = props.instrument.charAt(0).toUpperCase() + props.instrument.slice(1);
  
  return (
    <div className="selected-instruments">
      <ListItem>
        <ListItemText
          primary={`- ${instrumentNameUppercase} (${props.skillLevel})`}
        />
        <ListItemSecondaryAction>
          <IconButton aria-label="Delete" onClick={() => props.deleteInstrument(props.instrument)}>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </div>
  );
};

export default SelectedInstrument;
