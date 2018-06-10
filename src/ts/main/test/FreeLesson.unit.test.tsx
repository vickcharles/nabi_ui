import * as React from 'react';
import FreeLesson from '../components/FreeLesson';
import { shallow } from 'enzyme';

describe('FreeLesson', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(
      <FreeLesson />
    );
  });

  it('Renders the component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
