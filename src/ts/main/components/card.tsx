import * as React from 'react';
import  Card  from 'material-ui/Card';
import { CardContent } from 'material-ui/Card';
import CardMedia from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

/** 
 * Card component
 */

export interface CardProps {
  ImageUrl: string;
  instrument: string;
  numberOfInstructors: number;
}

const PopularInstrumentCard: React.StatelessComponent<CardProps> = props =>  {
    return (
      <div className="card nabi-display-inline-block">
        <Card>
        <CardMedia className="CardMedia box-shadow-none">
          <img src={props.ImageUrl} alt=""/>
        </CardMedia>
        <CardContent>
        <Typography  variant="headline" component="h5">
         Learn {props.instrument}
         </Typography>
        <Typography component="p">
        {props.numberOfInstructors} {props.instrument} instructor in your area.
        </Typography>
        <Button size="small" color="primary">
          GET STARED
        </Button>
        </CardContent>
        </Card>
      </div>
    );
};

export default PopularInstrumentCard ;