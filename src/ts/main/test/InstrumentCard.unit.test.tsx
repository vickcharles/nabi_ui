import * as React from 'react';
import InstrumentCard from '../components/Homepage/InstrumentCard';
import { shallow } from 'enzyme';

describe('PopularInstruments', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(
      <InstrumentCard
        id=""
        index={0}
        image=""
        instrument=""
        instructors={0}
      />
    );
  });

  it('Renders the component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
