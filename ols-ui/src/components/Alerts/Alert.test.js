import React from "react";
import { mount } from "enzyme";
import Alert from "./Alert";
import {
  ExclamationTriangleIcon,
  InfoCircleIcon,
  ExclamationCircleIcon,
  CheckCircleIcon
} from '../Icons';
import Heading from "../Heading";

describe("Alert", () => {
  const alertTitle = "Title goes here";
  const alertText = "Body goes here";
  const text = "Test";
  const alertID = "id-alert";
  let props;
  let mountedAlert;
  const wrapper = () => {
    if (!mountedAlert) {
      mountedAlert = mount(<Alert {...props}>{alertText}</Alert>);
    }

    return mountedAlert;
  };

  beforeEach(() => {
    props = {
      title: alertTitle,
      id: alertID,
      children: alertText,
      type: undefined,
      headingLevel: undefined,
      className: undefined
    };

    mountedAlert = undefined;
  });

  it("renders the heading correctly", () => {
    const titleElement = wrapper().find(Heading);
    expect(titleElement.text()).toBe(alertTitle);
  });

  describe("the rendered heading", () => {
    beforeEach(() => {
      props.headingLevel = "2";
    });

    it("is a h2 when headlineLevel = 2", () => {
      const headings = wrapper().find("h2");
      expect(headings.length).toBeGreaterThan(0);
    });
  });

  describe("the rendered heading", () => {
    beforeEach(() => {
      props.headingLevel = "3";
    });

    it("is a h3 when headlineLevel = 3", () => {
      const headings = wrapper().find("h3");
      expect(headings.length).toBeGreaterThan(0);
    });
  });

  describe("the rendered heading", () => {
    beforeEach(() => {
      props.headingLevel = "4";
    });

    it("is a h4 when headlineLevel = 4", () => {
      const headings = wrapper().find("h4");
      expect(headings.length).toBeGreaterThan(0);
    });
  });

  describe("the rendered heading", () => {
    beforeEach(() => {
      props.headingLevel = "5";
    });

    it("is a h5 when headlineLevel = 5", () => {
      const headings = wrapper().find("h5");
      expect(headings.length).toBeGreaterThan(0);
    });
  });

  describe("the rendered heading", () => {
    beforeEach(() => {
      props.headingLevel = "6";
    });

    it("is a h6 when headlineLevel = 6", () => {
      const headings = wrapper().find("h6");
      expect(headings.length).toBeGreaterThan(0);
    });
  });

  it("renders the body text correctly", () => {
    const titleElement = wrapper().find(".text");
    expect(titleElement.text()).toBe(alertText);
  });

  it("renders an outer div", () => {
    const divs = wrapper().find("div");
    expect(divs.length).toBeGreaterThan(0);
  });

  it("sets the data-component attribute on the outer div to 'Alert'", () => {
    expect(wrapper().find("div").first().props()).toMatchObject({
      "data-component": "Alert"
    });
  });

  it("sets the data-component attribute on the inner div to 'AlertText'", () => {
    expect(wrapper().find("div").last().props()).toMatchObject({
      "data-component": "AlertText"
    });
  });

  describe("the rendered div", () => {
    beforeEach(() => {
      props.className = text;
    });

    it("has a custom className applied", () => {
      const div = wrapper()
        .find("div")
        .first();
      expect(div.hasClass(text)).toBe(true);
    });
  });

  describe("Info alerts", () => {
    beforeEach(() => {
      props.type = "info";
    });

    it("have the correct class", () => {
      const div = wrapper()
        .find("div")
        .first();
      expect(div.hasClass("alert-info")).toBe(true);
    });

    it("render an InfoCircleIcon", () => {
      expect(wrapper().contains(InfoCircleIcon)).toBe(true);
    })
  });

  describe("Error alerts", () => {
    beforeEach(() => {
      props.type = "error";
    });

    it("have the correct class", () => {
      const div = wrapper()
        .find("div")
        .first();
      expect(div.hasClass("alert-error")).toBe(true);
    });

    it("render an ExclamationCircleIcon", () => {
      expect(wrapper().contains(ExclamationCircleIcon)).toBe(true);
    })
  });

  describe("Success alerts", () => {
    beforeEach(() => {
      props.type = "success";
    });

    it("have the correct class", () => {
      const div = wrapper()
        .find("div")
        .first();
      expect(div.hasClass("alert-success")).toBe(true);
    });

    it("render an CheckCircleIcon", () => {
      expect(wrapper().contains(CheckCircleIcon)).toBe(true);
    })
  });

  describe("Warning alerts", () => {
    beforeEach(() => {
      props.type = "warning";
    });

    it("have the correct class", () => {
      const div = wrapper()
        .find("div")
        .first();
      expect(div.hasClass("alert-warning")).toBe(true);
    });

    it("render an ExclamationTriangleIcon", () => {
      expect(wrapper().contains(ExclamationTriangleIcon)).toBe(true);
    })
  });
});
