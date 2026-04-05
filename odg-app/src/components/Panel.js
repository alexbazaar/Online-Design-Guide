import React from "react";
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

import { EmbedStyles } from "../../../ols-ui/src/helpers/utilities.js";
import PanelSpacing from '../assets/images/spacing-specs/General_Elements_Panel.png';
import styles from "../styles/Docs.scss";
import appStyles from "../styles/App.scss";


/**
 * *****************************************************************************
 * Content for Panel.
 *
 * @returns {[node]} The rendered DOM node
 * *****************************************************************************
 */
function PanelPage() {
  return (
    <div>
      <DocsPage
        className="docs-styles"
        title="Panel"
        subtitle="A panel provides a container for content or controls."
      >
        <DocsSection>
          <TabView id="preview-tabs">
            <Tab label="Preview">
              <Panel maxheight="medium">
                <Panel title="Latin for the layman" headinglevel="3">
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna a
                  liqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </Panel>
              </Panel>
            </Tab>
            <Tab label="Spacing">
              <Panel>
                <img style={{ maxWidth: '330px', height: 'auto' }} src={PanelSpacing} alt="This is a marked up graphic of the Panel spacing" />
              </Panel>
            </Tab>
            <Tab label="HTML">
              <Panel className="panel-code" padding="none" maxheight="medium">
                <DocsCode language="xml">
                  {heredoc`
                  <div class="ols-ui--Panel-panel ols-ui--Panel-padding-normal" data-component="Panel">
                    <div class="ols-ui--Panel-paddedPanelTitle" data-component="PanelHeader">
                      <h2 class="ols-ui--Panel-heading">
                        Latin for the layman
                      </h2>
                    </div>
                    <div data-component="PanelBody">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna a liqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                    </div>
                  </div>
                `}
                </DocsCode>
              </Panel>
            </Tab>
            <Tab label="CSS">
              <Panel className="panel-code" padding="none" maxheight="medium">
                <DocsCode language="scss">
                  {heredoc`
                  .ols-ui--Panel-panel {
                    position: relative;
                    box-sizing: border-box;
                    border: solid 1px #d6d7d9;
                    margin-bottom: 16px;
                    background: white;
                    font-family: "Source Sans Pro", sans-serif;
                    font-size: 16px;
                    line-height: 24px;
                    overflow-x: hidden;
                  }

                  .ols-ui--Panel-panel > *:last-child {
                    margin-bottom: 0;
                  }

                  .ols-ui--Panel-panel .ols-ui--Panel-padding-normal {
                    padding: 16px;
                  }

                  .ols-ui--Panel-panel .ols-ui--Panel-padding-medium {
                    padding: 16px;
                  }

                  @media (min-width: 572px) {
                    .ols-ui--Panel-panel .ols-ui--Panel-padding-medium {
                      padding: 24px;
                    }
                  }

                  .ols-ui--Panel-panel .ols-ui--Panel-padding-large,
                  .ols-ui--Panel-panel .ols-ui--Panel-padding-extra {
                    padding: 16px;
                  }

                  @media (min-width: 572px) {
                    .ols-ui--Panel-panel .ols-ui--Panel-padding-large,
                    .ols-ui--Panel-panel .ols-ui--Panel-padding-extra {
                      padding: 32px;
                    }
                  }

                  @media (min-width: 996px) {
                    .ols-ui--Panel-panel .ols-ui--Panel-padding-large,
                    .ols-ui--Panel-panel .ols-ui--Panel-padding-extra {
                      padding: 40px;
                    }
                  }

                  .ols-ui--Panel-panel .ols-ui--Panel-borderless {
                    border: none;
                  }

                  .ols-ui--Panel-panel .ols-ui--Panel-min-height-medium {
                    min-height: 300px;
                  }

                  .ols-ui--Panel-panel .ols-ui--Panel-min-height-large {
                    min-height: 480px;
                  }

                  .ols-ui--Panel-title {
                    padding-top: 16px;
                    padding-right: 16px;
                    padding-left: 16px;
                    margin-bottom: 12px;
                  }

                  .ols-ui--Panel-title .ols-ui--Panel-heading {
                    font-family: "Source Sans Pro", sans-serif;
                    font-size: 20px;
                    line-height: 28px;
                    margin: 0;
                  }

                  .ols-ui--Panel-paddedPanelTitle {
                    margin-bottom: 12px;
                  }

                  .ols-ui--Panel-paddedPanelTitle h2 {
                    font-family: "Source Sans Pro", sans-serif;
                    font-size: 20px;
                    line-height: 28px;
                    margin: 0;
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
          Panels should be used when a page has several different pieces of content
          where it makes more sense to somehow split them up instead of not distinguishing
          between them.
          </p>
        </DocsSection>

        <DocsSection title="Specifications">
          <h3>Typography</h3>
          <Table
            caption="Panel Typography Specifications"
          >
            <thead>
              <TableRow>
                <TableHeaderCell scope="col">Context</TableHeaderCell>
                <TableHeaderCell scope="col">Reference</TableHeaderCell>
                <TableHeaderCell scope="col">Color</TableHeaderCell>
              </TableRow>
            </thead>
            <tbody>
              <TableRow>
                <TableHeaderCell>Panel title</TableHeaderCell>
                <TableCell>
                  <Link to="/styles/typography/#display-type">
                  Heading 20
                  </Link>
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">
                  Gray Darkest
                  </Link>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Panel text</TableHeaderCell>
                <TableCell>
                  <Link to="/styles/typography/#display-type">
                  Body text
                  </Link>
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">
                  Gray Darkest
                  </Link>
                </TableCell>
              </TableRow>
            </tbody>
          </Table>

          <h3>Panel Elements</h3>
          <Table
            caption="Panel Elements Specifications"
          >
            <thead>
              <TableRow>
                <TableHeaderCell scope="col">Property</TableHeaderCell>
                <TableHeaderCell scope="col">Value</TableHeaderCell>
                <TableHeaderCell scope="col">Color</TableHeaderCell>
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
              </TableRow>
              <TableRow>
                <TableHeaderCell>Border</TableHeaderCell>
                <TableCell>1px solid </TableCell>
                <TableCell>
                  <Link to="/styles/colors">
                  Gray Light
                  </Link>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Padding</TableHeaderCell>
                <TableCell>16px</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Heading margin (bottom)</TableHeaderCell>
                <TableCell>8px</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
            </tbody>
          </Table>
        </DocsSection>

        <DocsSection title="Best practices">
          <ul>
            <li>
            Use panels when a page's content needs to be split into different buckets.
            </li>
            <li>
            Each panel should have a clear header or label so the user can easily
            tell what type of content the panel contains.
            </li>
            <li>
            When using buttons or links in conjunction with panels, place them in
            the panels themselves instead of separately outside the panels on the page.
            </li>
          </ul>
        </DocsSection>

        <DocsSection title="Accessibility">
          <p>
          A region landmark is a perceivable section containing content that is
          relevant to a specific, author-specified purpose and sufficiently important
          that users will likely want to be able to navigate to the section easily
          and to have it listed in a summary of the page.
          </p>

          <ul>
            <li>
            Ensure a region landmark must has a label.
            </li>
            <li>
            If a page includes more than one region landmark, each should have a unique label.
            </li>
            <li>
            Ensure it is used to identify content that named landmarks do not
            appropriately describe.
            </li>
            <li>
            Ensure <code>section</code> tag is not used as a generic container; use
              <code>div</code> instead, especially when the sectioning is only for
            styling purposes.
            </li>
          </ul>

          <h4>Applicable Standards</h4>

          <ul>
            <li>ARIA 1.1 Specification: <Link to="https://www.w3.org/TR/wai-aria-1.1/#region"> region landmark </Link>
            </li>
            <li>
              <Link to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section">https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section</Link>
            </li>
          </ul>

          <p>Web Content Accessibility Guidelines (WCAG) 2.0</p>

          <ul>
            <li>1.3.1 Info and Relationships</li>
          </ul>

        </DocsSection>

        <DocsSection title="API reference">
          <ul>
            <li>
              <ExternalLink href="https://component-library-master-pl.irslabs.org/panels">
              Panel
              </ExternalLink>
            </li>
          </ul>
        </DocsSection>
      </DocsPage>
    </div>
  );
}

export default EmbedStyles(styles)(PanelPage);
