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

import Link, { ExternalLink } from "../../../ols-ui/src/components/Links";
import Panel from "../../../ols-ui/src/components/Panel";
import TabView, { Tab } from "../../../ols-ui/src/components/TabView";

import { Breadcrumbs, BreadcrumbItem } from "../../../ols-ui/src/components/Breadcrumbs";

import { EmbedStyles } from "../../../ols-ui/src/helpers/utilities.js";
import BreadcrumbsSpacing from '../assets/images/spacing-specs/General_Elements_Breadcrumb.png';
import styles from "../styles/Docs.scss";
import appStyles from "../styles/App.scss";
import List, { ListItem } from "ols-ui/list";

/**
 * *****************************************************************************
 * Content for Breadcrumbs, BreadcrumbItem
 *
 * @returns {[node]} The rendered DOM node
 * *****************************************************************************
 */
function BreadcrumbsPage() {
  return (
    <div>
      <Helmet title="Breadcrumb" />
      <DocsPage
        className="docs-styles"
        title="Breadcrumb"
        subtitle="Breadcrumbs help users visualize a web page's location within the organization of an application."
        emphasisTag={[ "IRAP APPROVED" ]}
      >
        <DocsSection>
          <TabView id="preview-tabs">
            <Tab label="Preview">
              <Panel maxheight="medium">
                <Breadcrumbs>
                  <BreadcrumbItem>
                    <a href="./breadcrumb">Top level</a>
                  </BreadcrumbItem>
                  <BreadcrumbItem>
                    <a href="./breadcrumb">Second level</a>
                  </BreadcrumbItem>
                  <BreadcrumbItem>Active level</BreadcrumbItem>
                </Breadcrumbs>
              </Panel>
            </Tab>
            <Tab label="Spacing">
              <Panel maxheight="medium">
                <img style={{ width: "100%", maxWidth: '250px', height: 'auto' }} src={BreadcrumbsSpacing} alt="This is a marked up graphic of the Breadcrumbs spacing" />

                <div>
                  <span style={{ marginTop: "16px", fontSize: '12px', lineHeight: "16px", display: "inline-block" }}><br /><strong>Note:</strong> Please refer to the specifications section for more detail.</span>
                </div>
              </Panel>
            </Tab>
            <Tab label="HTML">
              <Panel className="panel-code" padding="none" maxheight="medium">
                <DocsCode language="xml">
                  {heredoc`
                  <Breadcrumbs>
                    <BreadcrumbItem>
                      <a href="./breadcrumb">Top level</a>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                      <a href="./breadcrumb">Second level</a>
                    </BreadcrumbItem>
                    <BreadcrumbItem>Active level</BreadcrumbItem>
                  </Breadcrumbs>
                `}
                </DocsCode>
              </Panel>
            </Tab>
            <Tab label="CSS">
              <Panel className="panel-code" padding="none" maxheight="medium">
                <DocsCode language="scss">
                  {heredoc`
                  .breadcrumbs {
                    display: block;
                    color: #1b1b1b;
                    font-size: $font-size-caption + 2px;
                    line-height: $line-height-base;
                  }

                  .breadcrumb {
                    display: inline;

                    &::after {
                      display: inline;
                      padding: 0 8px;
                      content: "/";
                    }

                    &:last-of-type {
                      &::after {
                        display: none;
                      }
                    }

                    a:visited{
                      color: #00599c;
                    }
                    a:hover{
                      color: #002d62;
                    }
                    a:active{
                      color: #002346;
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
            Breadcrumbs should be used on sites with complex hierarchical content structure giving the 
            users an option to quickly navigate the site without using the main menu. 
          </p>
        </DocsSection>

        <DocsSection title="Placement">
          <p>
          Breadcrumbs should be placed directly below the site banner, but above any panels, alerts, or other content.
          </p>
        </DocsSection>

        <DocsSection title="Specifications">
          <h3>Typography</h3>
          <Table
            caption="Breadcrumbs typography specifications"
          >
            <thead>
              <TableRow>
                <TableHeaderCell scope="col">Context</TableHeaderCell>
                <TableHeaderCell scope="col">Value</TableHeaderCell>
                <TableHeaderCell scope="col">Color name</TableHeaderCell>
                <TableHeaderCell scope="col">Hex</TableHeaderCell>
              </TableRow>
            </thead>
            <tbody>
              <TableRow>
                <TableHeaderCell>Link (default)</TableHeaderCell>
                <TableCell>14px</TableCell>
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
                <TableHeaderCell>Link (hover)</TableHeaderCell>
                <TableCell>14px</TableCell>
                <TableCell>
                  <Link to="/styles/colors">
                    Blue dark
                  </Link>
                </TableCell>
                <TableCell>
                  #002d62
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Active level</TableHeaderCell>
                <TableCell>14px</TableCell>
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
                <TableHeaderCell>"/"</TableHeaderCell>
                <TableCell>14px</TableCell>
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
                <TableHeaderCell>"/" gutter (left/right)</TableHeaderCell>
                <TableCell>8px</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
            </tbody>
          </Table>


          <h3>Size and layout</h3>
          <Table
            caption="Breadcrumbs Size and Layout Specifications"
          >
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
                <TableHeaderCell>Width</TableHeaderCell>
                <TableCell>100%</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
            </tbody>
          </Table>

          <h3>Focus state</h3>
          <Table caption="Breadcrumbs focus state specifications">
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
            Breadcrumbs should only be used in situations where the content
            hierarchy is at least three levels deep.
            </ListItem>
            <ListItem>
            The first item should be a link to the home page or root of your
            application.
            </ListItem>
            <ListItem>
            The last item in the breadcrumbs should be the title of the page the
            user is currently viewing. It should not be a link.
            </ListItem>
            <ListItem>
            Links in the breadcrumb trails should represent the path the user
            took to reach the page, or the location of the current page within
            the organization of the site.
            </ListItem>
            <ListItem>
            Breadcrumb links are navigational links and therefore should always
            keep the link color (blue) and not adopt a visited link color (purple).
            </ListItem>
          </List>
        </DocsSection>

        <DocsSection title="Accessibility guidance">
          <List>
            <ListItem>
            A <code>&lt;nav&gt;</code> element <code>labeled="breadcrumb"</code> identifies the structure as a breadcrumb trail and makes it a navigation landmark so that it is easy to locate.
            </ListItem>
            <ListItem>
            Breadcrumb trails are implemented using links to the web pages that have been accessed in the process of navigating to the current web page. They are placed in the same location within each web page.
            </ListItem>
            <ListItem>
            Links in a breadcrumb trail must have distinct, unique names and identifiers, and be fully keyboard and voice command software accessible.
            </ListItem>
            <ListItem>
            Links must have a visible focus outline.
            </ListItem>
            <ListItem>
            Users must be able to tab through the links in the logical order.
            </ListItem>
          </List>
          <p>
          Note: The requirements for all <Link to="/styles/typography/#links">links</Link> remain in effect when they are part of a breadcrumb navigation.
          </p>

          <h3>Applicable standards</h3>

          <h4 className={appStyles.applicableStandardsh4}>
            Web Content Accessibility Guidelines (WCAG) 2.0/2.1
          </h4>

          <List>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0&showtechniques=143%2C144%2C244%2C247%2C249%2C321%2C243#contrast-minimum" target="_blank">
              1.4.3 Contrast (Minimum)
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#keyboard" target="_blank">
              2.1.1 Keyboard
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#link-purpose-in-context" target="_blank">
              2.4.4 Link Purpose
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#multiple-ways" target="_blank">
              2.4.5 Multiple Ways
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#focus-visible" target="_blank">
              2.4.7 Focus Visible
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#location" target="_blank">
              2.4.8 Location
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#name-role-value" target="_blank">
              4.1.2 Name, Role, Value
              </ExternalLink>
            </ListItem>
          </List>

        </DocsSection>
      </DocsPage>
    </div>
  );
}

export default EmbedStyles(styles)(BreadcrumbsPage);
