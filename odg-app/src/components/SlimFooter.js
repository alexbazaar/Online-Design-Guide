import React from "react";
import Helmet from "react-helmet";
import heredoc from "../utils/heredocument";

import { DocsPage, DocsSection, DocsCode } from "../../../ols-ui/src/components/DocsFoundations";
import TabView, { Tab } from "../../../ols-ui/src/components/TabView";

import SlimFooterSpacingDesktop from "../assets/images/spacing-specs/SlimFooter_Spacing_Desktop.png";
import SlimFooterMobile from "../assets/images/spacing-specs/SlimFooter_Mobile.png";
import SlimFooterSpacingMobile from "../assets/images/spacing-specs/SlimFooter_Spacing_Mobile.png";
import SlimFooterDesktop from "../assets/images/spacing-specs/SlimFooter_Desktop.png";

import appStyles from "../styles/App.scss";

import Panel from "../../../ols-ui/src/components/Panel";
import Table, { TableRow, TableHeaderCell, TableCell } from "../../../ols-ui/src/components/Tables";
import Link, { ExternalLink } from "../../../ols-ui/src/components/Links";
import List, { ListItem } from "../../../ols-ui/src/components/List";
import SectionAlert from "../../../ols-ui/src/components/Alerts";

import { OutlinedButton, FilledButton } from "../../../ols-ui/src/components/Buttons";

// import Footer, { FooterTop, FooterTopGroup, FooterTopGroupItem } from "../../../ols-ui/src/components/Footer";

/**
 * *****************************************************************************
 * Content for Slim Footer.
 *
 * @returns {[node]} The rendered DOM node
 * *****************************************************************************
 */
export default function SlimFooter() {
  return (
    <div>
      <Helmet title="Slim footer" />
      <DocsPage
        className="docs-styles"
        title="Slim footer"
        subtitle="A slim footer is the smaller-sized design of the bottom-most element of a website."
        emphasisTag={[ 'IRAP APPROVED' ]}
      >
        <DocsSection>
          <TabView id="preview-tabs">
            <Tab label="Preview">
              <Panel padding="large" maxheight="medium">
                <span className={appStyles["sr-only"]}>Preview Tab</span>
                <img
                  style={{ maxWidth: "100%", height: "auto" }}
                  src={SlimFooterDesktop}
                  alt="This is a marked up graphic of the Slim Footer"
                  className={appStyles.previewSpacingDesktopFluid}
                />
                <br className={appStyles.previewSpacingDesktopFluid} />
                <img
                  style={{ width: "100%", maxWidth: "280px", height: "auto" }}
                  src={SlimFooterMobile}
                  alt="This is a marked up graphic of the Slim Footer"
                  className={appStyles.previewSpacingMobileFluid}
                />
                <br className={appStyles.previewSpacingMobileFluid} />
              </Panel>
            </Tab>
            <Tab label="Spacing">
              <Panel maxheight="medium">
                <img
                  style={{ maxWidth: "100%", height: "auto" }}
                  src={SlimFooterSpacingDesktop}
                  alt="This is a marked up graphic of the Slim Footer spacing"
                  className={appStyles.previewSpacingDesktopFluid}
                />
                <br className={appStyles.previewSpacingDesktopFluid} />
                <img
                  style={{ width: "100%", maxWidth: "280px", height: "auto" }}
                  src={SlimFooterSpacingMobile}
                  alt="This is a marked up graphic of the Slim Footer spacing"
                  className={appStyles.previewSpacingMobileFluid}
                />
                <br className={appStyles.previewSpacingMobileFluid} />

                <div>
                  <span
                    style={{
                      marginTop: "16px",
                      fontSize: "12px",
                      lineHeight: "16px",
                      display: "inline-block",
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
                    <SlimFooter />
                  `}
                </DocsCode>
              </Panel>
            </Tab>
            <Tab label="CSS">
              <Panel className="panel-code" padding="none" maxheight="small">
                <DocsCode language="scss">
                  {heredoc`
                  .footerContainer{
                    display: flex;
                    justify-content: left;
                    @include media-breakpoint-down(md){
                      padding-left: 20px;
                      padding-right: 20px;
                    }
                    @include media-breakpoint-up(md) {
                      justify-content: center ;
                    
                    }
                    & > [data-component="FlexRow"]{
                      margin-left: 0;
                      margin-right: 0;
                    }
                  }
                  
                  .footerContainer:first-child{
                    & > [data-component="FlexRow"]{
                      display: block;
                      width: 100%;
                    }
                  }
                  
                  .footer{
                    margin-top: auto;
                    color: #1b1b1b;
                    flex-shrink: 1;
                    border-top: none;
                    background-color: #f3f3f3;
                    z-index: 10;
                  
                   
                  }
                  
                  .logo {
                    width: 82.67px;
                    height: 28px;
                    fill: #ffffff;
                    vertical-align: middle;
                  }
                  
                  
                  .footerTopGroup{
                    @include media-breakpoint-up(md) {
                      padding-right: .75rem;
                      flex: 1 1;
                    }
                    @include media-breakpoint-up(lg){
                      padding-right: 1.5rem;
                    }
                  }
                  
                  .groupLabel{
                    @include heading4;
                    text-transform: uppercase;
                    margin-bottom: 0.75rem;
                    line-height: 1;
                    color: #1b1b1b;
                    text-transform: uppercase;
                    font-weight: 700;
                    display: inline-block;
                      
                    
                  }
                  
                  
                  .groupList{
                    margin-left: 0;
                    @include media-breakpoint-up(md) {
                      margin-left: 0;
                      display: block;
                    }
                  }
                  
                  .groupListItem{
                    color: #1b1b1b;
                    margin-bottom: 0.75rem;
                    outline: none;
                    &:first-child{
                      margin-top: 0;
                    }
                    &:last-child{
                      margin-bottom: 0;
                    }
                    a {
                      color: #1b1b1b;
                      text-decoration: inherit;
                      display: inline-block;
                      line-height: 1.5;
                      outline: none;
                      &:hover{
                        text-decoration: underline;
                        color: #1b1b1b;
                      }
                      &:visited{
                        color: #1b1b1b;
                      }
                    }
                    a:focus{
                      color: #1b1b1b;
                      position: relative;
                      display: inline-block;
                      line-height: 1.5;
                    }
                  
                    a:focus:before,
                    a:focus:not(.focus-visible):before {
                      box-sizing: border-box;
                      border: 3px solid #2491ff;
                      content: "";
                      display: block;
                      height: calc(100% + 8px);
                      width: calc(100% + 8px);
                      position: absolute;
                      top: -4px;
                      left: -4px;
                      outline: none;
                    }
                  
                    [data-component="ExternalLink"]{
                      &:visited{
                        color: #1b1b1b;
                      }
                    }
                    
                    
                  }
                  
                  
                  .menuGroup {
                    padding-bottom: 0.75rem;
                    padding-top: 1.5rem;
                    padding-left: 0;
                    padding-right: 0;
                    @include media-breakpoint-up(md){
                      display: flex;
                      flex-direction: column;
                      padding-top: 2.5rem;
                      padding-bottom: 1.5rem;
                      max-width: 970px;
                      padding-left: 20px;
                      padding-right: 20px; 
                    }
                    @include media-breakpoint-up(xl){
                      max-width: 1140px;
                    }
                  
                  } 
                  .menuGroupRow{
                      flex-direction: column;
                      margin-left: 0;
                      margin-right: 0;
                      margin-bottom: 2.5rem;
                      @include media-breakpoint-up(md) {
                        flex-direction: row;
                        margin-bottom: 5rem;
                      }
                  }
                  
                  .footerLinksContainer{
                    background-color: #1b1b1b;
                    color: #ffffff;
                    display: flex;
                    justify-content: center;
                  
                    [data-component="FlexContainer"]{
                      justify-content: center;
                  
                    }
                  }
                  
                  
                  .footerLinks{
                    flex-direction: column;
                    text-align: center;
                    align-items: center;
                    width: 100%;
                    padding: 1.5rem 0;
                    @include media-breakpoint-up(md){
                      flex-direction: row;
                    }
                    @include media-breakpoint-up(md){
                      max-width: 970px;
                      padding: 0 20px;
                      min-height: 48px;
                    }
                    @include media-breakpoint-up(xl){
                      max-width: 1140px;
                    }
                  
                  }
                  
                  
                  .footerLinksGroup{
                    text-align: center;
                    margin-bottom: 0;
                    margin-top: 0;
                    flex-grow: 1;
                    flex-direction: column;
                    max-width: none;
                    list-style: none;
                  
                    @include media-breakpoint-up(md) {
                      justify-content: flex-end;
                      display: flex;
                      align-items: center;
                      flex-direction: row;
                    }
                  }
                  
                  .footerLinksGroupItem{
                    margin-bottom: .75rem;
                    margin-top: 0;
                    height: 1.25rem;
                    &:not(:last-child){
                      border-right: none;
                      @include media-breakpoint-up(md){ 
                        
                      border-right: 1px solid #ffffff;
                  
                      }
                    }
                    &:last-child{
                      margin-bottom: 0;
                      @include media-breakpoint-up(md){
                        padding-right: 0rem;
                      }
                    }
                    @include media-breakpoint-up(md) {
                      margin: 0;
                      padding-left: 0.5rem;
                      padding-right: 0.5rem;
                      display: flex;
                      align-items: center;
                    }
                  
                  
                  }
                  
                  .footerLink{
                    display: inline-block;
                    color: #ffffff;
                    text-decoration: none;
                    &:visited{
                      color: #ffffff;
                    }
                    &:hover{ 
                      color: #ffffff;
                      text-decoration: underline;
                    }
                    &:focus{
                      color: #ffffff;
                    }
                    @include media-breakpoint-up(md) {
                      //padding-right: .5rem;
                      border-right-width: 1px;
                    }
                  }
                  
                  .footerLogo {
                    fill: #ffffff;
                    margin-left: auto;
                    margin-right: auto;
                    margin: 0;
                    height: 28px;
                    width: 82.67px;
                    display: block;
                  }
                  
                  /* IRS Logo Focus State */
                  [data-component="footerLogo"]{
                    outline: none;
                    margin: 0 0 .75rem 0 ;
                    @include media-breakpoint-up(md){
                      margin:0;
                    }
                  }
                  
                  [data-component="footerLogo"]:focus {
                    position: relative;
                  }
                  
                  [data-component="footerLogo"]:focus:before,
                  [data-component="footerLogo"]:focus:not(.focus-visible):before {
                    box-sizing: border-box;
                    border: 3px solid #2491ff;
                    content: "";
                    display: block;
                    height: calc(100% + 14px);
                    width: calc(100% + 14px);
                    position: absolute;
                    top: -7px;
                    left: -7px;
                    outline: none;
                  }
                  
                  // [data-component="footerLogo"]:focus {
                    //box-sizing: border-box;
                    //border: 3px solid #2491ff;
                    //padding: 4px;
                    //border-radius: 0;
                    //outline: 0;
                  // }
                  
                  
                  /* FOOTERTOP ACCORDION GROUP */
                  .MobileFooterGroup {
                    width: 100%;
                    margin-bottom: 1.25rem;
                  
                    &:last-child{
                      margin-bottom: 0;
                    }
                  
                    [data-component="Accordion"]{
                      border: none;
                      margin-bottom: 20px;
                      &:last-child{
                        margin-bottom: 0;
                      }
                    }
                  
                    [data-component="AccordionItem"] h4 {
                      line-height: $font-size-base * 1.5;
                    }
                  
                    [data-component="AccordionItemTrigger"]{
                      font-size: 16px;
                      font-weight: 700;
                      line-height: 1.25rem;
                      display: flex;
                      align-items: center;
                      padding: 0;
                      padding-left:4px;
                      @include media-breakpoint-up(md){
                        padding-left:44px;
                        @include heading4;
                      }
                    }
                  
                    [data-component="AccordionItemBody"]{
                      & > div {
                        padding-left: 30px;
                        padding-bottom:0;
                        }
                      & > div:first-child{
                        margin-top: 12px;
                      }
                    }
                  
                    [data-component="TriggerCollapseIcon"],
                    [data-component="TriggerExpandIcon"] {
                      width: $font-size-base;
                      height: $font-size-base;
                      display: inline-block;
                      position: relative;
                      left:0;
                      top:-1px;
                      margin-right: 8px;
                      font-size: 15px;
                      @include media-breakpoint-up(md){
                        top: -1px;
                      }
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
          <p>A footer should be used on all IRS pages.</p>
          <p>
            The slim footer is typically used on IRS.gov applications that 
            require authentication. It is comprised of one bar that contains 
            the IRS logo, privacy policy and accessibility links.
          </p>
          <FilledButton to="/slim-footer-demo">
            View slim footer demo
          </FilledButton>
        </DocsSection>

        <DocsSection title="Specifications">
          <h3>Typography</h3>
          <Table caption="Slim Footer Typography Specifications">
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
                <TableHeaderCell>Links (default)</TableHeaderCell>
                <TableCell>
                  <Link to="/styles/typography/#display-type">Body text</Link>
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">White</Link>
                </TableCell>
                <TableCell>
                  #ffffff
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Links (hover)</TableHeaderCell>
                <TableCell>
                  <Link to="/styles/typography/#display-type">Body text</Link>, underline
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

          <h3>Elements: Bottom bar (desktop)</h3>
          <Table caption="Slim Footer Elements: Bottom Bar (desktop) Specifications">
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
                  <Link to="/styles/colors">Gray darkest</Link>
                </TableCell>
                <TableCell>
                  #1b1b1b
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Height</TableHeaderCell>
                <TableCell>48px</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Text vertical align</TableHeaderCell>
                <TableCell>Center</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>
                  Footer links padding (left/right)
                </TableHeaderCell>
                <TableCell>8px</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
            </tbody>
          </Table>

          <h3>Elements: Bottom bar (mobile)</h3>
          <Table caption="Slim Footer Elements: Bottom Bar (mobile) Specifications">
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
                  <Link to="/styles/colors">Gray darkest</Link>
                </TableCell>
                <TableCell>#1b1b1b</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Padding (top/bottom)</TableHeaderCell>
                <TableCell>24px</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Text align</TableHeaderCell>
                <TableCell>Center</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Text vertical align</TableHeaderCell>
                <TableCell>Center</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
            </tbody>
          </Table>

          <h3>Elements: Icons (desktop & mobile)</h3>
          <Table caption="Slim Footer Elements: Icons (desktop & mobile) Specifications">
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
                <TableHeaderCell>Icon (IRS logo)</TableHeaderCell>
                <TableCell><Link to="/styles/iconography">irs-logo</Link></TableCell>
                <TableCell>
                  <Link to="/styles/colors">White</Link>
                </TableCell>
                <TableCell>#ffffff</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Icon size (IRS logo)</TableHeaderCell>
                <TableCell>82.67px x 28px</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
            </tbody>
          </Table>

          <h3>Focus state</h3>
          <Table caption="Slim footer focus state specifications">
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
                <TableHeaderCell>Padding (logo)</TableHeaderCell>
                <TableCell>4px</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
            </tbody>
          </Table>
        </DocsSection>

        <DocsSection title="Usability guidance">
          <List>
            <ListItem>
              Footers are always located full width, across the bottom of the
              webpage just below the final piece of content on the page.
            </ListItem>
            <ListItem>
              The slim footer should only include the IRS logo, privacy policy and
              accessibility links.
            </ListItem>
            <ListItem>
              The IRS logo should link the user to the IRS.gov homepage.
            </ListItem>
          </List>
        </DocsSection>

        <DocsSection title="Accessibility guidance">
          <List>
            <ListItem>
              <strong>Footer area</strong> has a landmark <code>role="contentinfo"</code>.
            </ListItem>
            <ListItem>
              The footer navigation provided on each page is consistent in that
              the navigational mechanisms are consistently located on every page
              across the website.
            </ListItem>
            <ListItem>
              The footer navigational elements that repeat across a website are in
              the same relative order (sequence) from page to page within a
              website.
            </ListItem>
            <ListItem>
              The user can access footer navigational elements with a keyboard,
              voice dictation software and screen readers.
            </ListItem>
            <ListItem>
              The footer navigational elements indicate visible focus.
            </ListItem>
            <ListItem>
              If headings are used in the footer they should be programmatically
              determined.
            </ListItem>
            <ListItem>
              Consider making the headings behave like an accordion on small size
              devices:
              <List>
                <ListItem>
                  The collapsed/expanded heading states need to be
                  programmatically determined.
                </ListItem>
                <ListItem>
                  When focus is on the accordion heading for a collapsed panel, &nbsp;<strong>Enter/Space bar</strong> expand the associated panel.
                </ListItem>
                <ListItem>
                  When focus is on the accordion heading for an expanded panel, &nbsp;<strong>Enter/Space bar</strong> collapse the panel if the
                  implementation supports collapsing.
                </ListItem>
              </List>
            </ListItem>
            <ListItem>
              Each language listed under <strong>Other Languages</strong> can be
              programmatically determined via the <code>lang</code> attribute.
            </ListItem>
          </List>
          <h3>Links</h3>
          <List>
            <ListItem>All links have a meaningful link text.</ListItem>
            <ListItem>All links are tab-focusable.</ListItem>
            <ListItem>Focus is visible.</ListItem>
            <ListItem>All links are AT-focusable.</ListItem>
            <ListItem>
              All links are selectable by all the means (using the mouse, using
              the enter or spacebar keys, or using an AT select method).
            </ListItem>
          </List>
          <h3>Applicable standards</h3>
          <h4 className={appStyles.applicableStandardsh4}>Web Content Accessibility Guidelines (WCAG) 2.0/2.1</h4>
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
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&currentsidebar=%23col_overview#contrast-minimum">
                1.4.3 Contrast Minimum
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&currentsidebar=%23col_overview&levels=aaa#reflow">
                1.4.10 Reflow
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&currentsidebar=%23col_overview&levels=aaa#text-spacing">
                1.4.12 Text Spacing
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
                2.4.1 Bypass Blocks
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&showtechniques=143&currentsidebar=%23col_overview#focus-order">
                2.4.3 Focus Order
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&currentsidebar=%23col_overview#link-purpose-in-context">
                2.4.4 Link Purpose
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
          <h4 className={appStyles.applicableStandardsh4}>WAI-ARIA Authoring Practices 1.1</h4>
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
