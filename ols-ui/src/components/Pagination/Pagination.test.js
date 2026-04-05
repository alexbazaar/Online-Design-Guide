import React from 'react';
import { mount } from 'enzyme';
import matchMediaMock from "../../testing/matchMedia.mock";

import Pagination from './index';
import Dropdown from '../Dropdown/index';
import TextField from '../TextField';

describe('Pagination', () => {
  let wrapper = null;
  let props;
  const id = 'test-pagination';
  const MAX_RESULTS = 1425;

  describe('Basic Functionality', () => {

    beforeAll(() => {
      props = {
        id,
        currentPage: 0,
        pageSize: 25
      };
      wrapper = mount(
        <Pagination {...props} />
      );
    });
    afterAll(() => {
      unmount(wrapper);
    });

    it('should exist', () => {
      expect(wrapper).toBeDefined();
    });

    it('should only appear if more than 25 results', () => {
      wrapper.setProps({totalResults: 20});
      expect(wrapper.find(".pagination").length).toBe(0);
      wrapper.setProps({totalResults: MAX_RESULTS});
      expect(wrapper.find(".pagination .basic").length).toBe(1);
    });

    let pageSizeSelector;
    let pageSelector;

    it('should have a page size selector', () => {
      pageSizeSelector = wrapper.find(Dropdown);
      expect(pageSizeSelector.length).toBe(1);
    });

    describe('Page Size Selector', () => {
      it('should have options 25, 50, 75, 100, All', () => {
        const options = pageSizeSelector.find('option').map((option) => option.prop('value'));
        expect(options.includes(25)).toBe(true);
        expect(options.includes(50)).toBe(true);
        expect(options.includes(75)).toBe(true);
        expect(options.includes(100)).toBe(true);
        expect(options.includes('All')).toBe(true);
      });
      it('should default to 25', () => {
        const selectedOption = parseInt(pageSizeSelector.prop("value"));
        expect(selectedOption).toBe(25);
      });
    });

    it('should have a page selector', () => {
      pageSelector = wrapper.find('.page-selector');
      expect(pageSelector.length).toBe(1);
    });

    describe('Page Selector', () => {
      it('should show "Page x of y"', () => {
        let description = wrapper.find('.page-selector-description');
        expect(description.length).toBe(1);
        expect(description.text()).toBe(`Page 1 of ${Math.ceil(MAX_RESULTS / 25)}`);
      });
      it('should have a Previous button', () => {
        const prevBtn = wrapper.find('.previous').hostNodes();
        expect(prevBtn.length).toBe(1);
      });
      it('should disable the Previous button if current page is 1', () => {
        const prevBtn = wrapper.find('.previous').hostNodes();
        expect(prevBtn.is('[disabled]')).toBe(true);
      });
      it('should render pages 1-5, an ellipsis, and the last page', () => {
        wrapper.setProps({pageSize: 25, currentPage: 0});
        const pageButtons = wrapper.find('.page-button').hostNodes();
        expect(pageButtons.length).toBe(6);
        expect(wrapper.find('.ellipsis').length).toBe(1);
      });
      it('should always show page one when even when out of range', () => {
        //zero-based page 4 = 3
        wrapper.setProps({currentPage: 3});
        expect(wrapper.find('.page-button').first().text()).toBe("1");
      });
      it('should render page 1, an ellipsis, and the last 5 pages when current page is the last page', () => {
        const totalPages = Math.ceil(MAX_RESULTS / 25);
        wrapper.setProps({currentPage: totalPages - 1});
        expect(wrapper.find('.page-button').first().text()).toBe("1");
        expect(wrapper.find('.page-button').last().text()).toBe(`${totalPages}`);
        expect(wrapper.find('.ellipsis').length).toBe(1);
        expect(wrapper.find('.page-button').hostNodes().length).toBe(6);
      });
      it('should render page 1, an ellipsis, a group of 3 buttons, an ellipsis, and the last page, when current page is out of range of both', () => {
        const totalPages = Math.ceil(MAX_RESULTS / 25);
        wrapper.setProps({currentPage: parseInt(totalPages/2) });
        expect(wrapper.find('.page-button').first().text()).toBe("1");
        expect(wrapper.find('.page-button').last().text()).toBe(`${totalPages}`);
        expect(wrapper.find('.ellipsis').length).toBe(2);
        expect(wrapper.find('.page-button').hostNodes().length).toBe(5);
      });
      it('should have a Next button', () => {
        const nextBtn = wrapper.find('.next').hostNodes();
        expect(nextBtn.length).toBe(1);
      });
      it('should disable the Next button when current page is the last page', () => {
        const totalPages = Math.ceil(MAX_RESULTS / 25);
        wrapper.setProps({currentPage: totalPages - 1});
        const nextBtn = wrapper.find('.next').hostNodes();
        expect(nextBtn.is('[disabled]')).toBe(true);
      });
    });

    it('should have a page jumper', () => {
      expect(wrapper.find(`.page-jumper`).length).toBe(1);
    });

    describe("Page Jumper", () => {
      it('should show an error if value is greater than total pages', () => {
        const totalPages = Math.ceil(MAX_RESULTS / 25);
        wrapper.setProps({currentPage: totalPages - 1});
        const input = wrapper.find(`.page-jumper input`);
        input.getDOMNode().value = totalPages + 1;
        input.simulate('change');
        input.simulate('blur');
        expect(wrapper.find('.errorMessage').length).toBe(1);

        input.getDOMNode().value = totalPages;
        input.simulate('change');
        input.simulate('blur');
        expect(wrapper.find('.errorMessage').length).toBe(0);
      });
    });

  });
});
