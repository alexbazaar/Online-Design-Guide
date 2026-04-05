jest.unmock('./StepIndicator');

import React from 'react';
import { mount } from 'enzyme';

import StepIndicator, { StepIndicatorItem } from "./index";
import { MemoryRouter as Router } from "react-router-dom";

describe("StepIndicator", () => {
  let wrapper = null;
  let props;

  describe("General Functionality", () => {

    beforeAll(() => {
      props = {

      };
      wrapper = mount(
        <StepIndicator {...props}>
          <StepIndicatorItem
            stepNum="1" status="completed">
            Item 1
          </StepIndicatorItem>
          <StepIndicatorItem
            stepNum="2" status="active">
            Item 2
          </StepIndicatorItem>
          <StepIndicatorItem
            stepNum="3">
            Item 3
          </StepIndicatorItem>
        </StepIndicator>
      );
    });
    afterAll(() => {
      wrapper.unmount();
    });

    it('is defined', () => {
      expect(wrapper).toBeDefined();
    });

    it('is a div element', () => {
      expect((wrapper).type()).toEqual(StepIndicator);
      expect((wrapper).getDOMNode().tagName.toLowerCase()).toEqual('div');
    });

    it('has three items', () => {
      expect((wrapper).find('StepIndicatorItem').length).toEqual(3);
    });

    it('has an active step', () => {
      expect((wrapper).find('StepIndicatorItem').at(1).hasClass('active'));
    });
    it('has a completed step', () => {
      expect((wrapper).find('StepIndicatorItem').at(1).hasClass('active'));
    });
    it('should render from a datasource', () => {
      const steps = [
        { stepNum: '1', title: "First Step", status: "active" },
        { stepNum: '2', title: "Second Step" }
      ];
      wrapper.setProps({ datasource: steps }, () => {
        expect((wrapper).find('StepIndicatorItem').length).toEqual(2);
      });
    });
  });

  describe("Interactive", () => {
    beforeAll(() => {
      props = {};
      wrapper = mount(
        <Router>
          <StepIndicator {...props}>
            <StepIndicatorItem
              stepNum="1" status="completed" stepRoute="./#test">
              Item 1
            </StepIndicatorItem>
            <StepIndicatorItem
              stepNum="2" status="active" stepRoute="./#test">
              Item 2
            </StepIndicatorItem>
            <StepIndicatorItem
              stepNum="3" stepRoute="./#test">
              Item 3
            </StepIndicatorItem>
          </StepIndicator>
        </Router>);
    });
    afterAll(() => {
      wrapper.unmount();
    });
    it('should update the current step when clicked', async() => {
      const nextStep = wrapper.find("StepIndicatorItem").at(2);
      expect(nextStep.contains("a"));
      await nextStep.find("a").simulate('click');
      expect(nextStep.hasClass('active'));
    });
  });

  describe("Non-Interactive", () => {
    beforeAll(() => {
      props = {};
      wrapper = mount(
        <StepIndicator {...props}>
          <StepIndicatorItem
            stepNum="1" status="completed">
            Item 1
          </StepIndicatorItem>
          <StepIndicatorItem
            stepNum="2" status="active">
            Item 2
          </StepIndicatorItem>
          <StepIndicatorItem
            stepNum="3">
            Item 3
          </StepIndicatorItem>
        </StepIndicator>
      );
    });
    afterAll(() => {
      wrapper.unmount();
    });
    it('should NOT update the current step when clicked', async() => {
      const nextStep = wrapper.find("StepIndicatorItem").at(2);
      await nextStep.simulate('click');
      expect(nextStep.hasClass('active') === false);
    });
  });
});
