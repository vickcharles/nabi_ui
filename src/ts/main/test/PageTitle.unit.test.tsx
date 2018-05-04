import * as React from 'react';
import PageTitle from '../components/PageTitle';
import { shallow } from 'enzyme';

describe('PageTitle', () => {
  let wrapper: any = null;

  beforeEach(() => {
    wrapper = shallow(
      <PageTitle pageTitle="Foo" />
    );
  });

  it('Renders the component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
