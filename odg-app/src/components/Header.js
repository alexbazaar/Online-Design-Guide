import React, { Fragment } from "react";
import Helmet from "react-helmet";
import heredoc from "../utils/heredocument";

import { DocsPage, DocsSection, DocsCode } from "../../../ols-ui/src/components/DocsFoundations";

import Table, { TableRow, TableHeaderCell, TableCell } from "../../../ols-ui/src/components/Tables";

import List, { ListItem } from "../../../ols-ui/src/components/List";

import Link, { ExternalLink } from "../../../ols-ui/src/components/Links";
import Panel from "../../../ols-ui/src/components/Panel";
import TabView, { Tab } from "../../../ols-ui/src/components/TabView";
import { FilledButton } from "../../../ols-ui/src/components/Buttons";

import SectionAlert from "../../../ols-ui/src/components/Alerts";

import IRSHeader from "../assets/images/IRSHeader.png";
import IRSHeaderMobile from "../assets/images/IRSHeaderMobile.png";

import styles from "../styles/App.scss";

/**
 * *****************************************************************************
 * Content for Header.
 *
 * @returns {[node]} The rendered DOM node
 * *****************************************************************************
 */
export default function Header() {
  return (
    <div>
      <Helmet title="Header" />
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
        title="Header"
        subtitle="A header is the top-most element of a website."
      >
        <DocsSection>
          <TabView id="preview-tabs">
            <Tab label="Preview">
              <Panel padding="none" mexheight="medium">
                <span className={styles["sr-only"]}>Preview Tab</span>
                <div className="previewHeaderDesktopFluid">
                  <img src={IRSHeader} alt="IRS Header" aria-label="IRS Header" />
                </div>
                <div className="previewHeaderMobileFluid">
                  <img
                    src={IRSHeaderMobile}
                    alt="IRS Header"
                    aria-label="IRS Header"
                  />
                </div>
              </Panel>
            </Tab>
            <Tab label="Spacing">
              <Panel maxheight="medium">
                This would be a preview of the Spacing.
              </Panel>
            </Tab>
            <Tab label="HTML">
              <Panel className="panel-code" padding="none" maxheight="medium">
                <DocsCode language="xml">
                  {heredoc`
                    <IRSHeader
                      title="Online Design Guide"
                      showOfficialSiteBanner={false}
                      systemAlert={this.props.location.pathname.startsWith('/alerts-test') || this.props.location.pathname.startsWith('/system-alerts-test') ? <WarningAlert className={styles.testWarning} group="system" id="test-warning" role="alert">
                        {\`This is a sample warning message within a system alert. Typically, there would be a link to \`}<a href="/" style={{color: 'black'}}>more information about the alert.</a>
                      </WarningAlert> : null}
                      className={styles.testHeader}
                      navBar={
                        <Fragment>
                          <NavBarItem to="/getting-started" className={styles.navBarItemSpecial} activeClassName={styles.navBarActiveClass}>Getting started</NavBarItem>
                          <NavBarItem to="/about" className={styles.navBarItemSpecial} activeClassName={styles.navBarActiveClass}>About</NavBarItem>
                          <NavBarItem to="/styles" className={styles.navBarItemSpecial} activeClassName={styles.navBarActiveClass}>Styles</NavBarItem>
                          <NavBarItem to="/components" className={styles.navBarItemSpecial} activeClassName={styles.navBarActiveClass}>Components</NavBarItem>
                          <NavBarItem to="/releases" className={styles.navBarItemSpecial} activeClassName={styles.navBarActiveClass}>Releases</NavBarItem>
                          {this.props.location.pathname.startsWith('/badges-demo') && 
                          <NavBarItem to="/badges-demo/inbox" className={styles.navBarBadgeDemo} activeClassName={styles.navBarActiveClass}>Inbox <Badges value={inboxMessages.length} hiddenLabel="Unread Messages" /></NavBarItem>}
                        </Fragment>
                      }
                    />
                  `}
                </DocsCode>
              </Panel>
            </Tab>
            <Tab label="CSS">
              <Panel className="panel-code" padding="none" maxheight="medium">
                <DocsCode language="scss">
                  {heredoc`
                    // Header variables ---------- //
                    $svg-width-lg: 106.29px;
                    $svg-height-lg: 36px;
                    
                    $svg-width-sm: 83px;
                    $svg-height-sm: 28px;
                    
                    $svg-width-xs: 65px;
                    $svg-height-xs: 22px;
                    
                    $width-nav-sidebar: 220px;
                    $searchwidth: 30px;
                    $searchheight: $searchwidth;
                    
                    $margin-between-items: 20px;
                    $header-height: 77px;
                    
                    // helper class
                    .hiddenXS {
                      @include media-breakpoint-down(md) {
                        display: none !important;
                      }
                    }
                    .showXS {
                      @include media-breakpoint-up(sm) {
                        display: none !important;
                      }
                      @include media-breakpoint-down(md) {
                        display: block !important;
                      }
                    }
                    
                    .srOnly {
                      @include sr-only;
                    }
                    
                    
                    .outerWrapper {
                      flex-shrink: 0;
                    }
                    
                    // skipnav
                    .skipnav {
                      position: absolute;
                      z-index: 100;
                      top: -130px;
                      left: 0;
                      padding: $module-spacing;
                      background: transparent;
                      color: #00599c;
                      transition: all 0.2s ease-in-out;
                    
                      &:focus , &:active{
                        top: 0;
                        left: 0;
                        background: #ffffff;
                        transition: all 0.2s ease-in-out;
                      }
                    }
                    
                    // Header ------------- //
                    
                    .header {
                      position: relative;
                      padding: 20px 0;
                      background: #00599c;
                      color: #ffffff;
                      font-family: $font-sans;
                      @include media-breakpoint-down(md) {
                        height: $header-height;
                      }
                    }
                    
                    .logo {
                      position: relative;
                      top: 2px;
                      display: inline;
                      padding: 5px;
                      margin-left: -5px;
                      background: #00599c;
                      color: #ffffff !important;
                      font-size: 24px;
                      -webkit-font-smoothing: antialiased;
                      font-weight: $font-normal;
                      line-height: baselines(8);
                      text-decoration: none;
                      white-space: nowrap;
                    
                      &:hover {
                        color: #ffffff !important;
                      }
                    
                      &[data-component="Link"],
                      &[data-component="Link"]:hover,
                      &[data-component="Link"]:visited {
                        text-decoration: none;
                        color: #ffffff;
                        svg path {
                          color: #ffffff;
                          fill: #ffffff;
                        }
                      }
                    
                      @include media-breakpoint-down(md) {
                        padding: 0;
                        margin: 0;
                      }
                    
                      .logopng, svg {
                        width: $svg-width-lg;
                        height: $svg-height-lg;
                    
                        @include media-breakpoint-down(md) {
                          width: $svg-width-sm;
                          height: $svg-height-sm;
                        }
                    
                        @include media-breakpoint-down(xs) {
                          width: $svg-width-xs;
                          height: $svg-height-xs;
                        }
                      }
                    
                      .title {
                        padding: 0 0 0 $module-spacing;
                        border-left: solid 1px rgba(#ffffff, 0.3);
                        margin-left: $module-spacing + 2px;
                        font-size: 24px;
                        line-height: $svg-height-lg;
                        text-decoration: none;
                    
                        @include media-breakpoint-down(md) {
                          padding: 0 0 0 10px;
                          margin-left: 12px;
                          font-size: 22px;
                          line-height: $svg-height-sm;
                        }
                    
                        @include media-breakpoint-down(xs) {
                          padding: 0 0 0 8px;
                          margin-left: 10px;
                          font-size: 17px;
                          line-height: $svg-height-xs;
                        }
                      }
                    }
                    
                    
                    .irs-header-logo-wrapper {
                      display: inline-flex;
                      flex-direction: column;
                      justify-content: center;
                      align-items: center;
                      vertical-align: middle;
                      margin-top: -3px;
                    }
                    
                    .version {
                      @include tiny;
                      margin-left: 1em;
                      opacity: 0.7;
                    }
                    
                    .rightCol {
                      text-align: right;
                    
                      @include media-breakpoint-down(md) {
                        text-align: left;
                      }
                    
                      a,
                      a:visited,
                      a:hover {
                        color: #ffffff;
                        text-decoration: none;
                      }
                    }
                    
                    .hamburger {
                      @include button-unstyled;
                      position: absolute;
                      top: -28px;
                      right: 0;
                      display: none;
                      padding: 0 10px;
                      border: solid 1px rgba(#ffffff, 0.3);
                      border-radius: $border-radius;
                      cursor: pointer;
                      font-size: 15px;
                      line-height: 26px;
                    
                      @include media-breakpoint-down(md) {
                        display: inline-block;
                      }
                    
                      @include media-breakpoint-down(xs) {
                        top: -26px;
                        right: 10px;
                      }
                    }
                    
                    .hambugerIcon {
                      display: inline-block;
                      margin-right: 4px;
                      font-size: 14px;
                    
                      svg {
                        position: relative;
                        top: 2px;
                      }
                    }
                    
                    .nav {
                      font-size: $font-size-base;
                      line-height: 1; // Keeps lines between items from being too tall
                      text-align: inherit; // Left if small; right if big
                      display: inline-block;
                    }
                    
                    .navBody {
                      max-height: none;
                      padding: 0 !important;
                      margin: 0 !important;
                    
                      &.navBodyWithHamburger {
                        @include media-breakpoint-down(md) {
                          max-height: 0;
                          overflow-y: hidden;
                          transition-duration: 400ms;
                          transition-property: max-height;
                          transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
                        }
                      }
                    
                      ul {
                        @include unstyled-list;
                    
                        @include media-breakpoint-down(md) {
                          padding: 0;
                          line-height: $line-height-base;
                    
                          .mobileButtonGroup {
                            display: block;
                          }
                        }
                      }
                    
                      li {
                        font-weight: 300;
                        display: inline-block;
                    
                        & {
                          padding: 0 10px;
                          border-right: solid 1px #ffffff;
                        }
                    
                        &:first-of-type {
                          border-right: solid 1px #ffffff;
                    
                          @include media-breakpoint-down(md) {
                            padding-left: 0;
                          }
                        }
                    
                        & + [data-component="IRSHeaderNavGroup"],
                        &:last-of-type,
                        &:last-child {
                          border-right: none;
                          padding: 0 10px;
                        }
                    
                        & + [data-component="IRSHeaderNavGroup"] {
                          position: relative;
                        }
                    
                        a {
                          text-decoration: none;
                    
                          &, &:hover {
                            color: #ffffff;
                          }
                    
                          &:hover, &:focus {
                            text-decoration: underline;
                          }
                        }
                      }
                    }
                    
                    .headerNavButtonGroup {
                      display: inline-block;
                    
                      .navBarButtonItem {
                        border: none;
                        padding: 0;
                      }
                    
                      button {
                        @include button-unstyled;
                        border: none;
                        margin-right: $margin-between-items / 2;
                        background: #00599c;
                        color: #ffffff;
                        padding: 6px 8px;
                        border-radius: 3px;
                        text-transform: uppercase;
                        font-size: 12px;
                    
                        &:last-child {
                          margin-right: $margin-between-items / 2;
                        }
                    
                        &:hover, &:focus {
                          text-decoration: underline;
                          /* background-color: #002d62; */
                        }
                      }
                    
                      @include media-breakpoint-down(md) {
                        & {
                          margin-bottom: 20px;
                        }
                    
                        &,
                        button  {
                          display: block;
                        }
                        button {
                          margin-bottom: 10px;
                    
                          &:last-child {
                            margin-bottom: 0;
                          }
                        }
                      }
                    }
                    
                    // Conditional spacing if has both headerNav and Button Group
                    .nav + .headerNavButtonGroup {
                      margin-left: 20px;
                    
                      @include media-breakpoint-down(md) {
                        margin-left: 0;
                      }
                    }
                    
                    
                    //Navbar
                    .navBar {
                      &.visible {
                        @include media-breakpoint-down(md) {
                          display: block;
                          margin-bottom: $margin-between-items;
                          border-top: 1px solid transparentize(#1b1b1b, 0.875);
                          nav {
                            padding-top: $margin-between-items + 10px;
                          }
                    
                          [data-component="FlexContainer"], [data-component="FlexRow"], [data-component="FlexCol"] {
                            padding: 0;
                            margin: 0;
                            width: auto;
                          }
                    
                          [data-component="NavBarItem"] a {
                            /* font-weight: 400; */
                            padding: 20px;
                          }
                        }
                      }
                    
                      @include media-breakpoint-down(md) {
                        display: none;
                      }
                    }
                    
                    //Mobile
                    .IRSHeaderContent {
                      background: #00599c;
                      height: 100%;
                      min-height: $container-width-lg;
                    
                      [data-component="FlexContainer"], [data-component="FlexRow"], [data-component="FlexCol"] {
                        padding: 0;
                        margin: 0;
                      }
                      [data-component="FlexRow"]:first-of-type,
                      [data-component="NavBar"] + [data-component="FlexRow"] {
                        padding: 0 20px;
                      }
                    
                      [data-component="FlexRow"]:first-of-type  {
                        padding-bottom: $margin-between-items;
                        padding-top: $margin-between-items;
                        background: #002d62;
                      }
                    
                      nav [data-component="FlexRow"]:first-of-type{
                        padding: 0;
                        padding-top: $margin-between-items;
                        background: #002d62;
                      }
                    
                      [data-component="FlexRow"]:first-of-type > [data-component="FlexCol"]:first-of-type {
                        margin-bottom: $margin-between-items;
                      }
                    
                      [data-component="NavBar"] + [data-component="FlexRow"] > [data-component="FlexCol"] {
                        margin-bottom: $margin-between-items;
                    
                        &:last-child {
                          margin-bottom: 0;
                        }
                      }
                    }
                    
                    .headerInner {
                      @include media-breakpoint-down(md) {
                        display: none;
                      }
                    
                      &.visible {
                        @include media-breakpoint-down(md) {
                          display: block;
                        }
                      }
                    }
                    
                    .mobile {
                      right: -1000px;
                      visibility: hidden;
                    
                      &.visible-entered  {
                        right: 0;
                        visibility: visible;
                      }
                    }
                    
                    .overlay {
                      position: fixed;
                      z-index: 100;
                      top: 0;
                      right: 0;
                      bottom: 0;
                      right: 0;
                      width: 100%;
                      height: 100%;
                      background: rgba(53,54,55, 0.875);
                      transition: all 1s ease-in-out;
                      opacity: 0;
                    
                      .visible-entering  & {
                        opacity: 0;
                      }
                      .visible-entered  & {
                        opacity: 1;
                      }
                    
                      &[data-modal-open="false"] {
                        opacity: 0;
                        transition: all 1s ease-in-out;
                      }
                    
                    
                    }
                    
                    .IRSHeaderMobileContainer {
                      background: #002d62;
                      position: fixed;
                      z-index: 200;
                      top: 0;
                      right: 0;
                      width: 0;
                      max-width: $width-nav-sidebar * 2;
                      height: 100%;
                      overflow-y: auto;
                      -webkit-overflow-scrolling: touch;
                      transition: all 1s ease-in-out;
                    
                      @include media-breakpoint-down(xs) {
                        max-width: $width-nav-sidebar * 1.5;
                      }
                    
                      .visible-entering  & {
                        width: 0;
                      }
                      .visible-entered  &{
                        width: 100%;
                      }
                    
                      &[data-modal-open="false"] {
                        opacity: 0;
                        transition: all 1s ease-in-out;
                      }
                    
                      [data-component="NavBarItem"] {
                        display: block;
                      }
                    }
                    
                    .hasBanner .overlay,
                    .hasBanner .IRSHeaderMobileContainer {
                      top: 0;
                    }
                    
                    .closeWrapper {
                      @include media-breakpoint-up(lg) {
                        display: none;
                      }
                    }
                    
                    .mobileCloseButton {
                      @include button-unstyled;
                      background: #002d62;
                      display: block;
                      width: 100%;
                      padding: ($module-spacing * 1.5);
                      color: #ffffff;
                      cursor: pointer;
                      font-size: $font-size-base;
                      line-height: $line-height-base;
                      text-transform: uppercase;
                    
                    }
                    
                    
                    //MenuButton
                    .menuButton {
                      display: none;
                    
                      @include media-breakpoint-down(md) {
                        display: block;
                        position: absolute;
                        right: 0;
                        top: 0;
                      }
                    
                      .menuButtonInner {
                        margin-right: auto;
                        margin-left: auto;
                      }
                    
                      button {
                        @include button-unstyled;
                        background: #00599c;
                        border:none;
                        color: #ffffff;
                        line-height: 30px;
                        cursor: pointer;
                        font-size: $font-size-base;
                        text-transform: uppercase;
                        padding: 24px;
                        height: $header-height;
                    
                        &.active {
                          background: #002346;
                        }
                      }
                    
                    }
                    
                    
                    // SEARCH
                    .navSearch [data-component="SearchField"] button[type=submit] {
                      width: $searchwidth;
                      height: $searchheight;
                    }
                    
                    .navSearch [data-component="SearchField"] input[type=search] {
                      width: calc(100% - 30px);
                      height: 31px;
                    }
                    
                    .navSearchOnly {
                      min-width: 200px;
                    }
                    
                    // Restyles the Languages button's expandable IRSHeaderNavSubGroup list inside the IRSHeaderNavGroup
                    // NAV LINKS GROUP/DROPDOWN
                    .navBarGroup .trigger {
                      @include button-unstyled;
                      border: none;
                      background: transparent;
                      color: #ffffff;
                      font-weight: 300;
                      font-size: 16px;
                      font: inherit;
                      padding: 0;
                      text-align: right;
                    
                      &:focus {
                        text-decoration: underline;
                      }
                    }
                    
                    .navBarGroup .trigger .iconWrapper,
                    li.navBarGroup .trigger .iconWrapper {
                      display: inline-block;
                      vertical-align: middle;
                    }
                    .dropdownIcons {
                      width: 100%;
                      max-width: $font-size-base / 2;
                      padding-bottom: 3px;
                      margin-left: 5px;
                    }
                    
                    ul.subMenu {
                      z-index: 11;
                      background-color: #d6d7d9;
                      border: 1px solid #d6d7d9;
                      font-size: 14px;
                      position: absolute;
                      max-height: 20rem;
                      margin: 0;
                      padding-left: 0;
                    
                      &.closeSubMenu {
                        max-height: 0;
                        visibility: hidden;
                        opacity: 0;
                        transition: max-height .2s, visibility .2s .2s, opacity .2s .2s;
                      }
                    
                      &.openSubMenu {
                        visibility: visible;
                        opacity: 1;
                        overflow: hidden;
                        transition: max-height .2s, visibility 0s, opacity 0s;
                      }
                    
                    
                      li {
                        display: block;
                        padding: 0;
                        text-align: left;
                        border: none;
                        background: #ffffff;
                    
                        &:last-child {
                          padding: 0;
                        }
                    
                        .rightCol & a,
                        a {
                          color: #002346;
                          display: block;
                          padding: 10px;
                        }
                    
                        & a:hover, & a:active, & a:focus {
                          font-weight: normal;
                          background-color: #00599c;
                          color: #ffffff;
                        }
                      }
                    }
                    
                    // GLOBAL STYLES
                    :global {
                      [data-component="IRSHeader"] [data-component="SearchField"] {
                        margin: 0;
                      }
                      // stylelint-disable selector-no-qualifying-type
                      body.modal__open {
                        overflow: hidden;
                      }
                    }
                    
                    [data-component="IRSHeader"] > header > div:last-child [data-component="Link"] span {
                      font-weight: normal;
                      color: #ffffff;
                    }
                  `}
                </DocsCode>
              </Panel>
            </Tab>
          </TabView>
          <span className={styles.disclaimer}><strong>Note:</strong> Use browser inspect tool to view the component at various breakpoints.</span>
        </DocsSection>

        <DocsSection title="When to use">
          <p>
            Federal government websites should all include the "official
            government site" banner at the top of the header. Most sites require
            a header, so they should be used on every government site.
          </p>
        </DocsSection>

        <DocsSection title="Specifications">
          <h3>Typography</h3>
          <Table caption="Header typography specifications">
            <thead>
              <TableRow>
                <TableHeaderCell scope="col" width="35%">
                  Property
                </TableHeaderCell>
                <TableHeaderCell scope="col" width="20%">
                  Value
                </TableHeaderCell>
                <TableHeaderCell scope="col">Color name</TableHeaderCell>
                <TableHeaderCell scope="col">Hex</TableHeaderCell>
              </TableRow>
            </thead>
            <tbody>
              <TableRow>
                <TableHeaderCell>Main header logo</TableHeaderCell>
                <TableCell>
                  <Link to="/styles/typography/#display-type">Heading 24</Link>
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">White</Link>
                </TableCell>
                <TableCell>
                  #ffffff
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Top banner text</TableHeaderCell>
                <TableCell>
                  <Link to="/styles/typography/#display-type">Tiny text</Link>
                </TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
            </tbody>
          </Table>

          <h3>Top banner elements</h3>
          <Table caption="Top banner elements specifications">
            <thead>
              <TableRow>
                <TableHeaderCell scope="col" width="35%">
                  Property
                </TableHeaderCell>
                <TableHeaderCell scope="col" width="20%">
                  Value
                </TableHeaderCell>
                <TableHeaderCell scope="col">Color name</TableHeaderCell>
                <TableHeaderCell scope="col">Hex</TableHeaderCell>
              </TableRow>
            </thead>
            <tbody>
              <TableRow>
                <TableHeaderCell>Background</TableHeaderCell>
                <TableCell>N/A</TableCell>
                <TableCell>
                  <Link to="/styles/colors">Gray lighter</Link>
                </TableCell>
                <TableCell>
                  #f3f3f3
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Gutter (left/right)</TableHeaderCell>
                <TableCell>20px</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Gutter of text (top/bottom)</TableHeaderCell>
                <TableCell>4px</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Minimum width</TableHeaderCell>
                <TableCell>768px</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
            </tbody>
          </Table>

          <h3>Main header elements</h3>
          <Table caption="Main header elements specifications">
            <thead>
              <TableRow>
                <TableHeaderCell scope="col" width="35%">
                  Property
                </TableHeaderCell>
                <TableHeaderCell scope="col" width="20%">
                  Value
                </TableHeaderCell>
                <TableHeaderCell scope="col">Color name</TableHeaderCell>
                <TableHeaderCell scope="col">Hex</TableHeaderCell>
              </TableRow>
            </thead>
            <tbody>
              <TableRow>
                <TableHeaderCell>Background</TableHeaderCell>
                <TableCell>N/A</TableCell>
                <TableCell>
                  <Link to="/styles/colors">Blue</Link>
                </TableCell>
                <TableCell>
                  #00599c
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Gutter</TableHeaderCell>
                <TableCell>20px</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Minimum width</TableHeaderCell>
                <TableCell>768px</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
            </tbody>
          </Table>
        </DocsSection>

        <DocsSection title="Usability guidance">
          <List>
            <ListItem>
              Headers should include basic brand identity information, such as
              an agency logo or slogan.
            </ListItem>
            <ListItem>
              On mobile, hamburger menus should be placed in the upper-right
              corner of the header, as click rates for menus in the upper-left
              are generally low; users have become accustomed to seeing them in
              the upper-right.
            </ListItem>
          </List>
        </DocsSection>

        <DocsSection title="Accessibility guidance">
          <h3>Ensure skip navigation links are included</h3>

          <p>
            Skip navigation links allow users with screen readers to bypass long
            navigation lists. Make sure you include an <code>id</code> at the beginning of
            your main content and that it matches the skip navigation link.
          </p>

          <h3>
            Ensure tab focus for all top-level navigation items is included
          </h3>

          <p>
            Including tab focus for all top-level navigation items will allow
            keyboard-reliant users to easily navigate interactive items.
          </p>

          <h3>Ensure your horizontal navigation is keyboard compatible</h3>

          <p>
            Test to make sure users can use tab to navigate and space (or enter)
            to open pages.
          </p>

          <h3>
            Ensure drop downs are expandable on select or with keyboard
            navigation
          </h3>

          <p>
            Avoid using hover to expand dropdown lists. Hover is difficult for
            some users and won't work on touch screens.
          </p>

          <h3>Ensure the usage of semantic header and nav elements</h3>

          <p>
            Use semantic <code>&lt;header&gt;</code> and <code>&lt;nav&gt;</code> elements with <code>role="banner"</code> and <code>role="navigation"</code> respectively. <code>role="banner"</code> is your masthead. You can use multiple <code>&lt;nav&gt;</code> elements for groups of navigation links, but you should only use
            one <code>role="navigation"</code> for the main nav of a page.
          </p>

          <h3>Ensure lists are used for your navigation links</h3>

          <p>This enables screen readers to decipher header contents.</p>

          <h3>
            Ensure that all important website sections are listed as links in
            the horizontal navigation bar
          </h3>

          <p>
            Use descriptive, recognizable link labels. Don't label links with
            jargon or unfamiliar terms. Left-justify link labels to make them
            more easily scannable. Present links in priority order:
            higher-demand links should appear farther to the left, and
            lower-demand links should appear farther to the right.
          </p>

          <h3>
            Ensure the alternative text is included for the images used in the
            header
          </h3>

          <p>
            If you're using a logo that's an image rather than text, make sure
            you include alternative text for screen readers. If you're using a
            logo that's text, use an <code>&lt;em&gt;</code>, not an <code>&lt;h1&gt;</code>, unless it's the homepage.
          </p>

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
                1.4.1 Use of Color
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&showtechniques=143&currentsidebar=%23col_overview#contrast-minimum">
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
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&showtechniques=143&currentsidebar=%23col_overview#bypass-blocks">
                2.4.1. Bypass Blocks
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&showtechniques=143&currentsidebar=%23col_overview#focus-order">
                2.4.3 Focus Order
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#headings-and-labels">
                2.4.6 Headings and Labels
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#focus-visible">
                2.4.7 Focus Visible
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&showtechniques=143&currentsidebar=%23col_overview#language-of-parts">
                3.1.2 Language of Parts
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#name-role-value">
                4.1.2 Name, Role, Value
              </ExternalLink>
            </ListItem>
          </List>

          <h4 className={styles.applicableStandardsh4}>WAI-ARIA Authoring Practices 1.1</h4>

          <List>
            <ListItem>
              <ExternalLink href="https://www.w3.org/TR/WCAG20-TECHS">
                ARIA Techniques
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA11">
                Using ARIA landmarks to identify regions of a page
              </ExternalLink>
            </ListItem>
          </List>
        </DocsSection>
      </DocsPage>
    </div>
  );
}
