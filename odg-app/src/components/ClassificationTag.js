import React from "react";
import Helmet from "react-helmet";
import heredoc from "../utils/heredocument";
import { EmbedStyles } from "../../../ols-ui/src/helpers/utilities.js";

import { DocsPage, DocsSection, DocsCode } from "../../../ols-ui/src/components/DocsFoundations";

import Table, { TableRow, TableHeaderCell, TableCell } from "../../../ols-ui/src/components/Tables";

import Panel from "../../../ols-ui/src/components/Panel";
import TabView, { Tab } from "../../../ols-ui/src/components/TabView";

import { FlexRow, FlexCol } from "../../../ols-ui/src/components/FlexGrid";
import { ClassificationTag } from "../../../ols-ui/src/components/Tag";

import Link, { ExternalLink } from "../../../ols-ui/src/components/Links";
import List, { ListItem } from "../../../ols-ui/src/components/List";

import ClassificationTagSpecs from "../assets/images/spacing-specs/ClassificationTagSpecs.png";

import styles from "../styles/Docs.scss";
import typographyStyles from "../styles/Typography.scss";

import appStyles from "../styles/App.scss";

/**
 * *****************************************************************************
 * Content for Classification Tag.
 *
 * @returns {node} node
 * *****************************************************************************
 */
function ClassificationTagPage() {
  return (
    <div>
      <Helmet title="Classification tag" />
      <DocsPage
        className="docs-styles"
        title="Classification tag"
        subtitle="Classification tags are selectable visual indicators using text."
        emphasisTag={[ "IRAP APPROVED" ]}
      >
        <DocsSection>
          <TabView id="preview-tabs">
            <Tab label="Preview">
              <Panel>
                <div data-component="ButtonPreviewTab">
                  <FlexRow className={styles.colButtonRows}>
                    <FlexCol>
                      <ClassificationTag classification srOnlyText="Filter by Individuals" to="#" style={{ marginTop: "0" }}>
                        Individuals
                      </ClassificationTag>
                    </FlexCol>
                  </FlexRow>
                </div>
              </Panel>
            </Tab>
            <Tab label="Spacing">
              <Panel maxheight="medium">
                <div style={{ padding: "0px" }}>
                  <img
                    style={{ width: "130px" }}
                    src={ClassificationTagSpecs}
                    alt="This is a marked up graphic of the Classification Tag specs spacing"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <span style={{ marginTop: "16px", fontSize: '12px', lineHeight: "16px", display: "inline-block" }}><br /><strong>Note:</strong> Please refer to the specifications section for more detail.</span>
                </div>
              </Panel>
            </Tab>
            <Tab label="HTML">
              <Panel className="panel-code" padding="none">
                <DocsCode language="xml">
                  {heredoc`
                  <ClassificationTag classification srOnlyText="Filter by Individuals" to="#" style={{ marginTop: "0" }}>
                    Individuals
                  </ClassificationTag>
                `}
                </DocsCode>
              </Panel>
            </Tab>
            <Tab label="CSS">
              <Panel className="panel-code" padding="none" maxheight="medium">
                <DocsCode language="xml">
                  {heredoc`
                    .classificationTag {
                      @include button;
                      background-color: #ffffff;
                      border: 1px solid #00599c;
                      color: #00599c;
                      text-decoration: none;
                      cursor: pointer;
                      line-height: 16px;
                      margin-left: 0px;
                      letter-spacing: normal;
                      padding: 1px 8px;
                      margin-right: 12px;
                      margin-top: 10px;
                      font-size: 12px;
                    
                      span {
                        vertical-align: baseline;
                        margin-right: 0;
                        font-size: 12px;
                        text-transform: none;
                      }
                    
                      &.focus,
                      &:focus {
                        color: #00599c;
                        border-color: #00599c;
                      }
                    
                      &.focus-visible,
                      &:focus-visible {
                        color: #00599c;
                        border-color: #00599c;
                      }
                    
                      &.focus:hover,
                      &:focus:hover {
                        color: #002d62;
                        border-color: #002d62;
                      }
                    
                      &.focus:active,
                      &:focus:active {
                        color: #002346;
                        border-color: #002346;
                      }
                      
                      &.visited,
                      &:visited {
                        color: #00599c;
                        border-color: #00599c;
                      }
                    
                      &.hover,
                      &:hover {
                        color: #002d62;
                        border-color: #002d62;
                      }
                    
                      &.active,
                      &:active {
                        color: #002346;
                        border-color: #002346;
                      }
                    }
                    
                    .classificationTag {
                      position: relative;
                      &:focus:not(.focus-visible) {
                        outline: none;
                      }
                    }
                    
                    .classificationTag:focus:not(.focus-visible):before {
                      box-sizing: border-box;
                      border: 3px solid #2491ff;
                      content: "";
                      display: block;
                      height: calc(100% + 18px);
                      width: calc(100% + 18px);
                      position: absolute;
                      top: -9px;
                      left: -9px;
                    }
                    
                    .sr-only {
                      @include sr-only;
                      display: inline-block;
                    }                    
                  `}
                </DocsCode>
              </Panel>
            </Tab>
          </TabView>
          <span className={appStyles.disclaimer}>
            <strong>Note:</strong> 
            <ul>
              <li>Use browser inspect tool to view the component at various breakpoints.</li>
              <li>This preview of the classification tag does not provide any interactive functionality other than making it a focusable element.</li>
            </ul>
          </span>
        </DocsSection>

        <DocsSection title="When to use">
          <p>Use classification tags to classify a piece or multiple pieces of content.</p>
        </DocsSection>

        <DocsSection title="Usability guidance">
          <List>
            <ListItem><strong>Classification tags are interactive.</strong> Classification tags can provide an additional way of navigating the site by filtering results with one or more tags.</ListItem>
            <ListItem><strong>Keep text concise.</strong> Keep text keywords in the classification tag as concise as possible. Ideally, a classification tag should contain one keyword.</ListItem>
            <ListItem><strong>Use in moderation.</strong> Use classification tags in moderation, as they can add to the visual clutter of a page.</ListItem>
          </List>
        </DocsSection>

        <DocsSection title="Specifications">
          <h3>Typography</h3>

          <Table caption="Typography">
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
                <TableHeaderCell>Classification tag text (default)</TableHeaderCell>
                <TableCell>
                  <Link to="/styles/typography/#display-type">
                    Tiny text
                  </Link>
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">Blue</Link>
                </TableCell>
                <TableCell>#00599c</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Classification tag text (hover)</TableHeaderCell>
                <TableCell>
                  <Link to="/styles/typography/#display-type">
                    Tiny text
                  </Link>
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">Blue dark</Link>
                </TableCell>
                <TableCell>#002d62</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Classification tag text (active)</TableHeaderCell>
                <TableCell>
                  <Link to="/styles/typography/#display-type">
                    Tiny text
                  </Link>
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">Blue darkest</Link>
                </TableCell>
                <TableCell>#002346</TableCell>
              </TableRow>
            </tbody>
          </Table>

          <h3>Classification tag elements</h3>
          <Table caption="Classification tag elements">
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
                <TableCell>
                  N/A
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">White</Link>
                </TableCell>
                <TableCell>#ffffff</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Border (default)</TableHeaderCell>
                <TableCell>1px solid</TableCell>
                <TableCell>
                  <Link to="/styles/colors">Blue</Link>
                </TableCell>
                <TableCell>#00599c</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Border (hover)</TableHeaderCell>
                <TableCell>1px solid</TableCell>
                <TableCell>
                  <Link to="/styles/colors">Blue dark</Link>
                </TableCell>
                <TableCell>#002d62</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Border (active)</TableHeaderCell>
                <TableCell>1px solid</TableCell>
                <TableCell>
                  <Link to="/styles/colors">Blue darkest</Link>
                </TableCell>
                <TableCell>#002346</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Border radius</TableHeaderCell>
                <TableCell>4px</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Padding</TableHeaderCell>
                <TableCell>2px 8px</TableCell>
                <TableCell>
                  N/A
                </TableCell>
                <TableCell>
                  N/A
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Height</TableHeaderCell>
                <TableCell>20px</TableCell>
                <TableCell>
                  N/A
                </TableCell>
                <TableCell>
                  N/A
                </TableCell>
              </TableRow>
            </tbody>
          </Table>

          <h3>Focus state</h3>
          <Table caption="Focus state">
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
                <TableCell>
                  3px
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">Blue vivid</Link>
                </TableCell>
                <TableCell>#2491ff</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Padding</TableHeaderCell>
                <TableCell>4px</TableCell>
                <TableCell>
                  N/A
                </TableCell>
                <TableCell>
                  N/A
                </TableCell>
              </TableRow>
            </tbody>
          </Table>
        </DocsSection>


        <DocsSection title="Accessibility guidance">
          <List>
            <ListItem>Color of the tag/badge is not used as the only visual means of conveying information or distinguishing a visual element.</ListItem>
            <ListItem>The visual presentation of the tag's text and background must have contrast ratio of 4.5:1. 
            Tags that are user interface components (which could include a link, a button or just provide a label) have a contrast ratio of at least 3:1 against adjacent color(s) on the page (i.e. border of the button must be 3:1).</ListItem>
            <ListItem>Ensure that information denoted by the color is either obvious from the content itself (e.g. visible text), or is included through alternative means, such as additional text hidden with the <code>.sr-only</code> class.
            The accessible text that will be read by screen readers should also include context. For example, the tag should read "Filter by individuals" instead of just "Individuals".</ListItem>
            <ListItem>When using interactive tags, please reference the ODG accessibility guidance for buttons and links.</ListItem>
          </List>
          <h3>Applicable standards</h3>

          <h4 className={appStyles.applicableStandardsh4}>Web Content Accessibility Guidelines (WCAG) 2.0/2.1</h4>

          <List>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#non-text-content">1.1.1 Non-text Content</ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&showtechniques=143&currentsidebar=%23col_overview#use-of-color">1.4.1 Use of Color</ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#contrast-minimum">1.4.3 Contrast Minimum</ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&showtechniques=143&currentsidebar=%23col_overview#images-of-text">1.4.5 Images of Text</ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&showtechniques=143&currentsidebar=%23col_overview#non-text-contrast">1.4.11 Non-text Contrast</ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#keyboard">2.1.1 Keyboard</ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#focus-visible">2.4.7 Focus Visible</ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&showtechniques=143&currentsidebar=%23col_overview#label-in-name">2.5.3 Label in Name </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#target-size">2.5.5 Target Size</ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&showtechniques=143&currentsidebar=%23col_overview#name-role-value">4.1.2 Name, Role, Value</ExternalLink>
            </ListItem>
          </List>
        </DocsSection>
      </DocsPage>
    </div>
  );
}

export default EmbedStyles(styles, typographyStyles, appStyles)(ClassificationTagPage);
