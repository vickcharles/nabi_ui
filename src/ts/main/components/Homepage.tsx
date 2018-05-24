import * as React from 'react';
import BackgroundImage from './BackgroundImage';
import FreeLesson from './FreeLesson';
import PopularInstrumentSection from './PopularInstrumentSection';

/** 
 * Homepage component
 */
const Homepage = () => {
  return (
    <div>
      <BackgroundImage />
      <PopularInstrumentSection />
      <FreeLesson />
    </div>
  );
};

export default Homepage;
