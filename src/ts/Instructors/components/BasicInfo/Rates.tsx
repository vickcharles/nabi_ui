import * as React from 'react';
import {
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from 'material-ui/List';
import MoneyIcon from '@material-ui/icons/AttachMoney';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';

interface RatesProps {
  handleChange: (event: React.FormEvent<{}>) => void;
}

const Rates: React.StatelessComponent<RatesProps> = props => {
  return (
    <div>
     <Typography className="nabi-margin-top-small" variant="body2">
        Rates
      </Typography>

      <div className="rates">
        <ListItem className="nabi-margin-bottom-small">
          <ListItemText
            primary={`- 30 mins lesson`}
          />
          <ListItemSecondaryAction>
            <MoneyIcon color="primary"/>
            <TextField
              fullWidth={true}
              id="firstName"
              name="firstName"
              onChange={props.handleChange}
              required={true}
              className="nabi-rates-field"
            />
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem className="nabi-margin-bottom-small">
          <ListItemText
            primary={`- 45 mins lesson`}
          />
          <ListItemSecondaryAction>
            <MoneyIcon color="primary"/>
            <TextField
              fullWidth={true}
              id="firstName"
              name="firstName"
              onChange={props.handleChange}
              required={true}
              className="nabi-rates-field"
            />
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem className="nabi-margin-bottom-small">
          <ListItemText
            primary={`- 60 mins lesson`}
          />
          <ListItemSecondaryAction>
            <MoneyIcon color="primary"/>
            <TextField
              fullWidth={true}
              id="firstName"
              name="firstName"
              onChange={props.handleChange}
              required={true}
              className="nabi-rates-field"
            />
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem className="nabi-margin-bottom-small">
          <ListItemText
            primary={`- 90 mins lesson`}
          />
          <ListItemSecondaryAction>
            <MoneyIcon color="primary"/>
            <TextField
              fullWidth={true}
              id="firstName"
              name="firstName"
              onChange={props.handleChange}
              required={true}
              className="nabi-rates-field"
            />
          </ListItemSecondaryAction>
        </ListItem>
      </div>
      <Divider className="nabi-margin-top-small"/>
    </div>
  );
};

export default Rates;
