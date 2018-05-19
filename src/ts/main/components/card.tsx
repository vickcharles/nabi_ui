import * as React from 'react';
import  Card  from 'material-ui/Card';
import { CardContent } from 'material-ui/Card';
import CardMedia from 'material-ui/Card';
import Typography from 'material-ui/Typography';
<<<<<<< HEAD
import Button from 'material-ui/Button';
=======
>>>>>>> 88184c1... [NABI-117] Add card component

/** 
 * Card component
 */

<<<<<<< HEAD
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
=======
const PopularInstrumentCard = () => {
    return (
        <div>
        <Card>
        <CardMedia>
        <img src="http://poze.zoopedia.ro/poze/large/pasari/Wallpaper_Pasari_cinteza_aurie_americana.jpg" alt="" />
        </CardMedia>
          <CardContent>
          <Typography  variant="headline" component="h2">
            Lizard
          </Typography>
          <Typography component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
       
      </Card>
        </div>
>>>>>>> 88184c1... [NABI-117] Add card component
    );
};

export default PopularInstrumentCard ;