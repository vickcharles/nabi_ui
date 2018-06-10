import * as React from 'react';
import { Button } from 'material-ui';

/** 
 * FreeLesson callout in homepage
 */
const FreeLesson = () => {
  return (
    <div className="nabi-background-nabi free-lesson-section nabi-color-white">
        <div className="nabi-container nabi-padding-top-large nabi-padding-bottom-large nabi-position-relative">
        <div className="free-lesson-left-section">
        <p className="nabi-margin-bottom-xsmall nabi-margin-top-zero nabi-font-large"> 
          Get stared with a free lesson today
        </p>
        <p className="nabi-margin-bottom-zero nabi-font-medium">
          Learn music with your city's most talented and qualified music instructors
        </p>
        <Button className="nabi-margin-top-xsmall" color="secondary" variant="raised">
          Try your FREE lesson
        </Button>
        </div>
        <div className="free-lesson-right-section nabi-margin-top-medium">
          <img 
            src={require('../../../assets/images/nabi-home-music-icon.png')} 
            alt=""
            className="free-lesson-image"
          />
          <p className="nabi-font-jennasue nabi-margin-top-zero free-lesson-lema">
            Share the love for music thought education
          </p>
        </div>
       </div>
    </div>
  );
};

export default FreeLesson;
