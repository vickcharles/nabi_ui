import * as React from 'react';
import { shallow } from 'enzyme';
import { Dispatch } from 'redux';

import { BasicInfo } from '../components/BasicInfo/BasicInfo';
import { Role, UserState } from '../../Registration/model';

describe('BasicInfo', () => {
  let wrapper: any;
  let dispatch: Dispatch<{}>;

  const mockUser: UserState = {
    id: '',
    firstName: 'foo',
    lastName: 'bar',
    email: 'oreo',
    password: '',
    zipCode: '',
    role: Role.instructor,
    hearAboutUs: ''
  };

  beforeEach(() => {
    wrapper = shallow(
      <BasicInfo 
        user={mockUser}
        dispatch={dispatch}
      />
    );
  });

  it('Matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  
  describe('Method handleChangeBio()', () => {
    beforeEach(() => {
      const e = {
        target: {
          name: 'bio',
          value: 'yo naci en esta rivera'
        }
      };
      wrapper.instance().handleChangeBio(e);
    });

    it('Sets the state\'s bio to \'yo naci en esta rivera\'', () => {
      expect(wrapper.state('bio')).toBe('yo naci en esta rivera');
    });
  });
});
