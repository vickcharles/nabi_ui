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
  index?: number;
  image: string;
  instrument: string;
  instructors: number;
}

type PropsWithStyles = InstrumentCardProps & WithStyles<'media'>;

/** 
 * InstrumentCard component
 */
class InstrumentCard extends React.Component<PropsWithStyles, {}> {
  componentDidMount() {
    const slides = document.querySelectorAll('.popular-instrument-card');
    let currentSlide = 0;
    setInterval(nextSlide, 4000);
    function nextSlide() {
        slides[currentSlide].className = 'popular-instrument-card';
        currentSlide = (currentSlide + 1) % 8;
        slides[currentSlide].className = 'popular-instrument-card nabi-showing';
    }
  }

  public render() {
    return (
      <div>
        <Card 
          className={'popular-instrument-card' + (this.props.index === 0 ? ' nabi-showing' : '')}
        >
          <CardMedia 
            className={this.props.classes.media}
            image={require(`../../../../assets/images/${this.props.image}`)}
          />
          <CardContent>
            <Typography className="nabi-margin-top-small" variant="body2">
              Learn {this.props.instrument}
            </Typography>
            <Typography>
              {this.props.instructors} {this.props.instrument} instructors in your area.
            </Typography>
            <Button size="small" color="primary" className="nabi-padding-left-zero">
              GET STARED
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)<InstrumentCardProps>(InstrumentCard);