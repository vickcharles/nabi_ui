import * as React from 'react';
import Drawer from '../components/Drawer';
import { MemoryRouter } from 'react-router-dom';
import { shallow } from 'enzyme';

describe('Drawer', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(
      <MemoryRouter>
        <Drawer />
      </MemoryRouter>
    ).find(Drawer).dive();
  });

  it('Renders the component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
