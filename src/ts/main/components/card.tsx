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
  url: string;
  text: string;
  title: string;
}

const PopularInstrumentCard: React.StatelessComponent<CardProps> = props =>  {
    return (
      <div className="Cards">
        <Card className="Cards">
        <CardMedia className="CardMedia box-shadow-none">
          <img src={props.url} alt=""/>
        </CardMedia>
        <CardContent>
        <Typography  variant="headline" component="h2">
          {props.title}
         </Typography>
        <Typography component="p">
          {props.text}
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