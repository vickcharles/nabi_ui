import * as React from 'react';
import { Action, Dispatch } from 'redux';
import { connect } from 'react-redux';

import Typography from 'material-ui/Typography';

import ExperienceFields from './ExperienceFields';
import { ExperienceType, InstructorType } from '../../../model';
import { updateInstructor } from '../../../';
import ExperienceAdded from './ExperienceAdded';

/**
 * Experience dispatch props
 * @interface ExperienceDispatchProps
 */
interface ExperienceDispatchProps {
  updateInstructor: (instructor: InstructorType) => void;
}

/**
 * Experience own props
 * @interface ExperienceOwnProps
 */
interface ExperienceOwnProps {
  userId: string;
}

/**
 * Experience props
 * @interface ExperienceProps
 * @extends BasicInfoDispatchProps & BasicInfoOwnProps
 */
interface ExperienceProps extends
  ExperienceDispatchProps,
  ExperienceOwnProps { }

/**
 * State for Experience
 * @interface ExperienceState
 * @extends ExperienceType
 */
interface ExperienceState extends ExperienceType {
  experience: ExperienceType[];
}

/**
 * Experience: Third step of the Profile Builder
 * @class Experience
 * @extends React.Component<ExperienceProps, ExperienceState>
 */
export class Experience extends React.Component<ExperienceProps, ExperienceState > {
  constructor(props: ExperienceProps) {
    super(props);

    this.state = {
      id: 0,
      employer: '',
      jobTitle: '',
      fromMonth: 'jan',
      fromYear: '',
      toMonth: 'jan',
      toYear: '',
      location: '',
      experience: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.addExperience = this.addExperience.bind(this);
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

  public addExperience(): void {
    const experienceToAdd: ExperienceType = {
      id: this.state.experience.length,
      employer: this.state.employer,
      jobTitle: this.state.jobTitle,
      fromMonth: this.state.fromMonth,
      fromYear: this.state.fromYear,
      toMonth: this.state.toMonth,
      toYear: this.state.toYear,
      location: this.state.location
    };

    if (this.state.employer && this.state.jobTitle && this.state.fromMonth && this.state.fromYear
      && this.state.toMonth && this.state.toYear && this.state.location
    ) {
      this.setState(
        { experience: [...this.state.experience, experienceToAdd] },
        () => {
        const instructor: InstructorType =  {
          userId: this.props.userId,
          experience: this.state.experience
        };
        this.updateInstructorCall(instructor);
        this.clearExperience();
      });
    }
  }

  public updateInstructorCall(instructor: InstructorType): void {
    this.props.updateInstructor(instructor);
  }

  public clearExperience(): void {
    this.setState({  
      employer: '',
      jobTitle: '',
      fromMonth: 'jan',
      fromYear: '',
      toMonth: 'jan',
      toYear: '',
      location: ''
    });
  }

  public deleteExperience(experienceId: number): void {
    this.setState(
      { experience: this.state.experience.filter(
        experience => experience.id !== experienceId)},
      () => {
      const instructor: InstructorType =  {
        userId: this.props.userId,
        experience: this.state.experience
      };
      this.updateInstructorCall(instructor);
    });
  }

  public render(): JSX.Element {
    const experienceAdded = this.state.experience.map((experience, i) => (
      <ExperienceAdded
        key={i}
        id={experience.id}
        employer={experience.employer}
        jobTitle={experience.jobTitle}
        fromMonth={experience.fromMonth}
        fromYear={experience.fromYear}
        toMonth={experience.toMonth}
        toYear={experience.toYear}
        location={experience.location}
        deleteExperience={(experienceId: number) => this.deleteExperience(experienceId)}
      />
    ));
    return (
      <div>
        {experienceAdded}
        <Typography className="nabi-margin-top-small" variant="body2">
          Add Experience
        </Typography>
        <ExperienceFields 
          handleChange={this.handleChange} 
          addExperience={this.addExperience} 
          employer={this.state.employer}
          jobTitle={this.state.jobTitle}
          fromMonth={this.state.fromMonth}
          fromYear={this.state.fromYear}
          toMonth={this.state.toMonth}
          toYear={this.state.toYear}
          location={this.state.location}
        />
      </div>
    );
  }
}

function mapDispatchToProps(
  dispatch: Dispatch<Action>,
  _ownProps: ExperienceOwnProps
): ExperienceDispatchProps {
  return {
    updateInstructor: (instructor: InstructorType) => dispatch(updateInstructor(instructor)),
  };
}

export default connect(null, mapDispatchToProps)(Experience);
