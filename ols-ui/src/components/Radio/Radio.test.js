jest.unmock('./Radio');

import React from 'react';
import { mount } from 'enzyme';

import Radio from './Radio';

describe('Radio', () => {

  let wrapper = null;
  let id = 0;
  const label = 'label goes here';


  beforeEach(() => {
    wrapper = mount(<Radio id={(id++).toString()} label={label} />);
  });

  it('is defined', () => {
    expect(wrapper).toBeDefined();
  });

  it('renders the label text correctly', () => {
    const labelElement = wrapper.find('label');
    expect(labelElement.text()).toBe(label);
  });

  it('has an id attribute', () => {
    expect(typeof wrapper.find('input').props().id).toBe('string');
  });

  it('has a matching id and htmlFor attributes', () => {
    const inputId = wrapper.find('input').props().id;
    const labelHtmlFor = wrapper.find('label').props().htmlFor;
    expect(labelHtmlFor).toBe(inputId);
  });

  it('has a default value property', () => {
    const id = wrapper.find('input').props().id;
    const value = wrapper.find('input').props().value;
    expect(value).toBe(id);
  });

  it('accepts a value property', () => {
    const testValue = 'testing';
    wrapper = mount(<Radio id={(id++).toString()} value={testValue} label={label} />);
    const inputValue = wrapper.find('input').props().value;
    expect(inputValue).toBe(testValue);
  });

  it('has a default name property', () => {
    const inputName = wrapper.find('input').props().name;
    expect(inputName).toBe('radios');
  });

  it('accepts a name property', () => {
    const testValue = 'testing';
    wrapper = mount(<Radio id={(id++).toString()} name={testValue} label={label} />);
    const inputName = wrapper.find('input').props().name;
    expect(inputName).toBe(testValue);
  });

  it('has is not checked by default', () => {
    const inputChecked = wrapper.find('input').props().defaultChecked;
    expect(inputChecked).toBe(false);
  });

  it('accepts the defaultChecked property', () => {
    wrapper = mount(<Radio id={(id++).toString()} defaultChecked label={label} />);
    const inputChecked = wrapper.find('input').props().defaultChecked;
    expect(inputChecked).toBe(true);
  });
});
