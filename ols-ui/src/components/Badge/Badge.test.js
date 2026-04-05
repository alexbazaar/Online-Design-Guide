import React from "react";
import { mount } from "enzyme";
import Badge from "./Badge";

describe("Badge", () => {
  let props;
  let mountedBadge;
  const text = "Test";
  const wrapper = () => {
    if (!mountedBadge) {
      mountedBadge = mount(<Badge {...props}>{text}</Badge>);
    }

    return mountedBadge;
  };

  beforeEach(() => {
    props = {
      size: undefined,
      className: undefined
    };
    mountedBadge = undefined;
  });

  it("renders a span", () => {
    const spans = wrapper().find("span");
    expect(spans.length).toBeGreaterThan(0);
  });

  it("renders the children", () => {
    const span = wrapper().find("span").first();
    expect(span.text()).toEqual(text);
  });

  describe("the rendered span", () => {
    beforeEach(() => {
      props.size = "big";
      props.className = text;
    });

    it("has the correct class when size='big'", () => {
      const span = wrapper().find("span").first();
      expect(span.hasClass("badgeBig")).toBe(true);
    });

    it("accepts a custom className", () => {
      const span = wrapper().find("span").first();
      expect(span.hasClass(text)).toBe(true);
    });
  });
});
