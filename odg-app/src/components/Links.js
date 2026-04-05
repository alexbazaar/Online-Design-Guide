import React from "react";
import Helmet from "react-helmet";
import heredoc from "../utils/heredocument";

import { DocsPage, DocsSection, DocsCode } from "../../../ols-ui/src/components/DocsFoundations";

import Table, { TableRow, TableHeaderCell, TableCell } from "../../../ols-ui/src/components/Tables";

import List, {ListItem} from "../../../ols-ui/src/components/List";
import Link, { ExternalLink, EmailLink } from "../../../ols-ui/src/components/Links";
import Panel from "../../../ols-ui/src/components/Panel";
import TabView, { Tab } from "../../../ols-ui/src/components/TabView";

import { FlexRow, FlexCol } from "../../../ols-ui/src/components/FlexGrid";

import Spacer from "../../../ols-ui/src/components/Spacer";

import LinksSpacing from "../assets/images/spacing-specs/Links.png";
import appStyles from "../styles/App.scss";

/**
 * *****************************************************************************
 * Content for Links.
 *
 * @returns {[node]} The rendered DOM node
 * *****************************************************************************
 */
export default function LinksPage() {
  return (
    <div>
      <Helmet title="Link" />
      <DocsPage
        className="docs-styles"
        title="Link"
        subtitle="Links help users navigate to another page or position."
        emphasisTag={[ "IRAP APPROVED", "USER TESTED" ]}
      >
        <DocsSection>
          <TabView id="preview-tabs">
            <Tab label="Preview">
              <Panel maxheight="medium">
                <FlexRow>
                  <FlexCol>
                    <p>Points inside the application</p>
                    <Link to="/">Example link</Link>
                  </FlexCol>
                  <FlexCol>
                    <p>Points outside the application</p>
                    <ExternalLink href="http://www.irs.gov">
                      Example link
                    </ExternalLink>
                  </FlexCol>
                  <FlexCol>
                    <p>Points to default email application</p>
                    <EmailLink href="mailto:ols.online.design.guide@irs.gov">
                      Email link
                    </EmailLink>
                  </FlexCol>
                </FlexRow>
              </Panel>
            </Tab>
            <Tab label="Spacing">
              <Panel maxheight="medium">
                <img
                  style={{ maxWidth: "90%", height: "auto" }}
                  src={LinksSpacing}
                  alt="This is a marked up graphic of the Links spacing"
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
                  <Link to="/">
                    Example link
                  </Link>

                  <ExternalLink href="http://www.irs.gov">
                    Example link
                  </ExternalLink>

                  <EmailLink href="mailto:ols.online.design.guide@irs.gov">
                    Email link
                  </EmailLink>
                `}
                </DocsCode>
              </Panel>
            </Tab>
            <Tab label="CSS">
              <Panel className="panel-code" padding="none" maxheight="medium">
                <DocsCode language="scss">
                  {heredoc`
                  .sr-only {
                    @include sr-only;
                  }
                  
                  a:focus {
                    // outline: 3px solid #2491ff;
                    outline-offset: 0;
                  }
                  
                  .link,
                  .externalLink {
                    color: #00599c;
                    text-decoration: underline;
                  
                    &:focus {
                      outline: 3px solid #2491ff;
                      outline-offset: 0;
                      color: #00599c;
                    }
                  
                    &:active {
                      color: #002346;
                    }
                  
                    &:visited {
                      color: #6e41a0;
                    }
                  
                    &:visited svg,
                    &:visited svg path {
                      color: #6e41a0;
                      /* Safari needs fill on path */
                      fill: #6e41a0;
                    }
                  
                    &:hover {
                      color: #002d62;
                    }
                    &:hover svg path {
                      color: #002d62;
                      /* Safari needs fill on path */
                      fill: #002d62;
                    }
                  
                    &:active:visited,
                    &:active:visited svg path {
                      color: #002346;
                      /* Safari needs fill on path */
                      fill: #002346;
                    }
                  }
                  
                  .externalLink {
                    margin-right: 1px;
                    margin-left: 1px;
                    background: transparent !important;
                    padding: 0;
                  
                    [data-icon="external-link-alt"] {
                      margin-left: 4px;
                    }
                  }
                  
                  .externalLinkIcon {
                    margin-left: 4px;
                    height: 14px;
                    width: 14px;
                  }
                  
                  .emailLinkIcon {
                    margin-left: 4px;
                    top: -2px !important;
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
            Links are used when referencing another page or site in text format
            (i.e., not using a button).
          </p>
        </DocsSection>

        <DocsSection title="Specifications">
          <h3>Typography</h3>
          <Table caption="Links typography specifications">
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
                <TableHeaderCell>Link</TableHeaderCell>
                <TableCell>
                  <Link to="/styles/typography/#links">Link</Link>
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">Blue</Link>
                </TableCell>
                <TableCell>#00599c</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Line-height</TableHeaderCell>
                <TableCell>24px</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
            </tbody>
          </Table>

          <h3>Icon elements: External link</h3>
          <Table caption="External link icon elements specifications">
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
                <TableHeaderCell>Icon</TableHeaderCell>
                <TableCell>
                  <Link to="/styles/iconography">arrow-up-right-from-square-solid</Link>
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">Blue</Link>
                </TableCell>
                <TableCell>#1b1b1b</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Height</TableHeaderCell>
                <TableCell>14px</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Width</TableHeaderCell>
                <TableCell>14px</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Icon gutter (left)</TableHeaderCell>
                <TableCell>4px</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
            </tbody>
          </Table>

          <h3>Icon elements: Email link</h3>
          <Table caption="Email link icon elements specifications">
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
                <TableHeaderCell>Icon</TableHeaderCell>
                <TableCell>
                  <Link to="/styles/iconography">envelope-regular</Link>
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">Blue</Link>
                </TableCell>
                <TableCell>#00599c</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Height</TableHeaderCell>
                <TableCell>12px</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Width</TableHeaderCell>
                <TableCell>16px</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Icon gutter (left)</TableHeaderCell>
                <TableCell>4px</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
            </tbody>
          </Table>

          <h3>Focus state</h3>
          <Table caption="Links focus state specifications">
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
              Links should stand out clearly from the body text. Blue is still
              the best color to use, but other colors can work too, provided
              that they stand out from the body text.
            </ListItem>
            <ListItem>
              If using blue links, do not use blue text for non-selectable
              items. Generally, whatever link color you choose should not be
              present in any non-selectable text.
            </ListItem>
            <ListItem>
              Links in the body text should be underlined in most cases. If
              links are part of a list or contained within an obvious navigation
              system (such as a menu or footer), they do not have to be
              underlined.
            </ListItem>
            <ListItem>
              Ensure that links are treated the same throughout the entire site
              (i.e., the same colors and formatting are used in all places).
            </ListItem>
            <ListItem>
              Links can be used in headings if the links are presented in a
              list-like format in the page body and if they use a size no larger
              than 16px. Actual section titles and headings should not be linked
              in the vast majority of cases.
            </ListItem>
          </List>
        </DocsSection>

        <DocsSection title="Accessibility guidance">
          <h3>Links</h3>

          <p>
            The purpose of a link needs to be provided in the text of the link.
            The description lets a user distinguish the link from other links in
            the web page that lead to other destinations and helps the user
            determine whether to follow the link. The URL of the destination is
            generally not sufficiently descriptive. Ambiguous links such as
            "Click here", "Read more" should not be used.
          </p>

          <Table caption="Type of Links and Recommendation Specification">
            <thead>
              <TableRow>
                <TableHeaderCell scope="col">Type of link</TableHeaderCell>
                <TableHeaderCell scope="col">Recommendation</TableHeaderCell>
              </TableRow>
            </thead>
            <tbody>
              <TableRow>
                <TableHeaderCell>Text links</TableHeaderCell>
                <TableCell>
                  Use link underlines or some other non-color visual distinction
                  to ensure users who are color blind can identify them as
                  links.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>
                  Link with no text and only image
                </TableHeaderCell>
                <TableCell>
                  Assign appropriate alt text description to the image.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>
                  Link and an adjacent image where the alt text of the image <Spacer height={1} /> completely duplicates the link text
                </TableHeaderCell>
                <TableCell>
                  Assign a null <code>alt=""</code> attribute to the image
                  inside the anchor. An empty alt tag has no space between the
                  quotation marks.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>
                  <List>
                    <ListItem>
                      Links to different file formats such as PDF, HTML, Word,
                      etc.
                    </ListItem>
                    <ListItem>
                      Links that take the user to different sites
                    </ListItem>
                    <ListItem>Links that open new windows or frames</ListItem>
                  </List>
                </TableHeaderCell>
                <TableCell>
                  Add the alt text description or add an image inside the anchor
                  with appropriate alt text clarifying the purpose of the link.
                  Inline images must be used as the alt text cannot be assigned
                  to CSS background images.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>
                  Links that represent UI components such as page tabs
                </TableHeaderCell>
                <TableCell>
                  Use a visual indicator in addition to color to indicate the
                  active states (e.g., "Selected" or "Active") and use a
                  programmatic method (such as CSS off-screen text or ARIA) to
                  indicate the state and role of the UI component.
                </TableCell>
              </TableRow>
            </tbody>
          </Table>

          <h3>Applicable standards</h3>

          <h4 className={appStyles.applicableStandardsh4}>Web Content Accessibility Guidelines (WCAG) 2.0/2.1</h4>

          <List>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0&showtechniques=143%2C144%2C244%2C247%2C249%2C321%2C243#contrast-minimum">
                1.4.3 Contrast (Minimum)
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#keyboard">
                2.1.1 Keyboard
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#no-keyboard-trap">
                2.1.2 No Keyboard Trap
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#focus-order">
                2.4.3 Focus Order
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#link-purpose-in-context">
                2.4.4 Link Purpose
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#focus-visible">
                2.4.7 Focus Visible
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#name-role-value">
                4.1.2 Name, Role, Value
              </ExternalLink>
            </ListItem>
          </List>
        </DocsSection>
      </DocsPage>
    </div>
  );
}
