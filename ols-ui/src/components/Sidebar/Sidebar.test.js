import React from "react";
import { mount } from "enzyme";
import { Sidebar, SidebarLink } from "./index";
import { Switch, Route, MemoryRouter } from "react-router";

describe("Side Navigation", () => {
  let wrapper = null;
  let props;
  const topLevelA = "/sidenav-test/top-level-a";
  const secondaryLevelA = "/sidenav-test/top-level-a/secondary-level-a";
  const secondaryLevelB = "/sidenav-test/top-level-a/secondary-level-b";
  const secondaryLevelC = "/sidenav-test/top-level-a/secondary-level-c";
  const tertiaryLevelA =
    "/sidenav-test/top-level-a/secondary-level-a/tertiary-level-a";
  const tertiaryLevelB =
    "/sidenav-test/top-level-a/secondary-level-a/tertiary-level-b";

  beforeEach(() => {
    props = {};

    wrapper = mount(
      <MemoryRouter initialEntries={["/sidenav-test"]}>
        <div>
          <Sidebar>
            <SidebarLink label="Top Level A" to={topLevelA}>
              <SidebarLink label="Secondary Level A" to={secondaryLevelA}>
                <SidebarLink label="Tertiary Level A" to={tertiaryLevelA} />
                <SidebarLink label="Tertiary Level B" to={tertiaryLevelB} />
              </SidebarLink>
              <SidebarLink label="Secondary Level B" to={secondaryLevelB} />
              <SidebarLink label="Secondary Level C" to={secondaryLevelC} />
            </SidebarLink>
          </Sidebar>

          <Switch>
            <Route
              path={tertiaryLevelA}
              render={() => <BlankTest label="Tertiary Level A" />}
            />
            <Route
              path={tertiaryLevelB}
              render={() => <BlankTest label="Tertiary Level B" />}
            />
            <Route
              path={secondaryLevelA}
              render={() => <BlankTest label="Secondary Level A" />}
            />
            <Route
              path={secondaryLevelB}
              render={() => <BlankTest label="Secondary Level B" />}
            />
            <Route
              path={secondaryLevelC}
              render={() => <BlankTest label="Secondary Level C" />}
            />
            <Route
              path={topLevelA}
              render={() => <BlankTest label={"Top Level A"} />}
            />
          </Switch>
        </div>
      </MemoryRouter>
    );
  });

  it("should exist", () => {
    expect(wrapper).toBeDefined();
  });

  // Grouping the nested Links by using 'describe'
  describe("Tertiary Level A from Top Level A is reached when", () => {
    
    it("Top Level A has 2 children", () => {
      const topLevelLinks = wrapper.find("li").at(1).children();
      expect(topLevelLinks).toHaveLength(2);
    });

    it("Top Level A's second child has 'sidenavSubList' classname containing Secondary Level A-C", () => {
      const topLevelLinks = wrapper.find("li").at(1).children();
      const secondLevelLinks = topLevelLinks.find(".sidenavSubList").props().className;
      expect(secondLevelLinks).toEqual("sidenavSubList");
    });

    it("Seconday Level A's first child is Tertiary Level A", () => {
      const topLevelLinks = wrapper.find("li").at(1).children();
      const secondLevelLinks = topLevelLinks.find(".sidenavSubList").children();
      const tertiaryLevelLinks = secondLevelLinks.at(0).props();
      expect(tertiaryLevelLinks.label).toBe('Tertiary Level A');
    });

    it("Tertiary Level A has the correct path", () => {
      const topLevelLinks = wrapper.find("li").at(1).children();
      const secondLevelLinks = topLevelLinks.find(".sidenavSubList").children();
      const tertiaryLevelLinks = secondLevelLinks.at(0).props();
      expect(tertiaryLevelLinks.to).toBe(tertiaryLevelA);
    });

  });
});
