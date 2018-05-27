import * as React from 'react';
import  Card  from 'material-ui/Card';
import { CardContent } from 'material-ui/Card';
import CardMedia from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

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

/** 
 * InstrumentCard component
 */
const InstrumentCard: React.StatelessComponent<InstrumentCardProps> = props =>  {
    return (
      <div className="card nabi-display-inline-block">
        <Card>
        <CardMedia className="CardMedia box-shadow-none">
          <img src={require(`../../../../assets/images/${props.image}`)} alt=""/>
        </CardMedia>
        <CardContent>
        <Typography  variant="headline" component="h2">
         Learn {props.instrument}
         </Typography>
        <Typography component="p">
        {props.instructors} {props.instrument} instructor in your area.
        </Typography>
        <Button size="small" color="primary">
          GET STARED
        </Button>
        </CardContent>
        </Card>
      </div>
    );
};

export default InstrumentCard ;