import React from "react";
import Helmet from "react-helmet";
import heredoc from "../utils/heredocument";
import { EmbedStyles } from "../../../ols-ui/src/helpers/utilities.js";

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
import { FilledButton } from "../../../ols-ui/src/components/Buttons";

import Pagination from "../../../ols-ui/src/components/Pagination";
import appStyles from "../styles/App.scss";
import styles from "../styles/Pagination.scss";

import PaginationDeskTop from '../assets/images/spacing-specs/Pagination_Desktop.png';
import PaginationTablet from '../assets/images/spacing-specs/Pagination_Tablet.png';
import PaginationMobile from '../assets/images/spacing-specs/Pagination_Mobile.png';

import PaginationSpacingDeskTop from '../assets/images/spacing-specs/Pagination_Spacing_Desktop@2x.png';
import PaginationSpacingTablet from '../assets/images/spacing-specs/Pagination_Spacing_Tablet@2x.png';
import PaginationSpacingMobile from '../assets/images/spacing-specs/Pagination_Spacing_Mobile@2x.png';


/**
 * *****************************************************************************
 * Content for Pagination.
 * *****************************************************************************
 */
class PaginationPage extends React.Component {

  /**
   * Lifecycle render method
   * @returns {Node}
   */
  render() {

    const imgStyle = {
      maxWidth: '100%',
      width: '100%',
      margin: '0 auto',
      display: 'block'
    };

    return (
      <div>
        <Helmet title="Pagination" />
        <DocsPage
          className="docs-styles"
          title="Pagination"
          subtitle="Pagination helps users browse information and navigate multi-page content."
          emphasisTag={[ "IRAP APPROVED" ]}
        >
          <DocsSection>
            <TabView
              id="preview-tabs"
            >
              <Tab label="Preview">
                <Panel>
                  <span className={appStyles["sr-only"]}>Preview Tab</span>
                  <img
                    style={imgStyle}
                    className={appStyles.previewSpacingDesktopOnlyFluid}
                    src={PaginationDeskTop}
                    alt="Desktop view of Pagination."
                  />
                  <img
                    style={imgStyle}
                    className={appStyles.previewSpacingTabletFluid}
                    src={PaginationTablet}
                    alt="Tablet view of Pagination."
                  />
                  <img
                    style={Object.assign({}, imgStyle, { width: "334px" })}
                    className={appStyles.previewSpacingMobileFluid}
                    src={PaginationMobile}
                    alt="Mobile view of Pagination"
                  />
                </Panel>
              </Tab>
              <Tab label="Spacing">
                <Panel>
                  <img
                    style={imgStyle}
                    className={appStyles.previewSpacingDesktopOnlyFluid}
                    src={PaginationSpacingDeskTop}
                    alt="This is a marked up graphic of the Pagination spacing for Desktop."
                  />
                  <img
                    style={imgStyle}
                    className={appStyles.previewSpacingTabletFluid}
                    src={PaginationSpacingTablet}
                    alt="This is a marked up graphic of the Pagination spacing for Tablet."
                  />
                  <img
                    style={imgStyle}
                    className={appStyles.previewSpacingMobileFluid}
                    src={PaginationSpacingMobile}
                    alt="This is a marked up graphic of the Pagination spacing for Mobile."
                  />

                  <div>
                    <span style={{ marginTop: "16px", fontSize: '12px', lineHeight: "16px", display: "inline-block" }}><br /><strong>Note:</strong> Please refer to the specifications section for more detail.</span>
                  </div>
                </Panel>
              </Tab>
              <Tab label="HTML">
                <Panel padding="none">
                  <DocsCode language="xml">
                    {heredoc`
                  <Pagination
                    className={paginationStyles.paginationTest}
                    id="pagination-test"
                    totalResults={this.state.data.length}
                    currentPage={this.state.currentPage}
                    pageSize={this.state.pageSize}
                    onPageSizeChange={this.handlePageSizeChange.bind(this)}
                    onPageChange={this.handlePageChange.bind(this)}
                    onGo={this.handlePageChange.bind(this)}
                  />
                `}
                  </DocsCode>
                </Panel>
              </Tab>
              <Tab label="CSS">
                <Panel padding="none">
                  <DocsCode language="css">
                    {heredoc`

                    @mixin PaginationButton {
                      margin-top: 0;
                      margin-right: 0;
                      border-width: 1px;
                      height: auto;
                      letter-spacing: 0.04em;

                      @include media-breakpoint-down(lg) {
                        letter-spacing: 0;
                      }

                      &:active,
                      &:hover,
                      &:disabled,
                      &:disabled:hover {
                        border-width: 1px;
                      }

                      &:hover:not(:disabled):not(.current) {
                        color: #00599c;
                        border-color: #00599c;
                      }

                      //prevent hover state getting stuck on mobile devices.
                      @media (hover: hover) {
                        &:hover:not(:disabled):not(.current) {
                          background: #f3f3f3;
                        }
                      }

                      &:focus:before {
                        height: calc(100% + 8px);
                        width: calc(100% + 8px);
                        top: -4px;
                        left: -4px;
                      }
                    }

                    .pagination {

                      display: flex;
                      flex-direction: row;
                      justify-content: center;

                      font-size: 16px;
                      line-height: 24px;

                      //extra clearance on bottom for error message
                      margin: $module-spacing 0 32px 0;

                      .basic {
                        display: flex;
                        flex-direction: row;
                      }

                      .mobile {
                        display: flex;
                        flex-direction: column;
                        flex: 1;

                        .page-jumper {
                          display: inline-block;
                        }

                        .page-selector {
                          margin-right: 0;
                          .previous,
                          .next {
                            flex: 1;
                          }
                        }

                        .utils {
                          display: flex;
                          flex-direction: row;
                        }
                        .utils > div {
                          flex: 1;
                        }

                        .page-size {
                          max-width: none;
                          margin-right: 16px;
                        }

                      }

                      .page-size {
                        white-space: nowrap;
                        overflow: visible;
                        max-width: 89px;
                        display: inline-block;
                      }

                      .page-size {
                        margin-right: 59px;
                        @include media-breakpoint-down(md) {
                          margin-right: 38px;
                        }
                      }

                      .page-selector {
                        margin-right: 59px;
                        @include media-breakpoint-down(md) {
                          margin-right: 39px;
                        }
                      }
                    }

                    .page-size {

                      [data-component="InputLabel"] {
                        margin: 0 0 8px;
                      }

                      [data-component="DropdownSelect"] {
                        width: 89px;
                        margin: 0;
                        padding: 9px 38px 9px 16px;
                        height: auto;
                        line-height: 24px;
                        &:focus {
                          offset: 0;
                        }
                      }

                    }

                    .page-selector {

                      display: inline-block;

                      [data-component="InputLabel"] {
                        margin: 0 0 8px;
                      }

                      .page-selector-buttons {
                        display: inline-block;
                      }

                      .page-buttons {
                        margin-left: -1px;
                        display: inline-block
                      }

                      button[data-component="Button"] {
                        @include PaginationButton();
                        margin-left: -1px;
                        &:first-of-type {
                          margin-left: 0;
                        }
                        &:focus {
                          z-index: 10;
                        }
                      }

                      .ellipsis {
                        display: inline-block;
                        text-align: center;
                        width: 44px;
                        vertical-align: bottom;
                        line-height: .65;
                        margin-left: -1px;
                      }

                      .page-button {
                        border-radius: 0;
                        width: 44px;
                        padding: 9px 0;
                      }
                      .page-button[aria-current] {
                        background-color: #002d62;
                        border-color: #002d62;
                      }

                      .previous,
                      .next {
                        padding: 9px 16px 9px;
                        width: auto;
                        height: auto;
                      }

                      button.previous {
                        border-top-right-radius: 0;
                        border-bottom-right-radius: 0;

                        svg {
                          transform: scaleX(-1);
                        }

                        @include media-breakpoint-down(sm) {
                          margin-right: $module-spacing;
                        }
                      }

                      button.next {
                        border-top-left-radius: 0;
                        border-bottom-left-radius: 0;
                      }


                      @include media-breakpoint-down(sm) {

                        .page-selector-buttons {
                          display: flex;
                          flex-direction: row;
                        }

                        .page-buttons {
                          display: none;
                        }
                        margin-bottom: 24px;
                      }
                    }

                    .page-jumper {

                      button[data-component="Button"] {
                        @include PaginationButton();
                        padding: 9px 16px;
                        letter-spacing: 0;
                      }

                      [data-component="InputLabel"] {
                        margin: 0 0 8px;
                      }

                      [data-component="TextField"] {
                        width: 51px;
                        white-space: nowrap;
                      }

                      [data-component="TextField"] input {
                        width: 51px;
                        margin: 0;
                        height: auto;
                        line-height: 24px;
                        padding: 9px 0;
                        text-align: center;
                        -webkit-appearance: none;
                      }

                      /* Remove the up/down buttons on number input in page jumper */
                      [data-component="TextField"] input::-webkit-outer-spin-button,
                      [data-component="TextField"] input::-webkit-inner-spin-button {
                        -webkit-appearance: none;
                      }

                      [data-component="TextField"] input[type=number] {
                        -moz-appearance:textfield; /* Firefox */
                      }

                      [data-component="TextField"] [data-component="errorMessage"] {
                        position: absolute;
                        margin-top: 8px;
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
              Use pagination to help users sort through large amounts of content. Pagination is typically used when users are looking for something specific on content pages, search engine results pages (SERPs), and article archives.
            </p>
            <div>
              <FilledButton
                to="/pagination-demo"
              >View pagination demo</FilledButton>
            </div>
          </DocsSection>

          <DocsSection title="Specifications">

            <h3>Typography</h3>
            <Table caption="Pagination Typography Specifications">
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
                  <TableHeaderCell>Label</TableHeaderCell>
                  <TableCell>
                    <Link href="/styles/typography/#display-type">
                      Body text
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Link href="/styles/colors">
                      Gray darkest
                    </Link>
                  </TableCell>
                  <TableCell>#1b1b1b</TableCell>
                </TableRow>
                <TableRow>
                  <TableHeaderCell>Text</TableHeaderCell>
                  <TableCell>
                    <Link href="/styles/typography/#display-type">
                      Body text
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Link href="/styles/colors">
                      Gray darkest
                    </Link>
                  </TableCell>
                  <TableCell>#1b1b1b</TableCell>
                </TableRow>
                <TableRow>
                  <TableHeaderCell>Links (default)</TableHeaderCell>
                  <TableCell>
                    <Link href="/styles/typography/#display-type">
                      Body text
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Link href="/styles/colors">
                      Blue
                    </Link>
                  </TableCell>
                  <TableCell>#00599c</TableCell>
                </TableRow>
                <TableRow>
                  <TableHeaderCell>Links (active)</TableHeaderCell>
                  <TableCell>
                    <Link href="/styles/typography/#display-type">
                      Body text
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Link href="/styles/colors">
                      White
                    </Link>
                  </TableCell>
                  <TableCell>#ffffff</TableCell>
                </TableRow>
                <TableRow>
                  <TableHeaderCell>Links (disabled)</TableHeaderCell>
                  <TableCell>
                    <Link href="/styles/typography/#display-type">
                      Body text
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Link href="/styles/colors">
                      Gray dark
                    </Link>
                  </TableCell>
                  <TableCell>#5b616b</TableCell>
                </TableRow>
                <TableRow>
                  <TableHeaderCell>Error text</TableHeaderCell>
                  <TableCell>
                    <Link href="/styles/typography/#form-inputs">
                      Error text
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Link href="/styles/colors">Red</Link>
                  </TableCell>
                  <TableCell>#d11242</TableCell>
                </TableRow>
                <TableRow>
                  <TableHeaderCell>Ellipsis</TableHeaderCell>
                  <TableCell>
                    <Link href="/styles/typography/#display-type">
                      Body text
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Link href="/styles/colors">
                      Gray dark
                    </Link>
                  </TableCell>
                  <TableCell>#5b616b</TableCell>
                </TableRow>
              </tbody>
            </Table>

            <h3>Elements (general)</h3>

            <Table
              caption="Pagination Elements General Specification"
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
                  <TableHeaderCell>Links background (hover)</TableHeaderCell>
                  <TableCell>N/A</TableCell>
                  <TableCell>
                    <Link href="/styles/colors">Gray lighter</Link>
                  </TableCell>
                  <TableCell>#f3f3f3</TableCell>
                </TableRow>
                <TableRow>
                  <TableHeaderCell>Links background (active)</TableHeaderCell>
                  <TableCell>N/A</TableCell>
                  <TableCell>
                    <Link href="/styles/colors">Blue dark</Link>
                  </TableCell>
                  <TableCell>#002d62</TableCell>
                </TableRow>
                <TableRow>
                  <TableHeaderCell>Links border</TableHeaderCell>
                  <TableCell>1px</TableCell>
                  <TableCell>
                    <Link href="/styles/colors">Blue</Link>
                  </TableCell>
                  <TableCell>#00599c</TableCell>
                </TableRow>
                <TableRow>
                  <TableHeaderCell>Links padding</TableHeaderCell>
                  <TableCell>9px 16px</TableCell>
                  <TableCell>N/A</TableCell>
                  <TableCell>N/A</TableCell>
                </TableRow>
                <TableRow>
                  <TableHeaderCell>Page number box width</TableHeaderCell>
                  <TableCell>44px</TableCell>
                  <TableCell>N/A</TableCell>
                  <TableCell>N/A</TableCell>
                </TableRow>
                <TableRow>
                  <TableHeaderCell>Page number box height</TableHeaderCell>
                  <TableCell>44px</TableCell>
                  <TableCell>N/A</TableCell>
                  <TableCell>N/A</TableCell>
                </TableRow>
                <TableRow>
                  <TableHeaderCell>Dropdown border</TableHeaderCell>
                  <TableCell>1px</TableCell>
                  <TableCell>
                    <Link href="/styles/colors">Gray darkest</Link>
                  </TableCell>
                  <TableCell>#1b1b1b</TableCell>
                </TableRow>
                <TableRow>
                  <TableHeaderCell>Dropdown padding</TableHeaderCell>
                  <TableCell>9px 16px</TableCell>
                  <TableCell>N/A</TableCell>
                  <TableCell>N/A</TableCell>
                </TableRow>
                <TableRow>
                  <TableHeaderCell>Text field border</TableHeaderCell>
                  <TableCell>1px</TableCell>
                  <TableCell>
                    <Link href="/styles/colors">Gray darkest</Link>
                  </TableCell>
                  <TableCell>#1b1b1b</TableCell>
                </TableRow>
                <TableRow>
                  <TableHeaderCell>Text field border (error)</TableHeaderCell>
                  <TableCell>1px</TableCell>
                  <TableCell>
                    <Link href="/styles/colors">Red</Link>
                  </TableCell>
                  <TableCell>#d11242</TableCell>
                </TableRow>
                <TableRow>
                  <TableHeaderCell>Text field padding</TableHeaderCell>
                  <TableCell>9px 16px</TableCell>
                  <TableCell>N/A</TableCell>
                  <TableCell>N/A</TableCell>
                </TableRow>
                <TableRow>
                  <TableHeaderCell>Text field margin (right)</TableHeaderCell>
                  <TableCell>16px</TableCell>
                  <TableCell>N/A</TableCell>
                  <TableCell>N/A</TableCell>
                </TableRow>
                <TableRow>
                  <TableHeaderCell>Ellipsis margin</TableHeaderCell>
                  <TableCell>0 16px</TableCell>
                  <TableCell>N/A</TableCell>
                  <TableCell>N/A</TableCell>
                </TableRow>
              </tbody>
            </Table>

            <h3>Elements (desktop)</h3>
            <Table
              caption="Pagination Elements Desktop Specifications"
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
                  <TableHeaderCell>Dropdown margin (right)</TableHeaderCell>
                  <TableCell>59px</TableCell>
                  <TableCell>N/A</TableCell>
                  <TableCell>N/A</TableCell>
                </TableRow>
                <TableRow>
                  <TableHeaderCell>Next link margin (right)</TableHeaderCell>
                  <TableCell>59px</TableCell>
                  <TableCell>N/A</TableCell>
                  <TableCell>N/A</TableCell>
                </TableRow>
              </tbody>
            </Table>

            <h3>Elements (tablet)</h3>
            <Table
              caption="Pagination Elements Tablet Specifications"
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
                  <TableHeaderCell>Dropdown margin (right)</TableHeaderCell>
                  <TableCell>38px</TableCell>
                  <TableCell>N/A</TableCell>
                  <TableCell>N/A</TableCell>
                </TableRow>
                <TableRow>
                  <TableHeaderCell>Next link margin (right)</TableHeaderCell>
                  <TableCell>39px</TableCell>
                  <TableCell>N/A</TableCell>
                  <TableCell>N/A</TableCell>
                </TableRow>
              </tbody>
            </Table>

            <h3>Elements (mobile)</h3>
            <Table
              caption="Pagination Elements Mobile Specifications"
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
                  <TableHeaderCell>Top section margin (bottom)</TableHeaderCell>
                  <TableCell>24px</TableCell>
                  <TableCell>N/A</TableCell>
                  <TableCell>N/A</TableCell>
                </TableRow>
                <TableRow>
                  <TableHeaderCell>Previous button margin (right)</TableHeaderCell>
                  <TableCell>16px</TableCell>
                  <TableCell>N/A</TableCell>
                  <TableCell>N/A</TableCell>
                </TableRow>
              </tbody>
            </Table>

            <h3>Icon elements: Dropdown</h3>
            <Table
              caption="Pagination Dropdown Icon Elements Specifications"
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
                  <TableHeaderCell>Icon</TableHeaderCell>
                  <TableCell>
                    <Link href="/styles/iconography">
                      chevron-down
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Link href="/styles/colors">
                      Gray darkest
                    </Link>
                  </TableCell>
                  <TableCell>#1b1b1b</TableCell>
                </TableRow>
                <TableRow>
                  <TableHeaderCell>Width</TableHeaderCell>
                  <TableCell>19px</TableCell>
                  <TableCell>N/A</TableCell>
                  <TableCell>N/A</TableCell>
                </TableRow>
                <TableRow>
                  <TableHeaderCell>Height</TableHeaderCell>
                  <TableCell>11px</TableCell>
                  <TableCell>N/A</TableCell>
                  <TableCell>N/A</TableCell>
                </TableRow>
                <TableRow>
                  <TableHeaderCell>Margin (left)</TableHeaderCell>
                  <TableCell>16px</TableCell>
                  <TableCell>N/A</TableCell>
                  <TableCell>N/A</TableCell>
                </TableRow>
              </tbody>
            </Table>

            <h3>Icon elements: Previous</h3>
            <Table
              caption="Pagination Previous Icon Elements Specifications"
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
                  <TableHeaderCell>Icon</TableHeaderCell>
                  <TableCell>
                    <Link href="/styles/iconography">
                      chevron-left
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Link href="/styles/colors">
                      Blue
                    </Link>
                  </TableCell>
                  <TableCell>#00599c</TableCell>
                </TableRow>
                <TableRow>
                  <TableHeaderCell>Icon (disabled)</TableHeaderCell>
                  <TableCell>
                    <Link href="/styles/iconography">
                      chevron-left
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Link href="/styles/colors">
                      Gray dark
                    </Link>
                  </TableCell>
                  <TableCell>#5b616b</TableCell>
                </TableRow>
                <TableRow>
                  <TableHeaderCell>Width</TableHeaderCell>
                  <TableCell>7px</TableCell>
                  <TableCell>N/A</TableCell>
                  <TableCell>N/A</TableCell>
                </TableRow>
                <TableRow>
                  <TableHeaderCell>Height</TableHeaderCell>
                  <TableCell>12px</TableCell>
                  <TableCell>N/A</TableCell>
                  <TableCell>N/A</TableCell>
                </TableRow>
                <TableRow>
                  <TableHeaderCell>Margin (right)</TableHeaderCell>
                  <TableCell>16px</TableCell>
                  <TableCell>N/A</TableCell>
                  <TableCell>N/A</TableCell>
                </TableRow>
              </tbody>
            </Table>

            <h3>Icon elements: Next</h3>
            <Table
              caption="Pagination Next Icon Elements Specifications"
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
                  <TableHeaderCell>Icon</TableHeaderCell>
                  <TableCell>
                    <Link href="/styles/iconography">
                      chevron-right
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Link href="/styles/colors">
                      Blue
                    </Link>
                  </TableCell>
                  <TableCell>#00599c</TableCell>
                </TableRow>
                <TableRow>
                  <TableHeaderCell>Icon (disabled)</TableHeaderCell>
                  <TableCell>
                    <Link href="/styles/iconography">
                      chevron-right
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Link href="/styles/colors">
                      Gray dark
                    </Link>
                  </TableCell>
                  <TableCell>#5b616b</TableCell>
                </TableRow>
                <TableRow>
                  <TableHeaderCell>Width</TableHeaderCell>
                  <TableCell>7px</TableCell>
                  <TableCell>N/A</TableCell>
                  <TableCell>N/A</TableCell>
                </TableRow>
                <TableRow>
                  <TableHeaderCell>Height</TableHeaderCell>
                  <TableCell>12px</TableCell>
                  <TableCell>N/A</TableCell>
                  <TableCell>N/A</TableCell>
                </TableRow>
                <TableRow>
                  <TableHeaderCell>Margin (left)</TableHeaderCell>
                  <TableCell>16px</TableCell>
                  <TableCell>N/A</TableCell>
                  <TableCell>N/A</TableCell>
                </TableRow>
              </tbody>
            </Table>

            <h3>Focus state</h3>
            <Table caption="Pagination Focus State Specifications">
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
                Present multiple pagination options to the users allowing for another layer of control including the following:
                <List>
                  <ListItem>
                    Allow users to adjust the number of articles to be viewed per page.</ListItem>
                  <ListItem>
                    Provide users the ability to <em>view all</em> articles on a single page.</ListItem>
                  <ListItem>
                    Allow users to jump to a desired page (e.g., "Jump to" input field paired with a "Go" button).</ListItem>
                </List>
              </ListItem>
              <ListItem>
                Display the overflow indicator with an ellipsis if there are more than seven pages of content.</ListItem>
              <ListItem>
                Consider including an additional text label showing which page out of the total the user is on.</ListItem>
              <ListItem>
                Include Next/Previous buttons in a prominent way aside from numbers as they are the way that users prefer to navigate through pages. Disable the Previous button on the first page and disable the Next button on the last page.</ListItem>
              <ListItem>
                Indicate which page the user is currently on through highlighting the page number.</ListItem>
            </List>
          </DocsSection>

          <DocsSection title="Accessibility guidance">
            <List>
              <ListItem>
                The component is contained in a page navigation region, using <code>&lt;nav&gt;</code> element.
              </ListItem>
              <ListItem>
                Provide a descriptive ARIA label for any pagination component's <code>&lt;nav&gt;</code> element that describes its purpose. For example, if the pagination component is used to navigate through a set of search results, an appropriate label could be <code>aria-label=&quot;search results page&quot;</code>. If you use more than one pagination component on a page, each will need a unique ARIA label.
              </ListItem>
              <ListItem>
                The results appear in an unordered list with a separator element.
              </ListItem>
              <ListItem>
                Pressing a page link loads that page and:
                <List>
                  <ListItem>
                    screen reader users will hear the page <code>&lt;title&gt;</code>
                  </ListItem>
                  <ListItem>
                    keyboard users will have their focus point initialized on the document's <code>&lt;body&gt;</code> element
                  </ListItem>
                </List>
              </ListItem>
              <ListItem>
                The current page is indicated and is communicated to assistive technologies via <code>aria-current=&quot;page&quot;</code>.
              </ListItem>
              <ListItem>
                Use <code>aria-label=&quot;page [#]&quot;</code> on each page link to explicitly indicate the numbers are the links to the individual page numbers.
              </ListItem>
              <ListItem>
                Use <code>aria-label=&quot;last page, page [#]&quot;</code> to announce that the last element in the navigation is the last page in the paginated section.
              </ListItem>
              <ListItem>
                The previous and next links become 'disabled' and unfocusable where they are not applicable by removing their href.
              </ListItem>
              <ListItem>
                Enabled previous/ next and page links indicate visible focus and are keyboard accessible preserving the focus order.
              </ListItem>
              <ListItem>
                The purpose of each link can be determined from any combination of the link text, accessible name, accessible description, and/or programmatically determined link context.
              </ListItem>
              <ListItem>
                The pagination component needs to be readable in high contrast mode.
              </ListItem>
              <ListItem>
                Provide sufficient white space, like padding, to support people with reduced dexterity and small touch screens on mobile devices.
              </ListItem>
              <ListItem>
                The size of the page numbers target should be at least 44 by 44 CSS pixels.
              </ListItem>
              <ListItem>
                "Jump To" input field paired with a "Go" button need to have a programmatic label that match the visible label.
              </ListItem>
              <ListItem>
                Inline validation errors will be displayed if the users enter page numbers that are out of range.
              </ListItem>
              <ListItem>
                The errors will be displayed inline following the ODG convention after the user press "Go" button or press the "Enter" key.
              </ListItem>
            </List>
            <h3>Applicable standards</h3>
            <h4 className={appStyles.applicableStandardsh4}>
              Web Content Accessibility Guidelines WCAG 2.0/2.1
            </h4>
            <List>
              <ListItem>
                <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships">
                  1.3.1 Info and Relationships
                </ExternalLink>
              </ListItem>
              <ListItem>
                <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#contrast-minimum">
                  1.4.3 Contrast Minimum
                </ExternalLink>
              </ListItem>
              <ListItem>
                <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#non-text-contrast">
                  1.4.11 Non-text Contrast
                </ExternalLink>
              </ListItem>
              <ListItem>
                <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#keyboard">2.1.1 Keyboard</ExternalLink>
              </ListItem>
              <ListItem>
                <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#focus-visible">
                  2.4.7 Focus Visible
                </ExternalLink>
              </ListItem>
              <ListItem>
                <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#label-in-name">
                  2.5.3 Label in Name
                </ExternalLink>
              </ListItem>
              <ListItem>
                <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#target-size">
                  2.5.5 Target Size
                </ExternalLink>
              </ListItem>
              <ListItem>
                <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#labels-or-instructions">
                  3.3.2 Labels or Instructions
                </ExternalLink>
              </ListItem>
              <ListItem>
                <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#name-role-value">
                  4.1.2 Name, Role, Value
                </ExternalLink>
              </ListItem>
            </List>
          </DocsSection>
        </DocsPage >
      </div>
    );
  }
}

export default EmbedStyles(styles)(PaginationPage);
