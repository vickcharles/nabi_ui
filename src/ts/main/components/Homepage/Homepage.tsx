import * as React from 'react';
import Banner from './Banner';
import PopularInstruments from './PopularInstruments';

/** 
 * Homepage component
 */
const Homepage = () => {
  return (
    <div>
      <Banner />
      <PopularInstruments />
    </div>
  );
};

export default Homepage;
