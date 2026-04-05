import React from "react";
import { mount } from "enzyme";
import Card from "./Card";

describe("Card", () => {
  let props;
  let mountedCard;
  const heading = "heading goes here";

  const wrapper = () => {
    if (!mountedCard) {
      mountedCard = mount(<Card heading={heading} {...props} />);
    }
    return mountedCard;
  };


  beforeEach(() => {
    props = {
      heading: undefined,
      content: undefined
    };
    mountedCard = undefined;
  });


  it("has a heading", () => {
    const heading = wrapper().find("h3 .heading");
    expect(heading.length);
  });

  it("has content", () => {
    const content = wrapper().find(".Card p");
    expect(content.length);
  });

});
