import React from "react";
import { mount } from "enzyme";
import sinon from "sinon";
import Button from "./Button.js";
import Link from "../Links/index";
import { MemoryRouter } from "react-router";
import {
  ExternalLinkIcon,
  PrintIcon,
  EnvelopeIcon,
  CommentsIcon
} from "../Icons";
import { before } from "lodash";

describe("Button", () => {
  let props;
  let mountedButton;
  const text = "Some text";
  const wrapper = () => {
    if (!mountedButton) {
      mountedButton = mount(
        <MemoryRouter>
          <Button {...props}>{text}</Button>
        </MemoryRouter>
      );
    }
    return mountedButton;
  };

  let buttonItem = null;

  beforeEach(() => {
    props = {
      type: undefined,
      unstyled: undefined,
      outlined: undefined,
      block: undefined,
      padded: undefined,
      icon: undefined,
      hover: undefined,
      active: undefined,
      focus: undefined,
      iconOnly: undefined,
      className: undefined,
      to: undefined,
      href: undefined
    };
    mountedButton = undefined;
  });

  // *************
  // Button Render
  // *************
  it("renders a button by default", () => {
    expect(wrapper().find("button")).toHaveLength(1);
  });

  describe("the rendered button", () => {
    it("sets the data-component attribute to 'Button'", () => {
      expect(
        wrapper()
          .find("button")
          .props()
      ).toMatchObject({
        "data-component": "Button"
      });
    });

    it("passes children to the button", () => {
      expect(
        wrapper()
          .find("span")
          .text()
      ).toBe(text);
    });

    it("is a filled button by default", () => {
      const button = wrapper()
        .find("button")
        .first();
      expect(button.hasClass("filledButton")).toBe(true);
    });
  });

  describe("the rendered button", () => {
    beforeEach(() => {
      props.className = "myclass";
      props.foo = "bar";
    });

    it("can receive a custom className", () => {
      const button = wrapper()
        .find("button")
        .first();
      expect(button.hasClass("myclass")).toBe(true);
    });

    it("receives passed props", () => {
      expect(
        wrapper()
          .find("button")
          .props()
      ).toMatchObject({
        foo: "bar"
      });
    });
  });

  describe("the rendered button", () => {
    beforeEach(() => {
      props.outlined = true;
    });

    it("has the correct class when outlined = true", () => {
      const button = wrapper()
        .find("button")
        .first();
      expect(button.hasClass("outlinedButton")).toBe(true);
      expect(button.hasClass("filledButton")).toBe(false);
    });
  });

  describe("the rendered button", () => {
    beforeEach(() => {
      props.block = true;
    });

    it("has the correct class when block = true", () => {
      const button = wrapper()
        .find("button")
        .first();
      expect(button.hasClass("block")).toBe(true);
    });
  });

  describe("the rendered button", () => {
    beforeEach(() => {
      props.padded = true;
    });

    it("has the correct class when padded = true", () => {
      const button = wrapper()
        .find("button")
        .first();
      expect(button.hasClass("padded")).toBe(true);
    });
  });

  describe("the rendered button", () => {
    beforeEach(() => {
      props.disabled = true;
    });

    it("can be disabled", () => {
      expect(
        wrapper()
          .find("button")
          .props()
      ).toMatchObject({
        disabled: true
      });
    });
  });

  describe("the rendered button", () => {
    beforeEach(() => {
      props.icon = "externalLink";
    });

    it("renders the correct icon when icon=`externalLink`", () => {
      expect(wrapper().contains(ExternalLinkIcon)).toBe(true);
    });
  });

  describe("the rendered button", () => {
    beforeEach(() => {
      props.icon = "mail";
    });

    it("renders the correct icon when icon=`mail`", () => {
      expect(wrapper().contains(EnvelopeIcon)).toBe(true);
    });
  });

  describe("the rendered button", () => {
    beforeEach(() => {
      props.icon = "chat";
    });

    it("renders the correct icon when icon=`chat`", () => {
      expect(wrapper().contains(CommentsIcon)).toBe(true);
    });
  });

  describe("the rendered button", () => {
    beforeEach(() => {
      props.icon = "chat";
    });

    it("renders the correct icon when icon=`print`", () => {
      expect(wrapper().contains(PrintIcon)).toBe(true);
    });
  });

  // *************
  // href Render
  // *************
  describe("When passed a 'href' value", () => {
    beforeEach(() => {
      props.href = "http://google.com";
    });

    it("renders a link", () => {
      expect(wrapper().find("a")).toHaveLength(1);
    });

    describe("the rendered link", () => {
      it("sets the data-component attribute to 'Button'", () => {
        expect(
          wrapper()
            .find(Link)
            .props()
        ).toMatchObject({
          "data-component": "Button"
        });
      });

      it("passes children to the link", () => {
        expect(
          wrapper()
            .find("span")
            .first()
            .text()
        ).toBe(text);
      });

      it("is a filled button by default", () => {
        const button = wrapper()
          .find("a")
          .first();
        expect(button.hasClass("filledButton")).toBe(true);
      });
    });

    describe("the rendered link", () => {
      beforeEach(() => {
        props.className = "myclass";
        props.foo = "bar";
      });

      it("can receive a custom className", () => {
        const button = wrapper()
          .find("a")
          .first();
        expect(button.hasClass("myclass")).toBe(true);
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
        props.outlined = true;
      });

      it("has the correct class when outlined = true", () => {
        const button = wrapper()
          .find("a")
          .first();
        expect(button.hasClass("outlinedButton")).toBe(true);
        expect(button.hasClass("filledButton")).toBe(false);
      });
    });

    describe("the rendered link", () => {
      beforeEach(() => {
        props.block = true;
      });

      it("has the correct class when block = true", () => {
        const button = wrapper()
          .find("a")
          .first();
        expect(button.hasClass("block")).toBe(true);
      });
    });

    describe("the rendered link", () => {
      beforeEach(() => {
        props.padded = true;
      });

      it("has the correct class when padded = true", () => {
        const button = wrapper()
          .find("a")
          .first();
        expect(button.hasClass("padded")).toBe(true);
      });
    });

    describe("the rendered link", () => {
      beforeEach(() => {
        props.disabled = true;
      });

      it("can be disabled", () => {
        expect(
          wrapper()
            .find(Button)
            .props()
        ).toMatchObject({
          disabled: true
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

    describe("the rendered link", () => {
      beforeEach(() => {
        props.icon = "mail";
      });

      it("renders the correct icon when icon=`mail`", () => {
        expect(wrapper().contains(EnvelopeIcon)).toBe(true);
      });
    });

    describe("the rendered link", () => {
      beforeEach(() => {
        props.icon = "chat";
      });

      it("renders the correct icon when icon=`chat`", () => {
        expect(wrapper().contains(CommentsIcon)).toBe(true);
      });
    });

    describe("the rendered link", () => {
      beforeEach(() => {
        props.icon = "chat";
      });

      it("renders the correct icon when icon=`print`", () => {
        expect(wrapper().contains(PrintIcon)).toBe(true);
      });
    });
  });

  // *************
  // to Render
  // *************
  describe("When passed a 'to' value", () => {
    beforeEach(() => {
      props.to = "/foo";
    });

    it("renders a Link", () => {
      expect(wrapper().find(Link)).toHaveLength(1);
    });

    describe("the rendered Link", () => {
      it("sets the data-component attribute to 'Button'", () => {
        expect(
          wrapper()
            .find(Link)
            .props()
        ).toMatchObject({
          "data-component": "Button"
        });
      });

      it("passes children to the link", () => {
        expect(
          wrapper()
            .find("span")
            .text()
        ).toBe(text);
      });

      it("is a filled button by default", () => {
        const button = wrapper()
          .find(Link)
          .first();
        expect(button.hasClass("filledButton")).toBe(true);
      });
    });

    describe("the rendered Link", () => {
      beforeEach(() => {
        props.className = "myclass";
        props.foo = "bar";
      });

      it("can receive a custom className", () => {
        const button = wrapper()
          .find(Link)
          .first();
        expect(button.hasClass("myclass")).toBe(true);
      });

      it("receives passed props", () => {
        expect(
          wrapper()
            .find(Link)
            .props()
        ).toMatchObject({
          foo: "bar"
        });
      });
    });

    describe("the rendered Link", () => {
      beforeEach(() => {
        props.outlined = true;
      });

      it("has the correct class when outlined = true", () => {
        const button = wrapper()
          .find(Link)
          .first();
        expect(button.hasClass("outlinedButton")).toBe(true);
        expect(button.hasClass("filledButton")).toBe(false);
      });
    });

    describe("the rendered Link", () => {
      beforeEach(() => {
        props.block = true;
      });

      it("has the correct class when block = true", () => {
        const button = wrapper()
          .find(Link)
          .first();
        expect(button.hasClass("block")).toBe(true);
      });
    });

    describe("the rendered Link", () => {
      beforeEach(() => {
        props.padded = true;
      });

      it("has the correct class when padded = true", () => {
        const button = wrapper()
          .find(Link)
          .first();
        expect(button.hasClass("padded")).toBe(true);
      });
    });

    describe("the rendered Link", () => {
      beforeEach(() => {
        props.disabled = true;
      });

      it("can be disabled", () => {
        expect(
          wrapper()
            .find(Button)
            .props()
        ).toMatchObject({
          disabled: true
        });
      });
    });

    describe("the rendered Link", () => {
      beforeEach(() => {
        props.icon = "externalLink";
      });

      it("renders the correct icon when icon=`externalLink`", () => {
        expect(wrapper().contains(ExternalLinkIcon)).toBe(true);
      });
    });

    describe("the rendered Link", () => {
      beforeEach(() => {
        props.icon = "mail";
      });

      it("renders the correct icon when icon=`mail`", () => {
        expect(wrapper().contains(EnvelopeIcon)).toBe(true);
      });
    });

    describe("the rendered Link", () => {
      beforeEach(() => {
        props.icon = "chat";
      });

      it("renders the correct icon when icon=`chat`", () => {
        expect(wrapper().contains(CommentsIcon)).toBe(true);
      });
    });

    describe("the rendered Link", () => {
      beforeEach(() => {
        props.icon = "chat";
      });

      it("renders the correct icon when icon=`print`", () => {
        expect(wrapper().contains(PrintIcon)).toBe(true);
      });
    });
  });
});
