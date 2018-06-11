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
  positionStart: number;
  positionEnd: number;
  currentCount: number;
  intervalId: any;
}

class PopularInstruments extends React.Component <{}, PopularInstrumentsState>  {
  constructor(props: {}) {
    super(props);

    this.state = {
      instruments: popularInstruments,
      instrumentsToDisplay: popularInstruments.slice(0, 3),
      positionStart: 0,
      positionEnd: 0,
      currentCount: 0,
      intervalId: 0
    };

    this.timer = this.timer.bind(this);
    this.restart = this.restart.bind(this);
  }
  
  public componentDidMount(): void {
    var intervalId = setInterval(this.timer, 4000);
    // store intervalId in the state so it can be accessed later:
    this.setState({intervalId});
  }
  
  componentWillUnmount(): void {
    // use intervalId from the state to clear the interval
    clearInterval(this.state.intervalId);
  }
  
  timer(): void {
    // setState method is used to update the state
    this.setState({ currentCount: this.state.currentCount + 1 }, () => { 
      if (this.state.currentCount === 2) {
          this.setState({ currentCount: 0 });
        }
      });
  }

  restart(): any {
    if (this.state.currentCount === 2) {
      this.setState({ currentCount: 0 });
    } 
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
        image={this.state.instrumentsToDisplay[this.state.currentCount].image}
        instrument={this.state.instrumentsToDisplay[this.state.currentCount].instrument}
        instructors={this.state.instrumentsToDisplay[this.state.currentCount].instructors}
      />
    );
  }

  render() {
    return (
      <div className="nabi-margin-top-xlarge nabi-margin-bottom-xlarge nabi-background-color">
        {console.log(this.state.currentCount)}
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