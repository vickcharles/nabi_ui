import * as React from 'react';
import InstrumentCard from './InstrumentCard';
import { popularInstruments } from '../../../../assets/data/popularInstruments';
import GridList, { GridListTile } from 'material-ui/GridList';
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
  instrumentsToDisplay: InstrumentCardProps[];
}

class PopularInstruments extends React.Component <{}, PopularInstrumentsState>  {
  constructor(props: {}) {
    super(props);

    this.state = {
      instruments: popularInstruments,
      instrumentsToDisplay: popularInstruments.slice(0, 3)
    };
  }

  public renderDesktopContent(): JSX.Element {
    const Cards = this.state.instrumentsToDisplay.map((items, i ) => {
      return (
        <GridListTile key={i} className="nabi-align-center popular-instrument-card">
          <InstrumentCard 
            image={items.image}
            instrument={items.instrument}
            instructors={items.instructors}
          />
        </GridListTile>
      );
    });

    return (
      <GridList cellHeight={50} cols={3}>
        {Cards}
      </GridList>
    );
  }

  public renderMobileContent(): JSX.Element {
    return (
      <InstrumentCard 
        image={this.state.instrumentsToDisplay[0].image}
        instrument={this.state.instrumentsToDisplay[0].instrument}
        instructors={this.state.instrumentsToDisplay[0].instructors}
      />
    );
  }

  render() {
    return (
      <div className="nabi-margin-top-large nabi-margin-bottom-large nabi-background-color">
        
        <PageTitle pageTitle="Popular Instruments" />
        <div className="container">
        <div className="hide-on-desktop">
          {this.renderMobileContent()}
        </div>
        <div className="hide-on-mobile">
          {this.renderDesktopContent()}
        </div>
        </div>
      </div>
    );
  }
}

export default PopularInstruments;