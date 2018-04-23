import * as React from 'react';
import EditName from '../components/BasicInfo/NameLocationBio/EditName';
import { mount, shallow } from 'enzyme';

describe('EditName', () => {
  let wrapper: any;
  const closeHandler: () => void = jest.fn();
  
  describe('Mount', () => {
    beforeEach(() => {
      wrapper = mount(
        <EditName
          firstName=""
          lastName=""
          isFormDialogOpen={false}
          closeHandler={closeHandler}
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
        />
      );
    });
    
    it('Matches snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
