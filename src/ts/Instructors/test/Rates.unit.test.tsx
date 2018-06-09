import * as React from 'react';
import Rates from '../components/ProfileBuilder/BasicInfo/Rates';
import { shallow } from 'enzyme';

describe('Rates', () => {
  let wrapper: any;
  const handleChange: () => void = jest.fn();
  const updateRates: () => void = jest.fn();

  describe('Shallow', () => {
    beforeEach(() => {
      wrapper = shallow(
        <Rates 
          handleChange={handleChange}
          thirtyMinsRate={0}
          fortyFiveMinsRate={0}
          sixtyMinsRate={0}
          ninetyMinsRate={0}
          updateRates={updateRates}
        />
      );
    });
    
    it('Matches snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
