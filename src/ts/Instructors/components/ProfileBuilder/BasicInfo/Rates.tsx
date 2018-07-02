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
import { LessonDuration, RatesType } from '../../../../main/model';

interface RatesProps extends RatesType {
  handleChange: (event: React.FormEvent<{}>) => void;
  updateRates: (event: React.FormEvent<{}>) => void;
}

const Rates: React.StatelessComponent<RatesProps> = props => {
  const ratesListContent = [
    {
      name: 'thirtyMinsRate',
      listText: LessonDuration.thirtyMins,
    },
    {
      name: 'fortyFiveMinsRate',
      listText: LessonDuration.fortyFiveMins
    },
    {
      name: 'sixtyMinsRate',
      listText: LessonDuration.sixtyMins,
    },
    {
      name: 'ninetyMinsRate',
      listText: LessonDuration.ninetyMins,
    }
  ];

  const ratesListItems = ratesListContent.map( (list, i) => {
    return (
      <ListItem key={i} className="nabi-margin-bottom-small">
        <ListItemText
          primary={`- ${list.listText}`}
        />
        <ListItemSecondaryAction>
          <MoneyIcon color="primary"/>
          <TextField
            id={list.name}
            name={list.name}
            onChange={props.handleChange}
            required={true}
            className="nabi-rates-field"
            placeholder="0.00"
            type="number"
            onBlur={props.updateRates}
          />
        </ListItemSecondaryAction>
      </ListItem>
    );
  });

  return (
    <div>
     <Typography className="nabi-margin-top-small" variant="body2">
        Rates for lessons
      </Typography>
      <div className="rates">
        {ratesListItems}
      </div>
      <Divider className="nabi-margin-top-small"/>
    </div>
  );
};

export default Rates;
