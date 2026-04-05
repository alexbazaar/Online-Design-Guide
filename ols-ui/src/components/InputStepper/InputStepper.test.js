import React from "react";
import { mount } from "enzyme";

import InputStepper from "./index";

describe("Input Stepper", () => {
  let wrapper = null;
  let props;
  const id = "test-cases";

  describe("Functionality", () => {
    beforeAll(() => {
      props = {
        id,
        min: 1,
        max: 10,
        initialValue: 1,
        label: "Label"
      };
      wrapper = mount(<InputStepper {...props} />);
    });
    afterAll(() => {
      unmount(wrapper);
    });

    it("should exist", () => {
      expect(wrapper).toBeDefined();
    });

    it("has an input", () => {
      const div = wrapper.find(`input-stepper-${id}`);
      expect(div.find(`input-stepper-input-field-${id}`)).toBeDefined();
    });

    it("should have a Decrement button", () => {
      const decBtn = wrapper.find(".decrementButton");
      expect(decBtn).toBeDefined();
    });

    it("should disable the Decrement button if the current value is equal to the min", () => {
      const decBtn = wrapper.find(".decrementButton").hostNodes();
      expect(decBtn.is("[disabled]")).toBe(true);
    });

    it("should have a Increment button", () => {
      const incBtn = wrapper.find({ref: "incrementButton"}).exists();
      expect(incBtn).toBeDefined();
    });

    it("should disable the Increment button if the current value is equal to the max", () => {
      const incBtn = wrapper.find(".incrementButton").hostNodes();
      expect(incBtn.is("[disabled]")).toBe(true);
    });

    it("should have a min value", () => {
      const min = parseInt(wrapper.prop("min"));
      expect(min).toBe(1);
    });

    it("should have a max value", () => {
      const max = parseInt(wrapper.prop("max"));
      expect(max).toBe(10);
    });

    it("should show an error if input value is less than min", () => {
      const min = parseInt(wrapper.prop("min"));
      const input = wrapper.find(".errorMessage").hostNodes();
      input.getDOMNode().value = min - 1;
      input.simulate("change");
      input.simulate("blur");
      expect(wrapper.find(".errorMessage").length).toBe(1);

      input.getDOMNode().value = min;
      input.simulate("change");
      input.simulate("blur");
      expect(wrapper.find(".errorMessage").text()).toBe("");
    });

    it("should show an error if input value is greater than max", () => {
      const max = parseInt(wrapper.prop("max"));
      const input = wrapper.find(".inputField").hostNodes();
      input.getDOMNode().value = max + 1;
      input.simulate("change");
      input.simulate("blur");
      expect(wrapper.find(".errorMessage").length).toBe(1);

      input.getDOMNode().value = max;
      input.simulate("change");
      input.simulate("blur");
      expect(wrapper.find(".errorMessage").text()).toBe("");
    });
  });
});
