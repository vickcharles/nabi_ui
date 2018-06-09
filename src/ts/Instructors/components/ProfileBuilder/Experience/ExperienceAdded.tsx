import * as React from 'react';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from 'material-ui/Typography';
import { ExperienceType }  from '../../../model';
import Divider from 'material-ui/Divider';

/**
 * Props for ExperienceAdded
 * @interface ExperienceAddedProps
 */
interface ExperienceAddedProps extends ExperienceType {
  deleteExperience: (experienceId: any) => void;
}

/**
 * ExperienceAdded
 * @extends React.StatelessComponent<ExperienceAddedProps>
 */
const ExperienceAdded: React.StatelessComponent<ExperienceAddedProps> = props => {
  const fromMonth = props.fromMonth.charAt(0).toUpperCase() + props.fromMonth.slice(1);
  const toMonth = props.toMonth.charAt(0).toUpperCase() + props.toMonth.slice(1);
  return (
    <div>
      <div className="selected-education">
        <IconButton className="nabi-float-right" aria-label="Delete" onClick={() => props.deleteExperience(props.id)}>
          <DeleteIcon />
        </IconButton>
        <Typography className="nabi-margin-top-small" variant="body2">{props.jobTitle.toUpperCase()}</Typography>
        <Typography className="">{props.employer}</Typography>
        <Typography className="">{`${fromMonth}, ${props.fromYear} - ${toMonth}, ${props.toYear}`}</Typography>
        <Typography className="">
          {props.location}
        </Typography>
      </div>
      <Divider className="nabi-margin-top-small"/>
    </div>
  );
};

export default ExperienceAdded;
