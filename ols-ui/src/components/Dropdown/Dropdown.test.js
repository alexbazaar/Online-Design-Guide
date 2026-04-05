import React from "react";
import { mount } from "enzyme";
import Dropdown from "./Dropdown";

describe("Dropdown", () => {
  let props;
  let mountedDropdown;
  const labelText = "label goes here";
  const wrapper = () => {
    if (!mountedDropdown) {
      mountedDropdown = mount(
        <Dropdown label={labelText} {...props}>
          <option value="value1">Option A</option>
          <option value="value2">Option B</option>
          <option value="value3">Option C</option>
        </Dropdown>
      );
    }
    return mountedDropdown;
  };

  beforeEach(() => {
    props = {
      id: undefined,
      className: undefined,
      srOnlyLabel: undefined,
      required: undefined,
      hasError: undefined,
      errorMessage: undefined,
      value: undefined,
      isValid: undefined,
      disabled: undefined,
      options: undefined,
      placeholder: undefined,
      onChange: undefined
    };

    mountedDropdown = undefined;
  });

  it("is defined", () => {
    expect(wrapper()).toBeDefined();
  });

  it("is not disabled by default", () => {
    expect(wrapper().find("div").first().hasClass("disabled")).toBe(false);
    expect(wrapper().find("select").props().disabled).toBe(false);
  });

  it("renders the label text correctly", () => {
    const labelElement = wrapper().find("label");
    expect(labelElement.text()).toBe(labelText);
  });

  it("has an id attribute", () => {
    expect(typeof wrapper().find("select").props().id).toBe("string");
  });

  it("has a matching id and htmlFor attributes", () => {
    const id = wrapper().find("select").props().id;
    const htmlFor = wrapper().find("label").props().htmlFor;
    expect(htmlFor).toBe(id);
  });

  it("adds a placeholder if there's no value", () => {
    expect(
      wrapper()
        .find("option")
        .first()
        .text()
    ).toBe("Select an option");
  });

  describe("The rendered select", () => {
    beforeEach(() => {
      props.value = "value2";
    });

    it("accepts a value property", () => {
      const value = wrapper().find("select").props().value;
      expect(value).toBe("value2");
    });
  });

  describe("Dropdown", () => {
    beforeEach(() => {
      props.required = true;
    });

    it("accepts the required property", () => {
      expect(wrapper().find("label").hasClass("required")).toBe(true);
    });
  });

  describe("Dropdown", () => {
    beforeEach(() => {
      props.disabled = true;
    });

    it("accepts the disabled property", () => {
      expect(wrapper().find("div").first().hasClass("disabled")).toBe(true);
      expect(wrapper().find("select").props().disabled).toBe(true);
    });
  });

  describe("When an error is passed", () => {
    beforeEach(() => {
      props.errorMessage = "error";
    });

    it("displays the error message", () => {
      expect(wrapper().find(".errorMessage").text()).toBe("error");
    });

    it("has the correct error class", () => {
      expect(wrapper().find("select").hasClass("error")).toBe(true);
    });
  });

  describe("Dropdown", () => {
    const testValue = "value3";

    beforeEach(() => {
      props.value = testValue;
    });

    it("handles onChange event", () => {
      wrapper().find("select").simulate("change", { target: { value: testValue } });
      expect(wrapper().find("select").props().value).toBe(testValue);
    });
  });
});
