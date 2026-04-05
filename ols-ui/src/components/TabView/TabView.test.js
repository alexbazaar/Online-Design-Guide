import React from 'react';
import { mount } from 'enzyme';
import matchMediaMock from "../../testing/matchMedia.mock";

import TabView, { Tab } from "./index";

describe("TabView", () => {
  let wrapper = null;
  let props;
  const tabViewOneLabel = 'Tab 1',
    tabViewOneBody = 'Tab 1 text here.',
    tabViewTwoLabel = 'Tab 2',
    tabViewTwoBody = 'Tab 2 text here.';

  beforeEach(() => {
    props = {
    };
    wrapper = mount(
      <TabView id="example">
        <Tab label={tabViewOneLabel}>
          {tabViewOneBody}
        </Tab>
        <Tab label={tabViewTwoLabel}>
          {tabViewTwoBody}
        </Tab>
      </TabView>

    );
  });

  it('is defined', () => {
    expect(wrapper).toBeDefined();
  });

  it('has a div wrapper', () => {
    expect((wrapper).type()).toEqual(TabView);
    expect((wrapper).getDOMNode().tagName.toLowerCase()).toEqual('div');
  });

  it('has two tab items', () => {
    const tabView = wrapper.find('.tabList');
    expect(tabView.find('.tab').length).toEqual(2);
  });

  // it("current tab should have index of 0", () => {
  //   const tabPanel = wrapper.find(".tabPanel");
  //   const currentIndex = tabPanel.prop("tabIndex");
  //   expect(currentIndex).toEqual("0");
  // });

  // it("tab panel contains content", () => {
  //   const tabPanel = wrapper.find(".tabPanels");
  //   const panelContent = tabPanel.find('[role="tabpanel"]');
  //   expect(panelContent.text()).toEqual("Tab 1 text here.");
  // });

  it('first tab item label is named Tab 1', () => {
    const tabView = wrapper.find('.tabList');
    const firstTab = tabView.find('.tab').first();
    expect(firstTab.text()).toEqual('Tab 1');
  });

  it('tab panel has content', () => {
    const tabPanel = wrapper.find('.tabPanels');
    const panelContent = tabPanel.find('[role="tabpanel"]');
    expect(panelContent.text()).toEqual('Tab 1 text here.');
  });
});
