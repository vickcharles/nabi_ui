import * as React from 'react';
import Banner from './Banner';
import PopularInstruments from './PopularInstruments';
import FreeLesson from './FreeLesson';

/** 
 * Homepage component
 */
const Homepage = () => {
  return (
    <div>
      <Banner />
      <PopularInstruments />
      <FreeLesson />
    </div>
  );
};

export default Homepage;
