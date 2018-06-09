import * as React from 'react';
import Instruments from '../components/ProfileBuilder/BasicInfo/Instruments/Instruments';
import { shallow } from 'enzyme';

describe('Instruments', () => {
  let wrapper: any;
  const handleChange: () => void = jest.fn();
  const addInstrument: () => void = jest.fn();

  describe('Shallow', () => {
    beforeEach(() => {
      wrapper = shallow(
        <Instruments 
          instrument=""
          skillLevel=""
          handleChange={handleChange}
          addInstrument={addInstrument}
        />
      );
    });
    
    it('Matches snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
