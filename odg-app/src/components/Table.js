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
  TableCell }
  from "../../../ols-ui/src/components/Tables";


import List, { ListItem } from "../../../ols-ui/src/components/List";
import Link, { ExternalLink } from "../../../ols-ui/src/components/Links";
import Panel from "../../../ols-ui/src/components/Panel";
import TabView, { Tab } from "../../../ols-ui/src/components/TabView";

import SectionAlert from "../../../ols-ui/src/components/Alerts";

import styles from "../styles/App.scss";
import appStyles from "../styles/App.scss";
import tableStyles from "../styles/Tables.scss";

import TableBorderlessMultiColumn from '../assets/images/spacing-specs/General_Elements_Table_Borderless_Multi_Column.png';


/**
 * *****************************************************************************
 * Content for Table.
 *
 * @returns {[node]} The rendered DOM node
 * *****************************************************************************
 */
function TablePage() {
  return (
    <div>
      <Helmet title="Table" />
      <SectionAlert
        id="warning-message"
        type="warning"
        title="Component update in progress"
        headingLevel="2"
      >
        This component has been redesigned and is currently being developed.
        Please reference the <Link to="/styles/resources">ODG UI Kit</Link> for the latest
        designs.
      </SectionAlert>
      <DocsPage
        className="docs-styles"
        title="Table"
        subtitle="Tables help users understand and compare information."
      >

        <DocsSection>
          <TabView id="preview-tabs">
            <Tab label="Preview">
              <Panel>
                <div style={{ margin: "0 0 24px 0" }}>
                  <Table caption="An Example of a Borderless Table">
                    <thead>
                      <TableRow>
                        <TableHeaderCell scope="col">Tax year</TableHeaderCell>
                        <TableHeaderCell scope="col">Tax type</TableHeaderCell>
                        <TableHeaderCell scope="col" className={tableStyles.numeric}>You owe</TableHeaderCell>
                      </TableRow>
                    </thead>
                    <tbody>
                      <TableRow>
                        <TableHeaderCell>2018</TableHeaderCell>
                        <TableCell>1040</TableCell>
                        <TableCell className={tableStyles.numeric}>$1,921.21</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableHeaderCell>2018</TableHeaderCell>
                        <TableCell>Shared Responsibility Payment</TableCell>
                        <TableCell className={tableStyles.numeric}>$250.00</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableHeaderCell>2017</TableHeaderCell>
                        <TableCell>1040</TableCell>
                        <TableCell className={tableStyles.numeric}>$210.82</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableHeaderCell>2016</TableHeaderCell>
                        <TableCell>Form 5329</TableCell>
                        <TableCell className={tableStyles.numeric}>$5,599.37</TableCell>
                      </TableRow>
                    </tbody>
                  </Table>
                </div>

                <Table caption="An Example of a Bordered Table" bordered>
                  <thead>
                    <TableRow>
                      <TableHeaderCell scope="col">Tax year</TableHeaderCell>
                      <TableHeaderCell scope="col">Tax type</TableHeaderCell>
                      <TableHeaderCell scope="col" className={tableStyles.numeric}>You owe</TableHeaderCell>
                    </TableRow>
                  </thead>
                  <tbody>
                    <TableRow>
                      <TableHeaderCell>2018</TableHeaderCell>
                      <TableCell>1040</TableCell>
                      <TableCell className={tableStyles.numeric}>$1,921.21</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableHeaderCell>2018</TableHeaderCell>
                      <TableCell>Shared Responsibility Payment</TableCell>
                      <TableCell className={tableStyles.numeric}>$250.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableHeaderCell>2017</TableHeaderCell>
                      <TableCell>1040</TableCell>
                      <TableCell className={tableStyles.numeric}>$210.82</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableHeaderCell>2016</TableHeaderCell>
                      <TableCell>1040</TableCell>
                      <TableCell className={tableStyles.numeric}>$599.37</TableCell>
                    </TableRow>
                  </tbody>
                </Table>
              </Panel>
            </Tab>
            <Tab label="Spacing">
              <Panel maxheight="medium">
                <img
                  src={TableBorderlessMultiColumn}
                  alt="This is a marked up graphic of the Table spacing (borderless, multicolumn)"
                />

                <div>
                  <span style={{ marginTop: "16px", fontSize: '12px', lineHeight: "16px", display: "inline-block" }}><br /><strong>Note:</strong> Please refer to the specifications section for more detail.</span>
                </div>
              </Panel>
            </Tab>
            <Tab label="HTML">
              <Panel className="panel-code" padding="none" maxheight="medium">
                <DocsCode language="xml">
                  {heredoc`
                    <Table caption="An Example of a Borderless Table">
                    <thead>
                      <TableRow>
                        <TableHeaderCell scope="col">Tax year</TableHeaderCell>
                        <TableHeaderCell scope="col">Tax type</TableHeaderCell>
                        <TableHeaderCell scope="col" className={tableStyles.numeric}>You owe</TableHeaderCell>
                      </TableRow>
                    </thead>
                    <tbody>
                      <TableRow>
                        <TableHeaderCell>2018</TableHeaderCell>
                        <TableCell>1040</TableCell>
                        <TableCell className={tableStyles.numeric}>$1,921.21</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableHeaderCell>2018</TableHeaderCell>
                        <TableCell>Shared Responsibility Payment</TableCell>
                        <TableCell className={tableStyles.numeric}>$250.00</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableHeaderCell>2017</TableHeaderCell>
                        <TableCell>1040</TableCell>
                        <TableCell className={tableStyles.numeric}>$210.82</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableHeaderCell>2016</TableHeaderCell>
                        <TableCell>Form 5329</TableCell>
                        <TableCell className={tableStyles.numeric}>$5,599.37</TableCell>
                      </TableRow>
                    </tbody>
                  </Table>
                </div>

                <Table caption="An Example of a Bordered Table" bordered>
                  <thead>
                    <TableRow>
                      <TableHeaderCell scope="col">Tax year</TableHeaderCell>
                      <TableHeaderCell scope="col">Tax type</TableHeaderCell>
                      <TableHeaderCell scope="col" className={tableStyles.numeric}>You owe</TableHeaderCell>
                    </TableRow>
                  </thead>
                  <tbody>
                    <TableRow>
                      <TableHeaderCell>2018</TableHeaderCell>
                      <TableCell>1040</TableCell>
                      <TableCell className={tableStyles.numeric}>$1,921.21</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableHeaderCell>2018</TableHeaderCell>
                      <TableCell>Shared Responsibility Payment</TableCell>
                      <TableCell className={tableStyles.numeric}>$250.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableHeaderCell>2017</TableHeaderCell>
                      <TableCell>1040</TableCell>
                      <TableCell className={tableStyles.numeric}>$210.82</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableHeaderCell>2016</TableHeaderCell>
                      <TableCell>1040</TableCell>
                      <TableCell className={tableStyles.numeric}>$599.37</TableCell>
                    </TableRow>
                  </tbody>
                </Table>
                `}
                </DocsCode>
              </Panel>
            </Tab>
            <Tab label="CSS">
              <Panel className="panel-code" padding="none" maxheight="medium">
                <DocsCode language="scss">
                  {heredoc`
                  $border-size: 1px;
                  $iconSize: 14px;
                  $iconMarginLeft: 4px;
                  
                  .sr-only {
                    @include sr-only;
                  }
                  
                  .responsive-table {
                    @include media-breakpoint-down(lg) {
                      .regular-table {
                        display: none;
                      }
                  
                      .mobile-table {
                        display: block;
                      }
                    }
                  }
                  
                  // The main table for desktop/tablet.
                  .regular-table {
                    min-width: 100%;
                    margin: 0;
                    border-collapse: collapse;
                    border-spacing: 0;
                  
                    thead {
                      th,
                      td {
                        font-size: $font-size-base !important; //Overrides table header font size from Docs.scss
                        line-height: baselines(6) !important;  //Overrides table header font size from Docs.scss
                        font-weight: $font-bold;
                        vertical-align: bottom;
                        white-space: nowrap;
                      }
                    }
                  
                    th {
                      text-align: left;
                    }
                  
                    tbody {
                      th {
                        font-weight: $font-normal;
                      }
                  
                      td,
                      th {
                        vertical-align: top;
                        font-size: $font-size-base;
                        line-height: baselines(6);
                      }
                    }
                  
                    th,
                    td {
                      padding: $module-spacing/2 $module-spacing;
                      border-bottom-width: $border-size;
                      border-color: #d6d7d9;
                      border-style: solid;
                    }
                  }
                  
                  // The "table" for phone and other limited-width screens.
                  .mobile-table {
                    display: none;
                  
                    [role="row"] {
                      padding-bottom: baselines(6);
                      font-size: $font-size-base;
                  
                      &:last-of-type {
                        margin-bottom: 0;
                      }
                    }
                  
                    [role="rowheader"],
                    [role="gridcell"] {
                      position: relative;
                      padding-right: 0;
                      padding-left: 0;
                      border-bottom-width: 1px;
                      border-color: #d6d7d9;
                      border-style: solid;
                  
                      &:last-of-type {
                        border-bottom: 0;
                      }
                    }
                  
                    [role="rowheader"] {
                      font-weight: $font-bold;
                    }
                  
                    [role="gridcell"] {
                      padding: 0.6em 0;
                  
                      [aria-hidden="true"] {
                        padding-bottom: em(2px);
                        color: #5b616b;
                        font-size: $font-size-tiny;
                        letter-spacing: em(0.5px);
                        text-transform: uppercase;
                      }
                    }
                  }
                  
                  .regular-table.bordered {
                    thead {
                      th {
                        background-color: #f3f3f3;
                        border-top-width: $border-size;
                      }
                    }
                  
                    tbody {
                      tr:first-of-type {
                        th,
                        td {
                          border-top-width: 0;
                        }
                      }
                    }
                  
                    th,
                    td {
                      border-left-width: $border-size;
                      border-right-width: $border-size;
                      border-top-width: $border-size;
                    }
                  }
                  
                  .mobile-table.bordered {
                    &[role="grid"] {
                      border: 1px solid #d6d7d9;
                    }
                  
                    [role="rowheader"],
                    [role="gridcell"] {
                      padding: 4px 8px;
                    }
                  
                    [role="row"] {
                      padding-bottom: 0;
                      border-top: 1px solid #d6d7d9;
                    }
                  
                    // First row is hidden so don't render a top border.
                    // Second row is the first visible row so don't render a top border.
                    [role="row"]:first-of-type,
                    [role="row"]:first-of-type + [role="row"] {
                      border-top: 0;
                    }
                  }
                  
                  .sortable {
                    cursor: pointer;
                    user-select: none;
                  
                    .inner {
                      display: inline-block;
                    }
                  
                    .sortIcon {
                      position: relative;
                      display: inline-block;
                      width: $iconSize;
                      height: $iconSize;
                      margin-left: 0.25em;
                    }
                  
                    .ascSortIcon {
                      top: 2px;
                    }
                  
                    .descSortIcon {
                      bottom: 0;
                    }
                  
                    .sortDirection::after {
                      display: inline-block;
                      width: em($iconSize);
                      height: em($iconSize);
                      margin-left: 0.25em;
                      content: "";
                    }
                  }
                  
                  .column-header-clicked {
                    color: red;
                  }
                  
                  .column-header-selected {
                    color: green;
                  }
                  
                  .search-container {
                    // stylelint-disable-line block-no-empty
                  }
                  
                  .search-container ~ .regular-table,
                  .search-container ~ .responsive-table .regular-table,
                  .search-container ~ .responsive-table .mobile-table {
                    margin-top: 12px;
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
          Tables are used when data requires structure and organization in order for users to understand its significance.
          </p>
        </DocsSection>

        <DocsSection title="Specifications">
          <h3>Typography</h3>
          <Table
            caption="Table typography specifications"
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
                <TableHeaderCell>Table header</TableHeaderCell>
                <TableCell>
                  <Link to="/styles/typography/#display-type">
                  Heading 16
                  </Link>
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
                <TableHeaderCell>Table content</TableHeaderCell>
                <TableCell>
                  <Link to="/styles/typography/#display-type">
                  Body text
                  </Link>
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

          <h3>Table elements</h3>
          <Table
            caption="Table elements specifications"
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
                <TableHeaderCell>Header background</TableHeaderCell>
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
            </tbody>
          </Table>
        </DocsSection>

        <DocsSection title="Usability guidance">
          <List>
            <ListItem>
            Tables should be formatted as text instead of image format to allow
            users to easily select, copy, and paste pieces of information.
            </ListItem>
            <ListItem>
            Avoid stretching tables (i.e., making them wider than necessary when
            a user expands the width of their browser window).
            </ListItem>
            <ListItem>
            Tables should be easily read from left-to-right similar to how a user would read a paragraph on the screen. Best practice is to left-align text, right-align numbers, and align headers consistently with each column.
            </ListItem>
            <ListItem>
            To allow for easy scannability, align numbers to their decimal point. Similarly, digits should all be the same width (tabular alignment) so that commas and decimals always align properly.
            </ListItem>
            <ListItem>
            Ensure that tables are adaptable to smaller screen sizes. Some users
            may be accessing these tables on mobile devices or tablets and they
            should be able to easily navigate the table as well.
            </ListItem>
          </List>
        </DocsSection>

        <DocsSection title="Accessibility guidance">

          <h3>
          Use table markup to present tabular information
          </h3>

          <p>
          Information is considered tabular when logical relationships among text, numbers, images, or other data exist in two dimensions (vertical and horizontal). These relationships are represented in columns and rows, and the columns and rows must be recognizable in order for the logical relationships to be perceived.
          </p>

          <p>
          Using the <code>&lt;table&gt;</code> element with the child elements <code>&lt;tr&gt;</code>, <code>&lt;th&gt;</code> and <code>&lt;td&gt;</code> makes these relationships perceivable to Assistive Technology users.
          </p>

          <h3>
          Use caption elements to associate data table captions with data tables
          </h3>

          <p>
          The caption for a table is a table identifier and acts like a title or heading for the table.
          </p>

          <p>
          The <code>&lt;caption&gt;</code> element is the appropriate markup for such text and it ensures that the table identifier remains associated with the table, including visually (by default). In addition, using the caption element allows screen reading software to navigate directly to the <code>&lt;caption&gt;</code> for a table if one is present.
          </p>

          <h3>
          Use the scope attribute to associate header and data cells in data tables
          </h3>

          <p>
          The <code>scope</code> attribute may be used to clarify the scope of any cell used as a header and helps a screen reader use in perceiving what header the data is associated with. When data cells are associated with more than one row and/or one column header, use a <code>header</code> attribute and an <code>id</code> attribute.
          </p>

          <h3>Additional tips</h3>

          <List>
            <ListItem>
            Don't insert tabs to create columns or use the <code>&lt;pre&gt;</code> element since they are purely visual, and visually implied logical relationships are lost if the user cannot see the table or the visual presentation is changed.
            </ListItem>
            <ListItem>
            Don't use tables for anything but tabular data.
            </ListItem>
            <ListItem>
            Always include at least column headers or row headers.
            </ListItem>
            <ListItem>
            Make sure the visual design of the table is clear, with obvious divisions between cells, and highlighted headers. To make it easier to scan rows, you may want to consider alternating row colors for a 'zebra' effect.
            </ListItem>
            <ListItem>
            Avoid using nested data tables.
            </ListItem>
            <ListItem>
            Ensure calendar components include data tables that properly identify header and data cells.
            </ListItem>
            <ListItem>
            Ensure data tables do not contain blank rows or columns for presentation purposes.
            </ListItem>
            <ListItem>
            Ensure distinct tabular data is provided in separate data tables.
            </ListItem>
          </List>

          <h3>Applicable standards</h3>

          <h4 className={appStyles.applicableStandardsh4}>Web Content Accessibility Guidelines (WCAG) 2.0/2.1</h4>

          <List>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships">1.3.1 Info and Relationships</ExternalLink>
              <List>
                <ListItem>
                  Technique H39: <ExternalLink href="https://www.w3.org/WAI/WCAG21/Techniques/html/H39"> Using caption elements to associate data table captions with data tables</ExternalLink>
                </ListItem>
                <ListItem>
                  Technique H43: <ExternalLink href="https://www.w3.org/WAI/WCAG21/Techniques/html/H43"> Using id and headers attributes to associate data cells with header cells in data tables</ExternalLink>
                </ListItem>
                <ListItem>
                  Technique H51: <ExternalLink href="https://www.w3.org/WAI/WCAG21/Techniques/html/H51"> Using table markup to present tabular information</ExternalLink>
                </ListItem>
                <ListItem>
                  Technique H63: <ExternalLink href="https://www.w3.org/WAI/WCAG21/Techniques/html/H63"> Using the scope attribute to associate header cells and data cells in data tables</ExternalLink>
                </ListItem>
                <ListItem>
                  Technique H73: <ExternalLink href="https://www.w3.org/WAI/WCAG21/Techniques/html/H73"> Using the summary attribute of the table element to give an overview of data tables</ExternalLink>
                </ListItem>
              </List>
            </ListItem>
          </List>

          <h4 className={appStyles.applicableStandardsh4}>WAI-ARIA Authoring Practices 1.1</h4>

          <List>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/tutorials/tables/">Table</ExternalLink>
            </ListItem>
          </List>

        </DocsSection>
      </DocsPage>
    </div>
  );
}

export default EmbedStyles(styles, tableStyles)(TablePage);
