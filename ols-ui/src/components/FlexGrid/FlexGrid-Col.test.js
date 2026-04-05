import React from 'react';
import { shallow } from 'enzyme';
import FlexCol from './FlexCol';

describe('FlexCol', () => {
  const wrapper = shallow(
    <FlexCol id="id" className="className" xl="2" lg="4" md="6" sm="8" xs="10">
      <p>Foo</p>
    </FlexCol>
  );

  it('is defined', () => {
    expect(wrapper).toBeDefined();
  });

  it('is a div with correct class', () => {
    expect(wrapper.is('div')).toBeTruthy();
    expect(wrapper.hasClass('col-xl-2')).toBe(true);
    expect(wrapper.hasClass('col-lg-4')).toBe(true);
    expect(wrapper.hasClass('col-md-6')).toBe(true);
    expect(wrapper.hasClass('col-sm-8')).toBe(true);
    expect(wrapper.hasClass('col-10')).toBe(true);
    expect(wrapper.hasClass('align-self-start')).toBe(false);
    expect(wrapper.hasClass('align-self-center')).toBe(false);
    expect(wrapper.hasClass('align-self-end')).toBe(false);
    expect(wrapper.hasClass('offset-xl-2')).toBe(false);
    expect(wrapper.hasClass('offset-lg-2')).toBe(false);
    expect(wrapper.hasClass('offset-md-2')).toBe(false);
    expect(wrapper.hasClass('offset-sm-2')).toBe(false);
    expect(wrapper.hasClass('offset-2')).toBe(false);
    expect(wrapper.hasClass('pull-xl-2')).toBe(false);
    expect(wrapper.hasClass('pull-lg-2')).toBe(false);
    expect(wrapper.hasClass('pull-md-2')).toBe(false);
    expect(wrapper.hasClass('pull-sm-2')).toBe(false);
    expect(wrapper.hasClass('pull-2')).toBe(false);
    expect(wrapper.hasClass('push-xl-2')).toBe(false);
    expect(wrapper.hasClass('push-lg-2')).toBe(false);
    expect(wrapper.hasClass('push-md-2')).toBe(false);
    expect(wrapper.hasClass('push-sm-2')).toBe(false);
    expect(wrapper.hasClass('push-2')).toBe(false);
  });

  it('accepts the id prop', () => {
    expect(wrapper.props().id).toBe('id');
  });

  it('accepts the className prop', () => {
    expect(wrapper.hasClass('className')).toBe(true);
  });

  it('has correct class if no size is passed', () => {
    const noSizeWrapper = shallow(<FlexCol><p>Foo</p></FlexCol>);
    expect(noSizeWrapper.hasClass('col')).toBe(true);
  });

  it('accepts align prop', () => {
    const alignWrapper = shallow(<FlexCol alignSelf="center"><p>Foo</p></FlexCol>);
    expect(alignWrapper.hasClass('col')).toBe(true);
    expect(alignWrapper.hasClass('align-self-center')).toBe(true);
  });

  it('accepts offset prop', () => {
    const offsetWrapper = shallow(
      <FlexCol xlOffset="2" lgOffset="2" mdOffset="2" smOffset="2" xsOffset="2">
        <p>Foo</p>
      </FlexCol>);
    expect(offsetWrapper.hasClass('col')).toBe(true);
    expect(offsetWrapper.hasClass('offset-xl-2')).toBe(true);
    expect(offsetWrapper.hasClass('offset-lg-2')).toBe(true);
    expect(offsetWrapper.hasClass('offset-md-2')).toBe(true);
    expect(offsetWrapper.hasClass('offset-sm-2')).toBe(true);
    expect(offsetWrapper.hasClass('offset-2')).toBe(true);
  });

  it('accepts pull prop', () => {
    const pullWrapper = shallow(
      <FlexCol xlPull="2" lgPull="2" mdPull="2" smPull="2" xsPull="2">
        <p>Foo</p>
      </FlexCol>);
    expect(pullWrapper.hasClass('col')).toBe(true);
    expect(pullWrapper.hasClass('pull-xl-2')).toBe(true);
    expect(pullWrapper.hasClass('pull-lg-2')).toBe(true);
    expect(pullWrapper.hasClass('pull-md-2')).toBe(true);
    expect(pullWrapper.hasClass('pull-sm-2')).toBe(true);
    expect(pullWrapper.hasClass('pull-2')).toBe(true);
  });

  it('accepts push prop', () => {
    const pushWrapper = shallow(
      <FlexCol xlPush="2" lgPush="2" mdPush="2" smPush="2" xsPush="2">
        <p>Foo</p>
      </FlexCol>);
    expect(pushWrapper.hasClass('col')).toBe(true);
    expect(pushWrapper.hasClass('push-xl-2')).toBe(true);
    expect(pushWrapper.hasClass('push-lg-2')).toBe(true);
    expect(pushWrapper.hasClass('push-md-2')).toBe(true);
    expect(pushWrapper.hasClass('push-sm-2')).toBe(true);
    expect(pushWrapper.hasClass('push-2')).toBe(true);
  });
});
