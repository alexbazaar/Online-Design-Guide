jest.unmock('./SignInForm');

import React from 'react';
import { mount } from 'enzyme';

import SignInForm from './SignInForm';

describe('SignInForm', () => {

  beforeEach(() => {
    wrapper = mount(
      <SignInForm />
    );
  });

  it.skip('is defined', () => {
    expect(wrapper).toBeDefined();
  });

});
