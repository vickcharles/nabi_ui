import * as React from 'react';
import AgeDisclaimer from '../components/AgeDisclaimer';
import { shallow } from 'enzyme';

describe('AgeDisclaimer', () => {
  let wrapper: any;
  const closeHandler: () => void = jest.fn();

  describe('Shallow', () => {
    beforeEach(() => {
      wrapper = shallow(
        <AgeDisclaimer
          isFormDialogOpen={false}
          closeHandler={closeHandler}
        />
      );
    });
    
    it('Matches snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
