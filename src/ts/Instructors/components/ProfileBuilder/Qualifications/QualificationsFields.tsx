import * as React from 'react';
import Typography from 'material-ui/Typography';
import { FormGroup, FormControlLabel } from 'material-ui/Form';
import Checkbox from 'material-ui/Checkbox';
import Grid from 'material-ui/Grid';

import { qualificationsOptions, QualificationsType } from '../../../model';

interface QualificationsFieldsProps extends  QualificationsType {
  handleChangeQualifications: (event: React.FormEvent<{}>) => void;
}

const QualificationsFields: React.StatelessComponent<QualificationsFieldsProps> = props => {
  const qualificationFields: any = [];

  for (const [key, value] of Object.entries(qualificationsOptions)) {
    qualificationFields.push(
      <FormControlLabel
        key={key}
        control={
          <Checkbox
            name={value.name}
            onChange={props.handleChangeQualifications}
          />
        }
        label={value.label}
      />
    );
  }

  const qualificationFieldsFirstHalf = qualificationFields.slice(0, 5);
  const qualificationFieldsSecondHalf = qualificationFields.slice(5);
  return (
    <div>
      <Typography className="nabi-margin-top-small nabi-margin-bottom-small" variant="body2">
        Additional Qualifications
      </Typography>
      <FormGroup className="nabi-margin-left-small">
        <Grid container={true} spacing={24}>
          <Grid className="qualifications nabi-padding-top-zero nabi-padding-bottom-zero" item={true} xs={12} md={6}>
            {qualificationFieldsFirstHalf}
          </Grid>
          <Grid className="qualifications nabi-padding-top-zero" item={true} xs={12} md={6}>
          {qualificationFieldsSecondHalf}
          </Grid>
        </Grid>
      </FormGroup>
    </div>
  );
};

export default (QualificationsFields);
