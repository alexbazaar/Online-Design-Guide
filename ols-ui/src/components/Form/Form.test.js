jest.unmock('./Form');

import React from 'react';
import { mount } from 'enzyme';

import Form from './Form';
import FieldSet from '../FieldSet';
import Checkbox from '../Checkbox';

describe('Form', () => {

  let wrapper = null;
  const testId = 'form-id',
        legend = 'Legend test',
        name = 'Name test';

  beforeEach(() => {
    wrapper = mount(
      <Form id={testId}>
        <FieldSet legend={legend} name={name}>
          <Checkbox label="Option 1" />
          <Checkbox label="Option 2" />
        </FieldSet>
      </Form>
    );
  });

  it('is defined', () => {
    expect(wrapper).toBeDefined();
  });

  it('renders the legend', () => {
    expect(wrapper.find('legend').text()).toBe(legend);
  });

  it('makes sure children rendered w/ correct name attribute', () => {
    const children = wrapper.find('input');
    expect(children.length).toBe(2);
    children.forEach((child) => {
      expect(child.props().name).toBe(name);
    });    
  });
});
