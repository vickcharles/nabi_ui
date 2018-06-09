import * as React from 'react';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from 'material-ui/Typography';
import { EducationType }  from '../../../model';
import Divider from 'material-ui/Divider';

/**
 * Props for EducationAdded
 * @interface EducationAddedProps
 */
interface EducationAddedProps extends EducationType {
  deleteEducation: (educationId: any) => void;
}

/**
 * EducationAdded
 * @extends React.StatelessComponent<EducationAddedProps>
 */
const EducationAdded: React.StatelessComponent<EducationAddedProps> = props => {
  return (
    <div>
      <div className="selected-education">
        <IconButton className="nabi-float-right" aria-label="Delete" onClick={() => props.deleteEducation(props.id)}>
          <DeleteIcon />
        </IconButton>
        <Typography className="nabi-margin-top-small" variant="body2">
          {props.schoolName.toUpperCase()}
        </Typography>
        <Typography className="nabi-margin-top-small">
          {`${props.degreeType}, ${props.fieldOfStudy}`}
        </Typography>
        <Typography className="nabi-margin-top-small">
          {props.graduationYear}
        </Typography>
      </div>
      <Divider className="nabi-margin-top-small"/>
    </div>
  );
};

export default EducationAdded;
