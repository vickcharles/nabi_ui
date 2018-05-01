import * as React from 'react';
import EditName from '../components/BasicInfo/NameLocationBio/EditName';
import { mount, shallow } from 'enzyme';

describe('EditName', () => {
  let wrapper: any;
  const closeHandler: () => void = jest.fn();
  const handleChange: () => void = jest.fn();
  const handleSubmit: () => void = jest.fn();

  describe('Mount', () => {
    beforeEach(() => {
      wrapper = mount(
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
  });

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
