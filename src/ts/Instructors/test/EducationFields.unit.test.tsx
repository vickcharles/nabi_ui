import * as React from 'react';
import EducationFields from '../components/Education/EducationFields';
import { shallow } from 'enzyme';

import { DegreeType } from '../model';

describe('EducationFields', () => {
  let wrapper: any;
  const handleChange: () => void = jest.fn();
  const addEducation: () => void = jest.fn();

  describe('Shallow', () => {
    beforeEach(() => {
      wrapper = shallow(
        <EducationFields
          handleChange={handleChange}
          addEducation={addEducation}
          schoolName=""
          graduationYear=""
          degreeType={DegreeType.bachelors}
          fieldOfStudy=""
        />
      );
    });
    
    it('Matches snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
