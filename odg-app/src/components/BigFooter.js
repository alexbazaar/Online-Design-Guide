import React from "react";
import Helmet from "react-helmet";
import heredoc from "../utils/heredocument";

import { DocsPage, DocsSection, DocsCode } from "../../../ols-ui/src/components/DocsFoundations";
import TabView, { Tab } from "../../../ols-ui/src/components/TabView";

import Panel from "../../../ols-ui/src/components/Panel";
import Table, { TableRow, TableHeaderCell, TableCell } from "../../../ols-ui/src/components/Tables";
import Link, { ExternalLink } from "../../../ols-ui/src/components/Links";
import List, { ListItem } from "../../../ols-ui/src/components/List";

import BigFooterDesktopPreview from "../assets/images/spacing-specs/BigFooter_Spacing_Desktop_Preview.png";
import BigFooterDesktopPreviewRed from "../assets/images/spacing-specs/BigFooter_Spacing.png";
import BigFooterMobileClosed from "../assets/images/spacing-specs/BigFooter_Spacing_Mobile_Closed.png";
import BigFooterMobileClosedPrev from "../assets/images/spacing-specs/BigFooter_Spacing_Mobile_Closed_Prev.png";
import BigFooterMobileOpen1 from "../assets/images/spacing-specs/BigFooter_Spacing_Mobile_Open1.png";
import BigFooterMobileOpen2 from "../assets/images/spacing-specs/BigFooter_Spacing_Mobile_Open2.png";
import BigFooterSpacingMobileRed1 from "../assets/images/spacing-specs/BigFooter_Mobile_Open_Red1.png";
import BigFooterSpacingMobileRed2 from "../assets/images/spacing-specs/BigFooter_Mobile_Open_Red2.png";

import appStyles from "../styles/App.scss";

import { FilledButton } from "../../../ols-ui/src/components/Buttons";

/**
 * *****************************************************************************
 * Content for Big Footer.
 *
 * @returns {[node]} The rendered DOM node
 * *****************************************************************************
 */
export default function BigFooter() {
  return (
    <div>
      <Helmet title="Big footer" />
      <DocsPage
        className="docs-styles"
        title="Big footer"
        subtitle="A big footer is the larger-sized design of the bottom-most element of a website."
        emphasisTag={[ 'IRAP APPROVED' ]}
      >
        <DocsSection>
          <TabView id="preview-tabs">
            <Tab label="Preview">
              <Panel padding="large" maxheight="medium">
                <span className={appStyles["sr-only"]}>Preview Tab</span>
                <img
                  style={{ maxWidth: "100%", height: "auto" }}
                  src={BigFooterDesktopPreview}
                  alt="Screenshot of the Big Footer"
                  className={appStyles.previewSpacingDesktopFluid}
                />
                <br className={appStyles.previewSpacingDesktopFluid} />

                <img
                  style={{ width: "100%", maxWidth: "280px", height: "auto" }}
                  src={BigFooterMobileClosedPrev}
                  alt="Screenshot of the Big Footer"
                  className={appStyles.previewSpacingMobileFluid}
                />
                <br className={appStyles.previewSpacingMobileFluid} />

                <img
                  style={{ width: "100%", maxWidth: "280px", height: "auto" }}
                  src={BigFooterMobileOpen1}
                  alt="Screenshot of the Big Footer"
                  className={appStyles.previewSpacingMobileFluid}
                />
                <br className={appStyles.previewSpacingMobileFluid} />

                <img
                  style={{ width: "100%", maxWidth: "280px", height: "auto" }}
                  src={BigFooterMobileOpen2}
                  alt="Screenshot of the Big Footer"
                  className={appStyles.previewSpacingMobileFluid}
                />
                <br className={appStyles.previewSpacingMobileFluid} />
              </Panel>
            </Tab>
            <Tab label="Spacing">
              <Panel maxheight="medium">

                <img
                  style={{ maxWidth: "100%", height: "auto" }}
                  src={BigFooterDesktopPreviewRed}
                  alt="This is a marked up graphic of the Big Footer spacing"
                  className={appStyles.previewSpacingDesktopFluid}
                />
                <br className={appStyles.previewSpacingDesktopFluid} />

                <img
                  style={{ width: "100%", maxWidth: "100%", height: "auto" }}
                  src={BigFooterMobileClosed}
                  alt="This is a marked up graphic of the Big Footer spacing"
                  className={appStyles.previewSpacingMobileFluid}
                />
                <br className={appStyles.previewSpacingMobileFluid} />

                <img
                  style={{ width: "100%", maxWidth: "100%", height: "auto" }}
                  src={BigFooterSpacingMobileRed1}
                  alt="This is a marked up graphic of the Big Footer spacing"
                  className={appStyles.previewSpacingMobileFluid}
                />
                <br className={appStyles.previewSpacingMobileFluid} />

                <img
                  style={{ width: "100%", maxWidth: "100%", height: "auto" }}
                  src={BigFooterSpacingMobileRed2}
                  alt="This is a marked up graphic of the Big Footer spacing"
                  className={appStyles.previewSpacingMobileFluid}
                />
                <br className={appStyles.previewSpacingMobileFluid} />

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
                    <BigFooter />
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
                  border-color: #1b1b1b;
                  border-top-width: 5px;
                  border-style: solid;
                  background-color: #f3f3f3;
                  z-index: 10;
                }
                
                .logo {
                  width: 82.67px;
                  height: 28px;
                  fill: #ffffff;
                  vertical-align: middle;
                }
                
                .footerTop {
                  color: #1b1b1b;
                  flex-shrink: 1;
                  // border-color: #1b1b1b;
                  // border-top-width: 5px;
                  // border-style: solid;
                  background-color: #f3f3f3;
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
                  list-style: none;
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
                    // border: 3px solid #2491ff;
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
                
                .socialList {
                  display: flex;
                  margin-top: 0;
                  margin-left: 4px;
                  margin-right: 0rem;
                  line-height: 0;
                  list-style: none;
                  @include media-breakpoint-up(md) {
                    justify-content: flex-end;
                    margin: 0;
                  }
                
                  svg {
                    width: 29px;
                    height: 29px;
                  }
                
                  .irs-2go {
                    width: 32px;
                    height: 29px;
                  }
                
                  svg[data-icon="youtube"] {
                    width: 34px;
                    height: 24px;
                    top: 4px !important;
                  }
                }
                
                .socialListItem{
                  margin-right: 8px;
                  outline: none;
                  &:last-of-type{
                    margin-right: 0rem;
                  }
                  
                  a {
                    color: #1b1b1b;
                    display: flex;
                    outline: none;
                    
                    &:hover,
                    :active,
                    :visited {
                      color: #1b1b1b;
                    }
                  }
                  
                  a:focus{
                    color: inherit;
                    position: relative;
                  }
                  
                  a:focus:before,
                  a:focus:not(.focus-visible):before {
                    box-sizing: border-box;
                    // border: 3px solid #2491ff;
                    content: "";
                    display: block;
                    height: calc(100% + 8px);
                    width: calc(100% + 8px);
                    position: absolute;
                    top: -4px;
                    left: -4px;
                    outline: none;
                  }
                
                }
                
                .socialListItem [data-component="Link"] {
                  outline-offset: 4px;
                
                  [data-icon="youtube"] {
                    margin-bottom: 5px;
                  }
                }
                
                .menuGroup {
                  padding-bottom: 0.75rem;
                  padding-top: 1.5rem;
                  // padding-left: 0 !important;
                  // padding-right: 0 !important;
                  @include media-breakpoint-up(md){
                    display: flex;
                    flex-direction: column;
                    padding-top: 2.5rem;
                    padding-bottom: 1.5rem;
                    max-width: 970px;
                    // padding-left: 20px !important;
                    // padding-right: 20px !important;
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
                
                .footerBottom{
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
                  height: 1.75rem;
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
                [data-component="footerLogo"]:focus:not(.focus-visible):before  {
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
                    
                    [data-expanded="true"] [data-component="AccordionItemBody"] {
                      overflow: visible;
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
                      width: 12px;
                      height: 12px;
                      display: inline-flex;
                      justify-content: center;
                      flex-direction: column;
                      align-items: center;
                      position: relative;
                      left:0;
                      margin-right: 8px;
                      margin-top: -2px;
                      font-size: 12px;
                      top: auto;
                      bottom: auto;
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
          <p>A footer should be used on all IRS pages. </p>
          <p>
            The big footer is typically used on IRS.gov and public-facing IRS.gov
            applications. It is comprised of two bars including the main doormat
            navigation bar and the bottom bar. The main doormat navigation bar
            contains columns of relevant links and social media icons. The bottom
            bar contains the IRS logo, privacy policy and accessibility links.
          </p>
          <FilledButton to="/big-footer-demo">
            View big footer demo
          </FilledButton>
        </DocsSection>

        <DocsSection title="Specifications">
          <h3>Typography</h3>
          <Table caption="Big Footer Typography Specifications">
            <thead>
              <TableRow>
                <TableHeaderCell scope="col">Property</TableHeaderCell>
                <TableHeaderCell scope="col">Value</TableHeaderCell>
                <TableHeaderCell scope="col">Color</TableHeaderCell>
                <TableHeaderCell scope="col">Hex</TableHeaderCell>
              </TableRow>
            </thead>
            <tbody>
              <TableRow>
                <TableHeaderCell>Headers</TableHeaderCell>
                <TableCell>
                  <Link to="/styles/typography/#display-type">Heading 16</Link>, all caps
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">Gray darkest</Link>
                </TableCell>
                <TableCell>#1b1b1b</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Links (default)</TableHeaderCell>
                <TableCell>
                  <Link to="/styles/typography/#display-type">Body text</Link>
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">Gray darkest</Link>
                </TableCell>
                <TableCell>#1b1b1b</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Links (hover)</TableHeaderCell>
                <TableCell>
                  <Link to="/styles/typography/#display-type">Body text</Link>, underline
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">Gray darkest</Link>
                </TableCell>
                <TableCell>#1b1b1b</TableCell>
              </TableRow>
            </tbody>
          </Table>

          <h3>Elements: Main bar (desktop)</h3>
          <Table caption="Big Footer Elements: Main Bar (desktop) Specifications">
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
                  <Link to="/styles/colors">Gray lighter</Link>
                </TableCell>
                <TableCell>#f3f3f3</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Divider line</TableHeaderCell>
                <TableCell>5px solid</TableCell>
                <TableCell>
                  <Link to="/styles/colors">Gray darkest</Link>
                </TableCell>
                <TableCell>#1b1b1b</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Text align</TableHeaderCell>
                <TableCell>Left</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Links gutter (top)</TableHeaderCell>
                <TableCell>40px</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Links gutter (left/right)</TableHeaderCell>
                <TableCell>24px</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Links padding (bottom)</TableHeaderCell>
                <TableCell>12px</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Social media icons (top)</TableHeaderCell>
                <TableCell>80px</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Social media icons (bottom)</TableHeaderCell>
                <TableCell>24px</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>

              <TableRow>
                <TableHeaderCell>Vertical-align</TableHeaderCell>
                <TableCell>Baseline</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
            </tbody>
          </Table>

          <h3>Elements: Bottom bar (desktop)</h3>
          <Table caption="Big Footer Elements: Bottom Bar (desktop) Specifications">
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

          <h3>Elements: Main bar (mobile)</h3>
          <Table caption="Big Footer Elements: Main Bar (mobile) Specifications)">
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
                  <Link to="/styles/colors">Gray lighter</Link>
                </TableCell>
                <TableCell>#f3f3f3</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Divider line</TableHeaderCell>
                <TableCell>5px solid</TableCell>
                <TableCell>
                  <Link to="/styles/colors">Gray darkest</Link>
                </TableCell>
                <TableCell>#1b1b1b</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Text align</TableHeaderCell>
                <TableCell>Left</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Links gutter (top)</TableHeaderCell>
                <TableCell>24px</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Links gutter (left/right)</TableHeaderCell>
                <TableCell>20px</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Links padding (bottom)</TableHeaderCell>
                <TableCell>12px</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Social media icons (top)</TableHeaderCell>
                <TableCell>40px</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Social media icons (bottom)</TableHeaderCell>
                <TableCell>12px</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Vertical align</TableHeaderCell>
                <TableCell>Baseline</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
            </tbody>
          </Table>

          <h3>Elements: Bottom bar (mobile)</h3>
          <Table caption="Big Footer Elements: Bottom Bar (mobile) Specifications">
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
          <Table caption="Big Footer Elements: Icons (desktop & mobile) Specifications">
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
          
          <h3>Elements: Icons (mobile)</h3>
          <Table caption="Big Footer Elements: Icons (mobile) Specifications">
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
                <TableHeaderCell>Icon (open)</TableHeaderCell>
                <TableCell><Link to="/styles/iconography">plus-solid</Link></TableCell>
                <TableCell>
                  <Link to="/styles/colors">Blue</Link>
                </TableCell>
                <TableCell>#00599c</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Icon (close)</TableHeaderCell>
                <TableCell><Link to="/styles/iconography">minus-solid</Link></TableCell>
                <TableCell>
                  <Link to="/styles/colors">Blue</Link>
                </TableCell>
                <TableCell>#00599c</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Icon</TableHeaderCell>
                <TableCell>12px</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Icon gutter (right)</TableHeaderCell>
                <TableCell>8px</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
            </tbody>
          </Table>

          <h3>Focus state</h3>
          <Table caption="Big footer focus state specifications">
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
                <TableHeaderCell>Padding (logo and social media icons)</TableHeaderCell>
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
              <strong>Doormat navigation:</strong> The IRS footer doormat
              navigation is displayed as secondary task links with the IRS social
              media links.
              <List>
                <ListItem>
                  Secondary tasks – Secondary task links display content users
                  might not have found or navigated to since they don't appear in
                  the header navigation.
                  <List>
                    <ListItem>
                      Keep links organized in sections and page names/section
                      titles consistent with the rest of the site.
                    </ListItem>
                    <ListItem>
                      Links should avoid unclear link names and the link category
                      names should be displayed in an all-caps bolded typeface.
                    </ListItem>
                  </List>
                </ListItem>
                <ListItem>
                  Social media links – IRS social media links are denoted by the
                  site's icon.
                </ListItem>
              </List>
            </ListItem>
            <ListItem>
              <strong>Bottom bar:</strong> The bottom bar is the last element of
              the page. The bottom bar should only include the IRS logo, privacy
              policy and accessibility links.
              <List>
                <ListItem>
                  The IRS logo should link the user to the IRS.gov homepage.
                </ListItem>
              </List>
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
                  When focus is on the accordion heading for a collapsed panel,
                  &nbsp;<strong>Enter/Space bar</strong> expand the associated panel.
                </ListItem>
                <ListItem>
                  When focus is on the accordion heading for an expanded panel,
                  &nbsp;<strong>Enter/Space bar</strong> collapse the panel if the
                  implementation supports collapsing.
                </ListItem>
              </List>
            </ListItem>
            <ListItem>
              Each language listed under <strong>Languages</strong> can be
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
