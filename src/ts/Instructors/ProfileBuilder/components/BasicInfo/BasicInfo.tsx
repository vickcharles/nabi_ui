import * as React from 'react';
import { Action, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { connect } from 'react-redux';

import { UserState } from '../../../../Users/model';
import { updateUser } from '../../../../Users';
import { InstructorState } from '../../../model';
import { updateInstructor } from '../../../';
import NameLocationBio from './NameLocationBio/NameLocationBio';
import ImageUploader from './ImageUploader';

interface BasicInfoDispatchProps {
  updateInstructor: (instructor: InstructorState) => void;
  updateUser: (user: UserState) => void;
}

interface BasicInfoOwnProps { 
  user: UserState;
  changeAvatar: (id: string, avatar: string) => void;
}

interface BasicInfoState {
  bio: string;
  displayName: string;
}

interface BasicInfoProps extends
  BasicInfoDispatchProps,
  BasicInfoOwnProps { }

export class BasicInfo extends React.Component<BasicInfoProps, BasicInfoState> {
  constructor(props: BasicInfoProps) {
    super(props);

    this.state = {
      bio: '',
      displayName: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleBlurBio = this.handleBlurBio.bind(this);
    this.updateName = this.updateName.bind(this);
  }

  public componentWillMount(): void {
    this.setState({
      ...this.state,
        displayName: `${this.props.user.firstName} ${this.props.user.lastName}`
    });
  }

  public handleChange(event: any): void {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    
    this.setState({
      ...this.state,
      [name]: value
    });
  }

  public handleBlurBio(event: any): void {
    const instructor: InstructorState =  {
      userId: this.props.user.id,
      bio: this.state.bio
    };
    this.props.updateInstructor(instructor);
  }

  public updateName(event: any): void {
    const user =  {
      ...this.props.user,
      displayName: this.state.displayName
    };
    this.props.updateUser(user);
  }

  public render(): JSX.Element {
    return (
      <div>
        <ImageUploader 
          imageChanged={(avatar: string) => {this.props.changeAvatar(this.props.user.id, avatar); }}
        />
        <NameLocationBio 
          user={this.props.user}
          bioBlur={this.handleBlurBio}
          bioChange={this.handleChange}
          updateName={this.updateName}
          handleChange={this.handleChange}
          displayName={this.state.displayName}
        />
      </div>
    );
  }
}

function mapDispatchToProps(
  dispatch: Dispatch<Action | ThunkAction<{}, {}, {}>>,
  _ownProps: BasicInfoOwnProps
): BasicInfoDispatchProps {
  return {
    updateInstructor: (instructor: InstructorState) => dispatch(updateInstructor(instructor)),
    updateUser: (user: UserState) => dispatch(updateUser(user))
  };
}

export default connect(null, mapDispatchToProps)(BasicInfo);
