import * as React from 'react';

import { FormControl } from 'material-ui/Form';
import Input, { InputLabel } from 'material-ui/Input';
import Select from 'material-ui/Select';
import Button from 'material-ui/Button';
import { MenuItem } from 'material-ui/Menu';
import Divider from 'material-ui/Divider';

import { instruments } from '../../../../../assets/data/instruments';
import { SkillLevel } from '../../../model';

interface InstrumentsProps {
  instrument: string;
  skillLevel: string;
  handleChange: (event: React.FormEvent<{}>) => void;
  addInstrument: (event: React.FormEvent<{}>) => void;
}

const Instruments: React.StatelessComponent<InstrumentsProps> = props => {
  const instumentSelectItems = instruments.map(instrument => {
    const instrumentName = instrument.charAt(0).toUpperCase() + instrument.slice(1);
    return (
      <MenuItem key={instrument} value={instrument}>{instrumentName}</MenuItem>
    );
  });
  
  return (
    <div className="nabi-instruments">
      <FormControl className="nabi-instruments-select">
        <InputLabel htmlFor="instrument">Select instrument</InputLabel>
        <Select
          input={<Input id="instrument" name="instrument" />}
          value={props.instrument}
          onChange={props.handleChange}
        >
          {instumentSelectItems}
        </Select>
      </FormControl>
      <FormControl className="nabi-instruments-select">
        <InputLabel htmlFor="skillLevel">Skill level</InputLabel>
        <Select
          input={<Input id="skillLevel" name="skillLevel" />}
          value={props.skillLevel}
          onChange={props.handleChange}
        >
          <MenuItem value={SkillLevel.beginner}>{SkillLevel.beginner}</MenuItem>
          <MenuItem value={SkillLevel.intermediate}>{SkillLevel.intermediate}</MenuItem>
          <MenuItem value={SkillLevel.advanced}>{SkillLevel.advanced}</MenuItem>
        </Select>
      </FormControl >
      <Button color="primary" variant="raised" className="nabi-instruments-add" onClick={props.addInstrument}>
        Add
      </Button>
       <Divider className="nabi-margin-top-small"/>
    </div>
  );
};

export default Instruments;
