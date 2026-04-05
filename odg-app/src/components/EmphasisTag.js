import React from "react";
import Helmet from "react-helmet";
import heredoc from "../utils/heredocument";
import { EmbedStyles } from "../../../ols-ui/src/helpers/utilities.js";

import { DocsPage, DocsSection, DocsCode } from "../../../ols-ui/src/components/DocsFoundations";

import Table, { TableRow, TableHeaderCell, TableCell } from "../../../ols-ui/src/components/Tables";

import Panel from "../../../ols-ui/src/components/Panel";
import TabView, { Tab } from "../../../ols-ui/src/components/TabView";

import { FlexRow, FlexCol } from "../../../ols-ui/src/components/FlexGrid";
import { EmphasisTag } from "../../../ols-ui/src/components/Tag";

import Link, { ExternalLink } from "../../../ols-ui/src/components/Links";
import List, { ListItem } from "../../../ols-ui/src/components/List";

import EmphasisTagSpecs from "../assets/images/spacing-specs/EmphasisTagSpacing.png";

import styles from "../styles/Docs.scss";
import typographyStyles from "../styles/Typography.scss";

import appStyles from "../styles/App.scss";

/**
 * *****************************************************************************
 * Content for Emphasis Tag.
 *
 * @returns {node} node
 * *****************************************************************************
 */
function EmphasisTagPage() {
  return (
    <div>
      <Helmet title="Emphasis tag" />
      <DocsPage
        className="docs-styles"
        title="Emphasis tag"
        subtitle="Emphasis tags are non-selectable visual indicators using text."
        emphasisTag={['IRAP APPROVED']}
      >
        <DocsSection>
          <TabView id="preview-tabs">
            <Tab label="Preview">
              <Panel>
                <EmphasisTag emphasis style={{ margin: "0" }} srOnlyText="New feature">
                  New
                </EmphasisTag>
              </Panel>
            </Tab>
            <Tab label="Spacing">
              <Panel maxheight="medium">
                <div style={{ padding: "0px" }}>
                  <img
                    style={{ width: "130px" }}
                    src={EmphasisTagSpecs}
                    alt="This is a marked up graphic of the Emphasis Tag specs spacing"
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
                  <EmphasisTag emphasis style={{ margin: "0" }} srOnlyText="New feature">
                    New
                  </EmphasisTag>
                  `}
                </DocsCode>
              </Panel>
            </Tab>
            <Tab label="CSS">
              <Panel className="panel-code" padding="none" maxheight="medium">
                <DocsCode language="xml">
                  {heredoc`
                  .emphasisTag {
                    @include button;
                    background: #c7a97b;
                    cursor: auto !important;
                    border: 0;
                    display: inline-block;
                    padding: 1px 8px 0px 8px;
                    margin-right: 12px;
                    font-size: 12px;
                    height: 20px;
                    margin-left: 16px;
                    margin-top: 10px;
                    letter-spacing: normal !important;
                    
                    @include media-breakpoint-up(md) {
                      margin-top: 20px;
                    }
                  
                    span {
                      vertical-align: baseline;
                      margin-right: 0;
                      font-size: 12px;
                      text-transform: uppercase;
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
          <p>Use emphasis tags to draw attention to new or important content.</p>
        </DocsSection>

        <DocsSection title="Usability guidance">
          <List>
            <ListItem><strong>Keep text concise.</strong> Keep text keywords in the emphasis tag as concise as possible. Ideally, an emphasis tag should contain one keyword.</ListItem>
            <ListItem><strong>Avoid confusion with buttons.</strong> An emphasis tag should be small, so it is not confused with a button component.</ListItem>
            <ListItem><strong>Use in moderation.</strong> Use emphasis tags in moderation, as they can add to the visual clutter of a page.</ListItem>
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
                <TableHeaderCell>Emphasis tag text</TableHeaderCell>
                <TableCell>
                  <Link to="/styles/typography/#display-type">
                    Tiny text
                  </Link>
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">Gray darkest</Link>
                </TableCell>
                <TableCell>
                #1b1b1b
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Text transform</TableHeaderCell>
                <TableCell>
                    Uppercase
                </TableCell>
                <TableCell>
                  N/A
                </TableCell>
                <TableCell>
                  N/A
                </TableCell>
              </TableRow>
            </tbody>
          </Table>

          <h3>Emphasis tag elements</h3>
          <Table caption="Emphasis Tag Elements">
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
                  <Link to="/styles/colors">Gold</Link>
                </TableCell>
                <TableCell>
                  #c7a97b
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
                <TableHeaderCell>Border radius</TableHeaderCell>
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
            <ListItem>Color of the tag/badge is not used as the only visual means of conveying information or 
distinguishing a visual element.</ListItem>
            <ListItem>The visual presentation of the tag's text and background must have contrast ratio of 4.5:1. 
Tags that are user interface components (which could include a link, a button or just provide a 
label) have a contrast ratio of at least 3:1 against adjacent color(s) on the page (i.e. border of the 
button must be 3:1).</ListItem>
            <ListItem>Ensure that information denoted by the color is either obvious from the content itself (e.g. 
visible text), or is included through alternative means, such as additional text hidden with the <code>.sr-only</code>
 class. The accessible text that will be read by screen readers should also include context. For example, the tag should read "New feature" instead of just "New".</ListItem>
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

export default EmbedStyles(styles, typographyStyles, appStyles)(EmphasisTagPage);
