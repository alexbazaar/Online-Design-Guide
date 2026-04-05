import React from "react";
import Helmet from "react-helmet";
import { EmbedStyles } from "../../../ols-ui/src/helpers/utilities.js";
import { DocsPage, DocsSection, DocsCode } from "../../../ols-ui/src/components/DocsFoundations";
import Panel from "../../../ols-ui/src/components/Panel";
import Table, { TableRow, TableHeaderCell, TableCell } from "../../../ols-ui/src/components/Tables";
import Link, { ExternalLink } from "../../../ols-ui/src/components/Links";
import { Sidebar, SidebarLink } from "../../../ols-ui/src/components/Sidebar";
import List, { ListItem } from "../../../ols-ui/src/components/List";
import { Switch, Route } from "react-router";
import BlankTest from "../components/BlankTest";
import { FlexRow } from "../../../ols-ui/src/components/FlexGrid";
import TabView, { Tab } from "../../../ols-ui/src/components/TabView";
import heredoc from "../utils/heredocument";
import SideNavSpacing from "../assets/images/spacing-specs/General_Elements_Side_Navigation.png";

import styles from "../styles/Docs.scss";
import appStyles from "../styles/App.scss";

/**
 * *****************************************************************************
 * Content for Sidebar.
 *
 * @returns {[node]} The rendered DOM node
 * *****************************************************************************
 */
function SidebarPage() {
  const blankPage = "/components/side-navigation";

  return (
    <div>
      <Helmet title="Side navigation" />
      <DocsPage
        className="docs-styles"
        title="Side navigation"
        subtitle="Side navigation help users navigate via a hierarchical structure of linked content."
        emphasisTag={[ "IRAP APPROVED" ]}
      >
        <DocsSection>
          <TabView id="preview-tabs">
            <Tab label="Preview">
              <Panel maxheight="medium">
                <FlexRow>
                  <div style={{ flex: "0 0 261px", marginLeft: "8px" }}>
                    <Sidebar>
                      <SidebarLink
                        label="Top level A"
                        to={`${blankPage}/top-level-a`}
                      >
                        <SidebarLink
                          label="Secondary level A"
                          to={`${blankPage}/top-level-a/secondary-level-a`}
                        >
                          <SidebarLink
                            label="Tertiary level A"
                            to={`${blankPage}/top-level-a/secondary-level-a/tertiary-level-a`}
                          />
                          <SidebarLink
                            label="Tertiary level B"
                            to={`${blankPage}/top-level-a/secondary-level-a/tertiary-level-b`}
                          />
                        </SidebarLink>
                        <SidebarLink
                          label="Secondary level B"
                          to={`${blankPage}/top-level-a/secondary-level-b`}
                        />
                        <SidebarLink
                          label="Secondary level C"
                          to={`${blankPage}/top-level-a/secondary-level-c`}
                        />
                      </SidebarLink>
                      <SidebarLink
                        label="Top level B"
                        to={`${blankPage}/top-level-b`}
                      >
                        <SidebarLink
                          label="Secondary level A"
                          to={`${blankPage}/top-level-b/secondary-level-a`}
                        >
                          <SidebarLink
                            label="Tertiary level A"
                            to={`${blankPage}/top-level-b/secondary-level-a/tertiary-level-a`}
                          />
                          <SidebarLink
                            label="Tertiary level B"
                            to={`${blankPage}/top-level-b/secondary-level-a/tertiary-level-b`}
                          />
                        </SidebarLink>
                        <SidebarLink
                          label="Secondary level B"
                          to={`${blankPage}/top-level-b/secondary-level-b`}
                        />
                        <SidebarLink
                          label="Secondary level C"
                          to={`${blankPage}/top-level-b/secondary-level-c`}
                        />
                      </SidebarLink>
                      <SidebarLink
                        label="Top level C"
                        to={`${blankPage}/top-level-c`}
                      >
                        <SidebarLink
                          label="Secondary level A"
                          to={`${blankPage}/top-level-c/secondary-level-a`}
                        >
                          <SidebarLink
                            label="Tertiary level A"
                            to={`${blankPage}/top-level-c/secondary-level-a/tertiary-level-a`}
                          />
                          <SidebarLink
                            label="Tertiary level B"
                            to={`${blankPage}/top-level-c/secondary-level-a/tertiary-level-b`}
                          />
                        </SidebarLink>
                        <SidebarLink
                          label="Secondary level B"
                          to={`${blankPage}/top-level-c/secondary-level-b`}
                        />
                        <SidebarLink
                          label="Secondary level C"
                          to={`${blankPage}/top-level-c/secondary-level-c`}
                        />
                      </SidebarLink>
                      <SidebarLink
                        label="Top level D"
                        to={`${blankPage}/top-level-d`}
                      >
                        <SidebarLink
                          label="Secondary level A"
                          to={`${blankPage}/top-level-d/secondary-level-a`}
                        >
                          <SidebarLink
                            label="Tertiary level A"
                            to={`${blankPage}/top-level-d/secondary-level-a/tertiary-level-a`}
                          />
                          <SidebarLink
                            label="Tertiary level B"
                            to={`${blankPage}/top-level-d/secondary-level-a/tertiary-level-b`}
                          />
                        </SidebarLink>
                        <SidebarLink
                          label="Secondary level B"
                          to={`${blankPage}/top-level-d/secondary-level-b`}
                        />
                        <SidebarLink
                          label="Secondary level C"
                          to={`${blankPage}/top-level-d/secondary-level-c`}
                        />
                      </SidebarLink>
                      <SidebarLink
                        label="Top level E"
                        to={`${blankPage}/top-level-e`}
                      >
                        <SidebarLink
                          label="Secondary level A"
                          to={`${blankPage}/top-level-e/secondary-level-a`}
                        >
                          <SidebarLink
                            label="Tertiary level A"
                            to={`${blankPage}/top-level-e/secondary-level-a/tertiary-level-a`}
                          />
                          <SidebarLink
                            label="Tertiary level B"
                            to={`${blankPage}/top-level-e/secondary-level-a/tertiary-level-b`}
                          />
                        </SidebarLink>
                        <SidebarLink
                          label="Secondary level B"
                          to={`${blankPage}/top-level-e/secondary-level-b`}
                        />
                        <SidebarLink
                          label="Secondary level C"
                          to={`${blankPage}/top-level-e/secondary-level-c`}
                        />
                      </SidebarLink>
                    </Sidebar>
                  </div>
                  <div style={{ margin: "-12px 16px 0" }}>
                    <Switch>
                      <Route
                        path={`${blankPage}/top-level-a/secondary-level-a/tertiary-level-a`}
                        render={() => <BlankTest label="Tertiary level A" />}
                      />
                      <Route
                        path={`${blankPage}/top-level-a/secondary-level-a/tertiary-level-b`}
                        render={() => <BlankTest label="Tertiary level B" />}
                      />
                      <Route
                        path={`${blankPage}/top-level-a/secondary-level-a`}
                        render={() => <BlankTest label="Secondary level A" />}
                      />
                      <Route
                        path={`${blankPage}/top-level-a/secondary-level-b`}
                        render={() => <BlankTest label="Secondary level B" />}
                      />
                      <Route
                        path={`${blankPage}/top-level-a/secondary-level-c`}
                        render={() => <BlankTest label="Secondary level C" />}
                      />
                      <Route
                        path={`${blankPage}/top-level-a`}
                        render={() => <BlankTest label={"Top level A"} />}
                      />

                      <Route
                        path={`${blankPage}/top-level-b/secondary-level-a/tertiary-level-a`}
                        render={() => <BlankTest label="Tertiary level A" />}
                      />
                      <Route
                        path={`${blankPage}/top-level-b/secondary-level-a/tertiary-level-b`}
                        render={() => <BlankTest label="Tertiary level B" />}
                      />
                      <Route
                        path={`${blankPage}/top-level-b/secondary-level-a`}
                        render={() => <BlankTest label="Secondary level A" />}
                      />
                      <Route
                        path={`${blankPage}/top-level-b/secondary-level-b`}
                        render={() => <BlankTest label="Secondary level B" />}
                      />
                      <Route
                        path={`${blankPage}/top-level-b/secondary-level-c`}
                        render={() => <BlankTest label="Secondary level C" />}
                      />
                      <Route
                        path={`${blankPage}/top-level-b`}
                        render={() => <BlankTest label={"Top level B"} />}
                      />

                      <Route
                        path={`${blankPage}/top-level-c/secondary-level-a/tertiary-level-a`}
                        render={() => <BlankTest label="Tertiary level A" />}
                      />
                      <Route
                        path={`${blankPage}/top-level-c/secondary-level-a/tertiary-level-b`}
                        render={() => <BlankTest label="Tertiary level B" />}
                      />
                      <Route
                        path={`${blankPage}/top-level-c/secondary-level-a`}
                        render={() => <BlankTest label="Secondary level A" />}
                      />
                      <Route
                        path={`${blankPage}/top-level-c/secondary-level-b`}
                        render={() => <BlankTest label="Secondary level B" />}
                      />
                      <Route
                        path={`${blankPage}/top-level-c/secondary-level-c`}
                        render={() => <BlankTest label="Secondary level C" />}
                      />
                      <Route
                        path={`${blankPage}/top-level-c`}
                        render={() => <BlankTest label={"Top level C"} />}
                      />

                      <Route
                        path={`${blankPage}/top-level-d/secondary-level-a/tertiary-level-a`}
                        render={() => <BlankTest label="Tertiary level A" />}
                      />
                      <Route
                        path={`${blankPage}/top-level-d/secondary-level-a/tertiary-level-b`}
                        render={() => <BlankTest label="Tertiary level B" />}
                      />
                      <Route
                        path={`${blankPage}/top-level-d/secondary-level-a`}
                        render={() => <BlankTest label="Secondary level A" />}
                      />
                      <Route
                        path={`${blankPage}/top-level-d/secondary-level-b`}
                        render={() => <BlankTest label="Secondary level B" />}
                      />
                      <Route
                        path={`${blankPage}/top-level-d/secondary-level-c`}
                        render={() => <BlankTest label="Secondary level C" />}
                      />
                      <Route
                        path={`${blankPage}/top-level-d`}
                        render={() => <BlankTest label={"Top level D"} />}
                      />

                      <Route
                        path={`${blankPage}/top-level-e/secondary-level-a/tertiary-level-a`}
                        render={() => <BlankTest label="Tertiary level A" />}
                      />
                      <Route
                        path={`${blankPage}/top-level-e/secondary-level-a/tertiary-level-b`}
                        render={() => <BlankTest label="Tertiary level B" />}
                      />
                      <Route
                        path={`${blankPage}/top-level-e/secondary-level-a`}
                        render={() => <BlankTest label="Secondary level A" />}
                      />
                      <Route
                        path={`${blankPage}/top-level-e/secondary-level-b`}
                        render={() => <BlankTest label="Secondary level B" />}
                      />
                      <Route
                        path={`${blankPage}/top-level-e/secondary-level-c`}
                        render={() => <BlankTest label="Secondary level C" />}
                      />
                      <Route
                        path={`${blankPage}/top-level-e`}
                        render={() => <BlankTest label={"Top level E"} />}
                      />
                    </Switch>
                  </div>
                </FlexRow>
              </Panel>
            </Tab>
            <Tab label="Spacing">
              <Panel maxheight="medium">
                <img
                  style={{}}
                  src={SideNavSpacing}
                  alt="This is a marked up graphic of the Side Navigation spacing"
                />
                <div>
                  <span
                    style={{
                      marginTop: "16px",
                      fontSize: "12px",
                      lineHeight: "16px",
                      display: "inline-block"
                    }}
                  >
                    <br />
                    <strong>Note:</strong> Please refer to the specifications
                    section for more detail.
                  </span>
                </div>
              </Panel>
            </Tab>
            <Tab label="HTML">
              <Panel className="panel-code" padding="none" maxheight="medium">
                <DocsCode language="xml">
                  {heredoc`
                  <Sidebar>
                    <SidebarLink
                      label="Top level A"
                      to={\`\${blankPage}/top-level-a\`}
                    >
                      <SidebarLink
                        label="Secondary level A"
                        to={\`\${blankPage}/top-level-a/secondary-level-a\`}
                      >
                        <SidebarLink
                          label="Tertiary level A"
                          to={\`\${blankPage}/top-level-a/secondary-level-a/tertiary-level-a\`}
                        />
                        <SidebarLink
                          label="Tertiary level B"
                          to={\`\${blankPage}/top-level-a/secondary-level-a/tertiary-level-b\`}
                        />
                      </SidebarLink>
                      <SidebarLink
                        label="Secondary level B"
                        to={\`\${blankPage}/top-level-a/secondary-level-b\`}
                      />
                      <SidebarLink
                        label="Secondary level C"
                        to={\`\${blankPage}/top-level-a/secondary-level-c\`}
                      />
                    </SidebarLink>
                    ...
                  </Sidebar>

                  <Switch>
                      <Route
                        path={\`\${blankPage}/top-level-a\`}
                        render={() => <BlankTest label="Top level A" />}
                      />
                      <Route
                        path={\`\${blankPage}/top-level-a/secondary-level-a\`}
                        render={() => <BlankTest label="Secondary level A" />}
                      />
                      <Route
                        path={\`\${blankPage}/top-level-a/secondary-level-a/tertiary-level-a\`}
                        render={() => <BlankTest label="Tertiary level A" />}
                      />
                      <Route
                        path={\`\${blankPage}/top-level-a/secondary-level-a/tertiary-level-b\`}
                        render={() => <BlankTest label="Tertiary level B" />}
                      />
                      <Route
                        path={\`\${blankPage}/top-level-a/secondary-level-b\`}
                        render={() => <BlankTest label="Secondary level B" />}
                      />
                      <Route
                        path={\`\${blankPage}/top-level-a/secondary-level-c\`}
                        render={() => <BlankTest label={"Secondary level C"} />}
                      />
                    ...
                  </Switch>

                  `}
                </DocsCode>
              </Panel>
            </Tab>
            <Tab label="CSS">
              <Panel className="panel-code" padding="none" maxheight="medium">
                <DocsCode language="scss">
                  {heredoc`
                    $linkPadding: 10px 20px;
                    $iconSize: 20px;
                    $iconMarginRight: 8px;
                    $animationSpeed: 300ms;
                    $easeInOutQuad: cubic-bezier(0.455, 0.03, 0.515, 0.955);
                    $closedWidth: $iconSize + 24px;

                    .srOnly {
                      @include sr-only();
                    }

                    .sidenav {
                      flex: 0 0 $width-nav-sidebar;

                      @include media-breakpoint-down(md) {
                        display: block;
                        margin-bottom: $module-spacing;
                      }
                    }

                    .sidenavList {
                      @include unstyled-list();

                      .sidenavSubList li[data-component="sidenavItem"] {
                        border-top: none;
                      }
                    }

                    [data-component="sidenavItem"] {
                      margin-top: -1px;

                      list-style: none;

                      a.sidebarLink {
                        border-top: 1px solid #d6d7d9;
                        border-bottom: 1px solid #d6d7d9;

                        &:focus {
                          outline: 3px solid #2491ff;
                          outline-offset: none;
                        }
                      }
                    }

                    [data-component="sidenavItem"]:first-of-type a:first-of-type {
                      border-top: 1px solid #d6d7d9;
                    }

                    a.sidebarLink {
                      display: block;
                      height: auto; 
                      padding: $linkPadding;
                      color: #1b1b1b;
                      font-size: $font-size-base;
                      line-height: $line-height-base;
                      text-decoration: none;
                      position: relative;

                      span {
                        pointer-events: none;
                      }

                      &:hover {
                        background-color: #f3f3f3;
                        color: #1b1b1b;
                        padding-left: $linkPadding + 3;
                      }

                      &:focus {
                        z-index: 1;
                      }

                      &.currentNavItem {
                        padding: $linkPadding;
                        font-weight: $font-bold;
                        ::before{
                          content: "";
                          top: 0;
                          bottom: 0;
                          left: 0;
                          background-color: #002d62;
                          width: 3px;
                          display: block;
                          position: absolute;
                        }
                      }

                      &.withIcon svg {
                        display: inline-block;
                        width: $iconSize;
                        height: $iconSize;
                        margin-right: $iconMarginRight;
                      }
                    }

                    .sidenavSubList {
                      @include unstyled-list();
                      display: none;
                      width: 100%;
                      margin: 0;
                      background-color: #ffffff;

                      .active ~ &,
                      .activeNavItem ~ &,
                      .inactiveNavItem ~ & {
                        display: block;
                      }

                      li {
                        font-weight: $font-normal;

                        a.sidebarLink {
                          font-size: 14px;
                          padding-left: 40px;
                        }

                        ul {
                          a.sidebarLink {
                            padding-left: 60px;
                          }
                        }
                      }
                    }

                    .groupLabel {
                      padding: 30px 12px 4px 12px;
                      font-size: $font-size-tiny;
                      font-weight: $font-bold;
                      letter-spacing: 0.5px;
                      text-transform: uppercase;
                    }

                    .groupList {
                      li:last-of-type {
                        border-bottom: none;
                      }

                      .sidenavSubList li[data-component="sidenavItem"] {
                        border-top: none;
                      }
                    
                    }

                    [data-component="DocsSection"] {
                      .groupList {
                        padding-left: 0px;
                      }

                      .sidenavList {
                        padding-bottom: 0px;
                      }

                      .sidenavSubList {
                        padding-left: 0px;
                      }
                    }

                    // Collapsible sidebar
                    // ------------------------
                    .collapsibleSidenav {
                      width: 30%;
                      max-width: $width-nav-sidebar;
                      margin-right: $grid-gutter-width-base;
                      float: left;
                      transition: width $animationSpeed $easeInOutQuad;

                      .sidebarLink {
                        display: flex;
                        overflow: hidden;
                        width: $width-nav-sidebar;
                        transition: width $animationSpeed $easeInOutQuad;

                        svg {
                          position: relative;
                          top: -2px;
                          width: $iconSize;
                          height: $iconSize;
                          flex: 0 0 $iconSize;
                          margin-right: $iconMarginRight;
                        }

                        span {
                          overflow: hidden;
                          height: baselines(6);
                          opacity: 1;
                          transition: opacity $animationSpeed $easeInOutQuad;
                        }
                      }

                      &.closed {
                        width: $closedWidth;
                        transition: width $animationSpeed $easeInOutQuad;

                        .sidebarLink {
                          width: $closedWidth;
                          transition: width $animationSpeed $easeInOutQuad;

                          span {
                            opacity: 0;
                            transition: opacity $animationSpeed $easeInOutQuad;
                          }
                        }
                      }
                    }

                    .collapseButton {
                      @include button-unstyled;
                      position: relative;
                      display: block;
                      width: 100%;
                      height: baselines(8);
                      padding: $linkPadding;
                      background-color: rgba(0, 0, 0, 0.5);
                      color: #ffffff;
                      cursor: pointer;
                      text-align: right;

                      .buttonArrow {
                        position: relative;
                        top: 2px;
                        left: -5px;
                        width: 6px;
                        height: 12px;
                      }
                    }                    
                    `}
                </DocsCode>
              </Panel>
            </Tab>
          </TabView>
          <span className={appStyles.disclaimer}><strong>Note:</strong> Use browser inspect tool to view the component at various breakpoints.</span>
        </DocsSection>

        <DocsSection title="When to use">
          <p>
            Side navigation should be used to display one to three levels of
            sub-navigation within a section of a website.
          </p>
        </DocsSection>

        <DocsSection title="Specifications">
          <h3>Typography</h3>
          <Table caption="Side navigation typography specifications">
            <thead>
              <TableRow>
                <TableHeaderCell scope="col" width="35%">
                  Property
                </TableHeaderCell>
                <TableHeaderCell scope="col" width="25%">
                  Value
                </TableHeaderCell>
                <TableHeaderCell scope="col">Color name</TableHeaderCell>
                <TableHeaderCell scope="col">Hex</TableHeaderCell>
              </TableRow>
            </thead>
            <tbody>
              <TableRow>
                <TableHeaderCell>Top tevel (default)</TableHeaderCell>
                <TableCell>
                  <Link to="/styles/typography/#display-type">Body text</Link>
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">Gray darkest</Link>
                </TableCell>
                <TableCell>
                  #1b1b1b
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Top level (active)</TableHeaderCell>
                <TableCell>
                  <Link to="/styles/typography/#display-type">Heading 16</Link>
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">Gray darkest</Link>
                </TableCell>
                <TableCell>
                  #1b1b1b
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Secondary level (default)</TableHeaderCell>
                <TableCell>14px</TableCell>
                <TableCell>
                  <Link to="/styles/colors">Gray darkest</Link>
                </TableCell>
                <TableCell>
                  #1b1b1b
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Secondary level (active)</TableHeaderCell>
                <TableCell>14px, bold</TableCell>
                <TableCell>
                  <Link to="/styles/colors">Gray darkest</Link>
                </TableCell>
                <TableCell>
                  #1b1b1b
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Tertiary level (default)</TableHeaderCell>
                <TableCell>14px</TableCell>
                <TableCell>
                  <Link to="/styles/colors">Gray darkest</Link>
                </TableCell>
                <TableCell>
                  #1b1b1b
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Tertiary level (active)</TableHeaderCell>
                <TableCell>14px, bold</TableCell>
                <TableCell>
                  <Link to="/styles/colors">Gray darkest</Link>
                </TableCell>
                <TableCell>
                  #1b1b1b
                </TableCell>
              </TableRow>
            </tbody>
          </Table>

          <h3>Side navigation elements</h3>
          <Table caption="Side navigation elements specifications">
            <thead>
              <TableRow>
                <TableHeaderCell scope="col" width="35%">
                  Property
                </TableHeaderCell>
                <TableHeaderCell scope="col" width="25%">
                  Value
                </TableHeaderCell>
                <TableHeaderCell scope="col">Color name</TableHeaderCell>
                <TableHeaderCell scope="col">Hex</TableHeaderCell>
              </TableRow>
            </thead>
            <tbody>
              <TableRow>
                <TableHeaderCell>Background</TableHeaderCell>
                <TableCell>N/A</TableCell>
                <TableCell>
                  <Link to="/styles/colors">White</Link>
                </TableCell>
                <TableCell>
                  #ffffff
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Background (hover)</TableHeaderCell>
                <TableCell>N/A</TableCell>
                <TableCell>
                  <Link to="/styles/colors">Gray lighter</Link>
                </TableCell>
                <TableCell>
                  #f3f3f3
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Border bottom</TableHeaderCell>
                <TableCell>1px solid</TableCell>
                <TableCell>
                  <Link to="/styles/colors">Gray light</Link>
                </TableCell>
                <TableCell>
                  #d6d7d9
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Border left (active)</TableHeaderCell>
                <TableCell>3px solid</TableCell>
                <TableCell>
                  <Link to="/styles/colors">Blue dark</Link>
                </TableCell>
                <TableCell>
                  #002d62
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Gutter (top/bottom)</TableHeaderCell>
                <TableCell>10px</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Top level gutter (left)</TableHeaderCell>
                <TableCell>20px</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Secondary level gutter (left)</TableHeaderCell>
                <TableCell>40px</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Tertiary level gutter (left)</TableHeaderCell>
                <TableCell>60px</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
            </tbody>
          </Table>

          <h3>Focus state</h3>
          <Table caption="Side navigation focus state specifications">
            <thead>
              <TableRow>
                <TableHeaderCell scope="col">Property</TableHeaderCell>
                <TableHeaderCell scope="col">Value</TableHeaderCell>
                <TableHeaderCell scope="col">Color name</TableHeaderCell>
                <TableHeaderCell scope="col">Hex</TableHeaderCell>
              </TableRow>
            </thead>
            <tbody>
              <TableRow>
                <TableHeaderCell>Border</TableHeaderCell>
                <TableCell>3px</TableCell>
                <TableCell>
                  <Link to="/styles/colors">Blue Vivid</Link>
                </TableCell>
                <TableCell>
                  #2491ff
                </TableCell>
              </TableRow>
            </tbody>
          </Table>
        </DocsSection>

        <DocsSection title="Usability guidance">
          <List>
            <ListItem>
              The name of each section should match across all navigational
              elements (i.e. the mega menu, the breadcrumb, the footer, and
              anywhere else the section is linked.)
            </ListItem>
            <ListItem>
              The active page that a user is on should have a different visual
              affordance than the rest of the links in a side navigation, so that
              users can easily tell which page they're on.
            </ListItem>
            <ListItem>
              The items in a side navigation should relate to the items in that
              particular section. At a minimum, they should contain all the mega
              menu links for that section. Extraneous information, such as a
              related links list or other relevant content should be placed in the
              right rail/sidebar.
            </ListItem>
            <ListItem>
              Side navigation links need to be long enough to convey the purpose
              of the link and should be as concise as possible without sacrificing
              meaning.
            </ListItem>
            <ListItem>
              On mobile, the side navigation will move into an
              expandable/collapsible section navigation dropdown. Make sure the
              mobile section navigation and the main menu design are distinct to
              avoid confusing the user.
            </ListItem>
          </List>
        </DocsSection>

        <DocsSection title="Accessibility guidance">
          <h3>Menus structure</h3>
          <List>
            <ListItem>
              Consider making the label of menus visible to everyone.
            </ListItem>
            <ListItem>
              Mark up menus in a way that reflects their structure and
              appropriately labels them.
              <List>
                <ListItem>
                  Convey the menu structure, typically by using a <code>&lt;list&gt;</code>.
                </ListItem>
                <ListItem>
                  On mobile, when the main navigation menu is opened it should
                  toggle to display the "Close" button.
                </ListItem>
                <ListItem>
                  Identify the menu, using the HTML5 <code>&lt;nav&gt;</code> element to
                  allow users access to the menu directly or with page regions.
                </ListItem>
                <ListItem>
                  Use <code>aria-current="page"</code> attribute to indicate the current page
                  in the menu to improve orientation in the menu.
                </ListItem>
              </List>
            </ListItem>
            <ListItem>
              Indicate menu items with submenus visually and using markup. For
              example, the submenu is indicated with WAI-ARIA markup:
              <List>
                <ListItem>
                  <code>aria-haspopup="true"</code> declares that a menu item has a submenu.
                </ListItem>
                <ListItem>
                  <code>aria-expanded="false"</code> declares that the submenu is hidden.
                </ListItem>
              </List>
            </ListItem>
            <ListItem>
              In addition to the aria-expanded and aria-haspopup attributes, the
              following WAI-ARIA roles are used to provide the necessary semantics
              of an application menu:
              <List>
                <ListItem>
                  menubar: represents a (usually horizontal) menu bar.
                </ListItem>
                <ListItem>
                  menu: represents a set of links or commands in a menu bar, it is
                  for the fly-out menus.
                </ListItem>
                <ListItem>menuitem: represents an individual menu item.</ListItem>
                <ListItem>
                  separator: represents a separator between two groups of menu
                  items in a menu.
                </ListItem>
              </List>
            </ListItem>
          </List>

          <h3>Readability and styling</h3>
          <List>
            <ListItem>
              Display the menu where the target audience of the website expects
              it. For example, on websites, the main navigation menu is commonly
              located either vertically to the left of the pages content (in
              left-to-right languages), or horizontally across the top.
              Application menus are usually expected horizontally across the top.
            </ListItem>
            <ListItem>
              The menu should be resizable to display varying text sizes, and to
              accommodate languages with longer words and people who need larger
              text.
            </ListItem>
            <ListItem>
              Where possible avoid all uppercase text, line breaks, and
              hyphenation, as these are often distracting and hard to read.
            </ListItem>
            <ListItem>
              Convey menu items and their states by using color and other styling
              options but don't rely on color alone as some users will be unable
              to perceive such changes. For example, alter the shape of a menu
              item, or add an icon, in addition to changing its color when it is
              selected.
            </ListItem>
            <ListItem>
              Keep the navigation links short. They can be shorter derivatives of
              page titles themselves.
            </ListItem>
            <ListItem>
              If the navigation hierarchy is too long, users may miss items at the
              bottom. If it's too deep, users may miss items that are nested
              within the layers of the navigation structure. Conduct usability
              testing to find the right balance between breadth and depth.
            </ListItem>
            <ListItem>
              Components that have the same function in different web pages are
              more easily recognized if they are labeled consistently.
            </ListItem>
            <ListItem>
              There is no loss of content when at 200% zoom and menus do not
              overlap themselves and other content of the page when users increase
              the text size or zoom the page.
            </ListItem>
            <ListItem>
              Menu links meet 4.5:1 minimum contrast requirement.
            </ListItem>
          </List>

          <h3>Keyboard access, visible focus and focus order</h3>
          <List>
            <ListItem>The menu needs to be keyboard accessible.</ListItem>
            <ListItem>
              Each focusable element in the menu indicates visible focus.
            </ListItem>
            <ListItem>
              Keyboard focus moves directly to the flyout menus or one additional
              keystroke moves the focus to the revealed content.
            </ListItem>
            <ListItem>
              The focus order is sequential in an order that preserves meaning and
              operability.
            </ListItem>
            <ListItem>Menu links need to be meaningful.</ListItem>
            <ListItem>
              There is no change of context until the user activates menu links
              with a space bar or enter key.
            </ListItem>
            <ListItem>
              For menus that expand, the keyboard focus moves directly to the
              revealed content or one additional keystroke moves the focus to the
              revealed content.
            </ListItem>
            <ListItem>
              Visible focus may not move to revealed content that does not contain
              focusable elements or if the revealed content is not itself
              focusable.
            </ListItem>
          </List>

          <h3>Multiple ways to find a web page</h3>
          <List>
            <ListItem>
              Provide more than one way to locate a web page within a set of web
              pages to aid different users in navigation:
              <List>
                <ListItem>
                  Users with visual impairments and cognitive limitations may find
                  it easier to navigate to the correct part of the site by using a
                  search, rather than scrolling through a large navigation bar
                  using a screen magnifier or screen reader.
                </ListItem>
                <ListItem>
                  A person with cognitive disabilities may prefer a table of
                  contents or site map that provides an overview of the site
                  rather than reading and traversing through several web pages.
                </ListItem>
                <ListItem>
                  Some users may prefer to explore the site in a sequential
                  manner, moving from web page to web page in order to best
                  understand the concepts and layout.
                </ListItem>
              </List>
            </ListItem>
          </List>

          <h3>Mobile devices</h3>
          <List>
            <ListItem>
              Provide sufficient white space, like padding, to support people with
              reduced dexterity and small touch screens on mobile devices.
            </ListItem>
            <ListItem>
              Mobile devices require the menu items to be large targets
              (44x44 pixels) to click or tap on.
            </ListItem>
            <ListItem>
              Once the side navigation menu is opened, the focus needs to shift to
              the content of the selected link and the menu is closed
              automatically.
            </ListItem>
          </List>

          <h3>Applicable standards</h3>
          <h4 className={appStyles.applicableStandardsh4}>Web Content Accessibility Guidelines (WCAG) 2.0/2.1</h4>
          <List>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships">
                1.3.1 Info and Relationships
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&showtechniques=143&currentsidebar=%23col_overview#use-of-color">
                1.4.1 Use of Color
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#contrast-minimum">
                1.4.3. Contrast Minimum
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&currentsidebar=%23col_overview#non-text-contrast">
                1.4.11 Non-text Contrast
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#keyboard">
                2.1.1 Keyboard
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&showtechniques=143&currentsidebar=%23col_overview#no-keyboard-trap">
                2.1.2 No Keyboard Trap
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&showtechniques=143&currentsidebar=%23col_overview#focus-order">
                2.4.3 Focus Order
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&currentsidebar=%23col_overview#link-purpose-in-context">
                2.4.4 Link Purpose
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#multiple-ways">
                2.4.5 Multiple Ways
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#headings-and-labels">
                2.4.6 Headings and Labels
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#focus-visible">
                2.4.7 Focus Visible
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#location">
                2.4.8 Location
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&currentsidebar=%23col_overview#on-focus">
                3.2.1 On Focus
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&currentsidebar=%23col_overview#on-input">
                3.2.2 On Input
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#consistent-navigation">
                3.2.3 Consistent Navigation
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#name-role-value">
                4.1.2 Name, Role, Value
              </ExternalLink>
            </ListItem>
          </List>

          <h4 className={appStyles.applicableStandardsh4}>WAI-ARIA Authoring Practices 1.1</h4>
          <List>
            <ListItem>
              <ExternalLink href="https://www.w3.org/TR/WCAG20-TECHS/aria">
                ARIA Techniques
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA11">
                Using ARIA landmarks to identify regions of a page
              </ExternalLink>
            </ListItem>
          </List>
        </DocsSection>
      </DocsPage>
    </div>
  );
}

export default EmbedStyles(styles)(SidebarPage);