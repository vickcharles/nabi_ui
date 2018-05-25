import * as React from 'react';

import TextField from 'material-ui/TextField';
import { FormControl } from 'material-ui/Form';
import Input, { InputLabel } from 'material-ui/Input';
import Select from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu';
import Button from 'material-ui/Button';

import { DegreeType } from '../../model';

/**
 * Props for EducationFields
 * @interface EducationFieldProps
 */
interface EducationFieldProps {

}

/**
 * EducationFields
 * @extends React.StatelessComponent<EducationFieldProps>
 */
const EducationFields: React.StatelessComponent<EducationFieldProps> = props => {
  return (
    <div className="nabi-education">
      <TextField
        fullWidth={true}
        id="schoolName"
        margin="normal"
        name="schoolName"
        placeholder="School name"
        required={true}
      />
      <TextField
        className="graduation-year"
        fullWidth={true}
        id="graduationYear"
        margin="normal"
        name="graduationYear"
        placeholder="Graduation year"
        required={true}
        type="number"
      />
      <TextField
        fullWidth={true}
        id="studyField"
        margin="normal"
        name="studyField"
        placeholder="Field of study (major or concentration)"
        required={true}
      />
       <FormControl>
        <InputLabel htmlFor="degreeType">Degree type</InputLabel>
        <Select
          input={<Input id="degreeType" name="degreeType" />}
          value={DegreeType.professional}
        >
          <MenuItem value={DegreeType.associate}>{DegreeType.associate}</MenuItem>
          <MenuItem value={DegreeType.bachelors}>{DegreeType.bachelors}</MenuItem>
          <MenuItem value={DegreeType.graduate}>{DegreeType.graduate}</MenuItem>
          <MenuItem value={DegreeType.professional}>{DegreeType.professional}</MenuItem>
          <MenuItem value={DegreeType.certification}>{DegreeType.certification}</MenuItem>
          <MenuItem value={DegreeType.other}>{DegreeType.other}</MenuItem>
        </Select>
      </FormControl >
      <Button color="primary" variant="raised" className="nabi-display-block nabi-margin-top-small">
        Add
      </Button>
    </div>
  );
};

export default EducationFields;
