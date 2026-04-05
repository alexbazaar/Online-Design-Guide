import React from "react";
import Helmet from "react-helmet";
import heredoc from "../utils/heredocument";
import { EmbedStyles } from "../../../ols-ui/src/helpers/utilities.js";

import { DocsPage, DocsSection, DocsCode } from "../../../ols-ui/src/components/DocsFoundations";

import Table, { TableRow, TableHeaderCell, TableCell } from "../../../ols-ui/src/components/Tables";

import Panel from "../../../ols-ui/src/components/Panel";
import TabView, { Tab } from "../../../ols-ui/src/components/TabView";

import { FlexRow, FlexCol } from "../../../ols-ui/src/components/FlexGrid";
import { OutlinedButton, FilledButton } from "../../../ols-ui/src/components/Buttons";
import Link, { ExternalLink } from "../../../ols-ui/src/components/Links";
import List, { ListItem } from "../../../ols-ui/src/components/List";
import ButtonIconFilledDesktop from "../assets/images/spacing-specs/General_Elements_Button_Icon_Filled_Desktop.png";
import ButtonIconFilledMobile from "../assets/images/spacing-specs/General_Elements_Button_Icon_Filled_Mobile.png";
import ButtonWithoutIconFilledDesktop from "../assets/images/spacing-specs/General_Elements_Button_Without_Icon_Filled_Desktop.png";
import ButtonWithoutIconFilledMobile from "../assets/images/spacing-specs/General_Elements_Button_Without_Icon_Filled_Mobile.png";
import styles from "../styles/Docs.scss";
import typographyStyles from "../styles/Typography.scss";

import appStyles from "../styles/App.scss";

/**
 * *****************************************************************************
 * Content for Buttons.
 *
 * @returns {node} node
 * *****************************************************************************
 */
function ButtonsPage() {
  return (
    <div>
      <Helmet title="Button" />
      <DocsPage
        className="docs-styles"
        title="Button"
        subtitle="Buttons are an interactive graphical control element that triggers an event or action."
        emphasisTag={[ 'IRAP APPROVED', 'USER TESTED' ]}
      >
        <DocsSection>
          <TabView id="preview-tabs">
            <Tab label="Preview">
              <Panel>
                <div data-component="ButtonPreviewTab">
                  <FlexRow className={styles.colButtonRows}>
                    <FlexCol>
                      <p>Default</p>
                      <OutlinedButton wide aria-label="Default outline">
                        Default outline
                      </OutlinedButton>
                      <OutlinedButton
                        wide
                        aria-label="Default outline icon"
                        icon="externalLink"
                      >
                        Default icon
                      </OutlinedButton>
                      <FilledButton wide aria-label="Default filled">
                        Default filled
                      </FilledButton>
                      <FilledButton
                        wide
                        aria-label="Default filled icon"
                        icon="externalLink"
                      >
                        Default icon
                      </FilledButton>
                    </FlexCol>
                    <FlexCol>
                      <p>Hover</p>
                      <OutlinedButton wide aria-label="Hover outline" hover>
                        Hover outline
                      </OutlinedButton>
                      <OutlinedButton
                        wide
                        aria-label="Hover outline icon"
                        hover
                        icon="externalLink"
                      >
                        Hover icon
                      </OutlinedButton>
                      <FilledButton wide aria-label="Hover filled" hover>
                        Hover filled
                      </FilledButton>
                      <FilledButton
                        wide
                        aria-label="Hover filled icon"
                        hover
                        icon="externalLink"
                      >
                        Hover icon
                      </FilledButton>
                    </FlexCol>
                    <FlexCol>
                      <p>Active</p>
                      <OutlinedButton wide aria-label="Active outline" active>
                        Active outline
                      </OutlinedButton>
                      <OutlinedButton
                        wide
                        aria-label="Active outline icon"
                        active
                        icon="externalLink"
                      >
                        Active icon
                      </OutlinedButton>
                      <FilledButton wide aria-label="Active filled" active>
                        Active filled
                      </FilledButton>
                      <FilledButton
                        wide
                        aria-label="Active filled icon"
                        active
                        icon="externalLink"
                      >
                        Active icon
                      </FilledButton>
                    </FlexCol>
                    <FlexCol>
                      <p>Disabled</p>
                      <OutlinedButton
                        wide
                        aria-label="Disabled outline"
                        disabled
                        className={styles.safariButtonSpacing}
                      >
                        Disabled outline
                      </OutlinedButton>
                      <OutlinedButton
                        wide
                        aria-label="Disabled outline icon"
                        disabled
                        icon="externalLink"
                      >
                        Disabled icon
                      </OutlinedButton>
                      <FilledButton wide aria-label="Disabled filled" disabled>
                        Disabled filled
                      </FilledButton>
                      <FilledButton
                        wide
                        aria-label="Disabled filled icon"
                        disabled
                        icon="externalLink"
                      >
                        Disabled icon
                      </FilledButton>
                    </FlexCol>
                  </FlexRow>
                </div>
              </Panel>
            </Tab>
            <Tab label="Spacing">
              <Panel maxheight="medium">
                <img
                  style={{ maxWidth: "280px", height: "auto" }}
                  src={ButtonIconFilledDesktop}
                  alt="This is a marked up graphic of the Buttons spacing"
                  className={appStyles.previewSpacingDesktopFluid}
                />
                <br className={appStyles.previewSpacingDesktopFluid} />
                <img
                  style={{ maxWidth: "280px", height: "auto" }}
                  src={ButtonWithoutIconFilledDesktop}
                  alt="This is a marked up graphic of the Buttons spacing"
                  className={appStyles.previewSpacingDesktopFluid}
                />
                <br className={appStyles.previewSpacingDesktopFluid} />
                <img
                  style={{ maxWidth: "280px", width: "100%", height: "auto" }}
                  src={ButtonIconFilledMobile}
                  alt="This is a marked up graphic of the Buttons spacing"
                  className={appStyles.previewSpacingMobileFluid}
                />
                <br className={appStyles.previewSpacingMobileFluid} />
                <img
                  style={{ maxWidth: "280px", width: "100%", height: "auto" }}
                  src={ButtonWithoutIconFilledMobile}
                  alt="This is a marked up graphic of the Buttons spacing"
                  className={appStyles.previewSpacingMobileFluid}
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
              <Panel className="panel-code" padding="none">
                <DocsCode language="xml">
                  {heredoc`
                  // Default
                  <OutlinedButton wide aria-label="Default outline">
                    Default outline
                  </OutlinedButton>
                  <OutlinedButton
                    wide
                    aria-label="Default outline icon"
                    icon="externalLink"
                  >
                    Default icon
                  </OutlinedButton>
                  <FilledButton wide aria-label="Default filled">
                    Default filled
                  </FilledButton>
                  <FilledButton
                    wide
                    aria-label="Default filled icon"
                    icon="externalLink"
                  >
                    Default icon
                  </FilledButton>
                
                  // Hover
                  <OutlinedButton wide aria-label="Hover outline" hover>
                    Hover outline
                  </OutlinedButton>
                  <OutlinedButton
                    wide
                    aria-label="Hover outline icon"
                    hover
                    icon="externalLink"
                  >
                    Hover icon
                  </OutlinedButton>
                  <FilledButton wide aria-label="Hover filled" hover>
                    Hover filled
                  </FilledButton>
                  <FilledButton
                    wide
                    aria-label="Hover filled icon"
                    hover
                    icon="externalLink"
                  >
                    Hover icon
                  </FilledButton>
                
                  // Active
                  <OutlinedButton wide aria-label="Active outline" active>
                    Active outline
                  </OutlinedButton>
                  <OutlinedButton
                    wide
                    aria-label="Active outline icon"
                    active
                    icon="externalLink"
                  >
                    Active icon
                  </OutlinedButton>
                  <FilledButton wide aria-label="Active filled" active>
                    Active filled
                  </FilledButton>
                  <FilledButton
                    wide
                    aria-label="Active filled icon"
                    active
                    icon="externalLink"
                  >
                    Active icon
                  </FilledButton>
                
                  // Disabled
                  <OutlinedButton
                    wide
                    aria-label="Disabled outline"
                    disabled
                    className={styles.safariButtonSpacing}
                  >
                    Disabled outline
                  </OutlinedButton>
                  <OutlinedButton
                    wide
                    aria-label="Disabled outline icon"
                    disabled
                    icon="externalLink"
                  >
                    Disabled icon
                  </OutlinedButton>
                  <FilledButton wide aria-label="Disabled filled" disabled>
                    Disabled filled
                  </FilledButton>
                  <FilledButton
                    wide
                    aria-label="Disabled filled icon"
                    disabled
                    icon="externalLink"
                  >
                    Disabled icon
                  </FilledButton>
                `}
                </DocsCode>
              </Panel>
            </Tab>
            <Tab label="CSS">
              <Panel className="panel-code" padding="none" maxheight="medium">
                <DocsCode language="scss">
                  {heredoc`
                  .iconOnly > span {
                    @include sr-only();
                  }
                  
                  .textButton {
                    @include button;
                    background-color: transparent;
                    border: none;
                    border-color: transparent;
                    border-radius: 0;
                    color: #00599c;
                  
                    span,
                    svg {
                      pointer-events: none;
                    }
                  
                    &.hover,
                    &:hover {
                      color: #002d62;
                    }
                  
                    &.active,
                    &:active {
                      color: #002346;
                    }
                  
                    // Ensures that the disabled style is consistent in different browsers
                    &:disabled,
                    &.hover:disabled,
                    &:hover:disabled {
                      background-color: transparent;
                      border-color: transparent;
                      color: #5b616b;
                    }
                  }
                  
                  
                  .filledButton {
                    @include button;
                    background-color: #00599c;
                    border: 2px solid #00599c;
                    color: #ffffff;
                    text-decoration: none;
                    text-transform: none;
                  
                    &.visited,
                    &:visited {
                      color: #ffffff;
                    }
                  
                    &.hover,
                    &:hover {
                      background-color: #002d62;
                      border-color: #002d62;
                      color: #ffffff;
                    }
                  
                    &.active,
                    &:active {
                      background-color: #002346;
                      border-color: #002346;
                      color: #ffffff;
                      border-width: 2px;
                    }
                    
                    // Ensures that the disabled style is consistent in different browsers
                    &:disabled,
                    &.hover:disabled,
                    &:hover:disabled {
                      background-color: #5b616b;
                      border: 2px solid #5b616b;
                      color: #ffffff;
                    }
                  }
                  
                  .outlinedButton {
                    @include button;
                    background-color: #ffffff;
                    color: #00599c;
                    text-decoration: none;
                    border: 2px solid #00599c;
                    text-transform: none;
                  
                    &.visited,
                    &:visited {
                      color: #00599c;
                    }
                  
                    &.hover,
                    &:hover {
                      color: #002d62;
                      border-color: #002d62;
                    }
                  
                    &.active,
                    &:active,
                    &.focus {
                      color: #002346;
                      background-color: transparent;
                      border-color: #002346;
                      border-width: 2px;
                    }
                  
                    // Ensures that the disabled style is consistent in different browsers
                    &:disabled,
                    &.hover:disabled,
                    &:hover:disabled {
                      background-color: #ffffff;
                      border: 2px solid #5b616b;
                      color: #5b616b;
                    }
                  }
                  
                  // Common styles
                  .filledButton,
                  .outlinedButton {
                    display: inline-block;
                    padding: 8px 16px;
                    margin-right: 16px;
                  
                    span {
                      vertical-align: baseline;
                      margin-right: 0;
                    }
                  
                    span,
                    svg {
                      pointer-events: none;
                      position: relative;
                    }
                  
                    [data-component="icon-wrapper"] {
                      display: inline-flex;
                      flex-direction: column;
                      justify-content: center;
                      height: 100%;
                    }
                    span + svg,
                    span + [data-component="icon-wrapper"] {
                      margin-left: 15px;
                    }
                  
                    &.leading-icon [data-component="icon-wrapper"] {
                      margin-right: 15px;
                    }
                    svg + span {
                      margin-left: 16px;
                    }
                  
                    svg {
                      position: relative;
                      top: 2px;
                      width: 14px;
                      height: 14px;
                    }
                  
                    &.externalLink {
                      svg {
                        top: 0;
                        height: 12px;
                        width: 7px;
                      }
                  
                      span + svg {
                        margin-left: 16px;
                      }
                    }
                  }
                  
                  .filledButton:focus {
                    color: #ffffff;
                  }
                  
                  // Custom focus outline for Buttons
                  .filledButton,
                  .outlinedButton {
                    position: relative;
                    &:focus:not(.focus-visible) {
                      outline: none;
                    }
                  }
                  .filledButton:focus:not(.focus-visible):before,
                  .outlinedButton:focus:not(.focus-visible):before {
                    box-sizing: border-box;
                    border: 3px solid #2491ff;
                    content: "";
                    display: block;
                    height: calc(100% + 18px);
                    width: calc(100% + 18px);
                    position: absolute;
                    top: -9px;
                    left: -9px;
                  }

                  a.filledButton[data-component="Button"] svg path,
                  a.filledButton[data-component="Button"]:visited svg path,
                  a.filledButton[data-component="Button"]:focus svg path,
                  a.filledButton[data-component="Button"]:hover svg path,
                  a.filledButton[data-component="Button"]:active,
                  a.filledButton[data-component="Button"]:active svg path {
                    color: #ffffff;
                    fill: #ffffff;
                  }

                  a.outlinedButton[data-component="Button"] svg path,
                  a.outlinedButton[data-component="Button"]:visited svg path,
                  a.outlinedButton[data-component="Button"]:hover svg path,
                  a.outlinedButton[data-component="Button"]:active svg path {
                    color: #00599c;
                    fill: #00599c;
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
              <li>There are multiple buttons on this page that are identical in functionality but differ in design. They each have the same accessible name because their functionality is the same. A unique identifier was not assigned since they will be used by the developers to fit respective applications or websites.</li>
            </ul>
          </span>
        </DocsSection>

        <DocsSection title="When to use">
          <p>
            Use buttons to signal commands and actions like submitting a form.
            Buttons are most effective when highlighting an action you want a
            user to take inside of a user flow.
          </p>

          <h3>Button colors</h3>
          <List>
            <ListItem>
              Filled buttons — Color-filled button used for the principal
              action(s) you want to encourage the user to take.
            </ListItem>
            <ListItem>
            Outlined buttons — Button with the color removed used for "escape hatch" actions such as cancel, back, and close. Outlined buttons are also used for action(s) you want to downplay. For example, a print button should almost always be outlined since it is usually not the primary action on a page. 
            </ListItem>
          </List>

          <h3>Button sizes</h3>
          <List>
            <ListItem>Inline buttons (default sizing)</ListItem>
            <List>
              <ListItem>
                Align inline buttons to the left of the container when using
                multiple inline buttons. Outlined buttons should come before the
                filled button.
              </ListItem>
              <ListItem>
                Display inline buttons full width for mobile if the inline
                buttons wrap to a second line.
              </ListItem>
              <ListItem>
                Use inline buttons on medium, large, and extra-large
                breakpoints.
              </ListItem>
            </List>
          </List>

          <div style={{ padding: "16px 16px 0 16px", position: "relative", boxSizing: "border-box", border: "1px solid #d6d7d9", marginBottom: "16px", background: "#fff", fontSize: "16px", lineHeight: "24px" }}>
            <OutlinedButton aria-label="Inline Cancel" style={{ marginTop: "0", marginBottom: "16px" }}>Cancel</OutlinedButton>
            <FilledButton aria-label="Inline Submit" style={{ marginTop: "0", marginBottom: "16px" }}>
              Submit payment
            </FilledButton>
          </div>

          <List>
            <ListItem>Block buttons (full-width sizing)</ListItem>
            <List>
              <ListItem>Display block buttons in a vertical stack.</ListItem>
              <ListItem>
                Place outlined buttons above the filled button.
              </ListItem>
              <ListItem>
                Use block buttons on extra small and small breakpoints.
              </ListItem>
            </List>
          </List>

          <FlexRow>
            <FlexCol className={styles.blockButtonsContainer}>
              <Panel>
                <OutlinedButton block aria-label="Block Cancel" style={{ marginTop: "0" }}>
                  Cancel
                </OutlinedButton>
                <FilledButton block aria-label="Block Submit">
                  Submit payment
                </FilledButton>
              </Panel>
            </FlexCol>
          </FlexRow>
        </DocsSection>

        <DocsSection title="Specifications">
          <h3>Typography</h3>
          <Table caption="Buttons typography specifications">
            <thead>
              <TableRow>
                <TableHeaderCell scope="col">Content</TableHeaderCell>
                <TableHeaderCell scope="col">Reference</TableHeaderCell>
                <TableHeaderCell scope="col">Color name</TableHeaderCell>
                <TableHeaderCell scope="col">Hex</TableHeaderCell>
              </TableRow>
            </thead>
            <tbody>
              <TableRow>
                <TableHeaderCell>
                  Outlined button label (default)
                </TableHeaderCell>
                <TableCell>
                  <Link to="/styles/typography/#display-type">Body text</Link>
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">Blue</Link>
                </TableCell>
                <TableCell>#00599c</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Outlined button label (hover)</TableHeaderCell>
                <TableCell>
                  <Link to="/styles/typography/#display-type">Body text</Link>
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">Blue dark</Link>
                </TableCell>
                <TableCell>#002d62</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>
                  Outlined button label (active)
                </TableHeaderCell>
                <TableCell>
                  <Link to="/styles/typography/#display-type">Body text</Link>
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">Blue darkest</Link>
                </TableCell>
                <TableCell>#002346</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>
                  Outlined button label (disabled)
                </TableHeaderCell>
                <TableCell>
                  <Link to="/styles/typography/#display-type">Body text</Link>
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">Gray dark</Link>
                </TableCell>
                <TableCell>#5b616b</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Filled button label (default)</TableHeaderCell>
                <TableCell>
                  <Link to="/styles/typography/#display-type">Body text</Link>
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">White</Link>
                </TableCell>
                <TableCell>#ffffff</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Filled button label (hover)</TableHeaderCell>
                <TableCell>
                  <Link to="/styles/typography/#display-type">Body text</Link>
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">White</Link>
                </TableCell>
                <TableCell>#ffffff</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Filled button label (active)</TableHeaderCell>
                <TableCell>
                  <Link to="/styles/typography/#display-type">Body text</Link>
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">White</Link>
                </TableCell>
                <TableCell>#ffffff</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>
                  Filled button label (disabled)
                </TableHeaderCell>
                <TableCell>
                  <Link to="/styles/typography/#display-type">Body text</Link>
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">White</Link>
                </TableCell>
                <TableCell>#ffffff</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Line-height</TableHeaderCell>
                <TableCell>24px</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
            </tbody>
          </Table>

          <h3>Button elements</h3>
          <Table caption="Buttons elements specifications">
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
                  Outlined button border (default)
                </TableHeaderCell>
                <TableCell>2px solid</TableCell>
                <TableCell>
                  <Link to="/styles/colors">Blue</Link>
                </TableCell>
                <TableCell>#00599c</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>
                  Outlined button border (hover)
                </TableHeaderCell>
                <TableCell>2px solid</TableCell>
                <TableCell>
                  <Link to="/styles/colors">Blue dark</Link>
                </TableCell>
                <TableCell>#002d62</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>
                  Outlined button border (active)
                </TableHeaderCell>
                <TableCell>2px solid</TableCell>
                <TableCell>
                  <Link to="/styles/colors">
                    Blue darkest
                  </Link>
                </TableCell>
                <TableCell>#002346</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>
                  Outlined button border (disabled)
                </TableHeaderCell>
                <TableCell>2px solid</TableCell>
                <TableCell>
                  <Link to="/styles/colors">Gray dark</Link>
                </TableCell>
                <TableCell>#5b616b</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>
                  Filled button border (default)
                </TableHeaderCell>
                <TableCell>2px solid</TableCell>
                <TableCell>
                  <Link to="/styles/colors">Blue</Link>
                </TableCell>
                <TableCell>#00599c</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Filled button border (hover)</TableHeaderCell>
                <TableCell>2px solid</TableCell>
                <TableCell>
                  <Link to="/styles/colors">Blue dark</Link>
                </TableCell>
                <TableCell>#002d62</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Filled Button Border (active)</TableHeaderCell>
                <TableCell>2px solid</TableCell>
                <TableCell>
                  <Link to="/styles/colors">
                    Blue darkest
                  </Link>
                </TableCell>
                <TableCell>#002346</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>
                  Filled button border (disabled)
                </TableHeaderCell>
                <TableCell>2px solid</TableCell>
                <TableCell>
                  <Link to="/styles/colors">Gray dark</Link>
                </TableCell>
                <TableCell>#5b616b</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Height</TableHeaderCell>
                <TableCell>44px</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Width (block)</TableHeaderCell>
                <TableCell>100%</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Padding</TableHeaderCell>
                <TableCell>8px 16px</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Border radius</TableHeaderCell>
                <TableCell>4px</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
            </tbody>
          </Table>

          <h3>Icon elements</h3>
          <Table caption="Buttons icon elements specifications">
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
                <TableHeaderCell>Height</TableHeaderCell>
                <TableCell>12px</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Width</TableHeaderCell>
                <TableCell>7px</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>
                  Outlined button icon (default)
                </TableHeaderCell>
                <TableCell>
                  <Link to="/styles/iconography">chevron-right-solid</Link>
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">Blue</Link>
                </TableCell>
                <TableCell>#00599c</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Outlined button icon (hover)</TableHeaderCell>
                <TableCell>
                  <Link to="/styles/iconography">chevron-right-solid</Link>
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">Blue dark</Link>
                </TableCell>
                <TableCell>#002d62</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Outlined button icon (active)</TableHeaderCell>
                <TableCell>
                  <Link to="/styles/iconography">chevron-right-solid</Link>
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">
                    Blue darkest
                  </Link>
                </TableCell>
                <TableCell>#002346</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>
                  Outlined button icon (disabled)
                </TableHeaderCell>
                <TableCell>
                  <Link to="/styles/iconography">chevron-right-solid</Link>
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">Gray dark</Link>
                </TableCell>
                <TableCell>#5b616b</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Filled button icon (default)</TableHeaderCell>
                <TableCell>
                  <Link to="/styles/iconography">chevron-right-solid</Link>
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">White</Link>
                </TableCell>
                <TableCell>#ffffff</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Filled button icon (hover)</TableHeaderCell>
                <TableCell>
                  <Link to="/styles/iconography">chevron-right-solid</Link>
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">White</Link>
                </TableCell>
                <TableCell>#ffffff</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Filled button icon (active)</TableHeaderCell>
                <TableCell>
                  <Link to="/styles/iconography">chevron-right-solid</Link>
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">White</Link>
                </TableCell>
                <TableCell>#ffffff</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Filled button icon (disabled)</TableHeaderCell>
                <TableCell>
                  <Link to="/styles/iconography">chevron-right-solid</Link>
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">White</Link>
                </TableCell>
                <TableCell>#ffffff</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Icon gutter (left)</TableHeaderCell>
                <TableCell>16px</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
            </tbody>
          </Table>

          <h3>Focus State</h3>
          <Table caption="Buttons focus state specifications">
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
              <TableRow>
                <TableHeaderCell>Padding</TableHeaderCell>
                <TableCell>4px</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>#ffffff</TableCell>
              </TableRow>
            </tbody>
          </Table>
        </DocsSection>

        <DocsSection title="Usability guidance">
          <h3>General rules</h3>
          <List>
            <ListItem>
              Consider adding an icon to increase the user's comprehension of a
              button.
            </ListItem>
            <List>
              <ListItem>
                In most cases, place icons to the left of the button text since
                English-speaking users read buttons from left to right.
                Exceptions include navigational button icons like arrows that
                can be placed either to the right or left of the button text.
              </ListItem>
            </List>
            <ListItem>
              Avoid using too many buttons on a single page to avoid cognitive
              overload.
            </ListItem>
            <ListItem>
              Use disabled buttons with caution as they can cause usability
              issues if the user doesn't know why the button is disabled.
              Consider adding a help tip to explain why a button is disabled.
            </ListItem>
            <ListItem>
              Place the secondary action button on the left and the primary
              action button on the right.
            </ListItem>
            <ListItem>
              Place emphasis on the primary action for multiple buttons. This
              can be accomplished by adding visual weight via filled or outlined
              buttons.
            </ListItem>
            <ListItem>
              Use concise and consistent button text to clearly explain what the
              button will do, once selected. Use the same command words and
              sentence case throughout the application or website.
            </ListItem>
          </List>

          <h3>When to consider something else</h3>
          <List>
            <ListItem>
              Use <Link to="/components/link">links</Link> when taking the
              user out of a particular user flow or to direct the user to
              external sites. Links can be used to downplay certain secondary
              user actions or commands.
            </ListItem>
          </List>

          <h3>Button text</h3>
          <List>
            <ListItem>
              Use sentence case for button text for easy readability and
              friendly tone. Sentence case calls for capitalizing only the first
              letter of button text and any proper nouns.
            </ListItem>
            <ListItem>
              Keep call-to-actions (CTA) no longer than four words, when
              possible, to increase readability, comprehension, task completion
              and avoid impairing readability.
            </ListItem>
            <ListItem>
              Lead with a task-based action verb using a [verb] + [noun] or
              [verb] + [a] + [noun] structure to clarify what can be expected by
              selecting the button. Consider eliminating articles like "a",
              "an", and "the" to increase readability.
            </ListItem>
          </List>

          <h3>Buttons for mobile</h3>
          <List>
            <ListItem>
              Ensure that buttons are large enough to be easily tapped and far
              enough apart so that users don't accidently select the wrong
              object.
            </ListItem>
            <ListItem>
              For two button use cases, buttons can be placed either
              horizontally side-by-side or vertically in a column.
            </ListItem>
            <ListItem>
              For three or more buttons, buttons should be stacked vertically or
              using a combination of vertical and horizontal stacking with two
              buttons on one line and one button on another. Order buttons in a
              logical sequence.
            </ListItem>
          </List>
        </DocsSection>

        <DocsSection title="Accessibility guidance">
          <p>
            Button's role needs to be set to a <b>button</b>.
          </p>
          <List>
            <ListItem>
              Buttons should be marked up using the native HTML elements <code>&lt;button&gt;</code> or <code>&lt;input type="button"&gt;</code>. If an <code>&lt;a&gt;</code> element is used, in order for the assistive technology to interpret it as a button, you must include the <code>role="button"</code> attribute.
            </ListItem>
            <ListItem>
              Use standard markup. Avoid using <code>&lt;div&gt;</code> or <code>&lt;img&gt;</code> tags to create buttons. Screen readers
              don't automatically know either is a usable button.
            </ListItem>
          </List>

          <p>
            The button needs to have an accessible name. Examples of good button
            labels (accessible names):{" "}
            <b>Add blog post, Send message, Save draft.</b>
          </p>
          <List>
            <ListItem>
              If a description of the button's function is present, the button
              element has <code>aria-describedby="ID"</code> of the element
              containing the description.
            </ListItem>
            <ListItem>
              When the action associated with a button is unavailable, the
              button has <code>aria-disabled="true"</code>.
            </ListItem>
            <ListItem>
              Label text has high contrast with the button color.
            </ListItem>
          </List>

          <p>
            Buttons should display a visible focus state when users tab to them.
            When the button has focus:
          </p>
          <List>
            <ListItem>Space/Enter activates the button.</ListItem>
          </List>

          <p>
            The page provides notification of each change in content that is the
            result of interaction with a button. For example, when a user
            activates a button that results in web page content changes, any one
            of the following is true:
          </p>
          <List>
            <ListItem>
              The button provides adequate notification and description of the
              change.
            </ListItem>
            <ListItem>
              The page provides notification of the change via a
              keyboard-accessible dialog.
            </ListItem>
            <ListItem>
              The page moves focus to the content change, and the content itself
              provides adequate notification and description of the change.
            </ListItem>
            <ListItem>
              The content that changed is contained in an ARIA live region.
            </ListItem>
          </List>

          <p>
            The size of the button target for pointer inputs is at least 44 by
            44 CSS pixels.
          </p>

          <h3>Applicable standards</h3>

          <h4 className={appStyles.applicableStandardsh4}>Web Content Accessibility Guidelines (WCAG) 2.0/2.1</h4>

          <List>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&currentsidebar=%23col_overview#non-text-content">
                1.1.1 Non-text Content
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&currentsidebar=%23col_overview#info-and-relationships">
                1.3.1 Info and Relationships
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&currentsidebar=%23col_overview#non-text-contrast">
                1.4.11 Non-text Contrast
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&currentsidebar=%23col_overview#content-on-hover-or-focus">
                1.4.13 Content on Hover or Focus
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0&showtechniques=143#contrast-minimum">
                1.4.3 Contrast Minimum
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&currentsidebar=%23col_overview#keyboard">
                2.1.1 Keyboard
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&currentsidebar=%23col_overview#character-key-shortcuts">
                2.1.4 Character Key Shortcuts
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&currentsidebar=%23col_overview#link-purpose-in-context">
                2.4.4 Link Purpose (In Context)
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

export default EmbedStyles(styles, typographyStyles, appStyles)(ButtonsPage);
