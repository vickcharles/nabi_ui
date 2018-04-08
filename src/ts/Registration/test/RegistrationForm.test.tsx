import * as React from 'react';
import RegistrationForm from '../components/RegistrationForm';
import { mount, shallow } from 'enzyme';

describe('RegistrationForm', () => {
  let wrapper: any;
  const handleChange: () => void = jest.fn();
  const handleSubmit: () => void = jest.fn();

  describe('Mount', () => {
    beforeEach(() => {
      wrapper = mount(
        <RegistrationForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          hearAboutUs=""
          selectedRole=""
        />
      );
    });
  });

  describe('Shallow', () => {
    beforeEach(() => {
      wrapper = shallow(
        <RegistrationForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          hearAboutUs=""
          selectedRole=""
        />
      );
    });
    
    it('Matches snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
