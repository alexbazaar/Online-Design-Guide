import React from "react";
import Helmet from "react-helmet";
import heredoc from "../utils/heredocument";
import { EmbedStyles } from "../../../ols-ui/src/helpers/utilities.js";

import { DocsPage, DocsSection, DocsCode } from "../../../ols-ui/src/components/DocsFoundations";

import Table, { TableRow, TableHeaderCell, TableCell } from "../../../ols-ui/src/components/Tables";

import Link, { ExternalLink } from "../../../ols-ui/src/components/Links";
import Panel from "../../../ols-ui/src/components/Panel";
import TabView, { Tab } from "../../../ols-ui/src/components/TabView";

import DateField from "../../../ols-ui/src/components/DateField";
import DateFieldRange from "../../../ols-ui/src/components/DateFieldRange";
import DateFieldIcon from "../assets/images/spacing-specs/Form_Elements_Date_Field_Icon.png";
import DateFieldErrorWithoutIcon from "../assets/images/spacing-specs/Form_Elements_Date_Field_Error_Icon.png";
import DateFieldIconDesktop from "../assets/images/spacing-specs/Form_Elements_Date_Range_Icon_Desktop.png";

import CalendarPickerDesktop2 from "../assets/images/spacing-specs/Form_Elements_Calendar_Picker_Desktop_01v2.png";
import CalendarPickerMobile1 from "../assets/images/spacing-specs/Form_Elements_Calendar_Picker_Mobile_01.png";
import CalendarPickerMobile2 from "../assets/images/spacing-specs/Form_Elements_Calendar_Picker_Mobile_02.png";

import List, { ListItem } from "../../../ols-ui/src/components/List";
import styles from "../styles/Typography.scss";
import appStyles from "../styles/App.scss";

/**
 * *****************************************************************************
 * Content for PhoneNumberField.
 *
 * @returns {[node]} The rendered DOM node
 * *****************************************************************************
 */
function DateFieldPage() {
  return (
    <div>
      <Helmet title="Date field" />
      <DocsPage
        className="docs-styles"
        title="Date field"
        subtitle="Date fields allow users to select a specific date or dates."
        emphasisTag={[ "IRAP Approved" ]}
      >

        <DocsSection>
          <TabView id="preview-tabs">
            <Tab label="Preview">
              <Panel padding="normal" maxheight="medium">
                <div style={{ marginTop: "-24px", display: "block" }}></div>
                <DateField id="vis1" placeholder={"MM/DD/YYYY"} />
                <DateField
                  label="Date"
                  id="vis2"
                  placeholder={"MM/DD/YYYY"}
                  required />
                <DateFieldRange
                  id="vis3"
                  toPlaceholder={"MM/DD/YYYY"}
                  fromPlaceholder={"MM/DD/YYYY"} />
              </Panel>
            </Tab>
            <Tab label="Spacing">
              <Panel maxheight="small">
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  <img
                    style={{
                      maxHeight: "130px",
                      maxWidth: "100%",
                      height: "auto"
                    }}
                    src={DateFieldIcon}
                    alt="This is a marked up graphic of the Date Field spacing" />
                </div>
                <br />
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  <img
                    style={{
                      maxHeight: "170px",
                      maxWidth: "100%",
                      height: "auto"
                    }}
                    src={DateFieldErrorWithoutIcon}
                    alt="This is a marked up graphic of the Date Field Error spacing"
                  />
                </div>
                <br />
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  <img
                    style={{
                      maxHeight: "170px",
                      maxWidth: "100%",
                      height: "auto"
                    }}
                    src={DateFieldErrorWithoutIcon}
                    alt="This is a marked up graphic of the Date Field Error spacing"
                  />
                </div>
                <br />
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  <img
                    style={{
                      maxHeight: "130px",
                      maxWidth: "100%",
                      height: "auto"
                    }}
                    src={DateFieldIconDesktop}
                    alt="This is a marked up graphic of the Calendar Date Picker spacing"
                    className={appStyles.previewSpacingDesktopFluid} />
                </div>
                <br className={appStyles.previewSpacingDesktopFluid} />
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  <img
                    style={{
                      maxHeight: "400px",
                      maxWidth: "100%",
                      height: "auto"
                    }}
                    src={CalendarPickerDesktop2}
                    alt="This is a marked up graphic of the Calendar Date Picker spacing"
                    className={appStyles.previewSpacingDesktopFluid} />
                </div>
                <br className={appStyles.previewSpacingDesktopFluid} />
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  <img
                    style={{
                      maxHeight: "600px",
                      maxWidth: "100%",
                      height: "auto"
                    }}
                    src={CalendarPickerMobile1}
                    alt="This is a marked up graphic of the Calendar Date Picker Day spacing on mobile"
                    className={appStyles.previewSpacingMobileFluid}
                  />
                  <img
                    style={{
                      maxHeight: "600px",
                      maxWidth: "100%",
                      height: "auto"
                    }}
                    src={CalendarPickerMobile2}
                    alt="This is a marked up graphic of the Calendar Date Picker margin spacing on mobile"
                    className={appStyles.previewSpacingMobileFluid}
                  />
                </div>

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
                <DateField
                  id="vis1"
                  placeholder={"MM/DD/YYYY"}
                />

                <DateField
                  label="Date"
                  id="vis2"
                  placeholder={"MM/DD/YYYY"}
                  required
                />

                <DateFieldRange
                  id="vis3"
                  toPlaceholder={"MM/DD/YYYY"}
                  fromPlaceholder={"MM/DD/YYYY"}
                />
                `}
                </DocsCode>
              </Panel>
            </Tab>
            <Tab label="CSS">
              <Panel className="panel-code" padding="none" maxheight="medium">
                <DocsCode language="scss">
                  {heredoc`
                    $btn-width: 44px;
                    $next-prev-button-height: 20px;
                    $next-prev-button-width: 12px;

                    $modalCloseIconWidth: 35px;
                    $modalCloseIconHeight: 35px;

                    .srOnly {
                      @include sr-only;
                    }

                    .overlay {
                      @include overlay;
                      background: transparent;
                      overflow: hidden;

                      @include media-breakpoint-down(xs) {
                        background: rgba(black, 0.5);
                      }
                    }

                    .labelText {
                      display: block;
                      max-width: $input-max-width;
                      font-size: $font-size-base;
                      line-height: $line-height-base;

                      &.disabled {
                        color: #5b616b;
                        cursor: not-allowed;
                        .required {
                          color: #5b616b;
                        }
                      }
                    }

                    // ERROR TEXT
                    .errorMessage {
                      display: block;
                      margin: 12px 0;
                      color: #d11242;
                      font-size: $font-size-base - 2px;
                      line-height: 20px;
                      max-width: 12em;
                    }

                    .hintStyle {
                      display: block;
                      color: #5b616b;
                      line-height: 20px;
                      font-size: 14px;
                      margin-bottom: 8px; // Adds 8px margin to hint text rather than using Spacer in the component itself
                    }

                    .input {
                      @include input-text;
                      color: #1b1b1b;
                      max-width: 8em; // Sets to 8em to get closer to width in design specs (about 206px wide)
                      border-color: #1b1b1b;
                      padding: $input-padding-vertical baselines(4);
                      display: inline-block;
                      box-sizing: border-box;
                      border-right: 1px solid #1b1b1b;
                      margin: 0;
                      border-radius: 0;
                      vertical-align: bottom;

                      &::-webkit-input-placeholder {
                        color: #5b616b;
                      }

                      /* Firefox 4-18 */
                      &:-moz-placeholder {
                        color: #5b616b;
                      }

                      /* Firefox 19-50 */
                      &::-moz-placeholder {
                        color: #5b616b;
                      }

                      /* - Internet Explorer 10–11
                         - Internet Explorer Mobile 10-11 */
                      &:-ms-input-placeholder {
                        color: #5b616b;
                      }

                      &.error {
                        padding: ($input-padding-vertical - 2px) 16px;
                        border: 1px solid #d11242; // Makes border thinner to match design
                      }

                      &:disabled {
                        background-color: #d6d7d9;
                        border-color: #d6d7d9;
                        color: #5b616b;
                        cursor: not-allowed;
                        -webkit-text-fill-color: #5b616b; // Needed for Safari
                      }
                      // IE potential fixes for mysterious X in field
                      &[type="text"]::-ms-clear {
                        width: 0;
                        height: 0;
                      }
                    }

                    @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
                      // IE10+ CSS here
                      .input {
                        max-width: 8.5em ;
                      }
                    }

                    .calendarLaunchBtn {
                      @include button;
                      font-size: 20px ;
                      display: inline-block;
                      width: 40px;
                      height: 46px;
                      padding: 0;
                      margin-right: 35px;
                      background-color: #ffffff;
                      border-top-color: transparent;
                      border-right-color: transparent;
                      border-bottom-color: transparent;
                      border-left-color: transparent;
                      border-bottom-left-radius: 0;
                      border-top-left-radius: 0;
                      color: #00599c;
                      text-transform: none;
                      vertical-align: bottom;

                      svg[data-icon="calendar-days"] {
                        width: 18px;
                        height: 20px;
                        margin-top: -4px;
                      }

                      &:last-of-type {
                        margin-right: 16px; // Edits margin to match design specs
                        margin-left: 0; // Removes margin to match spacing in design specs
                      }

                      &:hover{
                        color: #002d62;
                      }

                      &:disabled,
                      &:hover:disabled {
                        margin-left: 0 ;
                        border-left: none;
                        background-color: #d6d7d9;
                        border-color: #d6d7d9;
                        color: #d6d7d9;
                        cursor: not-allowed;
                        -webkit-text-fill-color: #5b616b; // Needed for Safari
                      }
                    }

                    .calendarModal {
                      position: absolute;
                      z-index: $z-index-modal;
                      max-width: 385px;
                      padding: 50px 21px;
                      margin: 3px 0;
                      background-image: url("./calendarModal-left.svg");
                      background-repeat: no-repeat;
                      background-size: 385px;

                      &.calendarModalLg {
                        background-image: url("./calendarModalXL-left.svg");
                      }

                      @include media-breakpoint-down(xs) {
                        background-color: #ffffff;
                        padding: 40px 15px 25px 15px;
                        position: fixed;
                        top: 25%;
                        left: 7%;
                        background-image: none;
                        max-width: 85%;


                        @include orientation(landscape) {
                          padding-top: 30px;
                          height: 330px;
                        }
                      }

                      @include media-breakpoint-down(xs) {
                        @include orientation(landscape) {
                          background-color: #ffffff;
                          padding: 40px 15px 25px 15px;
                          position: fixed;
                          top: 26%;
                          left: 18%;
                          background-image: none;
                          max-width: 374px;

                        }
                      }
                    }

                    .calendarMonthGrid {
                      width: 100%;
                      border-collapse: separate;
                      border-spacing: 0.8em 0;
                      font-size: 16px;
                      table-layout: fixed;
                      text-align: center;

                      th {
                        width: 14.285714285714286%;
                        padding-bottom: 0.5em;
                        color: #1b1b1b;
                        font-weight: bold;
                        line-height: 24px;
                      }

                      td {
                        height: 38px;
                        border: none;
                        vertical-align: middle;
                      }
                      @include media-breakpoint-down(xs) {
                        th {
                          padding-bottom: 0.5em;
                        }
                        td {
                          height: 38px;
                        }
                      }
                      @include media-breakpoint-down(xs) {
                        @include orientation(landscape) {
                          th {
                            padding-bottom: 0.5em;
                          }
                          td {
                            height: 38px;
                          }
                        }
                      }
                    }

                    .calendarDayButton {
                      @include button-unstyled;
                      overflow: visible;
                      width: 100%;
                      height: 100%;
                      box-sizing: border-box;
                      color: #1b1b1b;
                      cursor: pointer;
                      line-height: 24px;
                      text-align: center;
                      font-size: 16px;

                      // TODO: Make a circle button mixin
                      &:focus {
                        background-color: #00599c;
                        color: #ffffff;
                        font-weight: $font-bold;
                        border-radius: 50%;
                        height: 25px;
                        width: 25px;
                      }

                      &:hover {
                        width: 25px;
                        height: 25px;
                        background-color: #002d62;
                        border-radius: 50%;
                        color: #ffffff;
                        font-weight: $font-bold;
                      }

                      &[aria-disabled="true"],
                      &:hover[aria-disabled="true"] {
                        background-color: transparent;
                        color: #d6d7d9;
                        cursor: not-allowed;
                        font-weight: $font-normal;
                        pointer-events: none;
                        -webkit-text-fill-color: #d6d7d9; // Needed for Safari
                      }
                    }

                    .gridTitle {
                      text-align: center;
                      width: 100%;
                      margin-bottom: 18px;
                      position: relative;

                      @include media-breakpoint-down(sm) {
                          margin-bottom: 18px;

                      }
                      @include media-breakpoint-down(md) {
                        @include orientation(landscape) {
                          margin-bottom: 18px;
                        }
                      }
                    }

                    .gridTitleMonth {
                      margin: 0;
                      font-size: $font-size-heading3;
                      line-height: $line-height-heading4;
                      display: inline-block;
                    }

                    @mixin gridTitleButton {
                      @include button-unstyled;
                      color: #00599c;
                      text-align: center;
                      cursor: pointer;
                      position: absolute;
                      top: calc(50% - (19px/2));
                      line-height: .5;

                      > span {
                        display: inline-block;
                      }

                      svg {
                        height: 19px;
                        width: 11px;
                      }

                      &:hover {
                        color: #002d62;
                      }
                    }

                    .gridTitleNextMonthButton {
                      @include gridTitleButton;
                      right: 39px;
                      display: inline-block;
                      overflow: hidden;
                    }

                    .gridTitleNextMonthButton:focus,
                    .gridTitlePreviousMonthButton:focus {
                      outline: 3px solid #2491ff;
                      outline-offset: 4px;
                    }

                    .gridTitlePreviousMonthButton {
                      @include gridTitleButton;
                      left: 39px;
                      display: inline-block;
                      overflow: hidden;
                    }

                    .navIcon {
                      position: relative;
                      top: 1px;
                      width: 24px;
                      height: 24px;
                    }

                    .footer {
                      margin-top: $module-spacing / 2;
                      text-align: right;
                    }

                    .closeButton {
                      @include button-unstyled;
                      position: absolute;
                      top: -($modalCloseIconHeight /2);
                      right: -($modalCloseIconWidth /2);
                      text-align: center;
                      color: #00599c;
                      line-height: 1;

                      &:after {
                        content: "";
                        display: block;
                        position: absolute;
                        top: 1px;
                        left: 1px;
                        bottom: 1px;
                        right: 1px;
                        background-color: white;
                        border-radius: 50%;
                        z-index: -1;
                      }

                      &:focus {
                        outline: 3px solid #2491ff;
                        outline-offset: 4px;
                      }

                      svg {
                        height: 35px;
                        width: 35px;
                      }

                      .closeButtonIcon {
                        display: inline-block;
                      }
                    }

                    :global {
                      // stylelint-disable selector-no-qualifying-type
                      body.modal__open {
                        @include media-breakpoint-down(xs) {
                          overflow: hidden;
                          position: fixed;
                        }
                      }
                    }

                    // Custom focus outline for Date Field Input Fields
                    [data-component="DateField"] input:focus {
                      box-sizing: border-box;
                      box-shadow: 0px 0px 0px 3px #2491ff;
                      border-radius: 0;
                      z-index: 2;

                      -webkit-background-clip: content-box;
                       -moz-background-clip: content-box;
                            background-clip: content-box;

                      &:not(.focus-visible) {
                        outline: none;
                      }
                    }

                    input,
                    button {
                      position: relative;
                      outline: none;
                    }

                    .calendarLaunchBtn:focus {
                      outline: none;
                    }

                    .calendarLaunchBtn:focus svg {
                      outline: 3px solid #2491ff;
                      outline-offset: 4px;
                    }

                    input:required:invalid {
                      box-shadow: none;
                    }

                    input:required:invalid:focus {
                      box-shadow: 0px 0px 0px 3px #2491ff;
                    }

                    .calendarDayButton {
                      position: relative;
                    }

                    .calendarDayButton:focus {
                      outline: none;
                    }

                    .calendarDayButton:focus:after {
                      box-sizing: border-box;
                      border: 3px solid #2491ff;
                      content: "";
                      display: block;
                      height: 39px;
                      width: 39px;
                      position: absolute;
                      top: -7px;
                      left: -7px;
                      outline: none;
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
              <li>There are multiple calendar date pickers on this page that are identical in functionality and design. They each have the same accessible name because their functionality is the same. A unique identifier was not assigned since they will be used by the developers to fit respective applications or websites.</li>
            </ul>
          </span>

        </DocsSection>

        <DocsSection title="When to use">
          <p>
            Use the date text field when a user needs to enter in dates. Include a calendar date picker with a date text field when the date falls inside a 12-month range. A calendar date picker is especially useful for scheduling and selecting date ranges.
          </p>
        </DocsSection>

        <DocsSection title="Specifications">
          <h3>Typography: Date field</h3>
          <Table caption="Date field typography specifications">
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
                  <Link to="/styles/typography/#form-inputs">
                    Input label
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
                <TableHeaderCell><span style={{ color: '#d11242' }}>*</span></TableHeaderCell>
                <TableCell>
                  <Link to="/styles/typography/#form-inputs">Input label</Link>
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">Red</Link>
                </TableCell>
                <TableCell>
                  #d11242
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Hint text</TableHeaderCell>
                <TableCell>
                  <Link to="/styles/typography/#form-inputs">
                    Hint text
                  </Link>
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">Gray dark</Link>
                </TableCell>
                <TableCell>
                  #5b616b
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Text</TableHeaderCell>
                <TableCell>
                  <Link to="/styles/typography/#form-inputs">
                    Input text
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
                <TableHeaderCell>Placeholder text</TableHeaderCell>
                <TableCell>
                  <Link to="/styles/typography/#form-inputs">Placeholder text</Link>
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">Gray dark</Link>
                </TableCell>
                <TableCell>
                  #5b616b
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Error text</TableHeaderCell>
                <TableCell>
                  <Link to="/styles/typography/#form-inputs">Error text</Link>
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">Red</Link>
                </TableCell>
                <TableCell>
                  #d11242
                </TableCell>
              </TableRow>
            </tbody>
          </Table>

          <h3>Typography: Calendar date picker</h3>
          <Table caption="Calendar date picker typography specifications">
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
                <TableHeaderCell>Month label</TableHeaderCell>
                <TableCell>
                  <Link to="/styles/typography/#display-type">
                    Heading 20, line-height: 24px
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
                <TableHeaderCell>Week label</TableHeaderCell>
                <TableCell>
                  <Link to="/styles/typography/#display-type">Heading 16</Link>
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">Gray darkest</Link>
                </TableCell>
                <TableCell>
                  #1b1b1b
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Date</TableHeaderCell>
                <TableCell>
                  <Link to="/styles/typography/#display-type">
                    Body text
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
                <TableHeaderCell>Date (disabled)</TableHeaderCell>
                <TableCell>
                  <Link to="/styles/typography/#display-type">
                    Body text
                  </Link>
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">Gray light</Link>
                </TableCell>
                <TableCell>
                  #d6d7d9
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Date (active)</TableHeaderCell>
                <TableCell>
                  <Link to="/styles/typography/#display-type">Body text, bold</Link>
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">White</Link>
                </TableCell>
                <TableCell>
                  #ffffff
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Date (hover)</TableHeaderCell>
                <TableCell>
                  <Link to="/styles/typography/#display-type">Body text, bold</Link>
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">White</Link>
                </TableCell>
                <TableCell>
                  #ffffff
                </TableCell>
              </TableRow>
            </tbody>
          </Table>

          <h3>Elements: Date field</h3>
          <Table caption="Date field elements specifications">
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
                  <Link to="/styles/colors">White</Link>
                </TableCell>
                <TableCell>
                  #ffffff
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Border</TableHeaderCell>
                <TableCell>1px solid</TableCell>
                <TableCell>
                  <Link to="/styles/colors">Gray darkest</Link>
                </TableCell>
                <TableCell>
                  #1b1b1b
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Border (required)</TableHeaderCell>
                <TableCell>1px solid</TableCell>
                <TableCell>
                  <Link to="/styles/colors">Red</Link>
                </TableCell>
                <TableCell>
                  #d11242
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Padding</TableHeaderCell>
                <TableCell>12px 16px</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
            </tbody>
          </Table>

          <h3>Elements: Calendar date picker</h3>
          <Table caption="Calendar date picker elements specifications">
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
                  CalendarModal-left.svg,
                  <br />
                  CalendarModalXL-left.svg
                </TableCell>
                <TableCell>transparent</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Box-shadow</TableHeaderCell>
                <TableCell>
                  0 1px 5px 0,
                  <br />
                  0 2px 2px 0,
                  <br />0 3px 1px -2px
                </TableCell>
                <TableCell>
                  rgba(0,0,0,0.20),
                  <br />
                  rgba(0,0,0,0.14),
                  <br />
                  rgba(0,0,0,0.12)
                </TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Padding</TableHeaderCell>
                <TableCell>55px 21px</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
            </tbody>
          </Table>

          <h3>Elements: Calendar date picker table</h3>
          <Table caption="Calendar date picker table elements specifications">
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
                <TableHeaderCell>Cell height</TableHeaderCell>
                <TableCell>38px</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Cell (active)</TableHeaderCell>
                <TableCell>N/A</TableCell>
                <TableCell>
                  <Link to="/styles/colors">Blue</Link>
                </TableCell>
                <TableCell>
                  #00599c
                </TableCell>

              </TableRow>
              <TableRow>
                <TableHeaderCell>Cell (hover)</TableHeaderCell>
                <TableCell>N/A</TableCell>
                <TableCell>
                  <Link to="/styles/colors">Blue dark</Link>
                </TableCell>
                <TableCell>
                  #002d62
                </TableCell>
              </TableRow>
            </tbody>
          </Table>

          <h3>Elements: Icons (desktop & mobile)</h3>
          <Table caption="Calendar icons (on desktop and mobile) specifications">
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
                <TableHeaderCell>Icon (calendar)</TableHeaderCell>
                <TableCell>
                  <Link to="/styles/iconography">calendar-days-solid</Link>
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">Blue</Link>
                </TableCell>
                <TableCell>#00599c</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Icon (previous month)</TableHeaderCell>
                <TableCell>
                  <Link to="/styles/iconography">chevron-left-solid</Link>
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">Blue</Link>
                </TableCell>
                <TableCell>#00599c</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Icon (next month)</TableHeaderCell>
                <TableCell>
                  <Link to="/styles/iconography">chevron-right-solid</Link>
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">Blue</Link>
                </TableCell>
                <TableCell>#00599c</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Icon size (calendar)</TableHeaderCell>
                <TableCell>
                  20px x 18px
                </TableCell>
                <TableCell>
                  N/A
                </TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Icon size (previous month)</TableHeaderCell>
                <TableCell>
                  11px x 19px
                </TableCell>
                <TableCell>
                  N/A
                </TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Icon size (next month)</TableHeaderCell>
                <TableCell>
                  11px x 19px
                </TableCell>
                <TableCell>
                  N/A
                </TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Icon (hover)</TableHeaderCell>
                <TableCell>
                  N/A
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">Blue dark</Link>
              </TableCell>
                <TableCell>#002d62</TableCell>
              </TableRow>
            </tbody>
          </Table>

          <h3>Elements: Icons (mobile)</h3>
          <Table caption="Calendar icons (on mobile) specifications">
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
                <TableHeaderCell>Icon (close icon)</TableHeaderCell>
                <TableCell>
                  <Link to="/styles/iconography">circle-xmark-regular</Link>
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">Blue</Link>
                </TableCell>
                <TableCell>#00599c</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Icon size (close icon)</TableHeaderCell>
                <TableCell>
                  35px x 35px
                </TableCell>
                <TableCell>
                  N/A
                </TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
            </tbody>
          </Table>

          <h3>Focus state</h3>
          <Table caption="Date field focus state specifications">
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
                <TableCell>
                  #2491ff
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Padding (icons)</TableHeaderCell>
                <TableCell>4px</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
            </tbody>
          </Table>
        </DocsSection>

        <DocsSection title="Validation">
          <p>
            The date field only allows the user to enter a date in the <code>MM/DD/YYYY</code> format. The user's input is parsed and verified using <ExternalLink href="https://momentjs.com">momentjs</ExternalLink>, and when the user blurs away from the input.
          </p>
          <p>
            The validation is very strict. The user is only allowed to enter numeric characters. The input field takes care of delimiting the user's input so there is no need to insert backslashes (<code>/</code>).
          </p>
        </DocsSection>

        <DocsSection title="Validation errors">
          <Table caption="Date field validation errors specifications">
            <thead>
              <TableRow>
                <TableHeaderCell scope="col">Error</TableHeaderCell>
                <TableHeaderCell scope="col">Message</TableHeaderCell>
              </TableRow>
            </thead>
            <tbody>
              <TableRow>
                <TableHeaderCell>
                  User enters an alpha character in the date field.
                </TableHeaderCell>
                <TableCell>
                  Error: The input needs to be numeric and follow <code>MM/DD/YYYY</code> format
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>
                  User does not enter a value in the date field after focus.
                </TableHeaderCell>
                <TableCell>Error: Please enter a date</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>
                  User does not enter a value for a required date field.
                </TableHeaderCell>
                <TableCell>
                  Error: <strong>{"{fieldName}"}</strong> is required
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>User's input value is not a valid date.</TableHeaderCell>
                <TableCell>
                  Error: <strong>{"{inputValue}"}</strong> is not a valid date
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>User enters an invalid month.</TableHeaderCell>
                <TableCell>
                  Error: <strong>{"{monthNumber}"}</strong> is not a valid month
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>User enters an invalid day.</TableHeaderCell>
                <TableCell>
                  Error: <strong>{"{dayNumber}"}</strong> is not a valid day in {"{month}"}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>User enters an invalid date format.</TableHeaderCell>
                <TableCell>
                  Error: Date must follow <code>MM/DD/YYYY</code> format
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>
                  User enters a date that is greater than the maximum allowed
                  date value.
                </TableHeaderCell>
                <TableCell>
                  Error: Date must be between <strong>{"{lowerLimit}"}</strong> and <strong>{"{upperLimit}"}</strong>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>
                  User enters a date that is lower than the minimum allowed date
                  value.
                </TableHeaderCell>
                <TableCell>
                  Error: Date must be after <strong>{"{lowerLimit}"}</strong>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>
                  User enters a date in the end date field of the range that is
                  before the start date field.
                </TableHeaderCell>
                <TableCell>Error: The date must be after start date</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>
                  User enters a date in the start date field of the range that
                  is after the end date field.
                </TableHeaderCell>
                <TableCell>Error: The date must be before end date</TableCell>
              </TableRow>
            </tbody>
          </Table>
        </DocsSection>

        <DocsSection title="Usability guidance">
          <h3>General rules</h3>
          <List>
            <ListItem>
              Use MM/DD/YYYY, MM/DD/YY, or MM/DD input masking inside the date text field keeping the "/" delimiters as the user types.
            </ListItem>
            <ListItem>
              Ensure errors are caught by the system by indicating to the user when they've entered an illogical or impossible date. Alert the user to date text field errors following the below error message guidelines.
            </ListItem>
            <List>
              <ListItem>
                Use concise language in the error message text.
              </ListItem>
              <ListItem>
                Provide information to help the user navigate to the error.
              </ListItem>
            </List>

            <ListItem>
              Don't make users populate values that cannot change. For example, if the year is fixed and cannot change (which could be the case in many IRS products for tax year), then do not force the user to enter a year at all; pre-populate the field with the proper year.
            </ListItem>
          </List>
          <h3>Date text field</h3>
          <List>
            <ListItem>
              Provide a date text field when a user needs to enter in dates.
            </ListItem>
            <ListItem>
              Only allow numbers while excluding letters in the date text field.
            </ListItem>
          </List>
          <h3>Calendar date picker</h3>
          <List>
            <ListItem>
              Add a calendar date picker with the date text field when the date falls inside a 12-month range. A calendar date picker is especially helpful for the user if they are scheduling future events or selecting date ranges.
            </ListItem>
            <ListItem>
              Highlight the current date when the calendar date picker opens to help orient the user.
            </ListItem>
            <ListItem>
              Disable the dates you do not want the user to select. For example, if the user is selecting a date for an event that occurs on a weekday, do not let them select Saturdays or Sundays from the calendar. This can additionally be communicated with instructions and/or hint text.
            </ListItem>
            <ListItem>
              There is no right or wrong answer as to whether a calendar date picker should automatically open or if the user should have to select the calendar icon to activate it. Depending on the situation, it might be more seamless for the calendar date picker to appear on its own, but it might also be more seamless for the user to manually select it.
            </ListItem>
          </List>
        </DocsSection>

        <DocsSection title="Accessibility guidance">
          <h3>Date Field</h3>
          <List>
            <ListItem>
              Follow form accessibility guidance. Visit the <Link href="/components/form-overview">form overview</Link> page for more detail.
            </ListItem>
            <ListItem>
              Provide labels or instructions for the content that requires user input.
            </ListItem>
            <ListItem>
              Provide format suggestions for the date and date range fields that are visible at all times. For example: Start date (MM/DD/YYYY).
            </ListItem>
            <ListItem>
              Instruct the users to enter only the characters that are allowed; the text field should only allow numbers, no letters.
            </ListItem>
            <ListItem>
              Use placeholder text to indicate the format of the date rather than leaving the field blank. For example: prepopulate the field with MM/DD/YYYY. This gives the user a visual cue as to which format the date needs to be in.
            </ListItem>
            <ListItem>
              Ensure the color contrast ratio between the placeholder text and the background colors is at least 4.5:1.
            </ListItem>
            <ListItem>
              The placeholder text remains inside the field until the user starts typing.
            </ListItem>
            <ListItem>
              Date field input errors are identified and described in text.
            </ListItem>
            <ListItem>
              Users should receive suggestions on how to correct the date field error.
            </ListItem>
            <ListItem>
              Don't auto-advance focus with JavaScript from one field to the next. This makes it difficult for keyboard-only users to navigate and correct mistakes.
            </ListItem>
            <ListItem>
              Use "text" instead of "number" inputs. Research indicates that numeric inputs still carry many usability problems.
            </ListItem>
          </List>
          <p>
            <strong>Note:</strong> <em>The date field and calendar date picker have some validation built in. A more robust validation can only be done in a dedicated HTML form component.</em>
          </p>

          <h3>Calendar Date Picker</h3>
          <List>
            <ListItem>
              Customize form controls accessibly to ensure that it continues to meet the accessibility requirements that apply to all form controls.
            </ListItem>
            <ListItem>
              Provide keyboard instructions and keyboard shortcuts on how to navigate the calendar. For example: LEFT/RIGHT arrow for previous/next day. UP/DOWN for previous/next week. Page UP/Page DOWN to move to the same day in the previous/next month.
            </ListItem>
            <ListItem>
              Avoid using single-character shortcut keys, like letters, since users of assistive technologies (AT), such as screen readers or speech input, may inadvertently invoke actions that are unintended. For example, an action tied to the letter "b" may conflict with a screen readers ability to navigate buttons.
            </ListItem>
            <ListItem>
              The calendar should not be the only option for the user to select a date. Make it possible to type directly in the text field as well. Make sure the required format is specified in the label.
            </ListItem>
            <ListItem>
              All interactive elements of the calendar must be accessible with a keyboard. For example, tabbing to the calendar and using arrow keys to pick the right date.
            </ListItem>
            <ListItem>
              Don't hide the calendar button that opens the calendar from screen readers. Some screen reader users use a combination of sight and screen reader, so hiding the calendar button and calendar view for screen readers will worsen their experience.
            </ListItem>
            <ListItem>
              Make sure that the buttons and icons in the calendar view have accessible labels so that they are correctly read by screen readers. For example, the dates of the month should be read "January 1st 2020, Wednesday".
            </ListItem>
            <ListItem>
              When the date is unavailable, providing the reason may increase the user's understanding.
            </ListItem>
            <ListItem>
              Accessible labels should be the same as the visual label. This will ensure that speech input users are able to access and activate the proper controls.
            </ListItem>
            <ListItem>
              If using colors, ensure the color contrast ratio between the background and foreground colors is at least 4.5:1.
            </ListItem>
            <ListItem>
              For mobile, make sure control target sizes are large enough to easily activate with fine pointer inputs.
            </ListItem>
            <ListItem>
              Avoid auto-submission to automatically submit the form when an option is selected. Auto-submission disrupts screen readers because they select each option as they read them.
            </ListItem>
          </List>

          <h3>Applicable standards</h3>
          <h4 className={appStyles.applicableStandardsh4}>Web Content Accessibility Guidelines (WCAG) 2.0/2.1</h4>
          <List>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships" target="_blank">1.3.1 Info and Relationships</ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#contrast-minimum" target="_blank">1.4.3 Contrast (Minimum)</ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#non-text-contrast" target="_blank">1.4.11 Non-text Contrast</ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#keyboard" target="_blank">2.1.1 Keyboard</ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#focus-order" target="_blank">2.4.3 Focus Order</ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#focus-visible" target="_blank">2.4.7 Focus Visible</ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#label-in-name" target="_blank">2.5.3 Label in Name</ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#target-size" target="_blank">2.5.5 Target Size</ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#labels-or-instructions" target="_blank">3.3.2 Labels or Instructions</ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#name-role-value" target="_blank">4.1.2 Name, Role, Value</ExternalLink>
            </ListItem>
          </List>

          <h3>Known accessibility issues</h3>

          <p>
          A known accessibility issue is a technical issue that platform or assistive technology (AT) engineers are working to fix with 
          each new release of iOS/Android or AT. For example, a role or state not being announced by a screen reader on a given platform.
          </p>
          <List>
            <ListItem>
              <strong>Issue:</strong> Android mobile devices paired with
              TalkBack do not announce form controls as "required" when using
              the <code>required</code> attribute. Use of ARIA attributes does not help to
              produce the expected announcements.
            </ListItem>
          </List>
        </DocsSection>
      </DocsPage>
    </div>
  );
}

export default EmbedStyles(styles, appStyles)(DateFieldPage);
