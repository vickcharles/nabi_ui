import * as React from 'react';
import { UserState } from '../../../Registration/model';
import NameLocationBio from './NameLocationBio';
// import { changeBio } from '../../actions';
// import { Action, Dispatch } from 'redux';
// import { ThunkAction } from 'redux-thunk';
import { connect } from 'react-redux';

interface BasicInfoStateProps {
  users: UserState[];
}

interface BasicInfoOwnProps { 
  user: UserState;
}

interface BasicInfoProps extends
  BasicInfoStateProps,
  BasicInfoOwnProps { }

export class BasicInfo extends React.Component<BasicInfoProps, {}> {
  constructor(props: BasicInfoProps) {
    super(props);

    this.state = {
      bio: ''
    };

    this.handleChangeBio = this.handleChangeBio.bind(this);
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

  public render(): JSX.Element {
    return (
    <NameLocationBio 
      firstName={this.props.user.firstName}
      lastName={this.props.user.lastName}
      zipCode={this.props.user.zipCode}
      changeBio={this.handleChangeBio}
    />
    );
  }
}

function mapStateToProps(state: any, _ownProps: BasicInfoOwnProps): BasicInfoStateProps {
  return {
    users: state.users
  };
}

export default connect(mapStateToProps)(BasicInfo);
