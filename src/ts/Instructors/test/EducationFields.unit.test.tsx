import * as React from 'react';
import EducationFields from '../components/Education/Education';
import { shallow } from 'enzyme';

describe('EducationFields', () => {
  let wrapper: any;

  describe('Shallow', () => {
    beforeEach(() => {
      wrapper = shallow(
        <EducationFields />
      );
    });
    
    it('Matches snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
