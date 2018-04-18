import * as React from 'react';
import { UserState } from '../../../Registration/model';
import NameLocationBio from './NameLocationBio';
import { changeBio } from '../../actions';
import { Action, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { connect } from 'react-redux';

interface BasicInfoStateProps {
}

interface BasicInfoDispatchProps {
  changeBio: (id: string, bio: string) => void;
}

interface BasicInfoOwnProps { 
  user: UserState;
}

interface BasicInfoProps extends
  BasicInfoStateProps,
  BasicInfoDispatchProps,
  BasicInfoOwnProps { }

export class BasicInfo extends React.Component<BasicInfoProps, {}> {
  constructor(props: BasicInfoProps) {
    super(props);

    this.handleChangeBio = this.handleChangeBio.bind(this);
  }

  public handleChangeBio(event: React.ChangeEvent<HTMLSelectElement>): void {
    this.props.changeBio(event.target.value, 'f=h');
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
    user: state.user
  };
}

function mapDispatchToProps(
  dispatch: Dispatch<Action | ThunkAction<{}, {}, {}>>,
  _ownProps: BasicInfoOwnProps
): BasicInfoDispatchProps {
  return {
    changeBio: (id: string, bio: string) => dispatch(changeBio(id, bio))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BasicInfo);
