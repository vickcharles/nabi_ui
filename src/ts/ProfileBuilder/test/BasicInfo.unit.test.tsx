import * as React from 'react';
import { BasicInfo } from '../components/BasicInfo/BasicInfo';
import { shallow } from 'enzyme';
import { Role, UserState } from '../../Registration/model';

describe('BasicInfo', () => {
  let wrapper: any;

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
        users={[]}
      />
    );
  });

  it('Matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
