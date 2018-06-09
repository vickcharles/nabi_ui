import * as React from 'react';
import PlaceForLessons from '../components/ProfileBuilder/BasicInfo/PlaceForLessons';
import { shallow } from 'enzyme';

describe('PlaceForLessons', () => {
  let wrapper: any;
  
  const handleChange: () => void = jest.fn();
  const handleChangePlaceForLessons: () => void = jest.fn();
  const updateStudioAddress: () => void = jest.fn();

  describe('Shallow', () => {
    beforeEach(() => {
      wrapper = shallow(
        <PlaceForLessons 
          handleChange={handleChange}
          handleChangePlaceForLessons={handleChangePlaceForLessons}
          home={false}
          studio={false}
          online={false}
          studioAddress=""
          updateStudioAddress={updateStudioAddress}
        />
      );
    });
    
    it('Matches snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
