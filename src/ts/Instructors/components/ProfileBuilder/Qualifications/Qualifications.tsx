import * as React from 'react';
import { Action, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { connect } from 'react-redux';

import { UserState } from '../../../../Users/model';
import { updateUser } from '../../../../Users';
import { InstructorType, QualificationsType } from '../../../model';
import { updateInstructor } from '../../../';
import QualificationsFields from './QualificationsFields';

/**
 * Qualifications dispatch props
 * @interface QualificationsDispatchProps
 */
interface QualificationsDispatchProps {
  updateInstructor: (instructor: InstructorType) => void;
  updateUser: (user: UserState) => void;
}

/**
 * Qualifications's own props
 * @interface QualificationsOwnProps
 */
interface QualificationsOwnProps {
  userId: string;
}

/**
 * State for Qualifications
 * @interface QualificationsState
 * @extends QualificationsType
 */
interface QualificationsState extends QualificationsType {}

/**
 * Props for Qualifications
 * @interface QualificationsProps
 * @extends QualificationsDispatchProps & QualificationsOwnProps
 */
interface QualificationsProps extends
  QualificationsDispatchProps,
  QualificationsOwnProps { }

/**
 * Qualifications: Fourth step of the Profile Builder
 * @class Qualifications
 * @extends React.Component<QualificationsProps, QualificationsState>
 */
export class Qualifications extends React.Component<QualificationsProps, QualificationsState> {
  constructor(props: QualificationsProps) {
    super(props);

    this.state = {
      add: false,
      aspergerSyndrome: false,
      autism: false,
      depression: false,
      diabetes: false,
      downSyndrome: false,
      epilepsy: false,
      musicTherapy: false,
      ocd: false,
      visualImpairment: false,
    };

    this.handleChangeQualifications = this.handleChangeQualifications.bind(this);
  }

  public updateInstructorCall(instructor: InstructorType): void {
    this.props.updateInstructor(instructor);
  }

  public handleChangeQualifications(event: any): void {
    const target = event.target;
    const name = target.name;

    if (target.checked) {
      this.setState({ [name]: true }, () => {
        const qualifications = {
          add: this.state.add,
          aspergerSyndrome: this.state.aspergerSyndrome,
          autism: this.state.autism,
          depression: this.state.depression,
          diabetes: this.state.diabetes,
          downSyndrome: this.state.downSyndrome,
          epilepsy: this.state.epilepsy,
          musicTherapy: this.state.musicTherapy,
          ocd: this.state.ocd,
          visualImpairment: this.state.visualImpairment
        };

        const instructor: InstructorType =  {
          userId: this.props.userId,
          qualifications: qualifications
        };
        this.updateInstructorCall(instructor);
      });
    } else {
      this.setState({ [name]: false }, () => {
        const qualifications = {
          add: this.state.add,
          aspergerSyndrome: this.state.aspergerSyndrome,
          autism: this.state.autism,
          depression: this.state.depression,
          diabetes: this.state.diabetes,
          downSyndrome: this.state.downSyndrome,
          epilepsy: this.state.epilepsy,
          musicTherapy: this.state.musicTherapy,
          ocd: this.state.ocd,
          visualImpairment: this.state.visualImpairment
        };

        const instructor: InstructorType =  {
          userId: this.props.userId,
          qualifications: qualifications,
        };
        this.updateInstructorCall(instructor);
      });
    }
  }

  public render(): JSX.Element {
    return (
      <div>
        <QualificationsFields
          handleChangeQualifications={this.handleChangeQualifications}
          add={this.state.add}
          aspergerSyndrome={this.state.aspergerSyndrome}
          autism={this.state.autism}
          depression={this.state.depression}
          diabetes={this.state.diabetes}
          downSyndrome={this.state.downSyndrome}
          epilepsy={this.state.epilepsy}
          musicTherapy={this.state.musicTherapy}
          ocd={this.state.ocd}
          visualImpairment={this.state.visualImpairment}
        />
      </div>
    );
  }
}

function mapDispatchToProps(
  dispatch: Dispatch<Action | ThunkAction<{}, {}, {}>>,
  _ownProps: QualificationsOwnProps
): QualificationsDispatchProps {
  return {
    updateInstructor: (instructor: InstructorType) => dispatch(updateInstructor(instructor)),
    updateUser: (user: UserState) => dispatch(updateUser(user))
  };
}

export default connect(null, mapDispatchToProps)(Qualifications);
