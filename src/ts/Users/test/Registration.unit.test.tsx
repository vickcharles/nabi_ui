import * as React from 'react';
import { Registration } from '../';
import { shallow } from 'enzyme';
import { UserState } from '../model';
import { InstructorType } from '../../Instructors/model';
import * as moment from 'moment';

const mockMoment: moment.Moment = moment('2018-06-20T15:19:25.000Z');

describe('Registration', () => {
  let wrapper: any;
  const createUser: (user: UserState) => {} = jest.fn();
  const createInstructor: (instructor: InstructorType) => {} = jest.fn();
  const searchZipCode: (user: UserState) => {} = jest.fn();
  const displayAgeDisclaimer = jest.spyOn(Registration.prototype, 'displayAgeDisclaimer');
  Date.now = jest.fn(() => 1487076708000);

  beforeEach(() => {
    wrapper = shallow(
      <Registration
        createUser={createUser}
        createInstructor={createInstructor}
        searchZipCode={searchZipCode}
      />
    );
  });

  it('Matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('Method handleChange()', () => {
    function test_handleChange(name: string, value: string): void {
      describe('When the event contains ' + name + ' for name and ' + value + ' for value', () => {
        beforeEach(() => {
          const event = {
            target: {
              name: name,
              value: value
            }
          };
          wrapper.instance().handleChange(event);
        });

        it('Sets the state\'s ' + name + ' to ' + value, () => {
          expect(wrapper.state(name)).toBe(value);
        });
      });
    }

    test_handleChange('firstName', 'Foo');
    test_handleChange('lastName', 'Bar');
    test_handleChange('email', 'Foobar');
    test_handleChange('pass', 'Elit');
    test_handleChange('zipcode', 'Quz');
    test_handleChange('email', 'Ore');
  });

  describe('Method handleBirthdayChange()', () => {
    beforeEach(() => {
      wrapper.instance().handleBirthdayChange(mockMoment);
    });

    it('Sets the birthday state', () => {
      expect(wrapper.state('birthday')).toEqual(mockMoment);
    });
  });

  describe('Method displayAgeDisclaimer()', () => {
    describe('When the user is 17 years old or younger', () => {
      beforeEach(() => {
        wrapper.setState({birthday: mockMoment});
        wrapper.instance().displayAgeDisclaimer();
      });

      it('Displays age disclaimer', () => {
        expect(wrapper.state('openModal')).toBeTruthy();
      });
    });

    describe('When the user is 18 years old or older', () => {
      const mockMomentYoung: moment.Moment = moment('1990-06-20T15:19:25.000Z');
      beforeEach(() => {
        wrapper.setState({birthday: mockMomentYoung});
        wrapper.instance().displayAgeDisclaimer();
      });

      it('Does not display age disclaimer', () => {
        expect(wrapper.state('openModal')).toBeFalsy();
      });
    });
  });

  describe('Method handleSubmit()', () => {
    beforeEach(() => {
      wrapper.instance().handleSubmit();
    });

    it('Calls displayAgeDisclaimer', () => {
      expect(displayAgeDisclaimer).toBeCalled();
    });

    it('Calls createUser', () => {
      expect(createUser).toBeCalled();
    });
  });
});
