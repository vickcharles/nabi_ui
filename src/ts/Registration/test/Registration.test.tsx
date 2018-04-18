import * as React from 'react';
import { Registration } from '../';
import { shallow } from 'enzyme';
import { UserState } from '../model';
import { InstructorState } from '../../ProfileBuilder/model';

describe('Registration', () => {
  let wrapper: any;
  const createUser: (user: UserState) => {} = jest.fn();
  const createInstructor: (instructor: InstructorState) => {} = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <Registration 
        createUser={createUser}
        createInstructor={createInstructor}
      />
    );
  });

  it('Matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('Method handleChange()', () => {
    function test_handleChange(name: string, value: string): void {
      describe( 'When the event contains ' + name + ' for name and ' + value + ' for value', () => {
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

  describe('Method handleSubmit()', () => {
    beforeEach(() => {
      wrapper.instance().handleSubmit();
    });

    it('Calls createUser', () => {
      expect(createUser).toBeCalled();
    });

    it('Fires redirect()', () => {
      expect(wrapper.state('fireRedirect')).toBeTruthy();
    });
  });
});
