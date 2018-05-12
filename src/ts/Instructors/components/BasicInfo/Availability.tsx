import * as React from 'react';
import Typography from 'material-ui/Typography';
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';

interface AvailabilityState {
  monEarlyMorning: boolean;
  monLateMorning: boolean;
  monEarlyAfternoon: boolean;
  monLateAfternoon: boolean;
  tueEarlyMorning: boolean;
  tueLateMorning: boolean;
  tueEarlyAfternoon: boolean;
  tueLateAfternoon: boolean;
  wedEarlyMorning: boolean;
  wedLateMorning: boolean;
  wedEarlyAfternoon: boolean;
  wedLateAfternoon: boolean;
  thuEarlyMorning: boolean;
  thuLateMorning: boolean;
  thuEarlyAfternoon: boolean;
  thuLateAfternoon: boolean;
  friEarlyMorning: boolean;
  friLateMorning: boolean;
  friEarlyAfternoon: boolean;
  friLateAfternoon: boolean;
  satEarlyMorning: boolean;
  satLateMorning: boolean;
  satEarlyAfternoon: boolean;
  satLateAfternoon: boolean;
  sunEarlyMorning: boolean;
  sunLateMorning: boolean;
  sunEarlyAfternoon: boolean;
  sunLateAfternoon: boolean;
}

export class Availability extends React.Component<{}, AvailabilityState & any> {
  constructor(props: {}) {
    super(props);

    this.state = {
      monEarlyMorning: false,
      monLateMorning: false,
      monEarlyAfternoon: false,
      monLateAfternoon: false,
      tueEarlyMorning: false,
      tueLateMorning: false,
      tueEarlyAfternoon: false,
      tueLateAfternoon: false,
      wedEarlyMorning: false,
      wedLateMorning: false,
      wedEarlyAfternoon: false,
      wedLateAfternoon: false,
      thuEarlyMorning: false,
      thuLateMorning: false,
      thuEarlyAfternoon: false,
      thuLateAfternoon: false,
      friEarlyMorning: false,
      friLateMorning: false,
      friEarlyAfternoon: false,
      friLateAfternoon: false,
      satEarlyMorning: false,
      satLateMorning: false,
      satEarlyAfternoon: false,
      satLateAfternoon: false,
      sunEarlyMorning: false,
      sunLateMorning: false,
      sunEarlyAfternoon: false,
      sunLateAfternoon: false,
    };
    this.toggleAvailability = this.toggleAvailability.bind(this);
  }

  public toggleAvailability(dayTime: string): void {
    const isAvailable = this.state[dayTime] === false ? true : false;
    this.setState({ [dayTime]: isAvailable });
    console.log(dayTime);
  }

  public render(): JSX.Element {      
    return (
      <div>
        <Typography className="nabi-margin-top-small nabi-margin-bottom-xsmall" variant="body2">
            Availability
          </Typography>
          <Typography >Click to select your availability</Typography>
        <div 
          className="nabi-availability-legend-wrapper nabi-text-center 
          nabi-margin-bottom-small"
        >
          <GridList cellHeight={50} cols={2}>
            <GridListTile>
              <GridListTileBar title="Unavailable" />
            </GridListTile>
            <GridListTile className="nabi-grid-background-nabi">
              <GridListTileBar title="Available"/>
            </GridListTile>
          </GridList>
        </div>

        <div>
          <GridList cellHeight={50} cols={9}>
            <GridListTile key={2} cols={2} className="nabi-background-white nabi-align-center">
              <GridListTileBar className="nabi-text-dark nabi-font-weight-bold" title="Schedule"/>
            </GridListTile>
            <GridListTile className="nabi-align-center">
              <GridListTileBar
                title="M"
              />
            </GridListTile>
            <GridListTile className="nabi-align-center">
              <GridListTileBar
                title="Tu"
              />
            </GridListTile>
            <GridListTile className="nabi-align-center">
              <GridListTileBar
                title="W"
              />
            </GridListTile>
            <GridListTile className="nabi-align-center">
              <GridListTileBar
                title="Th"
              />
            </GridListTile>
            <GridListTile className="nabi-align-center">
              <GridListTileBar
                title="F"
              />
            </GridListTile>
            <GridListTile className="nabi-align-center">
              <GridListTileBar
                title="Sa"
              />
            </GridListTile>
            <GridListTile className="nabi-align-center">
              <GridListTileBar
                title="Su"
              />
            </GridListTile>
            <GridListTile cols={2} className="nabi-align-center">
              <GridListTileBar
                title="Early Morning"
              />
            </GridListTile>
            <GridListTile 
              className={this.state.monEarlyMorning ? 
                'nabi-cursor-pointer nabi-grid-background-nabi' : 'nabi-cursor-pointer'} 
              onClick={() => this.toggleAvailability('monEarlyMorning')}
            >
              <GridListTileBar/>
            </GridListTile>
            <GridListTile 
              className={this.state.tueEarlyMorning ? 
                'nabi-cursor-pointer nabi-grid-background-nabi' : 'nabi-cursor-pointer'} 
              onClick={() => this.toggleAvailability('tueEarlyMorning')}
            >
              <GridListTileBar/>
            </GridListTile>
            <GridListTile 
              className={this.state.wedEarlyMorning ? 
                'nabi-cursor-pointer nabi-grid-background-nabi' : 'nabi-cursor-pointer'} 
              onClick={() => this.toggleAvailability('wedEarlyMorning')} 
            >
              <GridListTileBar/>
            </GridListTile>
            <GridListTile 
              className={this.state.thuEarlyMorning ? 
                'nabi-cursor-pointer nabi-grid-background-nabi' : 'nabi-cursor-pointer'} 
              onClick={() => this.toggleAvailability('thuEarlyMorning')} 
            >
              <GridListTileBar/>
            </GridListTile>
            <GridListTile 
              className={this.state.friEarlyMorning ? 
                'nabi-cursor-pointer nabi-grid-background-nabi' : 'nabi-cursor-pointer'}  
              onClick={() => this.toggleAvailability('friEarlyMorning')}
            >
              <GridListTileBar/>
            </GridListTile>
            <GridListTile 
              className={this.state.satEarlyMorning ? 
                'nabi-cursor-pointer nabi-grid-background-nabi' : 'nabi-cursor-pointer'}  
              onClick={() => this.toggleAvailability('satEarlyMorning')}
            >
              <GridListTileBar/>
            </GridListTile>
            <GridListTile 
              className={this.state.sunEarlyMorning ? 
                'nabi-cursor-pointer nabi-grid-background-nabi' : 'nabi-cursor-pointer'}  
              onClick={() => this.toggleAvailability('sunEarlyMorning')}
            >
              <GridListTileBar/>
            </GridListTile>
            <GridListTile cols={2} className="nabi-align-center">
              <GridListTileBar
                title="Late Morning"
              />
            </GridListTile>
            <GridListTile 
              className={this.state.monLateMorning ? 
                'nabi-cursor-pointer nabi-grid-background-nabi' : 'nabi-cursor-pointer'} 
              onClick={() => this.toggleAvailability('monLateMorning')}
            >
              <GridListTileBar/>
            </GridListTile>
            <GridListTile 
              className={this.state.tueLateMorning ? 
                'nabi-cursor-pointer nabi-grid-background-nabi' : 'nabi-cursor-pointer'} 
              onClick={() => this.toggleAvailability('tueLateMorning')}
            >
              <GridListTileBar/>
            </GridListTile>
            <GridListTile 
              className={this.state.wedLateMorning ? 
                'nabi-cursor-pointer nabi-grid-background-nabi' : 'nabi-cursor-pointer'} 
              onClick={() => this.toggleAvailability('wedLateMorning')}
            >
              <GridListTileBar/>
            </GridListTile>
            <GridListTile 
              className={this.state.thuLateMorning ?
                'nabi-cursor-pointer nabi-grid-background-nabi' : 'nabi-cursor-pointer'} 
              onClick={() => this.toggleAvailability('thuLateMorning')}
            >
              <GridListTileBar/>
            </GridListTile>
            <GridListTile 
              className={this.state.friLateMorning ?
                'nabi-cursor-pointer nabi-grid-background-nabi' : 'nabi-cursor-pointer'}  
              onClick={() => this.toggleAvailability('friLateMorning')}
            >
              <GridListTileBar/>
            </GridListTile>
            <GridListTile 
              className={this.state.satLateMorning ?
                'nabi-cursor-pointer nabi-grid-background-nabi' : 'nabi-cursor-pointer'}  
              onClick={() => this.toggleAvailability('satLateMorning')}
            >
              <GridListTileBar/>
            </GridListTile>
            <GridListTile 
              className={this.state.sunLateMorning ?
                'nabi-cursor-pointer nabi-grid-background-nabi' : 'nabi-cursor-pointer'}  
              onClick={() => this.toggleAvailability('sunLateMorning')}
            >
              <GridListTileBar/>
            </GridListTile>

            <GridListTile cols={2} className="nabi-align-center">
              <GridListTileBar
                title="Early Afternoon"
              />
            </GridListTile>
            <GridListTile 
              className={this.state.monEarlyAfternoon ? 
                'nabi-cursor-pointer nabi-grid-background-nabi' : 'nabi-cursor-pointer'} 
              onClick={() => this.toggleAvailability('monEarlyAfternoon')}
            >
              <GridListTileBar/>
            </GridListTile>
            <GridListTile 
              className={this.state.tueEarlyAfternoon ?
                'nabi-cursor-pointer nabi-grid-background-nabi' : 'nabi-cursor-pointer'} 
              onClick={() => this.toggleAvailability('tueEarlyAfternoon')}
            >
              <GridListTileBar/>
            </GridListTile>
            <GridListTile 
              className={this.state.wedEarlyAfternoon ?
                'nabi-cursor-pointer nabi-grid-background-nabi' : 'nabi-cursor-pointer'} 
              onClick={() => this.toggleAvailability('wedEarlyAfternoon')}
            >
              <GridListTileBar/>
            </GridListTile>
            <GridListTile 
              className={this.state.thuEarlyAfternoon ?
                'nabi-cursor-pointer nabi-grid-background-nabi' : 'nabi-cursor-pointer'} 
              onClick={() => this.toggleAvailability('thuEarlyAfternoon')}
            >
              <GridListTileBar/>
            </GridListTile>
            <GridListTile 
              className={this.state.friEarlyAfternoon ?
                'nabi-cursor-pointer nabi-grid-background-nabi' : 'nabi-cursor-pointer'}  
              onClick={() => this.toggleAvailability('friEarlyAfternoon')}
            >
              <GridListTileBar/>
            </GridListTile>
            <GridListTile 
              className={this.state.satEarlyAfternoon ?
                'nabi-cursor-pointer nabi-grid-background-nabi' : 'nabi-cursor-pointer'}  
              onClick={() => this.toggleAvailability('satEarlyAfternoon')}
            >
              <GridListTileBar/>
            </GridListTile>
            <GridListTile 
              className={this.state.sunEarlyAfternoon ?
                'nabi-cursor-pointer nabi-grid-background-nabi' : 'nabi-cursor-pointer'}  
              onClick={() => this.toggleAvailability('sunEarlyAfternoon')}
            >
              <GridListTileBar/>
            </GridListTile>

            <GridListTile cols={2} className="nabi-align-center">
              <GridListTileBar
                title="Late Afternoon"
              />
            </GridListTile>
            <GridListTile 
              className={this.state.monLateAfternoon ?
                'nabi-cursor-pointer nabi-grid-background-nabi' : 'nabi-cursor-pointer'} 
              onClick={() => this.toggleAvailability('monLateAfternoon')}
            >
              <GridListTileBar/>
            </GridListTile>
            <GridListTile 
              className={this.state.tueLateAfternoon ?
                'nabi-cursor-pointer nabi-grid-background-nabi' : 'nabi-cursor-pointer'} 
              onClick={() => this.toggleAvailability('tueLateAfternoon')}
            >
              <GridListTileBar/>
            </GridListTile>
            <GridListTile 
              className={this.state.wedLateAfternoon ?
                'nabi-cursor-pointer nabi-grid-background-nabi' : 'nabi-cursor-pointer'} 
              onClick={() => this.toggleAvailability('wedLateAfternoon')}
            >
              <GridListTileBar/>
            </GridListTile>
            <GridListTile 
              className={this.state.thuLateAfternoon ?
                'nabi-cursor-pointer nabi-grid-background-nabi' : 'nabi-cursor-pointer'} 
              onClick={() => this.toggleAvailability('thuLateAfternoon')}
            >
              <GridListTileBar/>
            </GridListTile>
            <GridListTile 
              className={this.state.friLateAfternoon ?
                'nabi-cursor-pointer nabi-grid-background-nabi' : 'nabi-cursor-pointer'}  
              onClick={() => this.toggleAvailability('friLateAfternoon')}
            >
              <GridListTileBar/>
            </GridListTile>
            <GridListTile 
              className={this.state.satLateAfternoon ?
                'nabi-cursor-pointer nabi-grid-background-nabi' : 'nabi-cursor-pointer'}  
              onClick={() => this.toggleAvailability('satLateAfternoon')}
            >
              <GridListTileBar/>
            </GridListTile>
            <GridListTile 
              className={this.state.sunLateAfternoon ?
                'nabi-cursor-pointer nabi-grid-background-nabi' : 'nabi-cursor-pointer'}  
              onClick={() => this.toggleAvailability('sunLateAfternoon')}
            >
              <GridListTileBar/>
            </GridListTile>
          </GridList>
        </div>
      </div>
    );
  }
}

export default Availability;
