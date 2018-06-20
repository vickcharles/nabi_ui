import * as React from 'react';
import { Qualifications } from '../components/ProfileBuilder/Qualifications/Qualifications';
import { shallow } from 'enzyme';
import { InstructorType } from '../model';
import { UserState } from '../../Users/model';

describe('Qualifications', () => {
  let wrapper: any;
  const updateInstructor: (instructor: InstructorType) => {} = jest.fn();
  const updateUser: (user: UserState) => {} = jest.fn();
  const updateInstructorCall = jest.spyOn(Qualifications.prototype, 'updateInstructorCall');

  describe('Shallow', () => {
    beforeEach(() => {
      wrapper = shallow(
        <Qualifications
          userId=""
          updateInstructor={updateInstructor}
          updateUser={updateUser}
        />
      );
    });

    it('Matches snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('Method handleChangeQualifications()', () => {
    function test_handleChangeQualifications(theName: string, theValue: boolean): void {
      describe(`When the event contains ${theName} for name and ${theValue} for value`, () => {
        beforeEach(() => {
          const e = {
            target: {
              name: theName,
              checked: theValue
            }
          };

          wrapper.instance().handleChangeQualifications(e);
        });

        it(`Sets the state's ${theName} to ${theValue}`, () => {
          expect(wrapper.state(theName)).toBe(theValue);
        });

        it('Call updateInstructorCall', () => {
          expect(updateInstructorCall).toBeCalled();
        });
      });
    }

    test_handleChangeQualifications('schoolName', true);
    test_handleChangeQualifications('graduationYear', false);
  });
});
