import * as React from 'react';
import InstrumentCard from './InstrumentCard';
import { popularInstruments } from '../../../../assets/data/popularInstruments';

/**
 * PopularInstruments: This is the Polular Instruments section of the Homepage
 * @class PopularInstruments
 * @extends React.Component <{}, {}>
 */
class PopularInstruments extends React.Component <{}, {}>  {
    render() {
      const Cards = popularInstruments.map((items, i ) => {
      return (
          <InstrumentCard 
           key={i}
           image={items.image}
           instrument={items.instrument}
           instructors={items.instructors}
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

export default PopularInstruments;