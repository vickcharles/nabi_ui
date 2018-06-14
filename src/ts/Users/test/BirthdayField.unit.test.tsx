import * as React from 'react';
import BirthDayField from '../components/BirthdayField';
import { mount } from 'enzyme';

describe('BirthdayField', () => {
  let wrapper: any;
  const bdChange = jest.fn();

  beforeEach(() => {
    wrapper = mount(
      <BirthDayField
        onChange={bdChange}
        id="birthday"
        delimiter="/"
        minAge={13}
        classes={{}}
      />
    );
  });
  it('Birthday with valid input', () => {

    const monthEvent = {
      target: { value: 'Ja' },
      preventDefualt: () => jest.fn(),
      stopPropagation: () => jest.fn()
    };
    const dayEvent = {
      target: { value: '28' },
      preventDefualt: () => jest.fn(),
      stopPropagation: () => jest.fn()
    };
    const yearEvent = {
      target: { value: '1984' },
      preventDefualt: () => jest.fn(),
      stopPropagation: () => jest.fn()
    };
    
    wrapper.find('#month').simulate('focus');
    wrapper.find('#month').simulate('change', monthEvent);
    wrapper.find('#month').simulate('blur');
    wrapper.find('#day').simulate('focus');
    wrapper.find('#day').simulate('change', dayEvent);
    wrapper.find('#day').simulate('blur');
    wrapper.find('#year').simulate('focus');
    wrapper.find('#year').simulate('change', yearEvent);
    wrapper.find('#year').simulate('blur');

    expect(bdChange).toBeCalledWith(
      {
        day: '28',
        month: '1',
        year: '1984'
      }, 
      false
    );
  });

  it('Birthday with invalid input', () => {

    const monthEvent = {
      target: { value: 'Ja' },
      preventDefualt: () => jest.fn(),
      stopPropagation: () => jest.fn()
    };
    const dayEvent = {
      target: { value: '28' },
      preventDefualt: () => jest.fn(),
      stopPropagation: () => jest.fn()
    };
    const yearEvent = {
      target: { value: '2014' },
      preventDefualt: () => jest.fn(),
      stopPropagation: () => jest.fn()
    };

    wrapper.find('#month').simulate('focus');
    wrapper.find('#month').simulate('change', monthEvent);
    wrapper.find('#month').simulate('blur');
    wrapper.find('#day').simulate('focus');
    wrapper.find('#day').simulate('change', dayEvent);
    wrapper.find('#day').simulate('blur');
    wrapper.find('#year').simulate('focus');
    wrapper.find('#year').simulate('change', yearEvent);
    wrapper.find('#year').simulate('blur');

    expect(wrapper.state('hasError')).toEqual(true);
  });

});