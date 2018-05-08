import * as React from 'react';
import Instruments from '../components/BasicInfo/Instruments';
import { shallow } from 'enzyme';

describe('Instruments', () => {
  let wrapper: any;

  describe('Shallow', () => {
    beforeEach(() => {
      wrapper = shallow(
        <Instruments />
      );
    });
    
    it('Matches snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
