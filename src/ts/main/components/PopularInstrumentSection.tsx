import * as React from 'react';
import PopularInstrumetCard from './card';

export interface MyCardProps {
  id: string;
  title: string;
  text: string;
  url: string;
}

const data: MyCardProps[] = [
  {
    id: '1',
    title: 'Learn Keyboard',
    text: '19 Keyboard instructor in your area',
    url: require('../../../assets/images/nabi-home-popular-instruments-drums.jpg'),
   
},

  {
    id: '2',
    title: 'Learn Guitar',
    text: '7 guitar instructors in your area',
    url: require('../../../assets/images/nabi-home-popular-instruments-drums.jpg'),
  },
  {
    id: '3',
    title: 'Learn Drums',
    text: '18 drums instructor in your area',
    url: require('../../../assets/images/nabi-home-popular-instruments-drums.jpg'),
  },
];

class PopularInstrumentSection extends React.Component <{}, {}>  {

    render() {
      const Cards = data.map((items, i ) => {
      return (
          <PopularInstrumetCard 
           key={i}
           title={items.title}
           url={items.url}
           text={items.text}
          />
      );
      });

      return (
        <div className="nabi-popular-instrument-section nabi-text-center nabi-background-color">
          <h1 className="nabi-text-center nabi-text-mediumbold nabi-color">
            Popular instrument 
          </h1>
          <div className="container nabi-text-center">
            {Cards}
          </div>
        </div>
      );
    }
  }

export default PopularInstrumentSection;