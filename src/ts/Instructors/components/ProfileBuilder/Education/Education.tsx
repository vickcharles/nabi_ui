import * as React from 'react';
import { Action, Dispatch } from 'redux';
import { connect } from 'react-redux';

import Typography from 'material-ui/Typography';

import EducationFields from './EducationFields';
import { DegreeType, EducationType, InstructorType } from '../../../model';
import { updateInstructor } from '../../../';
import EducationAdded from './EducationAdded';

/**
 * Education dispatch props
 * @interface EducationDispatchProps
 */
interface EducationDispatchProps {
  updateInstructor: (instructor: InstructorType) => void;
}

/**
 * Education own props
 * @interface EducationOwnProps
 */
interface EducationOwnProps {
  userId: string;
}

/**
 * Education props
 * @interface EducationProps
 * @extends BasicInfoDispatchProps & BasicInfoOwnProps
 */
interface EducationProps extends
  EducationDispatchProps,
  EducationOwnProps { }

/**
 * State for Education
 * @interface EducationState
 * @extends EducationType
 */
interface EducationState extends EducationType {
  education: EducationType[];
}

/**
 * Education: Second step on the Profile Builder
 * @class Education
 * @extends React.Component<EducationProps, EducationState>
 */
export class Education extends React.Component<EducationProps, EducationState > {
  constructor(props: EducationProps) {
    super(props);

    this.state = {
      id: 0,
      schoolName: '',
      graduationYear: '',
      degreeType: DegreeType.bachelors,
      fieldOfStudy: '',
      education: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.addEducation = this.addEducation.bind(this);
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

  public addEducation(): void {
    const educationToAdd: EducationType = {
      id: this.state.education.length,
      schoolName: this.state.schoolName,
      graduationYear: this.state.graduationYear,
      degreeType: this.state.degreeType,
      fieldOfStudy: this.state.fieldOfStudy
    };

    if (this.state.schoolName && this.state.graduationYear
      && this.state.degreeType && this.state.fieldOfStudy) {
      this.setState(
        { education: [...this.state.education, educationToAdd] },
        () => {
        const instructor: InstructorType =  {
          userId: this.props.userId,
          education: this.state.education
        };
        this.updateInstructorCall(instructor);
        this.clearEducation();
      });
    }
  }

  public updateInstructorCall(instructor: InstructorType): void {
    this.props.updateInstructor(instructor);
  }

  public clearEducation(): void {
    this.setState({  
      schoolName: '',
      graduationYear: '',
      degreeType: DegreeType.bachelors,
      fieldOfStudy: ''
    });
  }

  public deleteEducation(educationId: number): void {
    this.setState(
      { education: this.state.education.filter(
        education => education.id !== educationId)},
      () => {
      const instructor: InstructorType =  {
        userId: this.props.userId,
        education: this.state.education
      };
      this.updateInstructorCall(instructor);
    });
  }

  public render(): JSX.Element {
    const educationAdded = this.state.education.map((education, i) => (
      <EducationAdded
        key={i}
        id={education.id}
        schoolName={education.schoolName}
        graduationYear={education.graduationYear}
        degreeType={education.degreeType}
        fieldOfStudy={education.fieldOfStudy}
        deleteEducation={(educationId: number) => this.deleteEducation(educationId)}
      />
    ));
    return (
      <div>
        {educationAdded}
        <Typography className="nabi-margin-top-small" variant="body2">
          Add Education
        </Typography>
        <EducationFields 
          handleChange={this.handleChange} 
          addEducation={this.addEducation} 
          schoolName={this.state.schoolName}
          graduationYear={this.state.graduationYear}
          degreeType={this.state.degreeType}
          fieldOfStudy={this.state.fieldOfStudy}
        />
      </div>
    );
  }
}

function mapDispatchToProps(
  dispatch: Dispatch<Action>,
  _ownProps: EducationOwnProps
): EducationDispatchProps {
  return {
    updateInstructor: (instructor: InstructorType) => dispatch(updateInstructor(instructor)),
  };
}

export default connect(null, mapDispatchToProps)(Education);
