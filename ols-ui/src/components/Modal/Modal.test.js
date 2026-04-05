jest.unmock('./Modal');

import React from 'react';
import { mount, unmount } from 'enzyme';

import Modal from "./index";
import FilledButton from '../Buttons/FilledButton';
import OutlinedButton from '../Buttons/OutlinedButton';

describe("Modal", () => {

  describe("Basic Functionality", () => {
    let wrapper;
    let root;
    beforeAll(() => {
      root = document.createElement("div");
      root.setAttribute("id", "root");
      document.body.appendChild(root);
      wrapper = mount(
        <Modal
          title="Modal Title"
          closeModal={() => {
            document.body.focus();
          }}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="button__wrapper">
            <OutlinedButton>Button</OutlinedButton>
            <FilledButton>Button</FilledButton>
          </div>
        </Modal>
      );
    });

    afterAll(() => {
      unmount(wrapper);
    });

    it('should have an overlay', () => {
      expect(wrapper.find(".overlay").length).toEqual(1);
    });

    it('should prevent scrolling the page', () => {
      setTimeout(() => {
        expect(document.body.style.overflow).toBe('hidden');
        expect(document.body.classList().includes('modal__open')).toBeTrue();
      });
    });

    it('should have a title', () => {
      expect(wrapper.find("h1").length).toEqual(1);
    });

    it('should have a close button', () => {
      expect(wrapper.find(".closeButton").length).toEqual(1);
    });

    it('should have a paragraph', () => {
      expect(wrapper.find("p").length).toEqual(1);
    });

    it('should have focus when it opens', () => {
      setTimeout(() => {
        expect(wrapper.find('.modal').getDOMNode()).toBe(document.activeElement);
      });
    });

    it('should close when the close button is clicked', () => {
      wrapper.find('.closeButton').simulate('click');
      expect(document.activeElement).toBe(document.body);
    });

    it('should close when the overlay is clicked', () => {
      wrapper.find('.overlay').simulate('click');
      expect(document.activeElement).toBe(document.body);
    });

  });

});
