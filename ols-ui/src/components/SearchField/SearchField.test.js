import React from "react";
import { mount } from "enzyme";
import SearchField from "./SearchField";

describe("SearchField", () => {
  let props;
  let mountedSearchField;
  const label = "label goes here";
  const id = "theId";

  const wrapper = () => {
    if (!mountedSearchField) {
      mountedSearchField = mount(<SearchField id={id} label={label} {...props} />);
    }
    return mountedSearchField;
  };

  beforeEach(() => {
    props = {
      className: undefined,
      type: undefined,
      value: undefined
    };
    mountedSearchField = undefined;
  });

  it("renders a div", () => {
    const divs = wrapper().find("div");
    expect(divs.length).toBeGreaterThan(0);
  });

  it("sets the data-component attribute on the form to 'SearchField'", () => {
    expect(wrapper().find("form").first().props()).toMatchObject({
      "data-component": "SearchField"
    });
  });

  describe("the rendered input", () => {
    beforeEach(() => {
      props.value = "";
    });

    it("accepts a value property", () => {
      expect(wrapper().find("input").prop("value")).toBe("");
    });
  });

});
