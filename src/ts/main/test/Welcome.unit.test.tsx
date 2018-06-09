import * as React from 'react';
import Welcome from '../components/Welcome';
import { shallow } from 'enzyme';

describe('Welcome', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(
      <Welcome 
        welcomeText=""
        actionText=""
        actionUrl=""
      />
    );
  });

  it('Renders the component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
