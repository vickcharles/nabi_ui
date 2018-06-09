import * as React from 'react';
import EditName from '../components/ProfileBuilder/BasicInfo/NameLocationBio/EditName';
import { shallow } from 'enzyme';

describe('EditName', () => {
  let wrapper: any;
  const closeHandler: () => void = jest.fn();
  const handleChange: () => void = jest.fn();
  const handleSubmit: () => void = jest.fn();

  describe('Shallow', () => {
    beforeEach(() => {
      wrapper = shallow(
        <EditName
          firstName=""
          lastName=""
          isFormDialogOpen={false}
          closeHandler={closeHandler}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          displayName=""
        />
      );
    });
    
    it('Matches snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
