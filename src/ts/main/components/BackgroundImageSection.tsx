import * as React from 'react';
import { Button } from 'material-ui';

const BackgroundImageSection = () => {
  return (
    <section id="banner">
    <img src={require('../../../assets/images/nabiBannerImage.jpg')} alt=""/>
      <div className="container">
        <h1 className="nabi-font-montserrat nabi-text-semibold  nabi-font-jennasue"> 
        Share the love for music through education
        </h1>
          <p className=" nabi-text-mediumbold nabi-font-montserrat  ">
          Lear music with your city's most talented and qualified music instructors
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