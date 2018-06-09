import * as React from 'react';
import Availability from '../components/ProfileBuilder/BasicInfo/Availability';
import { shallow } from 'enzyme';

describe('Availability', () => {
  let wrapper: any = null;
  const updateInstructor = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <Availability userId="" updateInstructor={updateInstructor} />
    );
  });

  it('Renders the component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  // NOTE: this is a temporary test
  describe('Method toggleAvailability()', () => {
    beforeEach(() => {
      wrapper.instance().toggleAvailability();
    });

    it('Calls updateInstructor', () => {
      expect(updateInstructor).toBeCalled();
    });
  });

  // NOTE: the test below is closer to a more thorough test for the toggleAvailability method
  // of the availability component
  // describe('Method toggleAvailability()', () => {
  //   function test_toggleAvailability(dayTime: string, currentState: boolean, toggledState: boolean): void {
  //     beforeEach(() => {
  //       wrapper.setState({
  //         dayTime: currentState,
  //       });
  //       wrapper.instance().toggleAvailability(dayTime);
  //     });
    
  //     it(`Sets the state's ${dayTime} to ${toggledState}`, () => {
  //       expect(wrapper.state().dayTime).toEqual(toggledState);
  //     });

  //     it('Calls updateInstructor', () => {
  //       expect(updateInstructor).toBeCalled();
  //     });
  //   }
  //   test_toggleAvailability('monEarlyMorning', false, true);
  //   test_toggleAvailability('monEMorning', true, false);
  // });
});
