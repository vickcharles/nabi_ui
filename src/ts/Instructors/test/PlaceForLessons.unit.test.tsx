import * as React from 'react';
import PlaceForLessons from '../components/BasicInfo/PlaceForLessons';
import { shallow } from 'enzyme';

describe('PlaceForLessons', () => {
  let wrapper: any;

  describe('Shallow', () => {
    beforeEach(() => {
      wrapper = shallow(
        <PlaceForLessons />
      );
    });
    
    it('Matches snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
