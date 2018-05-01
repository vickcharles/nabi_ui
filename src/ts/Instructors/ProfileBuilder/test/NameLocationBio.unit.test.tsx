import * as React from 'react';
import { shallow } from 'enzyme';

import { NameLocationBio } from '../components/BasicInfo/NameLocationBio/NameLocationBio';
import { Role, UserState } from '../../../Users/model';

describe('NameLocationBio', () => {
  let wrapper: any;
  // const updateUser: (user: UserState) => {} = jest.fn();
  const bioChange: () => {} = jest.fn();
  const bioBlur: () => {} = jest.fn();
  const closeModal = jest.spyOn(NameLocationBio.prototype, 'closeModal');
  const updateName: () => {} = jest.fn();
  const handleChange: () => {} = jest.fn();

  const user: UserState = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    zipCode: '',
    role: Role.instructor,
    hearAboutUs: '',
    displayName: '', 
  };

  beforeEach(() => {
    wrapper = shallow(
      <NameLocationBio 
        user={user}
        bioChange={bioChange}
        bioBlur={bioBlur}
        displayName=""
        updateName={updateName}
        handleChange={handleChange}
      />
    );
  });

  it('Matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('Method highlightedClass()', () => {
    function test_highlightedClass(hoveredState: boolean, cssClass: string): void {
      describe('When the hovered state is set to true', () => {
        beforeEach(() => {
          wrapper.setState({ hovered: hoveredState });
        });

        it('Returns css class ' + cssClass, () => {
          expect(wrapper.instance().highlightedClass()).toEqual(cssClass);
        });
      });
    }
    test_highlightedClass(true, 'nabi-highlighted-text');
    test_highlightedClass(false, '');
  });

  describe('Method onMouseOver()', () => {
    beforeEach(() => {
      wrapper.instance().onMouseOver();
    });

    it('Sets hovered state to true', () => {
      expect(wrapper.state('hovered')).toBeTruthy();
    });
  });

  describe('Method onMouseOut()', () => {
    beforeEach(() => {
      wrapper.instance().onMouseOut();
    });

    it('Sets hovered state to false', () => {
      expect(wrapper.state('hovered')).toBeFalsy();
    });
  });

  describe('Method closeModal()', () => {
    beforeEach(() => {
      wrapper.instance().closeModal();
    });

    it('Closes modal', () => {
      expect(wrapper.state('isModalOpenEditName')).toBeFalsy();
    });
  });

  describe('Method handleSubmit()', () => {
    beforeEach(() => {
      wrapper.instance().handleSubmit();
    });

    it('Updates name', () => {
      expect(updateName).toBeCalled();
    });

    it('Calls closeModal()', () => {
      expect(closeModal).toBeCalled();
    });
  });
});
