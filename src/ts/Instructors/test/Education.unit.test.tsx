import * as React from 'react';
import Education from '../components/Education/Education';
import { shallow } from 'enzyme';

describe('Education', () => {
  let wrapper: any;

  describe('Shallow', () => {
    beforeEach(() => {
      wrapper = shallow(
        <Education />
      );
    });
    
    it('Matches snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
