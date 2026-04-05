jest.unmock('./SlimFooter');

import React from 'react';
import { mount } from 'enzyme';

import SlimFooter from "./index";

describe("SlimFooter", () => {


  describe("Basic Functionality", () => {
  let wrapper;

    beforeAll(() => {
      wrapper = mount(
        <SlimFooter />
      );
    });

    afterAll(() => {
      unmount(wrapper);
    });
      
    it("should have the footer element", () => {
      expect(wrapper.find("footer").length).toEqual(1);
    });

    it("should have a linked logo", () => {
      expect(wrapper.find("[data-component='footerLogo']").length).toEqual(1);
    });

    it("should have a link group with 2 links", () => {
      expect(wrapper.find(".footerLinksGroup").length).toEqual(1);
      expect(wrapper.find(".footerLinksGroupItem").length).toEqual(2);
    })

  });

});
