import * as React from 'react';
import { shallow } from 'enzyme';
import { BasicInfo } from '../components/ProfileBuilder/BasicInfo/BasicInfo';
import { Role, UserState } from '../../Users/model';

describe('BasicInfo', () => {
  let wrapper: any;
  const updateInstructor = jest.fn();
  const updateInstructorCall = jest.spyOn(BasicInfo.prototype, 'updateInstructorCall');
  const updateUser = jest.fn();
  const changeAvatar: (email: string, avatar: string) => {} = jest.fn();

  const mockUser: UserState = {
    id: '',
    firstName: 'foo',
    lastName: 'bar',
    email: 'oreo',
    password: '',
    zipCode: '',
    role: Role.instructor,
    hearAboutUs: '',
    displayName: ''
  };

  beforeEach(() => {
    wrapper = shallow(
      <BasicInfo 
        user={mockUser}
        changeAvatar={changeAvatar}
        updateInstructor={updateInstructor}
        updateUser={updateUser}
      />
    );
  });

  it('Matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('Method handleChange()', () => {
    function test_handleChange(theName: string, theValue: string): void {
      describe(`When the event contains ${theName} for name and ${theValue} for value`, () => {
        beforeEach(() => {
          const e = {
            target: {
              name: theName,
              value: theValue
            }
          };

          wrapper.instance().handleChange(e);
        });

        it(`Sets the state's ${theName} to ${theValue}`, () => {
          expect(wrapper.state(theName)).toBe(theValue);
        });
      });
    }

    test_handleChange('bio', 'yo naci en esta rivera');
    test_handleChange('displayName', 'La Va');
    test_handleChange('instrument', 'Piano');
  });

  describe('Method handleBlurBio()', () => {
    beforeEach(() => {
      wrapper.instance().handleBlurBio();
    });

    it('Calls updateInstructor', () => {
      expect(updateInstructor).toBeCalled();
    });
  });

  describe('Method updateName()', () => {
    beforeEach(() => {
      wrapper.instance().updateName();
    });

    it('Calls updateUser', () => {
      expect(updateUser).toBeCalled();
    });
  });

  describe('Method addInstrument()', () => {
    beforeEach(() => {
      wrapper.instance().addInstrument();
    });

    it('Calls updateInstructorCall', () => {
      expect(updateInstructorCall).toBeCalled();
    });
  });

  describe('Method deleteInstrument()', () => {
    beforeEach(() => {
      wrapper.instance().deleteInstrument();
    });

    it('Calls updateInstructorCall', () => {
      expect(updateInstructorCall).toBeCalled();
    });
  });

  describe('Method updateRates()', () => {
    beforeEach(() => {
      wrapper.instance().updateRates();
    });

    it('Calls updateInstructorCall', () => {
      expect(updateInstructorCall).toBeCalled();
    });
  });

  describe('Method handleChangePlaceForLessons()', () => {
    function test_handleChange(theName: string, checkedValue: boolean): void {
      describe(`When the event contains ${theName} for name and ${checkedValue} for value`, () => {
        beforeEach(() => {
          const e = {
            target: {
              name: theName,
              checked: checkedValue
            }
          };

          wrapper.instance().handleChangePlaceForLessons(e);
        });

        it(`Sets the state's ${theName} to ${checkedValue}`, () => {
          expect(wrapper.state(theName)).toBe(checkedValue);
        });
      });
    }

    test_handleChange('online', true);
    test_handleChange('home', false);
    test_handleChange('bio', true);
  });

  describe('Method updateStudioAddress()', () => {
    beforeEach(() => {
      wrapper.instance().updateStudioAddress();
    });

    it('Calls updateInstructorCall', () => {
      expect(updateInstructorCall).toBeCalled();
    });
  });
});
