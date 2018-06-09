import * as React from 'react';
import ExperienceAdded from '../components/ProfileBuilder/Experience/ExperienceAdded';
import { shallow } from 'enzyme';

describe('ExperienceAdded', () => {
  let wrapper: any;
  const deleteExperience: () => void = jest.fn();

  describe('Shallow', () => {
    beforeEach(() => {
      wrapper = shallow(
        <ExperienceAdded
          employer="Oracle"
          jobTitle="Software Engineer"
          fromMonth="sep"
          fromYear="2017"
          toMonth="sep"
          toYear="2018"
          location="Cambridge, MA"
          deleteExperience={deleteExperience}
        />
      );
    });
    
    it('Matches snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
