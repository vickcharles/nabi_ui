import * as React from 'react';
import EducationAdded from '../components/ProfileBuilder/Education/EducationAdded';
import { shallow } from 'enzyme';
import { DegreeType } from '../model';

describe('EducationAdded', () => {
  let wrapper: any;
  const deleteEducation: () => void = jest.fn();

  describe('Shallow', () => {
    beforeEach(() => {
      wrapper = shallow(
        <EducationAdded
          deleteEducation={deleteEducation}
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
