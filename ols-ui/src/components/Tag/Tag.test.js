import React from "react";
import { mount } from "enzyme";
import sinon from "sinon";
import Tag from "./Tag.js";
import Link from "../Links/index";
import { MemoryRouter } from "react-router";
import { before } from "lodash";

describe("Tag", () => {
  let props;
  let mountedTag;
  const text = "New Feature";
  const wrapper = () => {
    if (!mountedTag) {
      mountedTag = mount(
        <MemoryRouter>
          <Tag to="/foo" {...props}>{text}</Tag>
        </MemoryRouter>
      );
    }
    return mountedTag;
  };

  beforeEach(() => {
    props = {
      srOnlyText: undefined,
      unstyled: undefined,
      emphasis: undefined,
      classification: undefined,
      hover: undefined,
      active: undefined,
      focus: undefined,
      className: undefined,
      to: undefined
    };
    mountedTag = undefined;
  });

  // *************
  // Tag Render
  // *************
  it("renders a button by default", () => {
    expect(wrapper().find("div")).toHaveLength(1);
  });

  describe("the rendered tag", () => {
    it("sets the data-component attribute to 'Tag'", () => {
      expect(
        wrapper()
          .find("div")
          .props()
      ).toMatchObject({
        "data-component": "Tag"
      });
    });

    it("passes children to the button", () => {
        expect(
          wrapper()
            .find("div")
            .text()
        ).toBe("New Feature");
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
        it("sets the data-component attribute to 'Tag'", () => {
          expect(
            wrapper()
              .find(Link)
              .props()
          ).toMatchObject({
            "data-component": "Tag"
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

    });
  });

});


