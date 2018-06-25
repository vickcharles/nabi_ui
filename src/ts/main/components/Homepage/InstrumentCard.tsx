import * as React from 'react';
import { Link } from 'react-router-dom';

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

interface ClassNameProp {
  className?: string;
}
/**
 * Props for InstrumentCard
 * @interface InstrumentCardProps
 */
export interface InstrumentCardType {
  id?: string;
  index?: number;
  image: string;
  instrument: string;
  instructors: number;
}

export interface InstrumentCardProps extends
  InstrumentCardType,
  ClassNameProp {}

type PropsWithStyles = InstrumentCardProps & WithStyles<'media'>;

/**
 * InstrumentCard component
 */
class InstrumentCard extends React.Component<PropsWithStyles, {}> {
  componentDidMount() {
    if (this.props.className) {
      const slides = document.querySelectorAll(`.${this.props.className}`);
      let currentSlide = 0;
      const nextSlide = () =>  {
          slides[currentSlide].className = `${this.props.className}`;
          currentSlide = (currentSlide + 1) % 9;
          slides[currentSlide].className = `${this.props.className} nabi-showing`;
      };
      setInterval(nextSlide, 4000);
    }
  }

  public render() {
    return (
      <div>
        <Card
          className={this.props.className + (this.props.index === 0 ? ' nabi-showing' : '')}
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
            <Link to="registration-student">
              <Button size="small" color="primary" className="nabi-padding-left-zero">
                GET STARED
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)<InstrumentCardProps>(InstrumentCard);