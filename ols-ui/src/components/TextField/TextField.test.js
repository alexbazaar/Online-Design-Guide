import React from "react";
import { mount } from "enzyme";
import TextField from "./TextField";
import InputLabel from "../InputLabel";

describe("TextField", () => {
  let props;
  let mountedTextField;
  const label = "label goes here";
  const id = "theId";

  const wrapper = () => {
    if (!mountedTextField) {
      mountedTextField = mount(<TextField id={id} label={label} {...props} />);
    }
    return mountedTextField;
  };

  beforeEach(() => {
    props = {
      className: undefined,
      type: undefined,
      isValid: undefined,
      value: undefined,
      required: undefined,
      disabled: undefined,
      validator: undefined,
      onValueChange: undefined,
      onKeyUp: undefined,
      onKeyDown: undefined,
      maxLength: undefined,
      enableSpellCheck: undefined,
      autoComplete: undefined,
      errorMessage: undefined,
      helpText: undefined,
      placeholder: undefined,
      inline: undefined
    };
    mountedTextField = undefined;
  });

  it("renders a div", () => {
    const divs = wrapper().find("div");
    expect(divs.length).toBeGreaterThan(0);
  });

  it("sets the data-component attribute on the outer div to 'TextField'", () => {
    expect(wrapper().find("div").first().props()).toMatchObject({
      "data-component": "TextField"
    });
  });

  describe("the rendered div", () => {
    beforeEach(() => {
      props.className = "myclass";
    });

    it("can receive a custom className", () => {
      const div = wrapper().find("div").first();
      expect(div.hasClass("myclass")).toBe(true);
    });
  });

  describe("the rendered div", () => {
    beforeEach(() => {
      props.inline = true;
    });

    it("has the correct class when inline=true", () => {
      const div = wrapper().find("div").first();
      expect(div.hasClass("inline")).toBe(true);
    });
  });

  it("renders a InputLabel", () => {
    expect(wrapper().contains(InputLabel)).toBe(true);
  });

  describe("the rendered InputLabel", () => {
    it("has the correct label text", () => {
      expect(
        wrapper()
          .find("label")
          .text()
      ).toBe(label);
    });
  });

  describe("the rendered InputLabel", () => {
    beforeEach(() => {
      props.required = true;
      props.disabled = true;
    });

    it("is passed the id for it's htmlFor prop", () => {
      const label = wrapper().find(InputLabel);
      expect(label.prop('htmlFor')).toBe(id);
    });

    it("is passed the required prop", () => {
      const label = wrapper().find(InputLabel);
      expect(label.prop('required')).toBe(true);
    });

    it("is passed the disabled prop", () => {
      const label = wrapper().find(InputLabel);
      expect(label.prop('disabled')).toBe(true);
    });
  });

  describe("the rendered input", () => {
    it("has an id attribute", () => {
      expect(wrapper().find("input").prop("id")).toBe(id);
    });

    it("has a name attribute", () => {
      expect(wrapper().find("input").prop("name")).toBe(id);
    });

    it("has a default type of 'text'", () => {
      expect(wrapper().find("input").prop("type")).toBe("text");
    });
  });

  describe("the rendered input", () => {
    beforeEach(() => {
      props.value = "foo";
    });

    it("accepts a value property", () => {
      expect(wrapper().find("input").prop("value")).toBe("foo");
    });
  });

  describe("the rendered input", () => {
    beforeEach(() => {
      props.placeholder = "foo";
    });

    it("accepts a placeholder property", () => {
      expect(wrapper().find("input").prop("placeholder")).toBe("foo");
    });
  });

  describe("the rendered input", () => {
    beforeEach(() => {
      props.required = true;
    });

    it("accepts the required property", () => {
      expect(wrapper().find("input").prop("required")).toBe(true);
    });
  });

  describe("the rendered input", () => {
    beforeEach(() => {
      props.disabled = true;
    });

    it("accepts the disabled property", () => {
      expect(wrapper().find("input").prop("disabled")).toBe(true);
    });
  });

  describe("the rendered input", () => {
    beforeEach(() => {
      props.errorMessage = "error";
    });

    it("has the correct class when there's an error", () => {
      const input = wrapper().find("input");
      expect(input.hasClass("error")).toBe(true);
    });
  });

  describe("Required fields", () => {
    beforeEach(() => {
      props.required = true;
      props.value = "foo";
    });

    it("trigger an error if dirty and empty", () => {
      wrapper().find("input").simulate("change", { target: { value: "" } });
      wrapper().find("input").simulate("blur");
      expect(wrapper().find("input").props().value).toBe("");
      expect(wrapper().find("input").hasClass("error")).toBe(true);
    });

    it("do not trigger an error if a value exists", () => {
      wrapper().find("input").simulate("blur");
      expect(wrapper().find("input").props().value).toBe("foo");
      expect(wrapper().find("input").hasClass("error")).toBe(false);
    });
  });
});
