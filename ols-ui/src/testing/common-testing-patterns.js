import React from "react";
import { mount } from "enzyme";
// import { MemoryRouter } from "react-router";
import Thing from "./Thing";
import InsideThing from "./InsideThing";


// ==============
// Boilerplate
// ==============

describe("Thing being tested", () => {
  // create let bindings for props and mountedComponent, so that those variables
  // will be available to everything within the describe function
  let props;
  let mountedComponent;

  // uses mountedComponent variable to either mount a Thing with the current props
  // or return the one that has already been mounted. This function returns an
  // enzyme ReactWrapper
  const wrapper = () => {
    if (!mountedComponent) {
      mountedComponent = mount(
        <Thing {...props} />
      );
    }
    return mountedComponent;
  };

  // If the component contains Links, it will need to be wrapped in a MemoryRouter
  // const wrapper = () => {
  //   if (!mountedComponent) {
  //     mountedComponent = mount(
  //       <MemoryRouter>
  //         <Thing {...props} />
  //       </MemoryRouter>
  //     );
  //   }
  //   return mountedComponent;
  // };

  // a beforeEach that resets the props and mountedComponent variables before every
  // test. Otherwise, state from one test would leak into another.
  beforeEach(() => {
    props = {
      prop1: undefined,
      prop2: undefined,
      prop3: undefined
    };
    mountedComponent = undefined;
  });


  // ==============
  // Tests go here
  // ==============

  // Renders exactly one div
  it("renders exactly one div", () => {
    expect(wrapper().find("div")).toHaveLength(1);
  });

  // Renders at least one div
  it("renders at least one div", () => {
    const divs = wrapper().find("div");
    expect(divs.length).toBeGreaterThan(0);
  });

  // Check if data-component is set
  it("sets the data-component attribute on the outer div to 'Thing'", () => {
    expect(wrapper().find("div").first().props()).toMatchObject({
      "data-component": "Thing"
    });
  });

  // Check if InsideThing was actually rendered
  it("renders a `InsideThing`", () => {
    expect(wrapper().contains(InsideThing)).toBe(true);

    // alternately
    // expect(wrapper().find(InsideThing)).toHaveLength(1);
  });

  // Check if custom className gets applied
  describe("the rendered div", () => {
    beforeEach(() => {
      props.className = "myclass";
    });

    it("can receive a custom className", () => {
      const div = wrapper().find("div").first();
      expect(div.hasClass("myclass")).toBe(true);
    });
  });

  // Check the value of a specific prop
  it("has the correct value for isWishing", () => {
    expect(wrapper().prop('isWishing')).toBe(true);
  });

});
