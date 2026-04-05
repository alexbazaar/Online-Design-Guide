import React from 'react';
import { shallow } from 'enzyme';
import FlexRow from './FlexRow';
import FlexCol from './FlexCol';

describe('FlexRow', () => {
  const wrapper = shallow(
    <FlexRow id="id" className="className">
      <FlexCol lg="4" md="6" sm="6">
        Foo
      </FlexCol>
      <FlexCol>
        Bar
      </FlexCol>
    </FlexRow>
  );

  it('is defined', () => {
    expect(wrapper).toBeDefined();
  });

  it('is a div with correct class', () => {
    expect(wrapper.is('div')).toBeTruthy();
    expect(wrapper.hasClass('row')).toBe(true);
    expect(wrapper.hasClass('align-items-start')).toBe(false);
    expect(wrapper.hasClass('align-items-center')).toBe(false);
    expect(wrapper.hasClass('align-items-end')).toBe(false);
    expect(wrapper.hasClass('justify-content-start')).toBe(false);
    expect(wrapper.hasClass('justify-content-center')).toBe(false);
    expect(wrapper.hasClass('justify-content-around')).toBe(false);
    expect(wrapper.hasClass('justify-content-between')).toBe(false);
  });

  it('accepts the id prop', () => {
    expect(wrapper.props().id).toBe('id');
  });

  it('accepts the className prop', () => {
    expect(wrapper.hasClass('className')).toBe(true);
  });

  it('accepts align=start', () => {
    const alignWrapper = shallow(
      <FlexRow align="start">
        <FlexCol lg="4" md="6" sm="6">
          Foo
        </FlexCol>
        <FlexCol>
          Bar
        </FlexCol>
      </FlexRow>
    );
    expect(alignWrapper.hasClass('row')).toBe(true);
    expect(alignWrapper.hasClass('align-items-start')).toBe(true);
    expect(alignWrapper.hasClass('align-items-center')).toBe(false);
    expect(alignWrapper.hasClass('align-items-end')).toBe(false);
    expect(alignWrapper.hasClass('justify-content-start')).toBe(false);
    expect(alignWrapper.hasClass('justify-content-center')).toBe(false);
    expect(alignWrapper.hasClass('justify-content-around')).toBe(false);
    expect(alignWrapper.hasClass('justify-content-between')).toBe(false);
  });

  it('accepts align=center', () => {
    const alignWrapper = shallow(
      <FlexRow align="center">
        <FlexCol lg="4" md="6" sm="6">
          Foo
        </FlexCol>
        <FlexCol>
          Bar
        </FlexCol>
      </FlexRow>
    );
    expect(alignWrapper.hasClass('row')).toBe(true);
    expect(alignWrapper.hasClass('align-items-start')).toBe(false);
    expect(alignWrapper.hasClass('align-items-center')).toBe(true);
    expect(alignWrapper.hasClass('align-items-end')).toBe(false);
    expect(alignWrapper.hasClass('justify-content-start')).toBe(false);
    expect(alignWrapper.hasClass('justify-content-center')).toBe(false);
    expect(alignWrapper.hasClass('justify-content-around')).toBe(false);
    expect(alignWrapper.hasClass('justify-content-between')).toBe(false);
  });

  it('accepts align=end', () => {
    const alignWrapper = shallow(
      <FlexRow align="end">
        <FlexCol lg="4" md="6" sm="6">
          Foo
        </FlexCol>
        <FlexCol>
          Bar
        </FlexCol>
      </FlexRow>
    );
    expect(alignWrapper.hasClass('row')).toBe(true);
    expect(alignWrapper.hasClass('align-items-start')).toBe(false);
    expect(alignWrapper.hasClass('align-items-center')).toBe(false);
    expect(alignWrapper.hasClass('align-items-end')).toBe(true);
    expect(alignWrapper.hasClass('justify-content-start')).toBe(false);
    expect(alignWrapper.hasClass('justify-content-center')).toBe(false);
    expect(alignWrapper.hasClass('justify-content-around')).toBe(false);
    expect(alignWrapper.hasClass('justify-content-between')).toBe(false);
  });

  it('accepts justify=start', () => {
    const alignWrapper = shallow(
      <FlexRow justify="start">
        <FlexCol lg="4" md="6" sm="6">
          Foo
        </FlexCol>
        <FlexCol>
          Bar
        </FlexCol>
      </FlexRow>
    );
    expect(alignWrapper.hasClass('row')).toBe(true);
    expect(alignWrapper.hasClass('align-items-start')).toBe(false);
    expect(alignWrapper.hasClass('align-items-center')).toBe(false);
    expect(alignWrapper.hasClass('align-items-end')).toBe(false);
    expect(alignWrapper.hasClass('justify-content-start')).toBe(true);
    expect(alignWrapper.hasClass('justify-content-center')).toBe(false);
    expect(alignWrapper.hasClass('justify-content-around')).toBe(false);
    expect(alignWrapper.hasClass('justify-content-between')).toBe(false);
  });

  it('accepts justify=center', () => {
    const alignWrapper = shallow(
      <FlexRow justify="center">
        <FlexCol lg="4" md="6" sm="6">
          Foo
        </FlexCol>
        <FlexCol>
          Bar
        </FlexCol>
      </FlexRow>
    );
    expect(alignWrapper.hasClass('row')).toBe(true);
    expect(alignWrapper.hasClass('align-items-start')).toBe(false);
    expect(alignWrapper.hasClass('align-items-center')).toBe(false);
    expect(alignWrapper.hasClass('align-items-end')).toBe(false);
    expect(alignWrapper.hasClass('justify-content-start')).toBe(false);
    expect(alignWrapper.hasClass('justify-content-center')).toBe(true);
    expect(alignWrapper.hasClass('justify-content-around')).toBe(false);
    expect(alignWrapper.hasClass('justify-content-between')).toBe(false);
  });

  it('accepts justify=around', () => {
    const alignWrapper = shallow(
      <FlexRow justify="around">
        <FlexCol lg="4" md="6" sm="6">
          Foo
        </FlexCol>
        <FlexCol>
          Bar
        </FlexCol>
      </FlexRow>
    );
    expect(alignWrapper.hasClass('row')).toBe(true);
    expect(alignWrapper.hasClass('align-items-start')).toBe(false);
    expect(alignWrapper.hasClass('align-items-center')).toBe(false);
    expect(alignWrapper.hasClass('align-items-end')).toBe(false);
    expect(alignWrapper.hasClass('justify-content-start')).toBe(false);
    expect(alignWrapper.hasClass('justify-content-center')).toBe(false);
    expect(alignWrapper.hasClass('justify-content-around')).toBe(true);
    expect(alignWrapper.hasClass('justify-content-between')).toBe(false);
  });

  it('accepts justify=between', () => {
    const alignWrapper = shallow(
      <FlexRow justify="between">
        <FlexCol lg="4" md="6" sm="6">
          Foo
        </FlexCol>
        <FlexCol>
          Bar
        </FlexCol>
      </FlexRow>
    );
    expect(alignWrapper.hasClass('row')).toBe(true);
    expect(alignWrapper.hasClass('align-items-start')).toBe(false);
    expect(alignWrapper.hasClass('align-items-center')).toBe(false);
    expect(alignWrapper.hasClass('align-items-end')).toBe(false);
    expect(alignWrapper.hasClass('justify-content-start')).toBe(false);
    expect(alignWrapper.hasClass('justify-content-center')).toBe(false);
    expect(alignWrapper.hasClass('justify-content-around')).toBe(false);
    expect(alignWrapper.hasClass('justify-content-between')).toBe(true);
  });
});
