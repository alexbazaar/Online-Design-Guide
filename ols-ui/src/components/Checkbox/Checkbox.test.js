import React from "react";
import { mount } from "enzyme";
import Checkbox from "./Checkbox";

describe("Checkbox", () => {
  let props;
  let mountedCheckbox;
  const checkboxLabel = "label goes here";
  const text = "text";
  const checkbox = () => {
    if (!mountedCheckbox) {
      mountedCheckbox = mount(<Checkbox {...props} />);
    }

    return mountedCheckbox;
  };

  beforeEach(() => {
    props = {
      label: checkboxLabel,
      id: undefined,
      name: undefined,
      value: undefined,
      defaultChecked: undefined,
      disabled: undefined,
      className: undefined
    };

    mountedCheckbox = undefined;
  });

  it("renders a div", () => {
    const divs = checkbox().find("div");
    expect(divs.length).toBeGreaterThan(0);
  });

  describe("the rendered div", () => {
    beforeEach(() => {
      props.className = text
    });

    it("accepts a custom className", () => {
      const div = checkbox().find("div").first();
      expect(div.hasClass(text)).toBe(true);
    });
  });

  it("renders an input", () => {
    const inputs = checkbox().find("input");
    expect(inputs.length).toBeGreaterThan(0);
  });

  describe("the rendered input", () => {
    it("has a default value property", () => {
      const labelText = checkbox().find("label").text();
      const value = checkbox().find("input").props().value;
      expect(value).toBe(labelText);
    });

    it("has a default name property", () => {
      const inputName = checkbox().find("input").props().name;
      expect(inputName).toBe("checkboxes");
    });

    it("is not checked by default", () => {
      const inputChecked = checkbox().find("input").props().defaultChecked;
      expect(inputChecked).toBe(false);
    });

    it("is not disabled by default", () => {
      const inputDisabled = checkbox().find("input").props().disabled;
      expect(inputDisabled).toBe(false);
    });
  });

  describe("the rendered input", () => {
    beforeEach(() => {
      props.id = text,
      props.value = text,
      props.name = text,
      props.defaultChecked = true
    });

    it("accepts a passed id", () => {
      const input = checkbox().find("input").first();
      expect(input.props().id).toBe(text);
    });

    it("accepts a value property", () => {
      const inputValue = checkbox().find("input").props().value;
      expect(inputValue).toBe(text);
    });

    it("accepts a name property", () => {
      const inputName = checkbox().find("input").props().name;
      expect(inputName).toBe(text);
    });

    it("accepts the defaultChecked property", () => {
      const inputChecked = checkbox().find("input").props().defaultChecked;
      expect(inputChecked).toBe(true);
    });
  });

  describe("the rendered input", () => {
    beforeEach(() => {
      props.disabled = true
    });

    it("accepts the disabled property", () => {
      const inputDisabled = checkbox().find("input").props().disabled;
      expect(inputDisabled).toBe(true);
    });
  });

  it("always renders a label", () => {
    const label = checkbox().find("label");
    expect(label.length).toBeGreaterThan(0);
  });

  describe("the rendered label", () => {
    beforeEach(() => {
      props.id = text
    });

    it("has correct label text", () => {
      const labelElement = checkbox().find("label").first();
      expect(labelElement.text()).toBe(checkboxLabel);
    });

    it("has a htmlFor attribute that matches the id", () => {
      const inputId = checkbox().find("input").props().id;
      const labelHtmlFor = checkbox().find("label").props().htmlFor;
      expect(labelHtmlFor).toBe(inputId);
    });
  });
});
