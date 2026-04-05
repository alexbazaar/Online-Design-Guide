jest.unmock('./Checklist');
jest.unmock('./ChecklistItem');

import React from 'react';
import { shallow } from 'enzyme';

import Checklist from './Checklist';
import ChecklistItem from './ChecklistItem';

describe('Checklist', () => {

  let wrapper = null;

  beforeEach(() => {
    wrapper = shallow(
      <Checklist>
        <ChecklistItem>item1</ChecklistItem>
        <ChecklistItem>item2</ChecklistItem>
        <ChecklistItem>item3</ChecklistItem>
      </Checklist>
    );
  });

  it('is defined', () => {
    expect(wrapper).toBeDefined();
  });

  it('is a ul element', () => {
    expect(wrapper.type()).toEqual('ul');
  });
});
