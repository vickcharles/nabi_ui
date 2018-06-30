import * as React from 'react';
import PopularInstruments from '../components/Homepage/PopularInstruments';
import { shallow } from 'enzyme';

describe('PopularInstruments', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(
      <PopularInstruments/>
    );
  });

  it('Renders the component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
