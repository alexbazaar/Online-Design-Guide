import React from "react";
import Helmet from "react-helmet";
import heredoc from "../utils/heredocument";

import { DocsPage, DocsSection, DocsCode } from "../../../ols-ui/src/components/DocsFoundations";
import Table, { TableRow, TableHeaderCell, TableCell } from "../../../ols-ui/src/components/Tables";
import Link, { ExternalLink } from "../../../ols-ui/src/components/Links";
import Panel from "../../../ols-ui/src/components/Panel";
import TabView, { Tab } from "../../../ols-ui/src/components/TabView";

import Badges from "../../../ols-ui/src/components/Badges";
import BadgesSpacing from "../assets/images/spacing-specs/Form_Elements_Badges.png";

import List, { ListItem } from "../../../ols-ui/src/components/List";

import appStyles from "../styles/App.scss";

/**
 * *****************************************************************************
 * Content for Badges.
 *
 * @returns {[node]} The rendered DOM node
 * *****************************************************************************
 */
export default function BadgesPage() {
  return (
    <div>
      <Helmet title="Badge" />
      <DocsPage
        className="docs-styles"
        title="Badge"
        subtitle="Badges highlight a numerical characteristic of an item."
        emphasisTag={[ 'IRAP APPROVED' ]}
      >
        <DocsSection>
          <TabView id="preview-tabs">
            <Tab label="Preview">
              <Panel padding="normal" maxheight="medium">
                <Badges value={1} hiddenLabel="Unread Messages" />
                <Badges value={12} hiddenLabel="Unread Messages" />
                <Badges value={100} hiddenLabel="Unread Messages" />
              </Panel>
            </Tab>
            <Tab label="Spacing">
              <Panel maxheight="medium">
                <img
                  style={{ width: "100%", maxWidth: "360px", height: "auto" }}
                  src={BadgesSpacing}
                  alt="This is a marked up graphic of the Badges spacing"
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
                    <Badges value={1} hiddenLabel="Unread Messages" />
                    <Badges value={12} hiddenLabel="Unread Messages" />
                    <Badges value={100} hiddenLabel="Unread Messages" />                  
                  `}
                </DocsCode>
              </Panel>
            </Tab>
            <Tab label="CSS">
              <Panel className="panel-code" padding="none" maxheight="medium">
                <DocsCode language="scss">
                  {heredoc`
                    .basicBadge {
                        width: 16px;
                        height: 16px;
                        border: 1px solid #ffffff;
                        border-radius: 8px;
                        background-color: #d11242;
                        font-size: 12px;
                        line-height: 16px;
                        color: #ffffff;
                        display: inline-flex;
                        justify-content: center;
                        align-items: center;
                        margin-left: 4px;
                    }
                    
                    .basicBadge[data-component-size="double"] {
                        width: 22px;
                    }
                    
                    .basicBadge[data-component-size="triple"] {
                        width: 28px;
                    }
                            
                `}
                </DocsCode>
              </Panel>
            </Tab>
          </TabView>
          <span className={appStyles.disclaimer}><strong>Note:</strong> Use browser inspect tool to view the component at various breakpoints.</span>
        </DocsSection>

        <DocsSection title="When to use">
          <p>Use badges to highlight a numerical value of an object.</p>
        </DocsSection>

        <DocsSection title="Specifications">
          <h3>Typography</h3>
          <Table caption="Badge Typography Specifications">
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
                <TableHeaderCell>Badge text</TableHeaderCell>
                <TableCell>
                  <Link to="/styles/typography/#display-type">Tiny text</Link>
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">White</Link>
                </TableCell>
                <TableCell>#ffffff</TableCell>
              </TableRow>
            </tbody>
          </Table>

          <h3>Badge elements</h3>
          <Table caption="Badge Elements Specifications">
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
                <TableHeaderCell>Outline</TableHeaderCell>
                <TableCell>1px solid</TableCell>
                <TableCell>
                  <Link to="/styles/colors">White</Link>
                </TableCell>
                <TableCell>#ffffff</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Fill</TableHeaderCell>
                <TableCell>N/A</TableCell>
                <TableCell>
                  <Link to="/styles/colors">Red</Link>
                </TableCell>
                <TableCell>#d11242</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Border radius</TableHeaderCell>
                <TableCell>8px</TableCell>
                <TableCell>N/A </TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Height {"(all digits)"}</TableHeaderCell>
                <TableCell>16px</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Width {"(1 digit)"}</TableHeaderCell>
                <TableCell>16px</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Width {"(2 digits)"}</TableHeaderCell>
                <TableCell>22px</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Width {"(3 digits)"}</TableHeaderCell>
                <TableCell>28px</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
            </tbody>
          </Table>
        </DocsSection>

        <DocsSection title="Usability guidance">
          <List>
            <ListItem>
              <strong>Place after object.</strong> Place badges after the object they are quantifying. 
            </ListItem>
            <ListItem>
              <strong>Badges cannot be selected or removed.</strong> Badges are not interactive. 
            </ListItem>
            <ListItem>
              <strong>Avoid going over two digits.</strong> Badges should contain no more than two digits. 
            </ListItem>
            <ListItem>
              <strong>Avoid using badges on their own.</strong> Badges should be dependent on another component, such as an icon or a text title {"(i.e., inbox + numerical counter)"}.
            </ListItem>
          </List>
        </DocsSection>

        <DocsSection title="Accessibility guidance">
          <List>
            <ListItem>
              Color of the tag/badge is not used as the only visual means of
              conveying information or distinguishing a visual element.
            </ListItem>
            <ListItem>
              The visual presentation of the {"badge's"} text and background
              must have contrast ratio of 4.5:1. Tags that are user interface
              components{" "}
              {"(which could include a link, a button or just provide a label)"}{" "}
              have a contrast ratio of at least 3:1 against adjacent color
              {"(s)"} on the page {"(i.e. border of the button must be 3:1)"}.
            </ListItem>
            <ListItem>
              Ensure that information denoted by the color is either obvious
              from the content itself {"(e.g. visible text)"}, or is included
              through alternative means, such as additional text hidden with the
              <code>.sr-only</code> class. The accessible text that will be read by screen
              readers should also include context. For example, the badge should
              read "40 unread emails" instead of just "40".
            </ListItem>
          </List>

          <h3>Applicable standards</h3>

          <h4 className={appStyles.applicableStandardsh4}>Web Content Accessibility Guidelines (WCAG) 2.0/2.1</h4>

          <List>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&currentsidebar=%23col_overview#non-text-content">
                1.1.1 Non-text Content
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&showtechniques=143&currentsidebar=%23col_overview#use-of-color">
                1.4.1 Use of Color
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#contrast-minimum">
                1.4.3 Contrast Minimum
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#images-of-text">
                1.4.5 Images of Text
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
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#focus-visible">
                2.4.7 Focus Visible
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&currentsidebar=%23col_overview#label-in-name">
                2.5.3 Label in Name
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&currentsidebar=%23col_overview#target-size">
                2.5.5 Target Size
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#name-role-value">
                4.1.2 Name, Role, Value
              </ExternalLink>
            </ListItem>
          </List>
        </DocsSection>
      </DocsPage>
    </div>
  );
}
