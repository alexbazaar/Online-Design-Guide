jest.unmock('./PasswordField');

import React from 'react';
import { mount, render } from 'enzyme';

import PasswordField from './PasswordField';
import Checkbox from '../Checkbox';

describe('PasswordField', () => {

  let wrapper = null;


  beforeEach(() => {
    wrapper = mount(<PasswordField id="id" hasToggle />);
  });

  it('is defined', () => {
    expect(wrapper).toBeDefined();
  });

  it('should default to type = \'password\' a value property', () => {
    const fieldType = 'password';
    wrapper = mount(<PasswordField id="id" />);
    const testType = wrapper.find('input').props().type;
    expect(testType).toBe(fieldType);
  });

  it('handles Show/Hide field type event', () => {
    const labelOn = 'show',
          labelOff = 'hide';
    wrapper = mount(<PasswordField id="id" hasToggle toggleLabelOn={labelOn} toggleLabelOff={labelOff} />);
    //checks if show/hide checkbox exists
    expect(wrapper.find('.checkbox').exists()).toBe(true);
    // Show passoword field value
    wrapper.find('.checkbox').simulate('click');
    wrapper.find('.checkbox').simulate('blur');
    expect(wrapper.find('.passwordField input').props().type).toBe('text');
    expect(wrapper.find('.checkbox').props().value).toBe(labelOff);
    // Hide password field value
    wrapper.find('.checkbox').simulate('click');
    wrapper.find('.checkbox').simulate('blur');
    expect(wrapper.find('.passwordField input').props().type).toBe('password');
    expect(wrapper.find('.checkbox').props().value).toBe(labelOn);
  });
});
