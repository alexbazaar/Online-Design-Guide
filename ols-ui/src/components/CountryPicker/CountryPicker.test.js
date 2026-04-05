import React from "react";
import { mount } from "enzyme";
import CountryPicker from './CountryPicker.js'

describe("CountryPicker", () => {
  let props;
  let mountedCountryPicker;
  const labelText = "label goes here";
  const id = "id";
  const wrapper = () => {
    if (!mountedCountryPicker) {
      mountedCountryPicker = mount(
        <CountryPicker label={labelText} id={id} {...props} data-component="CountryPicker">
        </CountryPicker>
      );
    }
    return mountedCountryPicker;
  };

  beforeEach(() => {
    mountedCountryPicker = undefined;
  });

  it("is defined", () => {
    expect(wrapper()).toBeDefined();
  });

  it("renders the label text correctly", () => {
    const labelElement = wrapper().find("label");
    expect(labelElement.text()).toBe(labelText);
  });

  it("has an id attribute", () => {
    expect(typeof wrapper().find("select").props().id).toBe("string");
  });

});