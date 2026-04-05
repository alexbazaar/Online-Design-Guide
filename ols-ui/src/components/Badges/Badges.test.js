import React from "react";
import { mount } from "enzyme";

import Badges, { setBadgeSize } from "./index";

describe("Badges", () => {
  let wrapper = null;
  let props;
  const id = "test-badges";

  describe("1 Digit Functionality", () => {
    beforeEach(() => {
      props = {
        id,
        value: 1,
        hiddenLabel: "Unread Messages"
      };
      wrapper = mount(<Badges {...props} />);
    });

    it("should exist", () => {
      expect(wrapper).toBeDefined();
    });

    it("should have single size styling", () => {
      const valSize = wrapper.getDOMNode().getAttribute("data-component-size");
      expect(valSize).toBe("single");
    });
  });

  describe("2 Digit Functionality", () => {
    beforeEach(() => {
      props = {
        id,
        value: 12,
        hiddenLabel: "Unread Messages"
      };
      wrapper = mount(<Badges {...props} />);
    });

    it("should have double size styling", () => {
      const valSize = wrapper.getDOMNode().getAttribute("data-component-size");
      expect(valSize).toBe("double");
    });
  });

  describe("3 Digit Functionality", () => {
    beforeEach(() => {
      props = {
        id,
        value: 122,
        hiddenLabel: "Unread Messages"
      };
      wrapper = mount(<Badges {...props} />);
    });

    it("should have double size styling", () => {
      const valSize = wrapper.getDOMNode().getAttribute("data-component-size");
      expect(valSize).toBe("triple");
    });

    it("and value should read 99+", () => {
      expect(wrapper.text()).toBe("99+Unread Messages");
    });
  });
});
