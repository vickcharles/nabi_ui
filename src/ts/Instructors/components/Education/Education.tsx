import * as React from 'react';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
// import { LessonDuration, RatesState } from '../../model';

import EducationFields from './EducationFields';

interface EducationProps {

}

const Education: React.StatelessComponent<EducationProps> = props => {
  return (
    <div>
     <Typography className="nabi-margin-top-small" variant="body2">
        Education
      </Typography>
      <EducationFields />
      <Divider className="nabi-margin-top-small"/>
    </div>
  );
};

export default Education;
