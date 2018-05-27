import * as React from 'react';

import TextField from 'material-ui/TextField';
import { FormControl } from 'material-ui/Form';
import Input, { InputLabel } from 'material-ui/Input';
import Select from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';

import { DegreeType, EducationType } from '../../model';

/**
 * Props for EducationFields
 * @interface EducationFieldProps
 */
interface EducationFieldProps extends EducationType {
  handleChange: (event: React.FormEvent<{}>) => void;
  addEducation: (event: React.FormEvent<{}>) => void;
}

/**
 * EducationFields
 * @extends React.StatelessComponent<EducationFieldProps>
 */
const EducationFields: React.StatelessComponent<EducationFieldProps> = props => {
  return (
    <div>
      <div className="nabi-education">
        <TextField
          onChange={props.handleChange}
          fullWidth={true}
          id="schoolName"
          margin="normal"
          name="schoolName"
          placeholder="School name"
          required={true}
          value={props.schoolName}
        />
        <TextField
          onChange={props.handleChange}
          className="graduation-year"
          fullWidth={true}
          id="graduationYear"
          margin="normal"
          name="graduationYear"
          placeholder="Graduation year"
          required={true}
          value={props.graduationYear}
        />
        <TextField
          onChange={props.handleChange}
          fullWidth={true}
          id="fieldOfStudy"
          margin="normal"
          name="fieldOfStudy"
          placeholder="Field of study (major or concentration)"
          required={true}
          value={props.fieldOfStudy}
        />
        <FormControl>
          <InputLabel htmlFor="degreeType">Degree type</InputLabel>
          <Select
            input={<Input id="degreeType" name="degreeType" />}
            value={props.degreeType}
            onChange={props.handleChange}
          >
            <MenuItem value={DegreeType.associate}>{DegreeType.associate}</MenuItem>
            <MenuItem value={DegreeType.bachelors}>{DegreeType.bachelors}</MenuItem>
            <MenuItem value={DegreeType.graduate}>{DegreeType.graduate}</MenuItem>
            <MenuItem value={DegreeType.professional}>{DegreeType.professional}</MenuItem>
            <MenuItem value={DegreeType.certification}>{DegreeType.certification}</MenuItem>
            <MenuItem value={DegreeType.other}>{DegreeType.other}</MenuItem>
          </Select>
        </FormControl>
        <Button 
          color="primary"
          variant="raised"
          className="nabi-display-block nabi-margin-top-small"
          onClick={props.addEducation}
        >
          Add
        </Button>
      </div>
      <Divider className="nabi-margin-top-small"/>
    </div>
  );
};

export default EducationFields;
