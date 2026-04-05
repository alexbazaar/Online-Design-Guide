jest.unmock('./BigFooter');

import React from 'react';
import { mount } from 'enzyme';

import BigFooter from "./index";

describe("BigFooter", () => {


  describe("Basic Functionality", () => {
  let wrapper;

    beforeAll(() => {
      wrapper = mount(
        <BigFooter />
      );
    });

    afterAll(() => {
      unmount(wrapper);
    });
      
    it("should have the footer element", () => {
      expect(wrapper.find("footer").length).toEqual(1);
    });

    it("should have a top footer and a bottom footer", () =>{
      expect(wrapper.find(".footerTop").length).toEqual(1);
      expect(wrapper.find("FlexContainer.footerBottom").length).toEqual(1);
    });
    
    //5 for mobile 5 for desktop
    it("should have 10 footer top groups",()=> {
      expect(wrapper.find(".footerTopGroup").length).toEqual(10);
    })

    it("should have a socialList", () => {
      expect(wrapper.find(".socialList").length).toEqual(1);
    })

    it("should have a linked logo", () => {
      expect(wrapper.find("[data-component='footerLogo']").length).toEqual(1);
    });

    it("should have a link group with 2 links", () => {
      expect(wrapper.find(".footerLinksGroup").length).toEqual(1);
      expect(wrapper.find(".footerLinksGroupItem").length).toEqual(2);
    })

  });

});
