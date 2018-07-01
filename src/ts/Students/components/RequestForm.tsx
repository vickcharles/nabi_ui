import * as React from 'react';

import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography/Typography';
import { FormControl } from 'material-ui/Form';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import Button from 'material-ui/Button';
import Select from 'material-ui/Select';
import { instruments } from '../../../assets/data/instruments';
import { SkillLevel } from '../../Instructors/model';
import { PlaceForLessons } from '../../Instructors/model';
import { LessonDuration } from '../../Instructors/model';

/**
 * RequestForm component
 */
const RequestForm = () => {
  const instumentSelectItems = instruments.map(instrument => {
    const instrumentName = instrument.charAt(0).toUpperCase() + instrument.slice(1);
    return (
      <MenuItem key={instrument} value={instrument}>{instrumentName}</MenuItem>
    );
  });
  return (
      <form
        className="nabi-general-form nabi-margin-top-medium"
        noValidate={true}
        autoComplete="off"
      >
      <div className="request">
      <Typography className="nabi-margin-top-small  typography" variant="body2">
        Instrument
      </Typography>

      <FormControl className="nabi-instruments-select instrument">
        <InputLabel htmlFor="instrument"> Select instrument</InputLabel>
        <Select
          input={<Input id="instrument" name="instrument" />}
          value={''}
        >
          {instumentSelectItems}
        </Select>
      </FormControl>
      </div>
      <div className="request">
      <Typography className="nabi-margin-top-small typography" variant="body2">
        Skill level
      </Typography>

      <FormControl className="nabi-instruments-select skill-level">
      <InputLabel htmlFor="Beginner"> Beginner</InputLabel>
        <Select
          input={<Input id="skillLevel" name="skillLevel" />}
          value={''}
        >
          <MenuItem value={SkillLevel.beginner}>{SkillLevel.beginner}</MenuItem>
          <MenuItem value={SkillLevel.intermediate}>{SkillLevel.intermediate}</MenuItem>
          <MenuItem value={SkillLevel.advanced}>{SkillLevel.advanced}</MenuItem>
        </Select>
      </FormControl>
      <div className="request">
      <Typography className="nabi-margin-top-small typography" variant="body2">
        Place for lessson
      </Typography>

      <FormControl className="nabi-instruments-select">
      <InputLabel htmlFor="Placeforlessson">{PlaceForLessons.home}</InputLabel>
        <Select
          input={<Input id="Placeforlessson" name="Placeforlessson" />}
          value={''}
        >
          <MenuItem value={PlaceForLessons.home}>{PlaceForLessons.home}</MenuItem>
          <MenuItem value={PlaceForLessons.studio}>{PlaceForLessons.studio}</MenuItem>
          <MenuItem value={PlaceForLessons.online}>{PlaceForLessons.online}</MenuItem>
        </Select>
        </FormControl>
       </div>
       <div className="request">
      <Typography className="nabi-margin-top-small typography" variant="body2">
        lessson duration
      </Typography>

      <FormControl className="nabi-instruments-select">
       <InputLabel htmlFor="lesssonduration">{LessonDuration.fortyFiveMins}</InputLabel>
        <Select
          input={<Input id="lesssonDuration" name="lesssonDuration" />}
          value={''}
        >
          <MenuItem value={LessonDuration.thirtyMins}>{LessonDuration.thirtyMins}</MenuItem>
          <MenuItem value={LessonDuration.fortyFiveMins}>{LessonDuration.fortyFiveMins}</MenuItem>
          <MenuItem value={LessonDuration.sixtyMins}>{LessonDuration.sixtyMins}</MenuItem>
          <MenuItem value={LessonDuration.ninetyMins}>{LessonDuration.ninetyMins}</MenuItem>
        </Select>
      </FormControl>
        <Typography className="nabi-margin-top-large" variant="body2">
        Request title
        </Typography>
      <TextField
          fullWidth={true}
          id="request title"
          margin="normal"
          name="request title"
          placeholder="Request title. Example: &quot;piano teacher needed&quot;"
          required={true}
          value={''}
      />
        <Typography className="nabi-margin-top-small" variant="body2">
          Request message
        </Typography>
        <TextField
          id="request message"
          margin="normal"
          name="request message"
          placeholder="What else would you like candidates to know?"
          required={true}
          multiline={true}
          fullWidth={true}
          rows={6}
        />
       </div>
       </div>
        <Button color="primary" variant="raised" className="nabi-send-request">
          SEND REQUEST
        </Button>
      </form>
    );
  };
export default RequestForm;
