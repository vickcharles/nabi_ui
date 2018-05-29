import * as React from 'react';
import { Link, match, withRouter, RouteComponentProps } from 'react-router-dom';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

/**
 * Id params
 * @interface {IdParams}
 */
interface IdParams {
  id: string;
}

/**
 * Props for Welcome
 * @interface WelcomeProps
 */
interface WelcomeProps extends RouteComponentProps<{}> {
  welcomeText: string;
  actionText: string;
  actionUrl: string;
  match: match<IdParams>;
}

/**
 * Welcome, a page that welcomes users to Nabi
 * @param {WelcomeProps} props 
 */
const Welcome: React.StatelessComponent<WelcomeProps> = props => {
  return (
    <div className="nabi-container">
      <div className="nabi-section nabi-text-center">
        <p className="nabi-jennasue-title nabi-color-nabi nabi-margin-bottom-xsmall">Welcome to Nabi!</p>
        <Typography>{props.welcomeText}</Typography>
          <Link to={`/${props.actionUrl}/${props.match.params.id}`}>
          <Button 
            className="nabi-responsive-button nabi-margin-top-small" 
            color="primary" 
            variant="raised"
          >
            {props.actionText}
          </Button>
          </Link>
      </div>
    </div>
  );
};

export default withRouter(Welcome);
