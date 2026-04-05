jest.unmock('./AddressForm');

import React from 'react';
import { mount } from 'enzyme';

import AddressForm from './AddressForm';

describe('AddressForm', () => {

  let wrapper = null;
  const testId = 'form-id',
        formName = 'AddressForm',
        legend = 'Legend test';

  beforeEach(() => {
    wrapper = mount(
      <AddressForm id={testId} formTitle={legend} />
    );
  });

  it('is defined', () => {
    expect(wrapper).toBeDefined();
  });

  it('renders the legend', () => {
    expect(wrapper.find('legend').text()).toBe(legend);
  });

  it('makes sure input fields rendered', () => {
    const children = wrapper.find('input');
    expect(children.length).toBe(4);
  });

  it('makes sure state select field rendered', () => {
    const children = wrapper.find('select');
    expect(children.length).toBe(1);
  });

  it('makes sure correct required fields are rendered', () => {
    const requiredFields = wrapper.find('input'),
          requiredSelect = wrapper.find('select'),
          requiredList = [];
    requiredFields.forEach((requiredField) => {
      if (requiredField.props().required) {
        requiredList.push(requiredField);
      }
    });
    expect(requiredList.length).toBe(3);
    expect(requiredSelect.props().required).toBe(true);
  });

  it('handles onChange event for state field', () => {
    const testValue = 'AK';
    wrapper.find('select').simulate('change', { target: { value : testValue }});
    expect(wrapper.find('select').props().value).toBe(testValue);
  });
});
