import * as React from 'react';
import Header from '../components/Header';
import { MemoryRouter } from 'react-router-dom';
import { shallow } from 'enzyme';

describe('Header', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    ).find(Header).dive();
  });

  it('Renders the component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
