import * as React from 'react';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import { withStyles, WithStyles } from 'material-ui/styles';

const styles = () => ({
  media: {
    height: 0,
    paddingTop: '56.25%',
    marginTop: '30'
  }
});

/**
 * Props for InstrumentCard
 * @interface InstrumentCardProps
 */
export interface InstrumentCardProps {
  id?: string;
  image: string;
  instrument: string;
  instructors: number;
}

type PropsWithStyles = InstrumentCardProps & WithStyles<'media'>;

/** 
 * InstrumentCard component
 */
export const InstrumentCard: React.StatelessComponent<PropsWithStyles> = props =>  {
  return (
    <div>
      <Card>
        <CardMedia 
          className={props.classes.media}
          image={require(`../../../../assets/images/${props.image}`)}
        />
        <CardContent>
          <Typography className="nabi-margin-top-small" variant="body2">
            Learn {props.instrument}
          </Typography>
          <Typography>
            {props.instructors} {props.instrument} instructors in your area.
          </Typography>
          <Button size="small" color="primary">
            GET STARED
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default withStyles(styles)<InstrumentCardProps>(InstrumentCard);