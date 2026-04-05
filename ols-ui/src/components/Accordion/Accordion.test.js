jest.unmock('./Accordion');

import React from 'react';
import { mount } from 'enzyme';

import Accordion, { AccordionItem, AccordionItemBody, AccordionItemTrigger } from "./index";
// import styles from "./Accordion.scss";

describe("Accordion", () => {
  let wrapper = null;
  let props;
  const accordionOneLabel = 'First Amendment',
    accordionOneBody = 'Accordion One Body text here.',
    accordionTwoLabel = 'Second Amendment',
    accordionTwoBody = 'Accordion Two Body text here.';

  describe("Basic Functionality", () => {
    beforeAll(() => {
      props = {
        activeIndex: 1
      };
      wrapper = mount(
        <Accordion {...props}>
          <AccordionItem>
            <AccordionItemTrigger>{accordionOneLabel}</AccordionItemTrigger>
            <AccordionItemBody>
              <p>
                {accordionOneBody}
              </p>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTrigger>{accordionTwoLabel}</AccordionItemTrigger>
            <AccordionItemBody>
              <p>
                {accordionTwoBody}
              </p>
            </AccordionItemBody>
          </AccordionItem>
        </Accordion>
      );
    });

    it('is defined', () => {
      expect(wrapper).toBeDefined();
    });

    it('is a div element', () => {
      expect((wrapper).type()).toEqual(Accordion);
      expect((wrapper).getDOMNode().tagName.toLowerCase()).toEqual('div');
    });

    it('has two items', () => {
      expect((wrapper).find('AccordionItem').length).toEqual(2);
    });

    it("should allow a specific item to start expanded", () => {
      expect((wrapper).find("AccordionItem").at(0).prop("isActive")).toBeFalsy();
      expect((wrapper).find("AccordionItem").at(1).prop("isActive")).toBeTruthy();
    });

    it("should collapse an expanded element if clicked again", () => {
      let secondItem = wrapper.find("AccordionItem").at(1);
      expect(secondItem.getDOMNode().getAttribute('data-expanded')).toBe("true");
      secondItem.find("button").simulate("click");
      setTimeout(() => {
        expect(secondItem.getDOMNode().getAttribute('data-expanded')).toBe("false");
      });
    });

    it("should collapse the active accordion when a different accordion is clicked", () => {
      wrapper.setProps({activeIndex: 0});
      expect((wrapper).find("AccordionItem").at(0).prop("isActive")).toBeTruthy();
      (wrapper).find("AccordionItem").at(1).simulate("click");
      setTimeout(() => {
        expect((wrapper).find("AccordionItem").at(0).getDOMNode().getAttribute("data-expanded")).toBe("false");
        expect((wrapper).find("AccordionItem").at(1).getDOMNode().getAttribute("data-expanded")).toBe("true");
      });
    });

  });

  // describe("Allow Multiple Open Functionality", () => {
  //   beforeAll(() => {
  //     props = {
  //       activeIndex: 1
  //     };
  //     wrapper = mount(
  //       <Accordion {...props}>
  //         <AccordionItem>
  //           <AccordionItemTrigger>{accordionOneLabel}</AccordionItemTrigger>
  //           <AccordionItemBody>
  //             <p>
  //               {accordionOneBody}
  //             </p>
  //           </AccordionItemBody>
  //         </AccordionItem>
  //         <AccordionItem>
  //           <AccordionItemTrigger>{accordionTwoLabel}</AccordionItemTrigger>
  //           <AccordionItemBody>
  //             <p>
  //               {accordionTwoBody}
  //             </p>
  //           </AccordionItemBody>
  //         </AccordionItem>
  //       </Accordion>
  //     );
  //   });
  // });

});
