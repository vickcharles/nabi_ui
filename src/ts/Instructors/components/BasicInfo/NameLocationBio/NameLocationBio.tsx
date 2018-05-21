import * as React from 'react';

import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import Edit from '@material-ui/icons/Edit';
import IconButton from 'material-ui/IconButton';

import EditName from './EditName';
import { UserState } from '../../../../Users/model';

interface NameLocationBioOwnProps {
  user: UserState;
  bioChange: (event: React.FormEvent<{}>) => void;
  bioBlur: (event: React.FormEvent<{}>) => void;
  displayName: string;
  updateName: (event: React.FormEvent<{}>) => void;
  handleChange: (event: React.FormEvent<{}>) => void;
}
/**
 * Props for NameLocationBio
 * @interface NameLocationBioProps
 */
interface NameLocationBioProps extends
NameLocationBioOwnProps { }

/**
 * State for NameLocationBio
 * @interface NameLocationBioState
 */
interface NameLocationBioState {
  isModalOpenEditName: boolean;
  hovered: boolean;
}

/**
 * Contains name, location and bio section in BasicInfo
 * @class NameLocationBio
 * @extends React.Component<NameLocationBioProps, NameLocationBioState>
 */
export class NameLocationBio extends React.Component<NameLocationBioProps, NameLocationBioState> {
  constructor(props: NameLocationBioProps) {
    super(props);

    this.state = {
      isModalOpenEditName: false,
      hovered: false
    };

    this.closeModal = this.closeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  public closeModal(): void {
    this.setState({ isModalOpenEditName: false });
  }

  public handleSubmit(event: any): void {
    this.props.updateName(event);
    this.closeModal();
  }

  public render(): JSX.Element {
    return (
      <div>
        <div className="nabi-text-center"> 
          <Typography 
            className={`nabi-text-center nabi-text-mediumbold nabi-margin-bottom-xsmall 
            nabi-display-inline-block ${this.highlightedClass()}`}
          >
            {`${this.props.displayName}`}
          </Typography>
         
          <IconButton 
            onClick={() => this.setState({ isModalOpenEditName: true })}
            onMouseOver={this.onMouseOver} 
            onMouseOut={this.onMouseOut}
          >
            <Edit/>
          </IconButton>
        </div>
        
        <Typography className="nabi-text-center">
        {`${this.props.user.city}, ${this.props.user.state} ${this.props.user.zipCode}`}
        </Typography>

        <Typography className="nabi-margin-top-small" variant="body2">
          Bio
        </Typography>

        <TextField
          id="bio"
          margin="normal"
          name="bio"
          onChange={this.props.bioChange}
          onBlur={this.props.bioBlur}
          placeholder="What would you like your students to know  about you?"
          required={true}
          multiline={true}
          fullWidth={true}
          rows={6}
        />

        <Divider className="nabi-margin-top-small"/>

        <EditName 
          firstName={this.props.user.firstName}
          lastName={this.props.user.lastName}
          isFormDialogOpen={this.state.isModalOpenEditName}
          closeHandler={this.closeModal}
          handleChange={this.props.handleChange}
          displayName={this.props.displayName}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default NameLocationBio;
