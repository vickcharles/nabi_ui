import * as React from 'react';
import  Card  from 'material-ui/Card';
import { CardContent } from 'material-ui/Card';
import CardMedia from 'material-ui/Card';
import Typography from 'material-ui/Typography';

/** 
 * Card component
 */

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
    );
};

export default PopularInstrumentCard ;