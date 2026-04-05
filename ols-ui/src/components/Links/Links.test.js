import React from "react";
import { mount } from "enzyme";
import Link from "./Links";
import { ExternalLinkIcon } from "../Icons";
import { MemoryRouter } from "react-router";

describe("Links", () => {
  let props;
  let mountedLinks;
  const text = "Some text";

  const wrapper = () => {
    if (!mountedLinks) {
      mountedLinks = mount(
        <MemoryRouter>
          <Link to="/" {...props}>{text}</Link>
        </MemoryRouter>
      );
    }
    return mountedLinks;
  };

  beforeEach(() => {
    props = {
      href: undefined,
      className: undefined
    };
    mountedLinks = undefined;
  });

  it("renders a link", () => {
    expect(wrapper().find("a")).toHaveLength(1);
  });

  describe("the rendered link", () => {
    beforeEach(() => {
      props.className = "myclass";
      props.foo = "bar";
    });

    it("can receive a custom className", () => {
      const link = wrapper()
        .find("a")
        .first();
      expect(link.hasClass("myclass")).toBe(true);
    });

    it("receives passed props", () => {
      expect(
        wrapper()
          .find("a")
          .props()
      ).toMatchObject({
        foo: "bar"
      });
    });
  });

  describe("the rendered link", () => {
    beforeEach(() => {
      props.icon = "externalLink";
    });

    it("renders the correct icon when icon=`externalLink`", () => {
      expect(wrapper().contains(ExternalLinkIcon)).toBe(true);
    });
  });

});
