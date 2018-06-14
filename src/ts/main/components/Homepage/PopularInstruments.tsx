import * as React from 'react';
import InstrumentCard from './InstrumentCard';
import { popularInstruments } from '../../../../assets/data/popularInstruments';
import PageTitle from '../PageTitle';

/**
 * PopularInstruments: This is the Polular Instruments section of the Homepage
 */

const PopularInstruments: React.StatelessComponent = () => {

  const renderInstrumentCard = () => {
    const Cards = popularInstruments.map((items, i ) => {
      return (
        <InstrumentCard 
          key={i}
          index={i}
          image={items.image}
          instrument={items.instrument}
          instructors={items.instructors}
        />
      );
    });
    return Cards;
  };

  return (
    <div className="nabi-margin-top-xlarge nabi-margin-bottom-medium nabi-background-color">
      <div className="hide-on-desktop"><PageTitle pageTitle="Popular Instruments" /></div>
      <div className="hide-on-mobile"><PageTitle pageTitle="How It Works" /></div>
      <div className="nabi-container">
        <div className="nabi-popular-instruments">
          {renderInstrumentCard()}
        </div>
      </div>
    </div>
  );
};

export default PopularInstruments;