import * as React from 'react';
import { Theme, withStyles, WithStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography/Typography';
import Stepper, { Step, StepButton } from 'material-ui/Stepper';
import Button from 'material-ui/Button';

const styles = (theme: Theme) => ({
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

interface ProfileBuilderProps {
  handleChange: (event: React.FormEvent<{}>) => void;
  handleSubmit: (event: React.FormEvent<{}>) => void;
  hearAboutUs: string;
  selectedRole: string;
  classes: any;
}

interface ProfileBuilderState {
  activeStep: number;
  completed: any;
}

function getSteps() {
  return ['Basic Info', 'Education', 'Experience', 'Qualifications', 'Recommendations'];
}

function getStepContent(stepIndex: any) {
  switch (stepIndex) {
    case 0:
      return 'Basic Info';
    case 1:
      return 'Education';
    case 2:
      return 'Experience';
    case 3:
      return 'Qualifications';
    case 4:
      return 'Recommendations';
    default:
      return 'sd';
  }
}

export class ProfileBuilder extends React.Component
<ProfileBuilderProps & WithStyles<'button' | 'completed' | 'instructions'>, ProfileBuilderState> { 
  constructor(props: ProfileBuilderProps ) {
    super(props);

    this.state = {
      activeStep: 0,
      completed: {}
    };
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

  public renderStepper(): JSX.Element {
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
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
    );
  }

  public render(): JSX.Element { 
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;
   
    return (
      <div className="nabi-container">
        <Typography variant="title" className="nabi-margin-top-medium nabi-margin-bottom-medium">
          PROFILE BUILDER
        </Typography>
      
        <div className="nabi-background-white nabi-section">
          
          {this.renderStepper()}

          <div>
            {this.allStepsCompleted() ? (
              <div>
                <Typography className={classes.instructions}>
                  All steps completed - you&quot;re finished
                </Typography>
                <Button onClick={this.handleReset}>Reset</Button>
              </div>
            ) : (
              <div>
                {getStepContent(activeStep)}
                
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
        </div>
      </div>
    );
  }
}

export default withStyles(styles)<ProfileBuilderProps>(ProfileBuilder);
