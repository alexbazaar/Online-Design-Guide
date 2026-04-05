jest.unmock('./Breadcrumbs');
jest.unmock('./BreadcrumbItem');

import React from 'react';
import { mount } from 'enzyme';

import Breadcrumbs from './Breadcrumbs';
import BreadcrumbItem from './BreadcrumbItem';

describe('Breadcrumbs', () => {

  beforeEach(() => {
    wrapper = mount(
      <Breadcrumbs />
    );
  });

  it.skip('is defined', () => {
    expect(wrapper).toBeDefined();
  });

});
