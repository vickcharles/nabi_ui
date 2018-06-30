import * as React from 'react';
import InstrumentCard, { InstrumentCardType } from './InstrumentCard';
import { popularInstruments } from '../../../../assets/data/popularInstruments';
import PageTitle from '../PageTitle';
import GridList, { GridListTile } from 'material-ui/GridList';

/**
 * PopularInstruments: This is the Polular Instruments section of the Homepage
 */

class PopularInstruments extends React.Component<{}, {}> {
  componentDidMount() {
    const slides = document.querySelectorAll(`.popular-instrument-card-group`);
    let currentSlide = 0;
    const nextSlide = () =>  {
        slides[currentSlide].className = 'popular-instrument-card-group';
        currentSlide = (currentSlide + 1) % 3;
        slides[currentSlide].className = 'popular-instrument-card-group nabi-showing';
    };
    setInterval(nextSlide, 4000);
  }

  public render() {
    const popularInstrumentsFirstTrio = popularInstruments.slice(0, 3);
    const popularInstrumentsSecondTrio = popularInstruments.slice(3, 6);
    const popularInstrumentsThirdTrio = popularInstruments.slice(6, 9);

    const renderfirstTrio = (array: InstrumentCardType[]): JSX.Element => {
      return (
        <GridList className="" cellHeight={330} cols={3}>
        {array.map((items, i ) => (
          <GridListTile key={i} cols={1}>
            <InstrumentCard
              key={i}
              index={i}
              image={items.image}
              instrument={items.instrument}
              instructors={items.instructors}
              className=""
            />
          </GridListTile>
          )
        )}
        </GridList>
      );
    };

    const renderInstrumentCard = () => {
      const Cards = popularInstruments.map((items, i ) => {
        return (
          <InstrumentCard
            key={i}
            index={i}
            image={items.image}
            instrument={items.instrument}
            instructors={items.instructors}
            className="popular-instrument-card"
          />
        );
      });
      return Cards;
    };

    return (
      <div className="nabi-margin-top-xlarge nabi-margin-bottom-medium nabi-background-color">
        <PageTitle pageTitle="Popular Instruments" />
        <div className="nabi-container">
          <div className="hide-on-desktop nabi-popular-instruments">
            {renderInstrumentCard()}
          </div>
          <div className="hide-on-mobile nabi-popular-instruments">
          <div className="popular-instrument-card-group nabi-showing">
              {renderfirstTrio(popularInstrumentsFirstTrio)}
            </div>
            <div className="popular-instrument-card-group">
              {renderfirstTrio(popularInstrumentsSecondTrio)}
            </div>
            <div className="popular-instrument-card-group">
              {renderfirstTrio(popularInstrumentsThirdTrio)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PopularInstruments;