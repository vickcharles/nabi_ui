import * as React from 'react';
import InstrumentCard from './InstrumentCard';
import { popularInstruments } from '../../../../assets/data/popularInstruments';
import { InstrumentCardProps } from './InstrumentCard';
import PageTitle from '../PageTitle';

/**
 * PopularInstruments: This is the Polular Instruments section of the Homepage
 * @class PopularInstruments
 * @extends React.Component <{}, {}>
 */

/**
 * State for PopularInstruments
 * @interface PopularInstrumentsState
 */
interface PopularInstrumentsState {
  instruments: InstrumentCardProps[];
}

class PopularInstruments extends React.Component <{}, PopularInstrumentsState>  {
  constructor(props: {}) {
    super(props);

    this.state = {
      instruments: popularInstruments,
    };
  }

  public renderInstrumentCard(): any {
    const Cards = this.state.instruments.map((items, i ) => {
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
  }

  render() {
    return (
      <div className="nabi-margin-top-xlarge nabi-margin-bottom-medium nabi-background-color">
        <div className="hide-on-desktop"><PageTitle pageTitle="Popular Instruments" /></div>
        <div className="hide-on-mobile"><PageTitle pageTitle="How It Works" /></div>
        <div className="nabi-container">
          <div className="nabi-popular-instruments">
            {this.renderInstrumentCard()}
          </div>
        </div>
      </div>
    );
  }
}

export default PopularInstruments;