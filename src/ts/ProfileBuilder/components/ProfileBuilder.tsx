import * as React from 'react';
import { Theme, withStyles, WithStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography/Typography';

const styles = (theme: Theme) => ({

});

interface ProfileBuilderProps {
  handleChange: (event: React.FormEvent<{}>) => void;
  handleSubmit: (event: React.FormEvent<{}>) => void;
  hearAboutUs: string;
  selectedRole: string;
}

type PropsWithStyles = ProfileBuilderProps & WithStyles<''>;

const ProfileBuilder: React.StatelessComponent<PropsWithStyles> = props => {  
  return (
    <div className="nabi-container">
      <Typography variant="title" className="nabi-margin-top-medium nabi-margin-bottom-medium">
        PROFILE BUILDER
      </Typography>
    </div>
  );
};

export default withStyles(styles)<ProfileBuilderProps>(ProfileBuilder);
