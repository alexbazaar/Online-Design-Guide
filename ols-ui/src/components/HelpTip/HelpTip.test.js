import React from "react";
import { mount } from "enzyme";
import DateField from "../DateField";

import HelpTip from "./HelpTip";
import PropTypes from "prop-types";

describe("Helptip", () => {
  let props;
  let mountedHelpTip;
  const id = "example";
  const link ='This is a help tip.';

  const wrapper = () => {
    if (!mountedHelpTip) {
      mountedHelpTip = mount(
        <HelpTip
          id={id}
          link={link}
          {...props}
        >
          Hello
        </HelpTip>);
    }
    return mountedHelpTip;
  };

  beforeEach(() => {
    props = {
      className: undefined,
      children: undefined
    };
    mountedHelpTip = undefined;
  });

  it("renders a div", () => {
    const divs = wrapper().find("div");
    expect(divs.length).toBeGreaterThan(0);
  });

  it("check that parent data-component attribute is HelpTipWrapper'", () => {
    expect(wrapper().find("div").first().props()).toMatchObject({
      "data-component": "HelpTipWrapper"
    });
  });

  it("has an link label", () => {
    const label = wrapper().find("span .link");
    expect(label.length).toBe(1);
    expect(label.text()).toBe('This is a help tip.');
  });


  it("has helptip button", () => {
    const helpTipButton = wrapper().find("button");
    expect(helpTipButton.hasClass("helpTipButton")).toBe(true);
  });

  it("display helptip when helptip button pressed", () => {
    const helpTipButton = wrapper().find("button");
    helpTipButton.simulate('click');
    const helpTip = wrapper().find('.helpTip');
    expect(helpTip).not.toBeNull();
    expect(helpTip.text()).toBe('Hello');
  });

  it("button aria-label is 'Help tip' when closed", () => {
    const helpTipButton = wrapper().find("button");
    const buttonLabel = helpTipButton.prop('aria-label');
    expect(buttonLabel).toBe('Help tip')
  });

  // it("button aria-label is 'Close Help tip' when open", () => {
  //   const helpTipButton = wrapper().find("button");
  //   helpTipButton.simulate('click');
  //   const buttonLabel = helpTipButton.prop('aria-label');
  //   expect(buttonLabel).toBe('Close Help tip')
  // });
});


