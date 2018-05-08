import * as React from 'react';
import Rates from '../components/BasicInfo/Rates';
import { shallow } from 'enzyme';

describe('Rates', () => {
  let wrapper: any;
  const handleChange: () => void = jest.fn();

  describe('Shallow', () => {
    beforeEach(() => {
      wrapper = shallow(
        <Rates 
          handleChange={handleChange}
        />
      );
    });
    
    it('Matches snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
