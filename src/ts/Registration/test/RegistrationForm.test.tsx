import * as React from 'react';
import RegistrationForm from '../components/RegistrationForm';
import { mount, shallow } from 'enzyme';
import { Role } from '../model';
// import Select from 'material-ui/Select';

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

    describe('When selectedRole is set to ' + Role.student, () => {
      beforeEach(() => {
        wrapper.setProps({ selectedRole: Role.student });
      });

      it('Text contains \'Register as a student\'', () => {
        expect(
          wrapper
            .find('aside')
            .at(0)
            .text()
        ).toEqual('Register as a student');
      });

      it('Contains two <Select />', () => {
        expect(wrapper.find('fieldset')).toHaveLength(2);
      });
    });

    describe('When selectedRole is set to ' + Role.parent, () => {
      beforeEach(() => {
        wrapper.setProps({ selectedRole: Role.parent });
      });

      it('Text contains \'Register as a parent\'', () => {
        expect(
          wrapper
            .find('aside')
            .at(0)
            .text()
        ).toEqual('Register as a parent');
      });

      it('Contains two <Select />', () => {
        expect(wrapper.find('fieldset')).toHaveLength(2);
      });
    });
    
    describe('When selectedRole is set to ' + Role.instructor, () => {
      beforeEach(() => {
        wrapper.setProps({ selectedRole: Role.instructor });
      });

      it('Text contains \'Register as an instructor\'', () => {
        expect(
          wrapper
            .find('aside')
            .at(0)
            .text()
        ).toEqual('Register as an instructor');
      });

      it('Contains two <Select />', () => {
        expect(wrapper.find('fieldset')).toHaveLength(1);
      });
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
