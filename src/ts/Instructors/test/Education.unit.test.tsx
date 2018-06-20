import * as React from 'react';
import { Education } from '../components/ProfileBuilder/Education/Education';
import { shallow } from 'enzyme';
import { InstructorType, DegreeType } from '../model';

describe('Education', () => {
  let wrapper: any;
  const updateInstructor: (instructor: InstructorType) => {} = jest.fn();
  const updateInstructorCall = jest.spyOn(Education.prototype, 'updateInstructorCall');
  const clearEducation = jest.spyOn(Education.prototype, 'clearEducation');

  describe('Shallow', () => {
    beforeEach(() => {
      wrapper = shallow(
        <Education userId="" updateInstructor={updateInstructor} />
      );
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

    test_handleChange('schoolName', 'UMass Boston');
    test_handleChange('graduationYear', 2012);
  });

  describe('Method addEducation()', () => {
    describe('When id, schoolName, graduationYear, degreeType and fieldStudy state are missing', () => {
      beforeEach(() => {
        wrapper.instance().addEducation();
      });

      it('Does not add education()', () => {
        expect(wrapper.state('education').length).toBe(0);
      });

      it('Does not call updateInstructorCall', () => {
        expect(updateInstructorCall).not.toBeCalled();
      });
    });

    describe('When id, schoolName, graduationYear, degreeType and fieldStudy state are defined', () => {
      beforeEach(() => {
        wrapper.setState({
          schoolName: 'UmassBoston',
          graduationYear: '2012',
          degreeType: DegreeType.bachelors,
          fieldOfStudy: 'Music',
        });
        wrapper.instance().addEducation();
      });

      it('Adds education()', () => {
        expect(wrapper.state('education').length).toBe(1);
      });

      it('Calls updateInstructorCall', () => {
        expect(updateInstructorCall).toBeCalled();
      });

      it('Calls clearEducation', () => {
        expect(clearEducation).toBeCalled();
      });
    });
  });

  describe('Method clearEducation()', () => {
    beforeEach(() => {
      wrapper.instance().clearEducation();
    });

    it('Clears education', () => {
      expect(wrapper.state('schoolName')).toBe('');
      expect(wrapper.state('graduationYear')).toBe('');
      expect(wrapper.state('degreeType')).toBe(DegreeType.bachelors);
      expect(wrapper.state('fieldOfStudy')).toBe('');
    });
  });

  describe('Method deleteEducation()', () => {
    beforeEach(() => {
      wrapper.instance().deleteEducation();
    });

    it('Calls updateInstructorCall', () => {
      expect(updateInstructorCall).toBeCalled();
    });
  });
});
