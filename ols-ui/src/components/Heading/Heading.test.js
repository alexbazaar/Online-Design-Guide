import React from "react";
import { mount } from "enzyme";
import Heading from "./Heading";

describe("Heading", () => {
  const text = "Test 123 !@#$%^";
  let props;
  let mountedComponent;
  const wrapper = () => {
    if (!mountedComponent) {
      mountedComponent = mount(<Heading {...props} />);
    }

    return mountedComponent;
  };

  beforeEach(() => {
    props = {
      headinglevel: undefined,
      children: undefined
    };

    mountedComponent = undefined;
  });


  describe("the rendered heading", () => {
    beforeEach(() => {
      props.headinglevel = "1";
      props.children = text;
    });

    it("is a h1 when headlineLevel = 1", () => {
      const heading = wrapper().find("h1");
      expect(heading.length).toBeGreaterThan(0);
    });
    it("contains the correct text", () => {
      const heading = wrapper().find("h1");
      expect(heading.text()).toBe(text);
    });
  });

  describe("the rendered heading", () => {
    beforeEach(() => {
      props.headinglevel = "2";
      props.children = text;
    });

    it("is a h2 when headlineLevel = 2", () => {
      const heading = wrapper().find("h2");
      expect(heading.length).toBeGreaterThan(0);
    });
    it("contains the correct text", () => {
      const heading = wrapper().find("h2");
      expect(heading.text()).toBe(text);
    });
  });

  describe("the rendered heading", () => {
    beforeEach(() => {
      props.headinglevel = "3";
      props.children = text;
    });

    it("is a h3 when headlineLevel = 3", () => {
      const heading = wrapper().find("h3");
      expect(heading.length).toBeGreaterThan(0);
    });
    it("contains the correct text", () => {
      const heading = wrapper().find("h3");
      expect(heading.text()).toBe(text);
    });
  });

  describe("the rendered heading", () => {
    beforeEach(() => {
      props.headinglevel = "4";
      props.children = text;
    });

    it("is a h4 when headlineLevel = 4", () => {
      const heading = wrapper().find("h4");
      expect(heading.length).toBeGreaterThan(0);
    });
    it("contains the correct text", () => {
      const heading = wrapper().find("h4");
      expect(heading.text()).toBe(text);
    });
  });

  describe("the rendered heading", () => {
    beforeEach(() => {
      props.headinglevel = "5";
      props.children = text;
    });

    it("is a h5 when headlineLevel = 5", () => {
      const heading = wrapper().find("h5");
      expect(heading.length).toBeGreaterThan(0);
    });
    it("contains the correct text", () => {
      const heading = wrapper().find("h5");
      expect(heading.text()).toBe(text);
    });
  });

  describe("the rendered heading", () => {
    beforeEach(() => {
      props.headinglevel = "6";
      props.children = text;
    });

    it("is a h6 when headlineLevel = 6", () => {
      const heading = wrapper().find("h6");
      expect(heading.length).toBeGreaterThan(0);
    });
    it("contains the correct text", () => {
      const heading = wrapper().find("h6");
      expect(heading.text()).toBe(text);
    });
  });

});
