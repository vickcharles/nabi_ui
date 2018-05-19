import * as React from 'react';
import BackgroundImage from './BackgroundImage';
import FreeLesson from './FreeLesson';
import PopularInstrumetCard from './card';

/** 
 * Homepage component
 */
const Homepage = () => {
  return (
    <div>
      <BackgroundImage />
      <FreeLesson />
      <PopularInstrumetCard />
    </div>
  );
};

export default Homepage;
