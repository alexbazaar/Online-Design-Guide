import React from "react";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router";
import NavBar from "./NavBar";
import NavBarItem from "./NavBarItem";


describe("NavBar", () => {
  let props;
  let mountedComponent;

  const wrapper = () => {
    if (!mountedComponent) {
      mountedComponent = mount(
        <MemoryRouter>
          <NavBar {...props}>
            <NavBarItem to="/">Item</NavBarItem>
            <NavBarItem to="/foo">Foo</NavBarItem>
          </NavBar>
        </MemoryRouter>
      );
    }
    return mountedComponent;
  };

  beforeEach(() => {
    props = {
      sticky: undefined
    };
    mountedComponent = undefined;
  });


  it("renders an outer div", () => {
    expect(wrapper().find("div").first()).toHaveLength(1);
  });

  describe("the rendered outer div", () => {
    beforeEach(() => {
      props.className = "myclass";
    });

    it("has a data-component attribute set to 'NavBar'", () => {
      expect(wrapper().find("div").first().props()).toMatchObject({
        "data-component": "NavBar"
      });
    });

    it("can receive a custom className", () => {
      const div = wrapper().find("div").first();
      expect(div.hasClass("myclass")).toBe(true);
    });
  });

  it("isn't sticky by default", () => {
    expect(wrapper().find("nav").prop('style')).toBe(undefined);
  });

  it("renders a nav", () => {
    expect(wrapper().find("nav")).toHaveLength(1);
  });

  it("renders a ul", () => {
    expect(wrapper().find("ul")).toHaveLength(1);
  });

  it("renders children", () => {
    expect(wrapper().find("li")).toHaveLength(2);
    expect(wrapper().find("a")).toHaveLength(2);
  });

  describe("the rendered NavBarItem", () => {
    it("has a data-component attribute set to 'NavBarItem'", () => {
      expect(wrapper().find("li").first().props()).toMatchObject({
        "data-component": "NavBarItem"
      });
    });

    it("receives the 'to' prop'", () => {
      expect(wrapper().find(NavBarItem).first().props()).toMatchObject({
        "to": "/"
      });
    });
  });

});
