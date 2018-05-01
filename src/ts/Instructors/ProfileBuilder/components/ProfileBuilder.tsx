import * as React from 'react';
import { match, withRouter, RouteComponentProps } from 'react-router-dom';

import { Theme, withStyles, WithStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography/Typography';
import Stepper, { Step, StepButton } from 'material-ui/Stepper';
import Button from 'material-ui/Button';
import MobileStepper from 'material-ui/MobileStepper';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

import BasicInfo from './BasicInfo/BasicInfo';
import { Role, UserState } from '../../../Users/model';

const styles = (theme: Theme) => ({
  mobileStepper: {
    padding: '0px'
  },
  button: {
    marginRight: theme.spacing.unit,
  },
  completed: {
    display: 'inline-block',
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
});

interface IdParams {
  id: string;
}

interface ProfileBuilderProps extends RouteComponentProps<{}> {
  users: UserState[];
  classes: any;
  theme?: any;
  match: match<IdParams>;
  changeAvatar(id: string, avatar: string): void;
}

interface ProfileBuilderState {
  activeStep: number;
  completed: any;
  user: UserState;
}

function getSteps() {
  return ['Basic Info', 'Education', 'Experience', 'Qualifications', 'Recommendations'];
}

export class ProfileBuilder extends React.Component
<ProfileBuilderProps, ProfileBuilderState> { 
  constructor(props: ProfileBuilderProps & WithStyles<'button' | 'completed' | 'instructions'> ) {
    super(props);

    this.state = {
      activeStep: 0,
      completed: {},
      user: {
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        zipCode: '',
        role: Role.instructor,
        hearAboutUs: '',
        displayName: ''
      }
    };

    this.renderDesktopButtons = this.renderDesktopButtons.bind(this);
  }
  
  getStepContent(stepIndex: any) {
    switch (stepIndex) {
      case 0:
        return <BasicInfo user={this.state.user} changeAvatar={this.props.changeAvatar}/>;
      case 1:
        return '';
      case 2:
        return '';
      case 3:
        return '';
      case 4:
        return '';
      default:
        return '';
    }
  }

  completedSteps() {
    return Object.keys(this.state.completed).length;
  }

  totalSteps = () => {
    return getSteps().length;
  }

  isLastStep() {
    return this.state.activeStep === this.totalSteps() - 1;
  }

  allStepsCompleted() {
    return this.completedSteps() === this.totalSteps();
  }

  handleNext = () => {
    let activeStep;

    if (this.isLastStep() && !this.allStepsCompleted()) {
      const steps = getSteps();
      activeStep = steps.findIndex((step, i) => !(i in this.state.completed));
    } else {
      activeStep = this.state.activeStep + 1;
    }
    this.setState({
      activeStep,
    });
  }

  handleBack = () => {
    const { activeStep } = this.state;
    this.setState({
      activeStep: activeStep - 1,
    });
  }

  handleStep = (step: any ) => () => {
    this.setState({
      activeStep: step,
    });
  }

  handleComplete = () => {
    const { completed } = this.state;
    completed[this.state.activeStep] = true;
    this.setState({
      completed,
    });
    this.handleNext();
  }

  handleReset = () => {
    this.setState({
      activeStep: 0,
      completed: {},
    });
  }

  public componentWillMount(): void {
    const user: UserState = this.getSingleUser(this.props.users);
    if (user) { this.setState({ user }); }
  }

  public componentWillReceiveProps(nextProps: ProfileBuilderProps): void {
    const user = this.getSingleUser(nextProps.users);
    if (this.state.user !== user) {
      this.setState({
        ...this.state,
        user: {
          ...this.state.user,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          password: user.password,
          zipCode: user.zipCode,
          hearAboutUs: user.hearAboutUs,
          displayName: user.firstName + user.lastName
        }
      });
    }
    this.getSingleUser = this.getSingleUser.bind(this);
  }
  
  // TODO: replace this with actual api call
  public getSingleUser(users: any[]): UserState {
    return users.find((user: UserState) => {
      return user.id === this.props.match.params.id;
    });
  }

  public renderDesktopStepper(): JSX.Element {
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <div className="hide-on-mobile">
        <Stepper nonLinear={true} activeStep={activeStep}>
        {steps.map((label, index) => {
          return (
            <Step key={label}>
              <StepButton
                onClick={this.handleStep(index)}
                completed={this.state.completed[index]}
              >
                {label}
              </StepButton>
            </Step>
          );
        })}
      </Stepper>
    </div>
    );
  }

  public renderDesktopButtons(): JSX.Element {
    const steps = getSteps();
    const { activeStep } = this.state;
    const { classes } = this.props;

    return (
      <div className="hide-on-mobile nabi-margin-top-large">
        {this.allStepsCompleted() ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&quot;re finished
            </Typography>
            <Button onClick={this.handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={this.handleBack}
                className={classes.button}
              >
                Back
              </Button>
              <Button
                variant="raised"
                color="primary"
                onClick={this.handleNext}
                className={classes.button}
              >
                Next
              </Button>
              {activeStep !== steps.length &&
                (this.state.completed[this.state.activeStep] ? (
                  <Typography variant="caption" className={classes.completed}>
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (
                  <Button variant="raised" color="primary" onClick={this.handleComplete}>
                    {this.completedSteps() === this.totalSteps() - 1 ? 'Finish' : 'Complete Step'}
                  </Button>
                ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  public renderMobileStepper(): JSX.Element {
    const { classes, theme } = this.props;

    return (
      <div className="hide-on-desktop">
        <MobileStepper
          variant="progress"
          steps={6}
          position="static"
          activeStep={this.state.activeStep}
          className={classes.mobileStepper}
          nextButton={
            <Button size="small" onClick={this.handleNext} disabled={this.state.activeStep === 5}>
              Next
              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>}
          backButton={
            <Button size="small" onClick={this.handleBack} disabled={this.state.activeStep === 0}>
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              Back
            </Button>}
        />
      </div>
    );
  }

  public render(): JSX.Element {
    const { activeStep } = this.state;
    return (
      <div className="nabi-container">
        <Typography variant="title" className="nabi-margin-top-medium nabi-margin-bottom-medium">
          PROFILE BUILDER
        </Typography>

        <div className="nabi-background-white nabi-section">
          
          {this.renderDesktopStepper()}
          
          {/* {getStepContent(activeStep, this.props)} */}

          {this.getStepContent(activeStep)}
          
          {this.renderDesktopButtons()}

           {this.renderMobileStepper()}
        </div>
      </div>
    );
  }
}

export default withRouter(withStyles(styles, { withTheme: true })<ProfileBuilderProps>(ProfileBuilder));
