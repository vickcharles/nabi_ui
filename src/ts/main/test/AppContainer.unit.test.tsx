import * as React from 'react';
import AppContainer from '../components/AppContainer';
import { MemoryRouter } from 'react-router-dom';
import { shallow } from 'enzyme';

describe('AppContainer', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(
      <MemoryRouter>
        <AppContainer />
      </MemoryRouter>
    ).find(AppContainer).dive();
  });

  it('Renders the component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
