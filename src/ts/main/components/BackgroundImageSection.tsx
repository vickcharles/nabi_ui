import * as React from 'react';
import { Button } from 'material-ui';

/** 
 * BackgroundImageSection component
 */
const BackgroundImageSection = () => {
  return ( 
    <section id="banner">
      <div className="container nabi-text-center">
        <h1 className="nabi-text-mediumbold nabi-font-jennasue nabi-margin-bottom-xsmall"> 
          Share the love for music through education
        </h1>
        <p className="nabi-margin-bottom-zero">
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

export default BackgroundImageSection;
