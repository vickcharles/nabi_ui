import * as React from 'react';
import SelectedInstrument from '../components/BasicInfo/Instruments/SelectedInstrument';
import { shallow } from 'enzyme';

describe('SelectedInstrument', () => {
  let wrapper: any;
  const deleteInstrument: (instrumentName: string) => void = jest.fn();

  describe('Shallow', () => {
    beforeEach(() => {
      wrapper = shallow(
        <SelectedInstrument 
          instrument=""
          skillLevel=""
          deleteInstrument={deleteInstrument}
        />
      );
    });
    
    it('Matches snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
