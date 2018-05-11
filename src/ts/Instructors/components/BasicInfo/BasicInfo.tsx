import * as React from 'react';
import { Action, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { connect } from 'react-redux';

import Typography from 'material-ui/Typography';

import { UserState } from '../../../Users/model';
import { updateUser } from '../../../Users';
import { InstructorState, InstrumentsType, PlaceForLessonsState, RatesState, SkillLevel } from '../../model';
import { updateInstructor } from '../../';
import NameLocationBio from './NameLocationBio/NameLocationBio';
import ImageUploader from './ImageUploader';
import Instruments from './Instruments/Instruments';
import SelectedInstrument from './Instruments/SelectedInstrument';
import Rates from './Rates';
import PlaceForLessons from './PlaceForLessons';
import Availability from './Availability';

/**
 * BasicInfo dispatch props
 * @interface BasicInfoDispatchProps
 */
interface BasicInfoDispatchProps {
  updateInstructor: (instructor: InstructorState) => void;
  updateUser: (user: UserState) => void;
}

/**
 * BasicInfo's own props
 * @interface BasicInfoOwnProps
 */
interface BasicInfoOwnProps { 
  user: UserState;
  changeAvatar: (id: string, avatar: string) => void;
}

/**
 * State for BasicInfo
 * @interface BasicInfoState
 * @extends RatesState, PlaceForLessonsState
 */
interface BasicInfoState extends RatesState, PlaceForLessonsState {
  bio: string;
  displayName: string;
  instrument: string;
  skillLevel: SkillLevel;
  instruments: InstrumentsType[];
  studioAddress: string;
}

/**
 * Props for BasicInfo
 * @interface BasicInfoProps
 * @extends BasicInfoDispatchProps & BasicInfoOwnProps
 */
interface BasicInfoProps extends
  BasicInfoDispatchProps,
  BasicInfoOwnProps { }

/**
 * BasicInfo: First step on the Profile Builder
 * @class BasicInfo
 * @extends React.Component<BasicInfoProps, BasicInfoState>
 */
export class BasicInfo extends React.Component<BasicInfoProps, BasicInfoState> {
  constructor(props: BasicInfoProps) {
    super(props);

    this.state = {
      bio: '',
      displayName: '',
      instrument: '',
      skillLevel: SkillLevel.beginner,
      instruments: [],
      thirtyMinsRate: 0,
      fortyFiveMinsRate: 0,
      sixtyMinsRate: 0,
      ninetyMinsRate: 0,
      home: false,
      studio: false,
      online: false,
      studioAddress: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleBlurBio = this.handleBlurBio.bind(this);
    this.updateName = this.updateName.bind(this);
    this.addInstrument = this.addInstrument.bind(this);
    this.deleteInstrument = this.deleteInstrument.bind(this);
    this.updateRates = this.updateRates.bind(this);
    this.handleChangePlaceForLessons = this.handleChangePlaceForLessons.bind(this);
    this.updateStudioAddress = this.updateStudioAddress.bind(this);
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
    this.updateInstructorCall(instructor);
  }

  public updateName(event: any): void {
    const user =  {
      ...this.props.user,
      displayName: this.state.displayName
    };
    this.props.updateUser(user);
  }

  public addInstrument(event: any): void {
    const instrumentToAdd: InstrumentsType = {
      instrument: this.state.instrument,
      skillLevel: this.state.skillLevel
    };

    if (instrumentToAdd.instrument && instrumentToAdd.skillLevel) {
      this.setState(
        { instruments: [...this.state.instruments, instrumentToAdd] },
        () => {
        const instructor: InstructorState =  {
          userId: this.props.user.id,
          instruments: this.state.instruments
        };
        this.updateInstructorCall(instructor);
      });
    }
  }

  public updateInstructorCall(instructor: InstructorState): void {
    this.props.updateInstructor(instructor);
  }

  public deleteInstrument(instrumentName: string): void {
    this.setState(
      { instruments: this.state.instruments.filter(
        instrument => instrumentName.indexOf(instrument.instrument) === -1)},
      () => {
      const instructor: InstructorState =  {
        userId: this.props.user.id,
        instruments: this.state.instruments
      };
      this.updateInstructorCall(instructor);
    });
  }

  public updateRates(event: any): void {
    const rates: RatesState = {
      thirtyMinsRate: this.state.thirtyMinsRate,
      fortyFiveMinsRate: this.state.fortyFiveMinsRate,
      sixtyMinsRate: this.state.sixtyMinsRate,
      ninetyMinsRate: this.state.ninetyMinsRate,
    };

    const instructor: InstructorState =  {
      userId: this.props.user.id,
      rates: rates
    };

    this.updateInstructorCall(instructor);
  }

  public handleChangePlaceForLessons(event: any): void {
    const target = event.target;
    const name = target.name;
    
    if (target.checked) {
      this.setState({ [name]: true }, () => {
        const placeForLessons = {
          home: this.state.home,
          studio: this.state.studio,
          online: this.state.online
        };
    
        const instructor: InstructorState =  {
          userId: this.props.user.id,
          placeForLessons: placeForLessons
        };
        this.updateInstructorCall(instructor);
      });
    } else {
      this.setState({ [name]: false }, () => {
        const placeForLessons = {
          home: this.state.home,
          studio: this.state.studio,
          online: this.state.online
        };
    
        const instructor: InstructorState =  {
          userId: this.props.user.id,
          placeForLessons: placeForLessons
        };
        this.updateInstructorCall(instructor);
      });
    }
  }

  public updateStudioAddress(event: any): void {
    const instructor: InstructorState =  {
      userId: this.props.user.id,
      studioAddress: this.state.studioAddress
    };

    this.updateInstructorCall(instructor);
  }
  
  public render(): JSX.Element {
    const selectedInstruments = this.state.instruments.map((instrument, i) => (
      <SelectedInstrument
        key={i}
        instrument={instrument.instrument}
        skillLevel={instrument.skillLevel}
        deleteInstrument={(instrumentName: string) => this.deleteInstrument(instrumentName)}
      />
    ));

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
        <Typography className="nabi-margin-top-small" variant="body2">
          Instruments
        </Typography>
        {selectedInstruments}
        <Instruments
          instrument={this.state.instrument}
          skillLevel={this.state.skillLevel}
          handleChange={this.handleChange}
          addInstrument={this.addInstrument}
        />
        <Rates 
          handleChange={this.handleChange} 
          thirtyMinsRate={this.state.thirtyMinsRate}
          fortyFiveMinsRate={this.state.fortyFiveMinsRate}
          sixtyMinsRate={this.state.sixtyMinsRate}
          ninetyMinsRate={this.state.ninetyMinsRate}
          updateRates={this.updateRates}
        />
        <PlaceForLessons 
          handleChange={this.handleChange}
          handleChangePlaceForLessons={this.handleChangePlaceForLessons}
          home={this.state.home}
          studio={this.state.studio}
          online={this.state.online}
          studioAddress={this.state.studioAddress}
          updateStudioAddress={this.updateStudioAddress}
        />
        <Availability />
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
