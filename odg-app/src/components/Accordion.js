import React from "react";
import Helmet from "react-helmet";
import heredoc from "../utils/heredocument";

import {
  DocsPage,
  DocsSection,
  DocsCode
} from "../../../ols-ui/src/components/DocsFoundations";

import Table, {
  TableRow,
  TableHeaderCell,
  TableCell
} from "../../../ols-ui/src/components/Tables";

import List, { ListItem } from "../../../ols-ui/src/components/List";
import Link, { ExternalLink } from "../../../ols-ui/src/components/Links";
import Panel from "../../../ols-ui/src/components/Panel";
import TabView, { Tab } from "../../../ols-ui/src/components/TabView";

import Accordion, {
  AccordionItem, 
  AccordionItemTrigger, 
  AccordionItemBody
} from '../../../ols-ui/src/components/Accordion';

import AccordionSpacingStacked from '../assets/images/spacing-specs/General_Elements_Accordion_Stacked.png';
import Styles from "../styles/App.scss";

/**
 * *****************************************************************************
 * Content for Accordion
 *
 * @returns {node} the node
 * *****************************************************************************
 */
export default function AccordionPage() {

  return (

    <div>
      <Helmet title="Accordion" />
      <DocsPage
        className="docs-styles"
        title="Accordion"
        subtitle="Accordions allow users to hide or display content."
        emphasisTag={[ "IRAP APPROVED", "USER TESTED" ]}
      >
        <DocsSection>
          <TabView id="preview-tabs">
            <Tab label="Preview">
              <Panel padding="large" maxheight="medium">
                <Accordion>
                  <AccordionItem>
                    <AccordionItemTrigger headingLevel="2">First amendment</AccordionItemTrigger>
                    <AccordionItemBody>
                      <p>
                        Congress shall make no law respecting an establishment of
                        religion, or prohibiting the free exercise thereof; or
                        abridging the freedom of speech, or of the press; or the right
                        of the people peaceably to assemble, and to petition the
                        Government for a redress of grievances.
                      </p>
                    </AccordionItemBody>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionItemTrigger headingLevel="2">Second amendment</AccordionItemTrigger>
                    <AccordionItemBody>
                      <p>
                        A well regulated Militia, being necessary to the security of a
                        free State, the right of the people to keep and bear Arms,
                        shall not be infringed.
                      </p>
                    </AccordionItemBody>
                  </AccordionItem>
                  <AccordionItem disabled border={false}>
                    <AccordionItemTrigger headingLevel="2">Third amendment</AccordionItemTrigger>
                    <AccordionItemBody>
                      <p>
                        No Soldier shall, in time of peace be quartered in any house,
                        without the consent of the Owner, nor in time of war, but in a
                        manner to be prescribed by law.
                      </p>
                    </AccordionItemBody>
                  </AccordionItem>
                </Accordion>
              </Panel>
            </Tab>
            <Tab label="Spacing">
              <Panel maxheight="medium">
                <img src={AccordionSpacingStacked} alt="This is a marked up graphic of the Accordion spacing (stacked)" />

                <div>
                  <span style={{ marginTop: "16px", fontSize: '12px', lineHeight: "16px", display: "inline-block" }}><br /><strong>Note:</strong> Please refer to the specifications section for more detail.</span>
                </div>
              </Panel>
            </Tab>
            <Tab label="HTML">
              <Panel className="panel-code" padding="none" maxheight="medium">
                <DocsCode language="xml">
                  {heredoc`
                  <Accordion>
                    <AccordionItem>
                      <AccordionItemTrigger headingLevel="2">First amendment</AccordionItemTrigger>
                      <AccordionItemBody>
                        <p>
                          Congress shall make no law respecting an establishment of
                          religion, or prohibiting the free exercise thereof; or
                          abridging the freedom of speech, or of the press; or the right
                          of the people peaceably to assemble, and to petition the
                          Government for a redress of grievances.
                        </p>
                      </AccordionItemBody>
                    </AccordionItem>

                    <AccordionItem>
                      <AccordionItemTrigger headingLevel="2">Second amendment</AccordionItemTrigger>
                      <AccordionItemBody>
                        <p>
                          A well regulated Militia, being necessary to the security of a
                          free State, the right of the people to keep and bear Arms,
                          shall not be infringed.
                        </p>
                      </AccordionItemBody>
                    </AccordionItem>

                    <AccordionItem disabled border={false}>
                      <AccordionItemTrigger headingLevel="2">Third amendment</AccordionItemTrigger>
                      <AccordionItemBody>
                        <p>
                          No Soldier shall, in time of peace be quartered in any house,
                          without the consent of the Owner, nor in time of war, but in a
                          manner to be prescribed by law.
                        </p>
                      </AccordionItemBody>
                    </AccordionItem>
                  </Accordion>
                `}
                </DocsCode>
              </Panel>
            </Tab>
            <Tab label="CSS">
              <Panel className="panel-code" padding="none" maxheight="medium">
                <DocsCode language="scss">
                  {heredoc`
                  $accordionIconSize: 20px;

                  .accordionItem {
                    border-bottom: solid 1px #d6d7d9;
                    margin: 0;
                    padding-left: 0;

                    h2,
                    h3,
                    h4,
                    h5,
                    h6 {
                      @include heading2-sizing;
                    }

                    &.noBorder {
                      border-bottom: none;
                    }

                    &:last-child {
                      border-bottom: none;
                    }
                  }

                  .accordionOuterBorder {
                    border: solid 1px #d6d7d9;
                  }

                  .trigger {
                    @include button-unstyled;
                    @include heading3;
                    color: #1b1b1b;
                    position: relative;
                    display: block;
                    width: 100%;
                    padding: $module-spacing;
                    padding-left: 47px;
                    background: transparent;
                    cursor: pointer;
                    text-align: left;

                    &[disabled] {
                      color: #5b616b;
                      cursor: not-allowed;
                  
                      .triggerPlusIcon {
                        svg {
                          height: 11px;
                          width: 19px;
                        }
                        color: #5b616b;
                        position: absolute;
                        left: 16px;
                        bottom: 17px;
                        top: 14px;

                        .padding & {
                          left: $module-spacing;
                        }
                      }
                    }

                    &:hover:not([disabled]) {
                      background-color: #f3f3f3;
                    }

                    .padding & {
                      padding-left: 47px;
                    }
                  }

                  .triggerMinusIcon {
                    color: #00599c;
                    svg {
                      width: 19px;
                      height: 11px;
                    }
                    position: absolute;
                    left: 16px;
                    bottom: 17px;
                    top: 11px;

                    .padding & {
                      left: $module-spacing;
                    }
                  }

                  .triggerPlusIcon {
                    svg {
                      width: 19px;
                      height: 11px;
                    }
                    color: #00599c;
                    height: 11px;
                    width: 19px;
                    position: absolute;
                    left: 16px;
                    bottom: 17px;
                    top: 14px;

                    .padding & {
                      left: $module-spacing;
                    }
                  }

                  .body {
                    color: #1b1b1b;
                    padding: 0;
                    margin: 0;
                    overflow-y: hidden;
                    transition-duration: 300ms;
                    transition-property: max-height;
                    transition-timing-function: cubic-bezier(0, 1, 0.5, 1);

                    > div {
                      padding: 0 $module-spacing $module-spacing 44px;

                      > *:first-child {
                        margin-top: 0;
                      }

                      > *:last-child {
                        margin-bottom: 0;
                      }

                      &.noBodyIndent {
                        padding-left: 0;
                      }
                    }

                    .padding & {
                      > div {
                        padding-left: $module-spacing * 3;
                        padding-right: $module-spacing;

                        &.noBodyIndent {
                          padding-left: $module-spacing;
                        }
                      }
                    }
                  }

                  // Custom focus outline for Accordion
                  button.trigger:focus {
                    outline: 3px solid #2491ff;
                    outline-offset: 1px;
                    z-index: 1;
                  }                  
                `}
                </DocsCode>
              </Panel>
            </Tab>
          </TabView>
          <span className={Styles.disclaimer}><strong>Note:</strong> Use browser inspect tool to view the component at various breakpoints.</span>
        </DocsSection>

        <DocsSection title="When to use">
          <p>On desktop and mobile, accordions are effective when the goal is to minimize excessive scrolling and shorten the pages while 
          organizing related information in digestible chunks for better emphasis.</p>
          <p>Additionally, accordions can be used to organize sections of long forms allowing the user to fill out a form on one page.</p>
        </DocsSection>

        <DocsSection title="Specifications">
          <h3>Typography</h3>
          <Table caption="Accordion typography specifications">
            <thead>
              <TableRow>
                <TableHeaderCell scope="col">Context</TableHeaderCell>
                <TableHeaderCell scope="col">Reference</TableHeaderCell>
                <TableHeaderCell scope="col">Color name</TableHeaderCell>
                <TableHeaderCell scope="col">Hex</TableHeaderCell>
              </TableRow>
            </thead>
            <tbody>
              <TableRow>
                <TableHeaderCell>Accordion title</TableHeaderCell>
                <TableCell>
                  <Link to="/styles/typography/#display-type">Heading 20</Link>
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">
                    Gray darkest
                  </Link>
                </TableCell>
                <TableCell>
                  #1b1b1b
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Accordion title (disabled)</TableHeaderCell>
                <TableCell>
                  <Link to="/styles/typography/#display-type">Heading 20</Link>
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">
                    Gray dark
                  </Link>
                </TableCell>
                <TableCell>
                  #5b616b
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Accordion text</TableHeaderCell>
                <TableCell>
                  <Link to="/styles/typography/#display-type">Body text</Link>
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">
                    Gray darkest
                  </Link>
                </TableCell>
                <TableCell>
                  #1b1b1b
                </TableCell>
              </TableRow>
            </tbody>
          </Table>

          <h3>Message elements</h3>
          <Table caption="Accordion message elements specifications">
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
                <TableHeaderCell>Background</TableHeaderCell>
                <TableCell>N/A</TableCell>
                <TableCell>
                  <Link to="/styles/colors">
                    White
                  </Link>
                </TableCell>
                <TableCell>
                  #ffffff
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Background (hover)</TableHeaderCell>
                <TableCell>N/A</TableCell>
                <TableCell>
                  <Link to="/styles/colors">
                  Gray lighter
                  </Link>
                </TableCell>
                <TableCell>
                  #f3f3f3
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Border</TableHeaderCell>
                <TableCell>1px solid</TableCell>
                <TableCell>
                  <Link to="/styles/colors">
                    Gray light
                  </Link>
                </TableCell>
                <TableCell>
                  #d6d7d9
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Border (between panels)</TableHeaderCell>
                <TableCell>1px solid</TableCell>
                <TableCell>
                  <Link to="/styles/colors">
                    Gray light
                  </Link>
                </TableCell>
                <TableCell>
                  #d6d7d9
                </TableCell>
              </TableRow>
            </tbody>
          </Table>

          <h3>Icon elements</h3>
          <Table caption="Accordion icon elements specifications">
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
                <TableHeaderCell>Icon (open)</TableHeaderCell>
                <TableCell><Link to="/styles/iconography">chevron-down-solid</Link></TableCell>
                <TableCell>
                  <Link to="/styles/colors">
                    Blue
                  </Link>
                </TableCell>
                <TableCell>
                  #00599c
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Icon (disabled)</TableHeaderCell>
                <TableCell><Link to="/styles/iconography">chevron-down-solid</Link></TableCell>
                <TableCell>
                  <Link to="/styles/colors">
                    Gray dark
                  </Link>
                </TableCell>
                <TableCell>
                  #5b616b
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Icon (close)</TableHeaderCell>
                <TableCell><Link to="/styles/iconography">chevron-up-solid</Link></TableCell>
                <TableCell>
                  <Link to="/styles/colors">
                    Blue
                  </Link>
                </TableCell>
                <TableCell>
                  #00599c
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Icon size</TableHeaderCell>
                <TableCell>19px x 11px</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Icon gutter (left)</TableHeaderCell>
                <TableCell>16px</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
            </tbody>
          </Table>

          <h3>Focus state</h3>
          <Table caption="Accordion focus state specifications">
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
                <TableCell><Link to="/styles/colors">Blue vivid</Link></TableCell>
                <TableCell>#2491ff</TableCell>
              </TableRow>
            </tbody>
          </Table>
        </DocsSection>

        <DocsSection title="Usability guidance">
          <h3>General rules</h3>
          <List>
            <ListItem>
              Accordions should initially appear collapsed (unless it's used to display a form; view Forms section below) to allow for a quick overview of all content headings and to let the user decide which accordion heading they want to expand to view. </ListItem>
            <ListItem>
              Chevron icons should be displayed to the left of the accordion heading to indicate open/close state of the accordion. Left side location allows for better user visibility in case of long titles or right-aligned content.
            </ListItem>
            <ListItem>
              The chevron icon should change when selected to be pointed up when expanded and down when collapsed.</ListItem>
            <ListItem>
              Make the chevron icon large enough to easily select. The touch target should be a minimum of 44 x 44 pixels.
            </ListItem>
            <ListItem>
              More than one accordion can be expanded at a time to display static text or, if accordion content displays form fields, to enable the user to view form validation errors easily.   </ListItem>
            <ListItem>
              The entire area of the accordion heading box including the icon should be selectable using mouse/tap and a keyboard to control expand/collapse state.</ListItem>
            <ListItem>
              On mouse-over the accordion should change to visually indicate that the area is selectable. </ListItem>
            <ListItem>
              Avoid using accordions in both desktop and mobile views when the number of accordion headings is less than 3 and use a bulleted list instead.</ListItem>
            <ListItem>
              If an accordion heading does not have any content it should not be visible.
            </ListItem>
          </List>
          <h3>Content</h3>
          <List>
            <ListItem>
              When an accordion heading is expanded, the content should be displayed immediately under the accordion heading in a short and concise format as possible to avoid users getting lost while scrolling to the next accordion heading.
            </ListItem>
            <ListItem>
              Avoid hiding essential information. Accordions should not be used if the intention is for all the content to be consumed in one session. Relevance is more important than reducing page length.
            </ListItem>
          </List>
          <h3>Forms</h3>
          <List>
            <ListItem>
              Accordions used to display form fields should have the <b>first heading expanded</b> with subsequent headings collapsed when the page first loads. This is the one notable exception of when an accordion would not start completely collapsed.
            </ListItem>
          </List>
          <h3>Expand/collapse functionality</h3>
          <List>
            <ListItem>
              Accordions should start completely collapsed for several reasons:
              <List>
                <ListItem>
                  Collapsed accordions can serve as a table of contents, making it easier to scan the page. This is especially true on mobile devices.
                </ListItem>
                <ListItem>
                  With the contents collapsed, the page becomes shorter and more manageable for the user.
                </ListItem>
                <ListItem>
                  Analytics can be added to all the accordion triggers to measure user's actions and interest.
                </ListItem>
              </List>
            </ListItem>
            <ListItem>
              Though accordions should be shown as collapsed when a user first accesses a page, there could be use cases where a user would like to expand all accordions at once. This should be facilitated by placing an "Expand/Collapse all" toggle above the first accordion on the page (right-aligned).
            </ListItem>
            <ListItem>
              The text of the button or link should change when a user selects it; it should say "Expand all." when the accordions are closed and change to "Collapse all" when the accordions are open. When a user has opened one or more accordions, such that there are both open and closed accordions on the page at once, both "Expand all" and "Collapse all" should be visible.
            </ListItem>
            <ListItem>
              On long FAQs that have multiple sections, the expand/collapse should work for each section rather than the whole page.
            </ListItem>
          </List>
        </DocsSection>

        <DocsSection title="Accessibility guidance">
          <List>
            <ListItem>
              Accordions can be accessed and executed using the keyboard with no keyboard trap present.
            </ListItem>
            <ListItem>
              A visible indication of focus is provided when focus is on the accordion.
            </ListItem>
            <ListItem>
              Ensure accordion buttons that trigger a change of content provide sufficient description about the change event via their accessible name, accessible description, and/or context that provides sufficient description of the accordion's purpose.
            </ListItem>
            <ListItem>
              Focus is moved to revealed content.
            </ListItem>
            <ListItem>
              The focus order preserves the meaning and operability of the web page.
            </ListItem>
            <ListItem>
              If headings are used for accordion triggers on a page such as a frequently asked questions (FAQ) page, the triggers should contain the correct hierarchal order (<code>&lt;h1&gt;</code>, <code>&lt;h2&gt;</code>, <code>&lt;h3&gt;</code>). This should not change the visual appearance of the accordion trigger.
            </ListItem>
            <ListItem>
              For multiple accordions such as the FAQ example page, add a "Back to top" link in each expanded accordion to allow the user to go back to the top of frequently asked questions heading to prevent extensive scrolling.
            </ListItem>
            <ListItem>
              The "<b>expanded</b>" or "<b>collapsed</b>" state of the accordion element must be exposed to and announced by screen readers when element receives focus and when state changes due to user interaction.
            </ListItem>
          </List>
          <h3>Keyboard commands</h3>
          <List>
            <ListItem>
              <b>Enter</b> or <b>Space</b> expand the associated panel when focus is on the accordion header.      If the implementation allows only one panel to be expanded, and if another panel is expanded, <b>Enter</b> or <b>Space</b> collapse that panel.
            </ListItem>
            <ListItem>
              <b>Tab</b> moves focus to the next focusable element; all focusable elements in the accordion are included in the page Tab sequence.
            </ListItem>
            <ListItem>
              <b>Shift + Tab</b> moves focus to the previous focusable element; all focusable elements in the accordion are included in the page Tab sequence.
            </ListItem>
          </List>

          <h3>ARIA roles, states, and properties</h3>
          <List>
            <ListItem>
              The title of each accordion heading is contained in an element with <code>role="button"</code>.
            </ListItem>
            <ListItem>
              Each accordion heading button is wrapped in an element with <code>role="heading"</code> that has a value set for <code>aria-level</code> that is appropriate for the information architecture of the page.
            </ListItem>
            <ListItem>
                The <code>&lt;button&gt;</code> element is the only element inside the <code>&lt;heading&gt;</code> element.
            </ListItem>
            <ListItem>
                The heading button element has <code>aria-expanded="true"</code> when the accordion panel associated with an accordion heading is visible.
            </ListItem>
            <ListItem>
                If the panel is not visible, <code>aria-expanded="false"</code>.
            </ListItem>
            <ListItem>
                The accordion heading button element has aria-controls set to the <code>id</code> of the element containing the accordion panel content.
            </ListItem>
          </List>
          <h3>Applicable standards</h3>

          <h4 className={Styles.applicableStandardsh4}>
            Web Content Accessibility Guidelines (WCAG) 2.0/2.1
          </h4>
          <List>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships" target="_blank">
                1.3.1 Info and Relationships
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&amp;currentsidebar=%23col_overview#contrast-minimum" target="_blank">
                1.4.3 Contrast (Minimum)
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&amp;currentsidebar=%23col_overview#non-text-contrast" target="_blank">
                1.4.11 Non-text Contrast
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&amp;currentsidebar=%23col_overview#resize-text" target="_blank">
                1.4.4 Resize text
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#keyboard" target="_blank">
                2.1.1 Keyboard
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&amp;currentsidebar=%23col_overview#focus-order" target="_blank">
                2.4.3 Focus Order
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#headings-and-labels" target="_blank">
                2.4.6 Headings and Labels
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&amp;currentsidebar=%23col_overview#focus-visible" target="_blank">
                2.4.7 Focus Visible
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&amp;currentsidebar=%23col_overview#target-size" target="_blank">
                2.5.5 Target Size
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#labels-or-instructions" target="_blank">
                3.3.2 Labels or Instructions
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#name-role-value" target="_blank">
                4.1.2 Name, Role, Value
              </ExternalLink>
            </ListItem>
          </List>
          <h4 className={Styles.applicableStandardsh4}>WAI-ARIA Authoring Practices 1.1</h4>
          <List>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/ARIA/apg/patterns/accordion/" target="_blank">
                Accordion
              </ExternalLink>
            </ListItem>
          </List>
        </DocsSection>

      </DocsPage>
    </div >
  );
}
