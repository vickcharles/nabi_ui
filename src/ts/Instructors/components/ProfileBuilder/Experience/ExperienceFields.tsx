import * as React from 'react';

import TextField from 'material-ui/TextField';
import { FormControl } from 'material-ui/Form';
import Input, { InputLabel } from 'material-ui/Input';
import Select from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';

import { ExperienceType } from '../../../model';
import { months } from '../../../../../assets/data/months';

/**
 * Props for ExperienceFields
 * @interface ExperienceFieldsProps
 */
interface ExperienceFieldsProps extends ExperienceType {
  handleChange: (event: React.FormEvent<{}>) => void;
  addExperience: (event: React.FormEvent<{}>) => void;
}

/**
 * ExperienceFields
 * @extends React.StatelessComponent<ExperienceFieldProps>
 */
const ExperienceFields: React.StatelessComponent<ExperienceFieldsProps> = props => {
  const monthSelectItems = months.map(month => {
    const monthName = month.charAt(0).toUpperCase() + month.slice(1);
    return (
      <MenuItem key={month} value={month}>{monthName}</MenuItem>
    );
  });
  return (
    <div>
      <div className="nabi-experience">
        <TextField
          onChange={props.handleChange}
          fullWidth={true}
          id="employer"
          margin="normal"
          name="employer"
          placeholder="Company/ employer name"
          required={true}
          value={props.employer}
        />
        <TextField
          onChange={props.handleChange}
          className=""
          fullWidth={true}
          id="jobTitle"
          margin="normal"
          name="jobTitle"
          placeholder="Job title"
          required={true}
          value={props.jobTitle}
        />
        <FormControl className="nabi-instruments-select">
          <InputLabel htmlFor="fromMonth">From</InputLabel>
          <Select
            input={<Input id="fromMonth" name="fromMonth" />}
            value={props.fromMonth}
            onChange={props.handleChange}
          >
            {monthSelectItems}
          </Select>
        </FormControl>
        <TextField
          onChange={props.handleChange}
          id="fromYear"
          margin="normal"
          name="fromYear"
          placeholder="Year"
          required={true}
          value={props.fromYear}
        />
        <FormControl className="nabi-instruments-select">
          <InputLabel htmlFor="toMonth">To</InputLabel>
          <Select
            input={<Input id="toMonth" name="toMonth" />}
            value={props.toMonth}
            onChange={props.handleChange}
          >
            {monthSelectItems}
          </Select>
        </FormControl>
        <TextField
          onChange={props.handleChange}
          id="toYear"
          margin="normal"
          name="toYear"
          placeholder="Year"
          required={true}
          value={props.toYear}
        />
        <TextField
          onChange={props.handleChange}
          fullWidth={true}
          id="location"
          margin="normal"
          name="location"
          placeholder="Job location"
          required={true}
          value={props.location}
        />
        <Button 
          color="primary"
          variant="raised"
          className="nabi-display-block nabi-margin-top-small"
          onClick={props.addExperience}
        >
          Add
        </Button>
      </div>
      <Divider className="nabi-margin-top-small"/>
    </div>
  );
};

export default ExperienceFields;
