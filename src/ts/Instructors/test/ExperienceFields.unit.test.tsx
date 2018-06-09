import * as React from 'react';
import ExperienceFields from '../components/ProfileBuilder/Experience/ExperienceFields';
import { shallow } from 'enzyme';

describe('ExperienceFields', () => {
  let wrapper: any;
  const handleChange: () => void = jest.fn();
  const addExperience: () => void = jest.fn();

  describe('Shallow', () => {
    beforeEach(() => {
      wrapper = shallow(
        <ExperienceFields
          handleChange={handleChange}
          addExperience={addExperience}
          employer="Oracle"
          jobTitle="Software Engineer"
          fromMonth="sep"
          fromYear="2017"
          toMonth="sep"
          toYear="2018"
          location="Cambridge, MA"
        />
      );
    });
    
    it('Matches snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
