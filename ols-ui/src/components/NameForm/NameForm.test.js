jest.unmock('./NameForm');

import React from 'react';
import { mount } from 'enzyme';

import NameForm from './NameForm';

describe('NameForm', () => {

  let wrapper = null;
  const testId = 'form-id',
        formName = 'NameForm',
        legend = 'Legend test',
        fName = '#' + formName + '-firstName',
        lName = '#' + formName + '-lastName';

  beforeEach(() => {
    wrapper = mount(
      <NameForm id={testId} formTitle={legend} />
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
    expect(children.length).toBe(5);
  });

  it('makes sure correct required fields are rendered', () => {
    const requiredFields = wrapper.find('input'),
          requiredList = [];
    requiredFields.forEach((requiredField) => {
      if (requiredField.props().required) {
        requiredList.push(requiredField);
      }
    }); 
    expect(requiredList.length).toBe(2);
  });
});
