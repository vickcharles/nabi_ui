import * as React from 'react';
import { Button } from 'material-ui';

/** 
 * Banner component
 */
const Banner = () => {
  return ( 
    <section id="banner" className="nabi-position-relative">
      <div className="container nabi-text-center nabi-color-white">
        <h1 className="nabi-text-mediumbold nabi-jennasue-title nabi-color-white nabi-margin-bottom-xsmall">
          Share the love for music through education
        </h1>
        <p className="nabi-margin-bottom-zero nabi-font-medium">
          Learn music with your city's most talented and qualified music instructors
        </p>
        <Button color="primary" variant="raised">
          FIND INSTRUCTOR
        </Button>
        <Button color="primary" variant="raised">
          START TEACHING
        </Button>
      </div>
    </section>
  );
};

export default Banner;
