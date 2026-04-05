import React from "react";
import Helmet from "react-helmet";
import heredoc from "../utils/heredocument";

import { DocsPage, DocsSection, DocsCode } from "../../../ols-ui/src/components/DocsFoundations";

import Table, { TableRow, TableHeaderCell, TableCell } from "../../../ols-ui/src/components/Tables";

import List, { ListItem } from "../../../ols-ui/src/components/List";

import Link, { ExternalLink } from "../../../ols-ui/src/components/Links";
import Panel from "../../../ols-ui/src/components/Panel";
import TabView, { Tab } from "../../../ols-ui/src/components/TabView";

import TabViewSpacing from "../assets/images/spacing-specs/General_Elements_Tabs.png";
import TabViewSpacingMobile from "../assets/images/spacing-specs/General_Elements_Tabs_Mobile.png";
import appStyles from "../styles/App.scss";

/**
 * *****************************************************************************
 * Content for TabView.
 *
 * @returns {[node]} The rendered DOM node
 * *****************************************************************************
 */
export default function TabViewPage() {
  return (
    <div>
      <Helmet title="Tab view" />
      <DocsPage
        className="docs-styles"
        title="Tab view"
        subtitle="Tab views separate related content into tabbed containers to help users navigate."
      >
        <DocsSection>
          <TabView id="preview-tabs">
            <Tab label="Preview">
              <Panel maxheight="medium">
                <TabView id="basic-tabs">
                  <Tab label="First item">First tab content goes here...</Tab>
                  <Tab label="Second item">Second tab content goes here...</Tab>
                  <Tab label="Third item">Third tab content goes here...</Tab>
                </TabView>
              </Panel>
            </Tab>
            <Tab label="Spacing">
              <Panel maxheight="medium">
                <img
                  style={{ maxWidth: "530px", height: "auto" }}
                  className={appStyles.previewSpacingDesktopFluid}
                  src={TabViewSpacing}
                  alt="This is a marked up graphic of the Tab View Desktop spacing"
                />
                <img
                  style={{ width: "100%", maxWidth: "300px", height: "auto" }}
                  className={appStyles.previewSpacingMobileFluid}
                  src={TabViewSpacingMobile}
                  alt="This is a marked up graphic of the Tab View Mobile spacing"
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
                  <TabView id="basic-tabs">
                    <Tab label="First item">
                      First tab content goes here...
                    </Tab>
                    <Tab label="Second item">
                      Second tab content goes here...
                    </Tab>
                    <Tab label="Third item">
                      Third tab content goes here...
                    </Tab>
                  </TabView>
                `}
                </DocsCode>
              </Panel>
            </Tab>
            <Tab label="CSS">
              <Panel className="panel-code" padding="none" maxheight="medium">
                <DocsCode language="scss">
                  {heredoc`
                  $tabs-underline-width: 3px;

                  .tabs {
                    margin-top: baselines(3);
                    margin-bottom: baselines(3);
                  }

                  .tabList {
                    border-bottom: solid 1px #5b616b;
                    margin-bottom: baselines(4);
                    border-bottom: solid 1px #d6d7d9;
                    min-width: fit-content;
                  }

                  .wrapper {
                    @include media-breakpoint-down(md) {
                      overflow-x: auto;
                      white-space: nowrap;
                      padding: 4px;
                      min-width: 100%;
                      scrollbar-width: none;
                      -ms-overflow-style: none;
                    }
                  }

                  .wrapper::-webkit-scrollbar {
                    display: none;
                  }

                  .tab {
                    @include button-unstyled;
                    margin-right: $module-spacing * 2;
                    color: #00599c;
                    cursor: pointer;
                    font-size: $font-size-base;
                    line-height: 1;
                    text-transform: none;
                    margin-bottom: -1px;
                    padding: 12px 0;
                    
                    &:last-of-type {
                      margin-right: 0;
                    }

                    &:focus {
                      outline: 3px solid #2491ff;
                    }

                    &[aria-selected="true"], &[aria-selected="true"]:hover {
                      font-weight: $font-bold;
                      border-bottom: solid $tabs-underline-width #002d62;
                      color: #002d62;
                    }

                    &.disabled {
                      color: #5b616b;
                      cursor: not-allowed;
                    }

                    &:hover {
                      font-size: $font-size-base;
                      font-weight: normal;
                      color: #002d62;
                    }
                  }

                  .tabPanel:focus {
                    outline: 3px solid #2491ff;
                    outline-offset: 0;
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
            Tab view navigation should be used when content is all within the
            same context and not lengthy to require a separate page.
          </p>
        </DocsSection>

        <DocsSection title="Specifications">
          <h3>Typography</h3>
          <Table caption="Tab View Typography Specifications">
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
                <TableHeaderCell>Tab header (active)</TableHeaderCell>
                <TableCell>
                  <Link to="/styles/typography/#display-type">Heading 16</Link>
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">Blue dark</Link>
                </TableCell>
                <TableCell>#002d62</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Tab header (inactive)</TableHeaderCell>
                <TableCell>
                  <Link to="/styles/typography/#display-type">Body text</Link>
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">Blue</Link>
                </TableCell>
                <TableCell>#00599c</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Tab header (hover)</TableHeaderCell>
                <TableCell><Link to="/styles/typography/#display-type">Body text</Link></TableCell>
                <TableCell><Link to="/styles/colors">Blue dark</Link></TableCell>
                <TableCell>#002d62</TableCell>
              </TableRow>
            </tbody>
          </Table>

          <h3>Tab elements</h3>
          <Table caption="Tab View Elements Specifications">
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
                <TableHeaderCell>Bottom border (active)</TableHeaderCell>
                <TableCell>3px solid</TableCell>
                <TableCell>
                  <Link to="/styles/colors">Blue dark</Link>
                </TableCell>
                <TableCell>#002d62</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Bottom border (inactive)</TableHeaderCell>
                <TableCell>1px solid</TableCell>
                <TableCell>
                  <Link to="/styles/colors">Gray light</Link>
                </TableCell>
                <TableCell>#d6d7d9</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Padding</TableHeaderCell>
                <TableCell>12px 0</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
            </tbody>
          </Table>

          <h3>Focus state</h3>
          <Table caption="Tab View Focus State Specifications">
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
                <TableCell>3px solid</TableCell>
                <TableCell>
                  <Link to="/styles/colors">Blue vivid</Link>
                </TableCell>
                <TableCell>#2491ff</TableCell>
              </TableRow>
            </tbody>
          </Table>
        </DocsSection>

        <DocsSection title="Usability guidance">
          <List>
            <ListItem>
              Tabs should only be used if the content within each tab can be
              logically grouped together and it does not need to be viewed
              simultaneously.
            </ListItem>
            <ListItem>
              Ensure only one tab (ideally the left-most tab) is preselected
              upon page load.
            </ListItem>
            <ListItem>
              Always highlight the currently selected tab so that users can
              easily tell which tab they are on. At the same time, unselected
              tabs should remain visible, when possible, to remind users they
              are using a tab interface and that other content is available to
              them.
            </ListItem>
            <ListItem>
              Visually connect the current tab to the content area.
            </ListItem>
            <ListItem>
              Tab labels should be succinct and use plain language.
            </ListItem>
            <ListItem>
              Only use one row of tabs on both desktop and mobile views.
              Similarly, ensure tab label text doesn't wrap.
            </ListItem>
            <ListItem>
              Order tabs in terms of content importance; in other words, the
              most important content should be presented as the left-most tab,
              since users process pages from left to right. They should see the
              most important (or most accessed) content first.
            </ListItem>
            <ListItem>
              Highlight the active tab by changing its visual affordance. This
              can be done via background color, font size or color, the size of
              the tab itself (wider or taller), border color, bolding text, or
              any other number of ways. Ensure that contrasts are accessible and
              follow 508 compliance guidelines. Different styling can also be
              used to convey a hover state.
            </ListItem>
          </List>
        </DocsSection>

        <DocsSection title="Accessibility guidance">
          <h3>
            Ensure page tabs contain proper textual descriptions indicating
            state and role.
          </h3>

          <p>
            Page <code>tab</code> elements must expose the following information
            to assistive technology users:
          </p>

          <List>
            <ListItem>
              Tab's name – should be equivalent to the visual text displayed on
              the page tab.
            </ListItem>
            <ListItem>Tab's role/type – should be set to "tab".</ListItem>
            <ListItem>
              State is indicated only when selected – should be set to
              "selected" or "active".
            </ListItem>
          </List>

          <p>Tabs that are image links:</p>

          <List>
            <ListItem>
              The textual equivalent should be provided by the <code>alt</code>{" "}
              attribute of the <code>&lt;img&gt;</code> element.
            </ListItem>
          </List>

          <p>Tabs as text links:</p>

          <List>
            <ListItem>
              The textual equivalent should be provided by the{" "}
              <code>title</code> attribute added to each <code>&lt;a&gt;</code>{" "}
              element, as well as appending hidden text to the visible link
              text, using CSS to position the hidden text off-screen.
            </ListItem>
          </List>

          <p>
            Tabs as lists (such as <code>&lt;ul&gt;</code> and{" "}
            <code>&lt;li&gt;</code> elements):
          </p>

          <List>
            <ListItem>
              The number of items will be conveyed automatically to users of
              assistive technology. If list markup is not used, it is useful but
              not required to provide position information about the current tab
              such as "1 of 3", etc.
            </ListItem>
          </List>

          <p>
            Developers can also use ARIA to ensure proper textual description is
            rendered through assistive technologies. Because ARIA is not
            supported by all browsers and assistive technologies developers
            should include ARIA and non-ARIA based methods unless the
            environment used with the site or application can be confirmed to
            mandate an ARIA supporting assistive technology and browser stack.
          </p>

          <h3>Navigation</h3>
          <List>
            <ListItem>
              Due to how swiping works on mobile, selecting each tab does not
              move the focus to the content the tab reveals. The user needs to
              swipe all the tabs to read the revealed content.
            </ListItem>
            <ListItem>
              In addition to tabbing, the following keys allow the user to
              navigate the tabs:
              <List>
                <ListItem>
                  <p>
                    <strong>Arrow keys –</strong> Navigate between the tabs. A
                    tab is automatically activated and its associated panel is
                    displayed when the tab receives focus.
                  </p>
                </ListItem>
                <ListItem>
                  <p>
                    <strong>Tab key – </strong>Takes the user to the tab's
                    content.
                  </p>
                </ListItem>
                <ListItem>
                  <p>
                    <strong>INSERT+ALT+M – </strong>
                    JAWS screen reader allows the user to read the content a
                    given tab reveals.
                  </p>
                </ListItem>
              </List>
            </ListItem>
          </List>

          <h3>Applicable standards</h3>

          <h4 className={appStyles.applicableStandardsh4}>Web Content Accessibility Guidelines (WCAG) 2.0/2.1</h4>

          <List>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships">
                1.3.1 Info and Relationships{" "}
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#meaningful-sequence">
                1.3.2 Meaningful Sequence
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#resize-text">
                1.4.4 Resize Text
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#keyboard">
                2.1.1 Keyboard{" "}
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#no-keyboard-trap">
                2.1.2 No Keyboard Trap
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#page-titled">
                2.4.2 Page Titled
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#focus-order">
                2.4.3 Focus Order
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#focus-visible">
                2.4.7 Focus Visible
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#name-role-value">
                4.1.2 Name, Role, Value
              </ExternalLink>
            </ListItem>
          </List>

          <h4 className={appStyles.applicableStandardsh4}>WAI-ARIA Authoring Practices 1.1</h4>

          <List>
            <ListItem>
              <ExternalLink href="https://www.w3.org/TR/WCAG20-TECHS/ARIA14.html">
                Using aria-label to provide an invisible label where a visible
                label cannot be used
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/TR/WCAG20-TECHS/ARIA16.html">
                Using aria-labelled by to provide a name for user interface
                controls
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/ARIA/apg/patterns/tabpanel/">
                Tabpanel
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/TR/wai-aria-practices/examples/tabs/tabs-1/tabs.html">
                Tabs with Automatic Activation
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/TR/wai-aria-practices/examples/tabs/tabs-2/tabs.html">
                Tabs with Manual Activation
              </ExternalLink>
            </ListItem>
          </List>

          <h3>Known accessibility issues</h3>

          <p>
          A known accessibility issue is a technical issue that platform or assistive technology (AT) engineers are working to fix 
          with each new release of iOS/Android or AT. For example, a role or state not being announced by a screen reader on a given platform.
          </p>
          <List>
            <ListItem>
              <strong>Issue:</strong> When navigating the tabs with JAWS
              2020/2021, JAWS does not announce the user can move to the content
              with INS+ALT+M keys.
            </ListItem>
          </List>
        </DocsSection>
      </DocsPage>
    </div>
  );
}
