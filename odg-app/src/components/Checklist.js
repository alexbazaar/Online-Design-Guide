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

import { Checklist, ChecklistItem } from "../../../ols-ui/src/components/Checklist";
import Verified from "./Verified/Verified";

import ChecklistSpacing from '../assets/images/spacing-specs/Check_List.png';
import Styles from "../styles/App.scss";

/**
 * *****************************************************************************
 * Content for Checklist, ChecklistItem
 *
 * @returns {[node]} The rendered DOM node
 * *****************************************************************************
 */
export default function ChecklistPage() {
  return (
    <DocsPage
      className="docs-styles"
      title="Checklist"
      subtitle="A checklist is an unordered list with todo-style icons for bullets."
    >
      <DocsSection>
        <TabView id="preview-tabs">
          <Tab label="Preview">
            <Panel padding="none" maxheight="medium">
              <Checklist>
                <ChecklistItem>Clean your room</ChecklistItem>
                <ChecklistItem>Make your bed</ChecklistItem>
                <ChecklistItem>Wash the dog</ChecklistItem>
                <ChecklistItem>Walk the car</ChecklistItem>
              </Checklist>
            </Panel>
          </Tab>
          <Tab label="Spacing">
            <Panel maxheight="medium">
              <img src={ChecklistSpacing} alt="This is a marked up graphic of the Checklist spacing" />
            </Panel>
          </Tab>
          <Tab label="HTML">
            <Panel className="panel-code" padding="none" maxheight="medium">
              <DocsCode language="xml">
                {heredoc`
                <ul class="ols-ui--Checklist-checkList " data-component="Checklist" role="list">
                  <li
                    class="ols-ui--Checklist-checkListItem "
                    data-component="ChecklistItem"
                    role="listitem"
                  >
                    <svg
                      fill="currentColor"
                      preserveAspectRatio="xMidYMid meet"
                      focusable="true"
                      height="1em"
                      width="1em"
                      viewBox="0 0 40 40"
                      class="ols-ui--Checklist-icon"
                    >
                      <g>
                        <path
                          id="SVGID_1_"
                          d=""
                        />
                      </g>
                    </svg>
                    Clean your room
                  </li>
                  <li
                    class="ols-ui--Checklist-checkListItem "
                    data-component="ChecklistItem"
                    role="listitem"
                  >
                    <svg
                      fill="currentColor"
                      preserveAspectRatio="xMidYMid meet"
                      focusable="true"
                      height="1em"
                      width="1em"
                      viewBox="0 0 40 40"
                      class="ols-ui--Checklist-icon"
                    >
                      <g>
                        <path
                          id="SVGID_1_"
                          d=""
                        />
                      </g>
                    </svg>
                    Wash the dog
                  </li>
                  <li
                    class="ols-ui--Checklist-checkListItem "
                    data-component="ChecklistItem"
                    role="listitem"
                  >
                    <svg
                      fill="currentColor"
                      preserveAspectRatio="xMidYMid meet"
                      focusable="true"
                      height="1em"
                      width="1em"
                      viewBox="0 0 40 40"
                      class="ols-ui--Checklist-icon"
                    >
                      <g>
                        <path
                          id="SVGID_1_"
                          d=""
                        />
                      </g>
                    </svg>
                    Walk the car
                  </li>
                </ul>                          
                `}
              </DocsCode>
            </Panel>
          </Tab>
          <Tab label="CSS">
            <Panel className="panel-code" padding="none" maxheight="medium">
              <DocsCode language="scss">
                {heredoc`
                .ols-ui--Checklist-checkList {
                  padding-left: 0;
                  margin-top: 0;
                  margin-bottom: 0;
                  list-style: none !important;
                  list-style-type: none !important;
                  max-width: 42em;
                  margin: 24px 0; }
                  .ols-ui--Checklist-checkList > li {
                    margin-bottom: 0; }
                  @media (min-width: 576px) {
                    .ols-ui--Checklist-checkList {
                      padding-left: 24px; } }
                  .ols-ui--Checklist-checkList .ols-ui--Checklist-checkListItem {
                    position: relative;
                    padding-left: 24px;
                    margin-bottom: 12px;
                    line-height: 24px; }

                .ols-ui--Checklist-icon {
                  position: absolute;
                  top: 0;
                  left: 0;
                  width: 24px;
                  height: 24px; }
                `}
              </DocsCode>
            </Panel>
          </Tab>
        </TabView>
        <span className={Styles.disclaimer}><strong>Note:</strong> Use browser inspect tool to view the component at various breakpoints.</span>
      </DocsSection>

      <DocsSection title="Specifications">
        <h3>Typography</h3>
        <Table
          caption="Checklist Typography Specifications"
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
              <TableHeaderCell>Checkbox</TableHeaderCell>
              <TableCell>
                <Link to="/styles/typography/#display-type">
                  Body Text
                </Link>
              </TableCell>
              <TableCell>
                <Link to="/styles/colors">
                  Gray Darkest
                </Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableHeaderCell>Checkbox (disabled)</TableHeaderCell>
              <TableCell>
                <Link to="/styles/typography/#display-type">
                  Body Text
                </Link>
              </TableCell>
              <TableCell>
                <Link to="/styles/colors">
                  Gray Light
                </Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableHeaderCell>Gutter (left)</TableHeaderCell>
              <TableCell>16px</TableCell>
              <TableCell>N/A</TableCell>
            </TableRow>
          </tbody>
        </Table>

        <h3>Panel Elements</h3>
        <Table
          caption="Checklist Panel Elements Specifications"
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
              <TableHeaderCell>Gutter (bottom)</TableHeaderCell>
              <TableCell>16px</TableCell>
              <TableCell>N/A</TableCell>
            </TableRow>
          </tbody>
        </Table>

        <h3>Icon Elements</h3>
        <Table
          caption="Checklist Icon Elements Specifications"
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
              <TableHeaderCell>Checkbox (load)</TableHeaderCell>
              <TableCell>not selected</TableCell>
              <TableCell>
                <Link to="/styles/colors">
                  White
                </Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableHeaderCell>Checkbox (selected)</TableHeaderCell>
              <TableCell>selected</TableCell>
              <TableCell>
                <Link to="/styles/colors">
                  Blue
                </Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableHeaderCell>Checkbox (disabled)</TableHeaderCell>
              <TableCell>disabled</TableCell>
              <TableCell>
                <Link to="/styles/colors">
                  Gray Darkest
                </Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableHeaderCell>Border (load)</TableHeaderCell>
              <TableCell>1px solid</TableCell>
              <TableCell>
                <Link to="/styles/colors">
                  Gray Darkest
                </Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableHeaderCell>Border (selected)</TableHeaderCell>
              <TableCell>N/A</TableCell>
              <TableCell>
                <Link to="/styles/colors">
                  Gray Darkest
                </Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableHeaderCell>Border (disabled)</TableHeaderCell>
              <TableCell>1px solid</TableCell>
              <TableCell>
                <Link to="/styles/colors">
                  Gray Darkest
                </Link>
              </TableCell>
            </TableRow>
          </tbody>
        </Table>
      </DocsSection>

      <DocsSection title="Best practices">
        <ul>
          <li>
            A checklist indicates things the user should have, do, or accomplish
            before preceeding.
          </li>
          <li>
            Checklists should be as brief as possible with no more than six
            items.
          </li>
        </ul>
      </DocsSection>

      <DocsSection title="Accessibility">
        <ul>
          <li>
            Icon is invisible to screen readers. The surrounding context should
            identify the list as a todo list.
          </li>
        </ul>
      </DocsSection>

      <DocsSection title="API reference">
        <ul>
          <li>
            <ExternalLink href="https://component-library-master-pl.irslabs.org/checklists">
              Checklist
            </ExternalLink>
          </li>
        </ul>
      </DocsSection>
    </DocsPage>
  );
}
