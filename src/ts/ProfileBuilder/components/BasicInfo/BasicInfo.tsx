import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { UserState } from '../../../Registration/model';
import { InstructorState } from '../../model';
import { updateInstructor } from '../../actions';
import NameLocationBio from './NameLocationBio';
import ImageUploader from './ImageUploader';

interface BasicInfoStateProps {
  dispatch: Dispatch<{}>;
}

interface BasicInfoState {
  bio: string;
}

interface BasicInfoOwnProps { 
  user: UserState;
  changeAvatar: (id: string, avatar: string) => void;
}

interface BasicInfoProps extends
  BasicInfoStateProps,
  BasicInfoOwnProps { }

export class BasicInfo extends React.Component<BasicInfoProps, BasicInfoState> {
  constructor(props: BasicInfoProps) {
    super(props);

    this.state = {
      bio: ''
    };

    this.handleChangeBio = this.handleChangeBio.bind(this);
    this.handleBlurBio = this.handleBlurBio.bind(this);
  }

  public handleChangeBio(event: any): void {
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
    this.props.dispatch(updateInstructor(instructor));
  }

  public render(): JSX.Element {
    return (
      <div>
        <ImageUploader 
          imageChanged={(avatar: string) => {this.props.changeAvatar(this.props.user.id, avatar); }}
        />
        <NameLocationBio 
          firstName={this.props.user.firstName}
          lastName={this.props.user.lastName}
          zipCode={this.props.user.zipCode}
          changeBio={this.handleChangeBio}
          blurBio={this.handleBlurBio}
        />
      </div>
    );
  }
}

export default connect()(BasicInfo);
