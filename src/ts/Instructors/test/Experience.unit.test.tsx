import * as React from 'react';
import { Experience } from '../components/ProfileBuilder/Experience/Experience';
import { shallow } from 'enzyme';
import { InstructorType } from '../model';

describe('Experience', () => {
  let wrapper: any;
  const updateInstructor: (instructor: InstructorType) => {} = jest.fn();
  const updateInstructorCall = jest.spyOn(Experience.prototype, 'updateInstructorCall');
  const clearExperience = jest.spyOn(Experience.prototype, 'clearExperience');

  describe('Shallow', () => {
    beforeEach(() => {
      wrapper = shallow(<Experience userId="" updateInstructor={updateInstructor} />);
    });
    
    it('Matches snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('Method handleChange()', () => {
    function test_handleChange(theName: string, theValue: any): void {
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

    test_handleChange('employer', 'Oracle');
    test_handleChange('jobTitle', 'Software Engineer');
  });

  describe('Method addExperience()', () => {
    describe('When id, employer, jobTitle, fromMonth, fromYear, toMonth, toYear and location state are missing', () => {
      beforeEach(() => {
        wrapper.instance().addExperience();
      });

      it('Does not add experience()', () => {
        expect(wrapper.state('experience').length).toBe(0);
      });
      
      it('Does not call updateInstructorCall', () => {
        expect(updateInstructorCall).not.toBeCalled();
      });
    });

    describe('When id, employer, jobTitle, fromMonth, fromYear, toMonth, toYear and location state are defined', () => {
      beforeEach(() => {
        wrapper.setState({
          employer: 'Oracle',
          jobTitle: 'Software Engineer',
          fromMonth: 'sep',
          fromYear: '2017',
          toMonth: 'sep',
          toYear: '2018',
          location: 'Cambridge, MA'
        });
        wrapper.instance().addExperience();
      });

      it('Adds experience()', () => {
        expect(wrapper.state('experience').length).toBe(1);
      });
      
      it('Calls updateInstructorCall', () => {
        expect(updateInstructorCall).toBeCalled();
      });

      it('Calls clearExperience', () => {
        expect(clearExperience).toBeCalled();
      });
    });
  });

  describe('Method clearExperience()', () => {
    beforeEach(() => {
      wrapper.instance().clearExperience();
    });

    it('Clears experience', () => {
      expect(wrapper.state('employer')).toBe('');
      expect(wrapper.state('jobTitle')).toBe('');
      expect(wrapper.state('fromMonth')).toBe('jan');
      expect(wrapper.state('fromYear')).toBe('');
      expect(wrapper.state('toMonth')).toBe('jan');
      expect(wrapper.state('toYear')).toBe('');
      expect(wrapper.state('location')).toBe('');
    });
  });

  describe('Method deleteExperience()', () => {
    beforeEach(() => {
      wrapper.instance().deleteExperience();
    });

    it('Calls updateInstructorCall', () => {
      expect(updateInstructorCall).toBeCalled();
    });
  });
});
