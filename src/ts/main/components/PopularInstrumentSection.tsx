import * as React from 'react';
import PopularInstrumetCard from './card';

export interface MyCardProps {
  id: string;
  ImageUrl: string;
  instrument: string;
  numberOfInstructors: number;
}

const data: MyCardProps[] = [
  {
    id: '1',
    instrument: 'guitar',
    ImageUrl: require('../../../assets/images/nabi-home-popular-instruments-piano.png'),
    numberOfInstructors: 10,
},

  {
    id: '2',
    instrument: 'piano',
    ImageUrl: require('../../../assets/images/nabi-home-popular-instruments-guitar.png'),
    numberOfInstructors: 17,
  },
  {
    id: '3',
    instrument: 'drums',
    ImageUrl: require('../../../assets/images/nabi-home-popular-instruments-drums.jpg'),
    numberOfInstructors: 16,
  },
];

class PopularInstrumentSection extends React.Component <{}, {}>  {

    render() {
      const Cards = data.map((items, i ) => {
      return (
          <PopularInstrumetCard 
           key={i}
           ImageUrl={items.ImageUrl}
           instrument={items.instrument}
           numberOfInstructors={items.numberOfInstructors}
          />
      );
      });

      return (
        <div className="nabi-margin-top-large nabi-margin-bottom-large  nabi-background-color">
          <h1 className="nabi-text-center nabi-popular-title  nabi-color">
            Popular instruments 
          </h1>
          <div className="container nabi-text-center">
            {Cards}
          </div>
        </div>
      );
    }
  }

export default PopularInstrumentSection;