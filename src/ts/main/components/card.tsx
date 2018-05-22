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
  url: any;
  text: string;
  title: string;
}

class PopularInstrumentCard extends React.Component <CardProps> {

  render() {
    return (
        <div>
        <Card>
         <CardMedia>
         <img src={this.props.url} alt=""/>
         </CardMedia>
          <CardContent>
          <Typography  variant="headline" component="h2">
            {this.props.title}
          </Typography>
          <Typography component="p">
            {this.props.text}
          </Typography>
          <Button size="small" color="primary">
            Share
          </Button>
          </CardContent>
        </Card>
        </div>
    );
  }
}

export default PopularInstrumentCard ;