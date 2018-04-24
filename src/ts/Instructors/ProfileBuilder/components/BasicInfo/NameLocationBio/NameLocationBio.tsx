import * as React from 'react';

import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import Edit from '@material-ui/icons/Edit';
import IconButton from 'material-ui/IconButton';
import EditName from './EditName';

interface NameLocationBioProps {
  firstName: string;
  lastName: string;
  zipCode: string;
  changeBio: (event: React.FormEvent<{}>) => void;
  blurBio: (event: React.FormEvent<{}>) => void;
}

interface NameLocationBioState {
  isModalOpenEditName: boolean;
  hovered: boolean;
}

export class NameLocationBio extends React.Component<NameLocationBioProps, NameLocationBioState> {
  constructor(props: NameLocationBioProps) {
    super(props);

    this.state = {
      isModalOpenEditName: false,
      hovered: false
    };
  }

  highlightedClass = () => {
    if (this.state.hovered) {
      return 'nabi-highlighted-text';
    } else {
      return '';
    }
  }

  onMouseOver = () => {
    this.setState({ hovered: true });
  }

  onMouseOut = () => {
    this.setState({ hovered: false });
  }

  public render(): JSX.Element {
    const closeEditName = () => this.setState({ isModalOpenEditName: false });

    return (
      <div>
        <div className="nabi-text-center"> 
          <Typography 
            className={`nabi-text-center nabi-text-mediumbold nabi-margin-bottom-xsmall 
            nabi-display-inline-block ${this.highlightedClass()}`}
          >
            {`${this.props.firstName} ${this.props.lastName}`}
          </Typography>
          <IconButton 
            onClick={() => this.setState({ isModalOpenEditName: true })}
            onMouseOver={this.onMouseOver} 
            onMouseOut={this.onMouseOut}
          >
            <Edit/>
          </IconButton>
        </div>
        
        <Typography className="nabi-text-center nabi-margin-bottom-medium">
          {this.props.zipCode}
        </Typography>

        <Typography className="nabi-margin-top-small" variant="body2">
          Bio *
        </Typography>

        <TextField
          id="bio"
          margin="normal"
          name="bio"
          onChange={this.props.changeBio}
          onBlur={this.props.blurBio}
          placeholder="What would you like your students to know  about you?"
          required={true}
          multiline={true}
          fullWidth={true}
          rows={6}
        />

        <Divider className="nabi-margin-top-small"/>

        <EditName 
          firstName={this.props.firstName}
          lastName={this.props.lastName}
          isFormDialogOpen={this.state.isModalOpenEditName}
          closeHandler={closeEditName}
        />
      </div>
    );
  }
}

export default NameLocationBio;
