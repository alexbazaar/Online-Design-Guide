import React from "react";
import Helmet from "react-helmet";
import heredoc from "../utils/heredocument";
import { DocsPage, DocsSection, DocsCode } from "../../../ols-ui/src/components/DocsFoundations";

import Table, { TableRow, TableHeaderCell, TableCell } from "../../../ols-ui/src/components/Tables";

import StepIndicator, { StepIndicatorItem } from "../../../ols-ui/src/components/StepIndicator";
import Link, { ExternalLink } from "../../../ols-ui/src/components/Links";
import Spacer from "../../../ols-ui/src/components/Spacer";
import Panel from "../../../ols-ui/src/components/Panel";
import TabView, { Tab } from "../../../ols-ui/src/components/TabView";

import StepIndicatorSpacingDesktop from "../assets/images/spacing-specs/General_Elements_Step_Indicator_Desktop.png";
import StepIndicatorSpacingMobile from "../assets/images/spacing-specs/General_Elements_Step_Indicator_Mobile.png";
import List, { ListItem } from "../../../ols-ui/src/components/List";

import styles from "../styles/App.scss";

/**
 * *****************************************************************************
 * Content for Step Indicator
 *
 * @returns {node} the node
 * *****************************************************************************
 */
export default function NoninteractiveStepIndicatorPage() {
  const imgStyle = {
    width: "100%",
    maxWidth: "400px",
    margin: "0 auto",
    display: "block",
  };

  return (
    <div>
      <Helmet title="Non-interactive step indicator" />
      <DocsPage
        className="docs-styles"
        title="Non-interactive step indicator"
        subtitle="Non-interactive progress tracker comprised of connected steps and labels."
        emphasisTag={[ "IRAP APPROVED" ]}
      >
        <DocsSection>
          <TabView id="preview-tabs">
            <Tab label="Preview">
              <Panel padding="large">
                <StepIndicator>
                  <StepIndicatorItem
                    status="completed"
                    stepNum="1"
                    title="About you"
                  >
                    About you
                  </StepIndicatorItem>
                  <StepIndicatorItem
                    status="completed"
                    stepNum="2"
                    title="Income & withholding"
                  >
                    Income & withholding
                  </StepIndicatorItem>
                  <StepIndicatorItem
                    status="active"
                    title="Adjustments"
                    stepNum="3"
                  >
                    Adjustments
                  </StepIndicatorItem>
                  <StepIndicatorItem stepNum="4" title="Deductions">
                    Deductions
                  </StepIndicatorItem>
                  <StepIndicatorItem stepNum="5" title="Tax credits">
                    Tax credits
                  </StepIndicatorItem>
                </StepIndicator>

                <Spacer height={42} />
              </Panel>
            </Tab>
            <Tab label="Spacing">
              <Panel>
                <div style={{ padding: "40px" }}>
                  <img
                    src={StepIndicatorSpacingDesktop}
                    alt="This is a marked up graphic of the Step Indicator spacing"
                    aria-hidden="true"
                    style={imgStyle}
                    className={styles.previewSpacingDesktopFluid}
                  />
                  <img
                    src={StepIndicatorSpacingMobile}
                    alt="This is a marked up graphic of the Step Indicator spacing"
                    aria-hidden="true"
                    style={imgStyle}
                    className={styles.previewSpacingMobileFluid}
                  />
                </div>
                <div>
                  <span style={{ marginTop: "16px", fontSize: '12px', lineHeight: "16px", display: "inline-block" }}><br /><strong>Note:</strong> Please refer to the specifications section for more detail.</span>
                </div>
              </Panel>
            </Tab>
            <Tab label="HTML">
              <Panel className="panel-code" padding="none" maxheight="medium">
                <DocsCode language="xml">
                  {heredoc`
                  <StepIndicator>
                    <StepIndicatorItem
                      status="completed"
                      stepNum="1"
                      title="About you"
                    >
                      About you
                    </StepIndicatorItem>
                    <StepIndicatorItem
                      status="completed"
                      stepNum="2"
                      title="Income & withholding"
                    >
                      Income & withholding
                    </StepIndicatorItem>
                    <StepIndicatorItem
                      status="active"
                      title="Adjustments"
                      stepNum="3"
                    >
                      Adjustments
                    </StepIndicatorItem>
                    <StepIndicatorItem stepNum="4" title="Deductions">
                      Deductions
                    </StepIndicatorItem>
                    <StepIndicatorItem stepNum="5" title="Tax credits">
                      Tax credits
                    </StepIndicatorItem>
                  </StepIndicator>                   
                `}
                </DocsCode>
              </Panel>
            </Tab>
            <Tab label="CSS">
              <Panel className="panel-code" padding="none" maxheight="medium">
                <DocsCode language="scss">
                  {heredoc`
                    $step-indicator-border-width: 2px;
                    $step-indicator-completed-border-width: $step-indicator-border-width + 1;
                    $step-indicator-knot-size: 48px;
                    $step-indicator-knot-size-sm: $module-spacing * 2;
                    $step-indicator-top-offset: $module-spacing / 2;
                    $space-between-step-indicator-items-sm: ($module-spacing);
                    $space-between-step-indicator-items: ($module-spacing * 4);
                    $step-content-height: $step-indicator-knot-size / 2;
                    $step-content-height-sm: $step-indicator-knot-size-sm / 2;
                    
                    .sr-only {
                      @include sr-only;
                    }
                    
                    .step-indicator-wrapper {
                      text-align: left;
                    
                      @include media-breakpoint-up(sm) {
                        text-align: center;
                      }
                    }
                    
                    .step-indicator-wrapper {
                      ul {
                        padding-left: 0;
                      }
                      ul li {
                        list-style: none;
                      }
                    }
                    
                    .step-indicator-title {
                      @include heading2;
                    
                      @include media-breakpoint-up(sm){
                        display: none;
                      }
                    
                      @include media-breakpoint-down(xs) {
                        font-size: 20px;
                        line-height: 28px;
                      }
                    }
                    
                    .item {
                      display: inline-flex;
                      align-items: stretch;
                      padding: $module-spacing / 4;
                      position: relative;
                    
                      @include media-breakpoint-up(sm) {
                        padding: $module-spacing;
                        &.hasLabel {
                          padding: $module-spacing ($module-spacing * 2.5) ($module-spacing * 2);
                        }
                      }
                    
                      
                      &:last-of-type {
                    
                        .line {
                          display: none;
                        }
                      }
                    
                      // Styles the Completed state knot colors of on a non-functional step indicator
                      &.completed .knot {
                        box-shadow: inset 0 0 0 $step-indicator-completed-border-width #5b616b;
                        background: #ffffff;
                      }
                    
                      // Styles the Active state knot colors of on a non-functional step indicator
                      &.active .knot {
                        background: #5b616b;
                        box-shadow: none;
                        color: #ffffff;
                      }
                    
                      // Styles the Active state knot colors of on a functional step indicator
                     
                    
                      &.active .step-label {
                        color: #ffffff;
                      }
                    
                      &.disabled .knot,
                      &.disabled.item-link [data-component="Link"] .knot {
                        background: #ffffff;
                        box-shadow: inset 0 0 0 $step-indicator-completed-border-width #5b616b;
                      }
                    
                      &.disabled .step-label {
                        color: #5b616b;
                      }
                    }
                    
                    
                    .functionalItem {
                      display: inline-flex;
                      align-items: stretch;
                      padding: $module-spacing / 4;
                      position: relative;
                      &.knot,
                      &.completedKnot {
                        background: #002d62;
                      }
                      @include media-breakpoint-up(sm) {
                        padding: $module-spacing;
                        &.hasLabel {
                          padding: $module-spacing ($module-spacing * 2.5) ($module-spacing * 2);
                        }
                      }
                    
                      
                      &:last-of-type {
                    
                        .line {
                          display: none;
                        }
                      }
                    
                      // Styles the focus outline for "completed/not completed" functional steps
                      &.item-link [data-component="Link"]:focus {
                        outline: 3px solid #2491ff;
                        position: relative;
                        display: block;
                        z-index: 1;
                        padding: 10px 20px 55px 20px;
                        margin: -10px -20px -55px -20px;
                      }
                      // Styles the focus outline for "active" functional step
                      &.item-link [data-component="activeLink"]:focus {
                        outline: 3px solid #2491ff;
                        position: relative;
                        display: block;
                        z-index: 1;
                        padding: 10px 20px 55px 20px;
                        margin: -10px -20px -55px -20px;
                      }
                      // Styles the completed and not completed step knots
                      &.item-link [data-component="Link"] .knot,
                      &.item-link [data-component="Link"] .completedKnot {
                        background: #00599c;
                        color: #ffffff;
                        box-shadow: none;
                        transition: background-color 0.5s ease;
                      }
                    
                      // Styles the hover of completed and not completed step knots
                      &.item-link [data-component="Link"]:hover .knot,
                      &.item-link [data-component="Link"]:hover .completedKnot {
                        background: #002d62;
                      }
                    
                    
                      // Styles the Active state knot colors of on a non-functional step indicator
                      &.active .knot {
                        background: #002d62;
                        box-shadow: none;
                        color: #ffffff;
                      }
                    
                      // Styles the step numbers for active and not completed steps
                      &.active .step-label,
                      &.item-link .step-label {
                        color: #ffffff;
                      }
                    }
                    
                    .item-link {
                      .content {
                        color: #00599c;
                        text-decoration: underline;
                        width: ($module-spacing * 7);
                        cursor: pointer;
                      }
                    
                      .content[id="activeLabel"],
                      .content[id="activeLabel"]:hover {
                        color: #5b616b;
                      }
                    
                      &:hover {
                        cursor: pointer;
                        .knot,
                        .completedKnot {
                          background:#002d62;
                        }
                      }
                    
                      &:visited {
                        .content {
                          color: #6e41a0;
                        }
                      }
                    }
                     
                    // The default, non-functional step label underneath the Step Indicator knots
                    //
                    .content {
                      @include body;
                      max-width: $step-indicator-knot-size-sm;
                    
                      @include media-breakpoint-down(xs) {
                        @include sr-only;
                      }
                    
                      // Sets position of labels (not links) for non-functional step indicator
                      .item & {
                        @include media-breakpoint-up(sm) {
                          color: #5b616b;
                          font-size: $module-spacing - 2;
                          overflow-y: visible;
                          max-width: ($module-spacing * 7);
                          text-align: center;
                          line-height: 20px;
                          position: absolute;
                          top: 60px;
                          width: ($module-spacing * 7);
                          left: (-($module-spacing * 2));
                        }
                      }
                      .functionalItem & {
                        @include media-breakpoint-up(sm) {
                          color: #00599c;
                          font-size: $module-spacing - 2;
                          overflow-y: visible;
                          max-width: ($module-spacing * 7);
                          text-align: center;
                          line-height: 20px;
                          position: absolute;
                          top: 60px;
                          width: ($module-spacing * 7);
                          left: (-($module-spacing * 2));
                        }
                      }
                    
                      .active & {
                        font-weight: 700;
                        text-decoration: none;
                        color: #5b616b;
                      }
                    
                      .item:first-of-type & {
                        @include media-breakpoint-up(sm) {
                          left: (-($module-spacing * 2));
                        }
                      }
                    
                      .item:last-of-type & {
                        @include media-breakpoint-up(sm) {
                          left: (-($module-spacing * 2));
                        }
                      }
                    
                      .functionalItem:first-of-type & {
                        @include media-breakpoint-up(sm) {
                          left: (-($module-spacing * 2));
                        }
                      }
                    
                      .functionalItem:last-of-type & {
                        @include media-breakpoint-up(sm) {
                          left: (-($module-spacing * 2));
                        }
                      }
                    
                      .item-link & {
                        &:hover{
                          color: #002d62;
                        }
                        @include media-breakpoint-up(sm) {
                          color: #00599c;
                          font-size: $module-spacing - 2;
                          overflow-y: visible;
                          max-width: ($module-spacing * 7);
                          text-align: center;
                          line-height: 20px;
                          position: absolute;
                          top: 60px;
                          width: ($module-spacing * 7);
                          left: (-($module-spacing * 2));
                        }
                      }
                    }
                    
                    .knotLine {
                      position: relative;
                      flex: 0 0 auto;
                    
                      .line {
                        position: absolute;
                        z-index: 0;
                        top: ($step-indicator-knot-size-sm / 2);
                        left: ($step-indicator-knot-size / 2) - ($step-indicator-border-width / 2);
                        width: calc(100% + #{$space-between-step-indicator-items-sm});
                        height: $step-indicator-border-width - 1;
                        background-color: #5b616b;
                    
                        .item-link & {
                          background-color: #5b616b;
                        }
                    
                        .completed & {
                          background-color: #5b616b;
                        }
                    
                        @include media-breakpoint-up(sm) {
                          top: ($step-indicator-knot-size / 2);
                          width: calc(100% + #{$space-between-step-indicator-items});
                        }
                      }
                    
                      .knot {
                        background: #ffffff;
                        box-shadow: inset 0 0 0 $step-indicator-completed-border-width #5b616b;
                        position: relative;
                        z-index: 1;
                        top: 0;
                        width: $step-indicator-knot-size-sm;
                        height: $step-indicator-knot-size-sm;
                        border-radius: 50%;
                    
                        [data-component="icon-wrapper"] {
                          display: flex;
                          flex-direction: column;
                          height: 100%;
                          justify-content: center;
                          align-items: center;
                        }
                    
                        [data-icon="check"] {
                          width: 13px;
                          height: 10px;
                        }
                    
                        @include media-breakpoint-up(sm) {
                          width: $step-indicator-knot-size;
                          height: $step-indicator-knot-size;
                    
                          [data-icon="check"] {
                            height: 15px;
                            width: 20px;
                          }
                        }
                      }
                    }
                    
                    //
                    // Step number (inside of the knot)
                    //
                    @mixin step-base {
                      color: #5b616b;
                      text-align: center;
                      font-size: $module-spacing - 2;
                      position: absolute;
                      height: $step-content-height;
                      overflow: hidden;
                      max-width: $step-content-height-sm;
                      bottom: ($step-content-height-sm) / 4;
                      width: 100%;
                      text-align: center;
                      left: $module-spacing / 2;
                    
                      @include media-breakpoint-up(sm) {
                        max-width: $step-content-height;
                        bottom: ($step-content-height - $step-indicator-border-width) / 2;
                        font-size: $module-spacing + 2;
                        left: $module-spacing - ($step-indicator-border-width * 2);
                      }
                    
                      > * {
                        &:last-of-type {
                          margin-bottom: 0;
                        }
                      }
                    }
                    
                    .step-label {
                      @include step-base;
                    }
                    
                    // Styles the functional and non-functional check icons
                    //
                    .completed-step-label,
                    .static-completed-step-label {
                      @include step-base;
                    
                      @include media-breakpoint-up(sm) {
                        font-size: $module-spacing * 1.5;
                        bottom: 12px;
                      }
                    }
                    
                    .completed-step-label {
                      color: #ffffff;
                    }
                    
                    // Non-functional: Completed step checkmark (inside of the knot)
                    //
                    .completedDisabledIcon {
                      @include body;
                      color: #5b616b;
                      background: #ffffff;
                      text-align: center;
                      font-size: $module-spacing - 2;
                      position: absolute;
                      bottom: ($step-content-height) / 4;
                      left: $module-spacing / 2;
                      overflow: hidden;
                      height: $step-content-height - 4;
                      max-width: $step-content-height-sm;
                      width: 100%;
                    
                      @include media-breakpoint-up(sm) {
                        max-width: $step-content-height;
                        height: $step-content-height;
                        bottom: ($step-content-height - $step-indicator-border-width) / 2;
                        font-size: $module-spacing + 2;
                        left: $module-spacing - ($step-indicator-border-width * 2);
                      }
                    
                      > * {
                        &:last-of-type {
                          margin-bottom: 0;
                        }
                      }
                    }
                    
                    .completedClickableIcon {
                      @include body;
                      color: #ffffff;
                      background: transparent;
                      text-align: center;
                      font-size: $module-spacing - 2;
                      position: absolute;
                      left: 0;
                      bottom: ($step-content-height-sm) / 8;
                      overflow: hidden;
                      height: $step-content-height - 4;
                      max-width: $step-content-height-sm;
                      width: 100%;
                    
                      @include media-breakpoint-up(sm) {
                        max-width: $step-content-height;
                        height: $step-content-height;
                        bottom: 0;
                        font-size: $module-spacing + 2;
                        left: 0;
                      }
                    
                      > * {
                        &:last-of-type {
                          margin-bottom: 0;
                        }
                      }
                    }
                  `}
                </DocsCode>
              </Panel>
            </Tab>
          </TabView>
          <span className={styles.disclaimer}><strong>Note:</strong> Use browser inspect tool to view the component at various breakpoints.</span>
        </DocsSection>

        <DocsSection title="When to use">
          <p>Use a non-interactive step indicator when the application <i style={{ fontStyle: "italic" }}>does not allow</i> for the 
          user to navigate using the step indicator.
          </p>
        </DocsSection>

        <DocsSection title="Specifications">
          <h3>Typography (desktop)</h3>

          <Table caption="Non-interactive step indicator typography (on desktop) specifications">
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
                <TableHeaderCell>Step number (default)</TableHeaderCell>
                <TableCell>
                  18px
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">Gray dark</Link>
                </TableCell>
                <TableCell>#5b616b</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Step number (active)</TableHeaderCell>
                <TableCell>
                  18px
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">White</Link>
                </TableCell>
                <TableCell>#ffffff</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Content label (default)</TableHeaderCell>
                <TableCell>
                  14px
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">Gray dark</Link>
                </TableCell>
                <TableCell>#5b616b</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Content label (active)</TableHeaderCell>
                <TableCell>
                  14px, bold
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">Gray dark</Link>
                </TableCell>
                <TableCell>#5b616b</TableCell>
              </TableRow>
            </tbody>
          </Table>

          <h3>Typography (mobile)</h3>

          <Table caption="Non-interactive step indicator typography (on mobile) specifications">
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
                <TableHeaderCell>Title</TableHeaderCell>
                <TableCell>
                  <Link to="/styles/typography/#display-type">
                    Heading 20
                  </Link>
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">Gray darkest</Link>
                </TableCell>
                <TableCell>#1b1b1b</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Step number (default)</TableHeaderCell>
                <TableCell>
                  14px
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">Gray dark</Link>
                </TableCell>
                <TableCell>#5b616b</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Step number (active)</TableHeaderCell>
                <TableCell>
                  14px
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">White</Link>
                </TableCell>
                <TableCell>#ffffff</TableCell>
              </TableRow>
            </tbody>
          </Table>

          <h3>Message elements</h3>
          <p>
          Each step indicator knot, or step, has a status that affects its styling: completed, 
          active, disabled or default. The background color, box shadow (or border) color and 
          line color (connecting the knots) dynamically changes based on step indicator's status.
          </p>

          <h3>Elements: Step (desktop)</h3>
          <Table caption="Non-interactive step indicator elements (on desktop) specifications">
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
                <TableHeaderCell>
                  Circle
                </TableHeaderCell>
                <TableCell>48px</TableCell>
                <TableCell>
                  N/A
                </TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>
                  Background (completed, default)
                </TableHeaderCell>
                <TableCell>N/A</TableCell>
                <TableCell>
                  <Link to="/styles/colors">White</Link>
                </TableCell>
                <TableCell>#ffffff</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>
                  Background (active)
                </TableHeaderCell>
                <TableCell>N/A</TableCell>
                <TableCell>
                  <Link to="/styles/colors">Gray dark</Link>
                </TableCell>
                <TableCell>#5b616b</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>
                  Box shadow (completed, default)
                </TableHeaderCell>
                <TableCell>inset 0 0 0 3px</TableCell>
                <TableCell>
                  <Link to="/styles/colors">Gray dark</Link>
                </TableCell>
                <TableCell>#5b616b</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>
                  Line
                </TableHeaderCell>
                <TableCell>1px</TableCell>
                <TableCell>
                  <Link to="/styles/colors">Gray dark</Link>
                </TableCell>
                <TableCell>#5b616b</TableCell>
              </TableRow>
            </tbody>
          </Table>

          <h3>Elements: Step (mobile)</h3>
          <Table caption="Non-interactive step indicator elements (on mobile) specifications">
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
                <TableHeaderCell>
                  Circle
                </TableHeaderCell>
                <TableCell>32px</TableCell>
                <TableCell>
                  N/A
                </TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>
                  Background (completed, default)
                </TableHeaderCell>
                <TableCell>N/A</TableCell>
                <TableCell>
                  <Link to="/styles/colors">White</Link>
                </TableCell>
                <TableCell>#ffffff</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>
                  Background (active)
                </TableHeaderCell>
                <TableCell>N/A</TableCell>
                <TableCell>
                  <Link to="/styles/colors">Gray dark</Link>
                </TableCell>
                <TableCell>#5b616b</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>
                  Box shadow (completed, default)
                </TableHeaderCell>
                <TableCell>inset 0 0 0 3px</TableCell>
                <TableCell>
                  <Link to="/styles/colors">Gray dark</Link>
                </TableCell>
                <TableCell>#5b616b</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>
                  Line
                </TableHeaderCell>
                <TableCell>1px</TableCell>
                <TableCell>
                  <Link to="/styles/colors">Gray dark</Link>
                </TableCell>
                <TableCell>#5b616b</TableCell>
              </TableRow>
            </tbody>
          </Table>

          <h3>Elements: Icon (desktop)</h3>
          <Table caption="Non-interactive step indicator icon elements (on desktop) specifications">
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
                <TableHeaderCell>Icon (check)</TableHeaderCell>
                <TableCell>
                  <Link to="/styles/iconography">check-solid</Link>
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">Gray dark</Link>
                </TableCell>
                <TableCell>#5b616b</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Width</TableHeaderCell>
                <TableCell>
                  20px
                </TableCell>
                <TableCell>
                  N/A
                </TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Height</TableHeaderCell>
                <TableCell>
                  15px
                </TableCell>
                <TableCell>
                  N/A
                </TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
            </tbody>
          </Table>

          <h3>Elements: Icon (mobile)</h3>
          <Table caption="Non-interactive step indicator icon elements (on mobile) specifications">
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
                <TableHeaderCell>Icon (check)</TableHeaderCell>
                <TableCell>
                  <Link to="/styles/iconography">check-solid</Link>
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">Gray dark</Link>
                </TableCell>
                <TableCell>#5b616b</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Width</TableHeaderCell>
                <TableCell>
                  13px
                </TableCell>
                <TableCell>
                  N/A
                </TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Height</TableHeaderCell>
                <TableCell>
                  10px
                </TableCell>
                <TableCell>
                  N/A
                </TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
            </tbody>
          </Table>
        </DocsSection>
 
        <DocsSection title="Usability guidance">
          <List>
            <ListItem>
              <b>Set proper expectations.</b> Give the user an estimation of 
              how much time a process will take before they start that process. 
              Always assume that a process will take longer.
            </ListItem>

            <ListItem>
              <b>Keep it simple.</b> Use simple label verbiage and easy-to-digest 
              graphical elements. 
            </ListItem>

            <ListItem>
              <b>Label each step of the step indicator for desktop.</b> On mobile, 
              only display the label of the current step and which step the user is 
              on (i.e., Step 1 of 6: About you). 
            </ListItem>

            <ListItem>
              <b>Emphasize direction.</b> Show users the logical direction of the 
              flow, from left to right (the same direction that people read). 
            </ListItem>

            <ListItem>
              <b>Indicate where a user is in the process.</b> Always inform users 
              of which step in the process they are currently on. This is best 
              accomplished by using a different color, but can also be indicated 
              by changing font size, bolding or italicizing, and changing the shape 
              of the icon.
            </ListItem>

            <ListItem>
              <b>Indicate which steps are completed.</b> As users progress through 
              the process, change the icon for each completed step. The most common 
              icon is a simple check mark. This informs users that all the steps 
              prior to the one they are currently on have been completed properly.
            </ListItem>
          </List>
        </DocsSection>
        
        <DocsSection title="Accessibility guidance">
          <List>
            <ListItem>
              The interactive step indicator follows two of the four possible
              approaches outlined by W3C Web Accessible Initiative (WAI) for
              creating <ExternalLink href="https://www.w3.org/WAI/tutorials/forms/multi-page/">accessible multi-step forms</ExternalLink>.
              <List>
                <ListItem>
                  <ExternalLink href="https://www.w3.org/WAI/tutorials/forms/multi-page/#using-the-main-heading">Approach 2</ExternalLink> 
                  {" "}is used for mobile browsers. It uses the main heading to inform users of which step they are in the process.
                </ListItem>
                <ListItem>
                  <ExternalLink href="https://www.w3.org/WAI/tutorials/forms/multi-page/#using-step-by-step-indicator">Approach 4</ExternalLink> 
                  {" "}is used for desktop browsers. It uses an ordered list with a
                  list item for every step. Visually hidden text is used to
                  indicate the current and completed steps.
                </ListItem>
              </List>
            </ListItem>
         
            <ListItem>
                If a form has a known number of steps to be completed, a step indicator 
                can help users orient themselves.
            </ListItem>
          	<ListItem>
                Using the main heading to inform users is a good way to provide the same 
                information for people scanning the page visually, as the main heading usually is 
                prominent in the document. It is recommended to place the main heading below the 
                step indicator.
            </ListItem>
	        <ListItem>
                An ordered list with a list item for every step is a standard technique. 
            </ListItem>
            <ListItem>
                Labels should be clear, concise and include the state of each step. Visually 
                hidden text is used to indicate the current and completed steps. 
            </ListItem>
            <ListItem>
                Don't use a <code>{"<nav>"}</code> element for non-interactive step indicator. Use 
                "sr-only" text on the "completed" and "not completed" items. 
            </ListItem>
            <ListItem>
                On small screens, consider hiding step labels and showing only step indicators.
            </ListItem>
          </List>

          <h3>Applicable standards</h3>
          <h4 className={styles.applicableStandardsh4}>Web Content Accessibility Guidelines (WCAG) 2.0/2.1</h4>
          <List>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships">
                1.3.1 Info and Relationships
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&showtechniques=143&currentsidebar=%23col_overview#use-of-color">
                1.4.1 Use of Color</ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&currentsidebar=%23col_overview#contrast-minimum">
                1.4.3. Contrast Minimum
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&showtechniques=143&currentsidebar=%23col_overview#non-text-contrast">
                1.4.11 Non-text Contrast
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#keyboard">
                2.1.1 Keyboard
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&showtechniques=143&currentsidebar=%23col_overview#no-keyboard-trap">
                2.1.2 No Keyboard Trap
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&showtechniques=143&currentsidebar=%23col_overview#focus-order">
                2.4.3 Focus Order
              </ExternalLink>
            </ListItem>

            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&currentsidebar=%23col_overview#link-purpose-in-context">
                2.4.4 Link Purpose (In Context)
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#headings-and-labels">
                2.4.6 Headings and Labels
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&currentsidebar=%23col_overview#focus-visible">
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
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&currentsidebar=%23col_overview#labels-or-instructions">
                3.3.2 Labels or Instructions
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&currentsidebar=%23col_overview#name-role-value">
                4.1.2 Name, Role, Value
              </ExternalLink>
            </ListItem>
          </List>
        </DocsSection>
      </DocsPage>
    </div>
  );
}
