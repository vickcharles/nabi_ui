import * as React from 'react';
import { Button } from 'material-ui';
import { Link } from 'react-router-dom';

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
        <Link to="registration-student">
          <Button color="primary" variant="raised">
            FIND INSTRUCTOR
          </Button>
        </Link>
        <Link to="registration-instructor">
          <Button color="primary" variant="raised">
            START TEACHING
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Banner;
