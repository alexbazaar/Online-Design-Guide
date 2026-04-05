import React from "react";
import Helmet from "react-helmet";
import heredoc from "../utils/heredocument";

import {
  DocsPage,
  DocsSection,
  DocsCode } from "../../../ols-ui/src/components/DocsFoundations";
import TabView, { Tab } from "../../../ols-ui/src/components/TabView";

import Panel from "../../../ols-ui/src/components/Panel";
import Table, { TableRow, TableHeaderCell, TableCell } from "../../../ols-ui/src/components/Tables";
import Link, { ExternalLink } from "../../../ols-ui/src/components/Links";
import List, { ListItem } from "../../../ols-ui/src/components/List";
import SectionAlert from "../../../ols-ui/src/components/Alerts";

import Footer, { FooterTop, FooterTopGroup, FooterTopGroupItem } from "../../../ols-ui/src/components/Footer";

import appStyles from "../styles/App.scss";

/**
 * *****************************************************************************
 * Content for Footer.
 *
 * @returns {[node]} The rendered DOM node
 * *****************************************************************************
 */
export default function FooterPage() {
  return (
    <div>
      <Helmet title="Footer" />
      <DocsPage title="" className="alert-docs-styles">
        <SectionAlert
          id="warning-message"
          type="warning"
          title="Component Update In Progress">
          This component has been redesigned and is currently being developed. Please reference the <Link to="/styles/resources">ODG UI Kit</Link> for the latest designs.
        </SectionAlert>

        <DocsPage
          className="docs-styles"
          title="Footer"
          subtitle="The bottom banner below page content that provides consistent information and navigation options."
        >
          <DocsSection>
            <TabView id="preview-tabs">
              <Tab label="Preview">
                <Panel>
                  <FooterTop fluid>
                    <FooterTopGroup label="Heading 1">
                      <FooterTopGroupItem>Aenean sem</FooterTopGroupItem>
                      <FooterTopGroupItem>Nullam suscipit nisi</FooterTopGroupItem>
                      <FooterTopGroupItem>Curabitur</FooterTopGroupItem>
                      <FooterTopGroupItem>Donec eleifend ut enim</FooterTopGroupItem>
                      <FooterTopGroupItem>Nunc sed imperdiet</FooterTopGroupItem>
                    </FooterTopGroup>
                    <FooterTopGroup label="Heading 2">
                      <FooterTopGroupItem>Nulla justo diam</FooterTopGroupItem>
                      <FooterTopGroupItem>Nullam suscipit nisi ut</FooterTopGroupItem>
                      <FooterTopGroupItem>Integer sodales</FooterTopGroupItem>
                      <FooterTopGroupItem>Curabitur suscipit velit</FooterTopGroupItem>
                      <FooterTopGroupItem>Vivamus mattis</FooterTopGroupItem>
                    </FooterTopGroup>
                    <FooterTopGroup label="Heading 3">
                      <FooterTopGroupItem>Mauris eu tortor felis</FooterTopGroupItem>
                      <FooterTopGroupItem>Orci varius natoque</FooterTopGroupItem>
                      <FooterTopGroupItem>Etiam vitae lectus</FooterTopGroupItem>
                      <FooterTopGroupItem>Suspendisse potenti</FooterTopGroupItem>
                    </FooterTopGroup>
                    <FooterTopGroup label="Languages">
                      <li><a href="https://www.irs.gov/es/spanish" target="" title="" lang="es" xmlLang="es">Español</a></li>
                      <li><a href="https://www.irs.gov/zh-hant/chinese" target="" title="" lang="zh-hant" xmlLang="zh-hant">中文</a></li>
                      <li><a href="https://www.irs.gov/ko/korean" target="" title="" lang="ko" xmlLang="ko">한국어</a></li>
                      <li><a href="https://www.irs.gov/ru/russian" target="" title="" lang="ru" xmlLang="ru">Pусский</a></li>
                      <li><a href="https://www.irs.gov/vi/vietnamese" target="" title="" lang="vi" xmlLang="vi">Tiếng Việt</a></li>
                    </FooterTopGroup>
                  </FooterTop>
                  <Footer fluid />
                </Panel>
              </Tab>
              <Tab label="Spacing">
                <Panel maxheight="medium">
                  This would be a preview of the Spacing.

                  <div>
                    <span style={{ marginTop: "16px", fontSize: '12px', lineHeight: "16px", display: "inline-block" }}><br /><strong>Note:</strong> Please refer to the specifications section for more detail.</span>
                  </div>
                </Panel>
              </Tab>
              <Tab label="HTML">
                <Panel className="panel-code" padding="none" maxheight="medium" style={{ maxWidth: '868px', maxheight: '400px', overflowY: 'scroll' }}>
                  <DocsCode language="xml">
                    {heredoc`
                    <div>
                      <div
                        class="ols-ui--Footer-footerTop"
                        data-component="FooterTop"
                        role="navigation"
                      >
                        <div
                          class="ols-ui--FlexGrid-container-fluid ols-ui--Footer-menuGroup"
                          data-component="FlexContainer"
                        >
                          <div
                            class="ols-ui--FlexGrid-row ols-ui--FlexGrid-align-items-start ols-ui--FlexGrid-justify-content-between"
                            data-component="FlexRow"
                          >
                            <div
                              class="ols-ui--FlexGrid-col-sm-4 ols-ui--FlexGrid-col-md-3 ols-ui--Footer-footerTopGroup"
                              data-component="FlexCol"
                            >
                              <div data-component="FooterTopGroup">
                                <h4 class="ols-ui--Footer-groupLabel">Our Agency</h4>
                                <ul>
                                  <li data-component="FooterTopGroupItem">About IRS</li>
                                  <li data-component="FooterTopGroupItem">Working at IRS</li>
                                  <li data-component="FooterTopGroupItem">Help</li>
                                  <li data-component="FooterTopGroupItem">
                                    Contact Your Local Office
                                  </li>
                                  <li data-component="FooterTopGroupItem">
                                    Tax Stats, Facts &amp; Figures
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div
                              class="ols-ui--FlexGrid-col-sm-4 ols-ui--FlexGrid-col-md-3 ols-ui--Footer-footerTopGroup"
                              data-component="FlexCol"
                            >
                              <div data-component="FooterTopGroup">
                                <h4 class="ols-ui--Footer-groupLabel">Know Your Rights</h4>
                                <ul>
                                  <li data-component="FooterTopGroupItem">
                                    Taxpayer Bill of Rights
                                  </li>
                                  <li data-component="FooterTopGroupItem">
                                    Taxpayer Advocation Service
                                  </li>
                                  <li data-component="FooterTopGroupItem">Civil Rights</li>
                                  <li data-component="FooterTopGroupItem">
                                    Freedom of Information Act
                                  </li>
                                  <li data-component="FooterTopGroupItem">No FEAR Act</li>
                                </ul>
                              </div>
                            </div>
                            <div
                              class="ols-ui--FlexGrid-col-sm-4 ols-ui--FlexGrid-col-md-3 ols-ui--Footer-footerTopGroup"
                              data-component="FlexCol"
                            >
                              <div data-component="FooterTopGroup">
                                <h4 class="ols-ui--Footer-groupLabel">Resolve an Issue</h4>
                                <ul>
                                  <li data-component="FooterTopGroupItem">Respond to a Notice</li>
                                  <li data-component="FooterTopGroupItem">Office of Appeals</li>
                                  <li data-component="FooterTopGroupItem">
                                    Identity Theft Protection
                                  </li>
                                  <li data-component="FooterTopGroupItem">Report Phishing</li>
                                </ul>
                              </div>
                            </div>
                            <div
                              class="ols-ui--FlexGrid-col-sm-4 ols-ui--FlexGrid-col-md-3 ols-ui--Footer-footerTopGroup"
                              data-component="FlexCol"
                            >
                              <div data-component="FooterTopGroup">
                                <h4 class="ols-ui--Footer-groupLabel">Other Languages</h4>
                                <ul>
                                  <li>
                                    <a
                                      href="https://www.irs.gov/es/spanish"
                                      target=""
                                      title=""
                                      lang="es"
                                      xml:lang="es"
                                    >
                                      Español
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://www.irs.gov/zh-hant/chinese"
                                      target=""
                                      title=""
                                      lang="zh-hant"
                                      xml:lang="zh-hant"
                                    >
                                      中文
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://www.irs.gov/ko/korean"
                                      target=""
                                      title=""
                                      lang="ko"
                                      xml:lang="ko"
                                    >
                                      한국어
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://www.irs.gov/ru/russian"
                                      target=""
                                      title=""
                                      lang="ru"
                                      xml:lang="ru"
                                    >
                                      Pусский
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="https://www.irs.gov/vi/vietnamese"
                                      target=""
                                      title=""
                                      lang="vi"
                                      xml:lang="vi"
                                    >
                                      Tiếng Việt
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="ols-ui--FlexGrid-container-fluid "
                          data-component="FlexContainer"
                        >
                          <div
                            class="ols-ui--FlexGrid-row ols-ui--FlexGrid-align-items-center"
                            data-component="FlexRow"
                          >
                            <div
                              class="ols-ui--FlexGrid-col-md-6 ols-ui--FlexGrid-offset-md-6 ols-ui--Footer-footerTopRight"
                              data-component="FlexCol"
                            >
                              <ul>
                                <li>
                                  <a data-component="Link" href="#" class="ols-ui--Links-link ">
                                    <img
                                      src=""
                                      alt="IRS Facebook Profile"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a data-component="Link" href="#" class="ols-ui--Links-link ">
                                    <img
                                      src=""
                                      alt="IRS Twitter Profile"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a data-component="Link" href="#" class="ols-ui--Links-link ">
                                    <img
                                      src=""
                                      alt="IRS YouTube Channel"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a data-component="Link" href="#" class="ols-ui--Links-link ">
                                    <img
                                      src=""
                                      alt="IRS Logo"
                                    />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <footer
                        class="ols-ui--Footer-footer"
                        data-component="Footer"
                        role="contentinfo"
                      >
                        <div
                          class="ols-ui--FlexGrid-container-fluid "
                          data-component="FlexContainer"
                        >
                          <div
                            class="ols-ui--FlexGrid-row ols-ui--FlexGrid-align-items-center ols-ui--FlexGrid-justify-content-between"
                            data-component="FlexRow"
                          >
                            <div
                              class="ols-ui--FlexGrid-col-12 ols-ui--FlexGrid-col-md-2"
                              data-component="FlexCol"
                            >
                              <img
                                src=""
                                alt="IRS logo"
                                class="ols-ui--Footer-logo"
                                aria-hidden="true"
                              />
                            </div>
                            <div
                              class="ols-ui--FlexGrid-col-12 ols-ui--FlexGrid-col-md-10 ols-ui--Footer-linksContainer"
                              data-component="FlexCol"
                            >
                              <ul id="footer-links">
                                <li id="feedback-link">
                                  <a
                                    data-component="ExternalLink"
                                    href="http://survey.foreseeresults.com/survey/display?cid=BAZQsB5xRUYZtxB5gM5BUw==&amp;sid=link-online-act"
                                    class="ols-ui--Links-externalLink "
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    Give Feedback
                                    <svg
                                      fill="currentColor"
                                      preserveAspectRatio="xMidYMid meet"
                                      focusable="false"
                                      height=".875em"
                                      width=".9375em"
                                      viewBox="0 0 40 40"
                                      class="ols-ui--Links-externalLinkIcon"
                                      style="vertical-align:baseline;position:relative;top:0.2em"
                                    >
                                      <g>
                                        <path d="" />
                                      </g>
                                    </svg>
                                    <span class="ols-ui--Links-sr-only">
                                      This link will open in a new window.
                                    </span>
                                  </a>
                                </li>
                                <li id="privacy-link">
                                  <a
                                    data-component="ExternalLink"
                                    href="http://www.irs.gov/uac/IRS-Privacy-Policy"
                                    class="ols-ui--Links-externalLink "
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    Privacy Policy
                                    <svg
                                      fill="currentColor"
                                      preserveAspectRatio="xMidYMid meet"
                                      focusable="false"
                                      height=".875em"
                                      width=".9375em"
                                      viewBox="0 0 40 40"
                                      class="ols-ui--Links-externalLinkIcon"
                                      style="vertical-align:baseline;position:relative;top:0.2em"
                                    >
                                      <g>
                                        <path d="" />
                                      </g>
                                    </svg>
                                    <span class="ols-ui--Links-sr-only">
                                      This link will open in a new window.
                                    </span>
                                  </a>
                                </li>
                                <li id="accessibility-link">
                                  <a
                                    data-component="ExternalLink"
                                    href="accessibilityGuide.html"
                                    class="ols-ui--Links-externalLink "
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    Accessibility
                                    <svg
                                      fill="currentColor"
                                      preserveAspectRatio="xMidYMid meet"
                                      focusable="false"
                                      height=".875em"
                                      width=".9375em"
                                      viewBox="0 0 40 40"
                                      class="ols-ui--Links-externalLinkIcon"
                                      style="vertical-align:baseline;position:relative;top:0.2em"
                                    >
                                      <g>
                                        <path d="" />
                                      </g>
                                    </svg>
                                    <span class="ols-ui--Links-sr-only">
                                      This link will open in a new window.
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </footer>
                    </div>                         
                    `}
                  </DocsCode>
                </Panel>
              </Tab>
              <Tab label="CSS">
                <Panel className="panel-code" padding="none" maxheight="medium" style={{ maxWidth: '868px', maxheight: '400px',  overflowY: 'scroll' }}>
                  <DocsCode language="scss">
                    {heredoc`
                      .ols-ui--Accordion-accordionItem {
                        border-bottom: solid 1px #d6d7d9;
                        margin: 0;
                        padding-left: 0; }
                        .ols-ui--Accordion-accordionItem h2,
                        .ols-ui--Accordion-accordionItem h3,
                        .ols-ui--Accordion-accordionItem h4,
                        .ols-ui--Accordion-accordionItem h5,
                        .ols-ui--Accordion-accordionItem h6 {
                          font-size: 24px;
                          line-height: 36px; }
                        .ols-ui--Accordion-accordionItem.ols-ui--Accordion-noBorder {
                          border-bottom: none; }
                        .ols-ui--Accordion-accordionItem:last-child {
                          border-bottom: none; }
                      
                      .ols-ui--Accordion-accordionOuterBorder {
                        border: solid 1px #d6d7d9; }
                      
                      .ols-ui--Accordion-trigger {
                        padding: 0;
                        border: 0;
                        margin: 0;
                        -webkit-appearance: none;
                          -moz-appearance: none;
                                appearance: none;
                        background-color: transparent;
                        border-radius: 0;
                        color: inherit;
                        font-family: inherit;
                        -webkit-font-smoothing: auto;
                        font-weight: 400;
                        text-align: left;
                        font-family: "Source Sans Pro", sans-serif;
                        font-weight: 700;
                        font-size: 20px;
                        line-height: 28px;
                        color: #1b1b1b;
                        position: relative;
                        display: block;
                        width: 100%;
                        padding: 16px;
                        padding-left: 44px;
                        background: transparent;
                        cursor: pointer;
                        text-align: left; }
                        .ols-ui--Accordion-trigger[disabled] {
                          color: #5b616b;
                          cursor: not-allowed; }
                          .ols-ui--Accordion-trigger[disabled] .ols-ui--Accordion-triggerPlusIcon {
                            color: #5b616b;
                            font-size: 20px;
                            position: absolute;
                            left: 16px;
                            bottom: 17px;
                            top: 16px; }
                            .ols-ui--Accordion-padding .ols-ui--Accordion-trigger[disabled] .ols-ui--Accordion-triggerPlusIcon {
                              left: 16px; }
                        .ols-ui--Accordion-padding .ols-ui--Accordion-trigger {
                          padding-left: 44px; }
                      
                      .ols-ui--Accordion-triggerMinusIcon {
                        color: #00599c;
                        font-size: 20px;
                        position: absolute;
                        left: 16px;
                        bottom: 17px;
                        top: 16px; }
                        .ols-ui--Accordion-padding .ols-ui--Accordion-triggerMinusIcon {
                          left: 16px; }
                      
                      .ols-ui--Accordion-triggerPlusIcon {
                        color: #00599c;
                        font-size: 20px;
                        position: absolute;
                        left: 16px;
                        bottom: 17px;
                        top: 16px; }
                        .ols-ui--Accordion-padding .ols-ui--Accordion-triggerPlusIcon {
                          left: 16px; }
                      
                      .ols-ui--Accordion-body {
                        color: #1b1b1b;
                        padding: 0 !important;
                        margin: 0 !important;
                        overflow-y: hidden;
                        transition-duration: 300ms;
                        transition-property: max-height;
                        transition-timing-function: cubic-bezier(0, 1, 0.5, 1); }
                        .ols-ui--Accordion-body > div {
                          padding: 0 16px 16px 44px; }
                          .ols-ui--Accordion-body > div > *:first-child {
                            margin-top: 0; }
                          .ols-ui--Accordion-body > div > *:last-child {
                            margin-bottom: 0; }
                          .ols-ui--Accordion-body > div.ols-ui--Accordion-noBodyIndent {
                            padding-left: 0; }
                        .ols-ui--Accordion-padding .ols-ui--Accordion-body > div {
                          padding-left: 48px;
                          padding-right: 16px; }
                          .ols-ui--Accordion-padding .ols-ui--Accordion-body > div.ols-ui--Accordion-noBodyIndent {
                            padding-left: 16px; }
                      
                      button.ols-ui--Accordion-trigger:focus {
                        outline: 3px solid #2491ff;
                        outline-offset: 1px; }
                      .ols-ui--FlexGrid-container {
                        position: relative;
                        margin-right: auto;
                        margin-left: auto;
                        padding-right: 8px;
                        padding-left: 8px;
                        box-sizing: border-box; }
                        @media (min-width: 576px) {
                          .ols-ui--FlexGrid-container {
                            padding-right: 8px;
                            padding-left: 8px; } }
                        @media (min-width: 768px) {
                          .ols-ui--FlexGrid-container {
                            padding-right: 8px;
                            padding-left: 8px; } }
                        @media (min-width: 992px) {
                          .ols-ui--FlexGrid-container {
                            padding-right: 8px;
                            padding-left: 8px; } }
                        @media (min-width: 1200px) {
                          .ols-ui--FlexGrid-container {
                            padding-right: 12px;
                            padding-left: 12px; } }
                        @media (min-width: 576px) {
                          .ols-ui--FlexGrid-container {
                            width: 540px;
                            max-width: 100%; } }
                        @media (min-width: 768px) {
                          .ols-ui--FlexGrid-container {
                            width: 720px;
                            max-width: 100%; } }
                        @media (min-width: 992px) {
                          .ols-ui--FlexGrid-container {
                            width: 960px;
                            max-width: 100%; } }
                        @media (min-width: 1200px) {
                          .ols-ui--FlexGrid-container {
                            width: 1140px;
                            max-width: 100%; } }
                      
                      .ols-ui--FlexGrid-container-fluid {
                        position: relative;
                        margin-right: auto;
                        margin-left: auto;
                        padding-right: 8px;
                        padding-left: 8px;
                        box-sizing: border-box;
                        padding-right: 12px !important;
                        padding-left: 12px !important; }
                        @media (min-width: 576px) {
                          .ols-ui--FlexGrid-container-fluid {
                            padding-right: 8px;
                            padding-left: 8px; } }
                        @media (min-width: 768px) {
                          .ols-ui--FlexGrid-container-fluid {
                            padding-right: 8px;
                            padding-left: 8px; } }
                        @media (min-width: 992px) {
                          .ols-ui--FlexGrid-container-fluid {
                            padding-right: 8px;
                            padding-left: 8px; } }
                        @media (min-width: 1200px) {
                          .ols-ui--FlexGrid-container-fluid {
                            padding-right: 12px;
                            padding-left: 12px; } }
                        @media (min-width: 576px) {
                          .ols-ui--FlexGrid-container-fluid {
                            padding-right: 20px !important;
                            padding-left: 20px !important; } }
                      
                      .ols-ui--FlexGrid-row {
                        display: flex;
                        flex-wrap: wrap;
                        margin-right: -8px;
                        margin-left: -8px;
                        box-sizing: border-box; }
                        @media (min-width: 576px) {
                          .ols-ui--FlexGrid-row {
                            margin-right: -8px;
                            margin-left: -8px; } }
                        @media (min-width: 768px) {
                          .ols-ui--FlexGrid-row {
                            margin-right: -8px;
                            margin-left: -8px; } }
                        @media (min-width: 992px) {
                          .ols-ui--FlexGrid-row {
                            margin-right: -8px;
                            margin-left: -8px; } }
                        @media (min-width: 1200px) {
                          .ols-ui--FlexGrid-row {
                            margin-right: -12px;
                            margin-left: -12px; } }
                      
                      .ols-ui--FlexGrid-no-gutters {
                        margin-right: 0;
                        margin-left: 0; }
                        .ols-ui--FlexGrid-no-gutters > .ols-ui--FlexGrid-col,
                        .ols-ui--FlexGrid-no-gutters > [class*="col-"] {
                          box-sizing: border-box;
                          padding-right: 0;
                          padding-left: 0; }
                      
                      .ols-ui--FlexGrid-col-1, .ols-ui--FlexGrid-col-2, .ols-ui--FlexGrid-col-3, .ols-ui--FlexGrid-col-4, .ols-ui--FlexGrid-col-5, .ols-ui--FlexGrid-col-6, .ols-ui--FlexGrid-col-7, .ols-ui--FlexGrid-col-8, .ols-ui--FlexGrid-col-9, .ols-ui--FlexGrid-col-10, .ols-ui--FlexGrid-col-11, .ols-ui--FlexGrid-col-12, .ols-ui--FlexGrid-col, .ols-ui--FlexGrid-col-sm-1, .ols-ui--FlexGrid-col-sm-2, .ols-ui--FlexGrid-col-sm-3, .ols-ui--FlexGrid-col-sm-4, .ols-ui--FlexGrid-col-sm-5, .ols-ui--FlexGrid-col-sm-6, .ols-ui--FlexGrid-col-sm-7, .ols-ui--FlexGrid-col-sm-8, .ols-ui--FlexGrid-col-sm-9, .ols-ui--FlexGrid-col-sm-10, .ols-ui--FlexGrid-col-sm-11, .ols-ui--FlexGrid-col-sm-12, .ols-ui--FlexGrid-col-sm, .ols-ui--FlexGrid-col-md-1, .ols-ui--FlexGrid-col-md-2, .ols-ui--FlexGrid-col-md-3, .ols-ui--FlexGrid-col-md-4, .ols-ui--FlexGrid-col-md-5, .ols-ui--FlexGrid-col-md-6, .ols-ui--FlexGrid-col-md-7, .ols-ui--FlexGrid-col-md-8, .ols-ui--FlexGrid-col-md-9, .ols-ui--FlexGrid-col-md-10, .ols-ui--FlexGrid-col-md-11, .ols-ui--FlexGrid-col-md-12, .ols-ui--FlexGrid-col-md, .ols-ui--FlexGrid-col-lg-1, .ols-ui--FlexGrid-col-lg-2, .ols-ui--FlexGrid-col-lg-3, .ols-ui--FlexGrid-col-lg-4, .ols-ui--FlexGrid-col-lg-5, .ols-ui--FlexGrid-col-lg-6, .ols-ui--FlexGrid-col-lg-7, .ols-ui--FlexGrid-col-lg-8, .ols-ui--FlexGrid-col-lg-9, .ols-ui--FlexGrid-col-lg-10, .ols-ui--FlexGrid-col-lg-11, .ols-ui--FlexGrid-col-lg-12, .ols-ui--FlexGrid-col-lg, .ols-ui--FlexGrid-col-xl-1, .ols-ui--FlexGrid-col-xl-2, .ols-ui--FlexGrid-col-xl-3, .ols-ui--FlexGrid-col-xl-4, .ols-ui--FlexGrid-col-xl-5, .ols-ui--FlexGrid-col-xl-6, .ols-ui--FlexGrid-col-xl-7, .ols-ui--FlexGrid-col-xl-8, .ols-ui--FlexGrid-col-xl-9, .ols-ui--FlexGrid-col-xl-10, .ols-ui--FlexGrid-col-xl-11, .ols-ui--FlexGrid-col-xl-12, .ols-ui--FlexGrid-col-xl {
                        position: relative;
                        width: 100%;
                        min-height: 1px;
                        box-sizing: border-box;
                        padding-right: 8px;
                        padding-left: 8px; }
                        @media (min-width: 576px) {
                          .ols-ui--FlexGrid-col-1, .ols-ui--FlexGrid-col-2, .ols-ui--FlexGrid-col-3, .ols-ui--FlexGrid-col-4, .ols-ui--FlexGrid-col-5, .ols-ui--FlexGrid-col-6, .ols-ui--FlexGrid-col-7, .ols-ui--FlexGrid-col-8, .ols-ui--FlexGrid-col-9, .ols-ui--FlexGrid-col-10, .ols-ui--FlexGrid-col-11, .ols-ui--FlexGrid-col-12, .ols-ui--FlexGrid-col, .ols-ui--FlexGrid-col-sm-1, .ols-ui--FlexGrid-col-sm-2, .ols-ui--FlexGrid-col-sm-3, .ols-ui--FlexGrid-col-sm-4, .ols-ui--FlexGrid-col-sm-5, .ols-ui--FlexGrid-col-sm-6, .ols-ui--FlexGrid-col-sm-7, .ols-ui--FlexGrid-col-sm-8, .ols-ui--FlexGrid-col-sm-9, .ols-ui--FlexGrid-col-sm-10, .ols-ui--FlexGrid-col-sm-11, .ols-ui--FlexGrid-col-sm-12, .ols-ui--FlexGrid-col-sm, .ols-ui--FlexGrid-col-md-1, .ols-ui--FlexGrid-col-md-2, .ols-ui--FlexGrid-col-md-3, .ols-ui--FlexGrid-col-md-4, .ols-ui--FlexGrid-col-md-5, .ols-ui--FlexGrid-col-md-6, .ols-ui--FlexGrid-col-md-7, .ols-ui--FlexGrid-col-md-8, .ols-ui--FlexGrid-col-md-9, .ols-ui--FlexGrid-col-md-10, .ols-ui--FlexGrid-col-md-11, .ols-ui--FlexGrid-col-md-12, .ols-ui--FlexGrid-col-md, .ols-ui--FlexGrid-col-lg-1, .ols-ui--FlexGrid-col-lg-2, .ols-ui--FlexGrid-col-lg-3, .ols-ui--FlexGrid-col-lg-4, .ols-ui--FlexGrid-col-lg-5, .ols-ui--FlexGrid-col-lg-6, .ols-ui--FlexGrid-col-lg-7, .ols-ui--FlexGrid-col-lg-8, .ols-ui--FlexGrid-col-lg-9, .ols-ui--FlexGrid-col-lg-10, .ols-ui--FlexGrid-col-lg-11, .ols-ui--FlexGrid-col-lg-12, .ols-ui--FlexGrid-col-lg, .ols-ui--FlexGrid-col-xl-1, .ols-ui--FlexGrid-col-xl-2, .ols-ui--FlexGrid-col-xl-3, .ols-ui--FlexGrid-col-xl-4, .ols-ui--FlexGrid-col-xl-5, .ols-ui--FlexGrid-col-xl-6, .ols-ui--FlexGrid-col-xl-7, .ols-ui--FlexGrid-col-xl-8, .ols-ui--FlexGrid-col-xl-9, .ols-ui--FlexGrid-col-xl-10, .ols-ui--FlexGrid-col-xl-11, .ols-ui--FlexGrid-col-xl-12, .ols-ui--FlexGrid-col-xl {
                            padding-right: 8px;
                            padding-left: 8px; } }
                        @media (min-width: 768px) {
                          .ols-ui--FlexGrid-col-1, .ols-ui--FlexGrid-col-2, .ols-ui--FlexGrid-col-3, .ols-ui--FlexGrid-col-4, .ols-ui--FlexGrid-col-5, .ols-ui--FlexGrid-col-6, .ols-ui--FlexGrid-col-7, .ols-ui--FlexGrid-col-8, .ols-ui--FlexGrid-col-9, .ols-ui--FlexGrid-col-10, .ols-ui--FlexGrid-col-11, .ols-ui--FlexGrid-col-12, .ols-ui--FlexGrid-col, .ols-ui--FlexGrid-col-sm-1, .ols-ui--FlexGrid-col-sm-2, .ols-ui--FlexGrid-col-sm-3, .ols-ui--FlexGrid-col-sm-4, .ols-ui--FlexGrid-col-sm-5, .ols-ui--FlexGrid-col-sm-6, .ols-ui--FlexGrid-col-sm-7, .ols-ui--FlexGrid-col-sm-8, .ols-ui--FlexGrid-col-sm-9, .ols-ui--FlexGrid-col-sm-10, .ols-ui--FlexGrid-col-sm-11, .ols-ui--FlexGrid-col-sm-12, .ols-ui--FlexGrid-col-sm, .ols-ui--FlexGrid-col-md-1, .ols-ui--FlexGrid-col-md-2, .ols-ui--FlexGrid-col-md-3, .ols-ui--FlexGrid-col-md-4, .ols-ui--FlexGrid-col-md-5, .ols-ui--FlexGrid-col-md-6, .ols-ui--FlexGrid-col-md-7, .ols-ui--FlexGrid-col-md-8, .ols-ui--FlexGrid-col-md-9, .ols-ui--FlexGrid-col-md-10, .ols-ui--FlexGrid-col-md-11, .ols-ui--FlexGrid-col-md-12, .ols-ui--FlexGrid-col-md, .ols-ui--FlexGrid-col-lg-1, .ols-ui--FlexGrid-col-lg-2, .ols-ui--FlexGrid-col-lg-3, .ols-ui--FlexGrid-col-lg-4, .ols-ui--FlexGrid-col-lg-5, .ols-ui--FlexGrid-col-lg-6, .ols-ui--FlexGrid-col-lg-7, .ols-ui--FlexGrid-col-lg-8, .ols-ui--FlexGrid-col-lg-9, .ols-ui--FlexGrid-col-lg-10, .ols-ui--FlexGrid-col-lg-11, .ols-ui--FlexGrid-col-lg-12, .ols-ui--FlexGrid-col-lg, .ols-ui--FlexGrid-col-xl-1, .ols-ui--FlexGrid-col-xl-2, .ols-ui--FlexGrid-col-xl-3, .ols-ui--FlexGrid-col-xl-4, .ols-ui--FlexGrid-col-xl-5, .ols-ui--FlexGrid-col-xl-6, .ols-ui--FlexGrid-col-xl-7, .ols-ui--FlexGrid-col-xl-8, .ols-ui--FlexGrid-col-xl-9, .ols-ui--FlexGrid-col-xl-10, .ols-ui--FlexGrid-col-xl-11, .ols-ui--FlexGrid-col-xl-12, .ols-ui--FlexGrid-col-xl {
                            padding-right: 8px;
                            padding-left: 8px; } }
                        @media (min-width: 992px) {
                          .ols-ui--FlexGrid-col-1, .ols-ui--FlexGrid-col-2, .ols-ui--FlexGrid-col-3, .ols-ui--FlexGrid-col-4, .ols-ui--FlexGrid-col-5, .ols-ui--FlexGrid-col-6, .ols-ui--FlexGrid-col-7, .ols-ui--FlexGrid-col-8, .ols-ui--FlexGrid-col-9, .ols-ui--FlexGrid-col-10, .ols-ui--FlexGrid-col-11, .ols-ui--FlexGrid-col-12, .ols-ui--FlexGrid-col, .ols-ui--FlexGrid-col-sm-1, .ols-ui--FlexGrid-col-sm-2, .ols-ui--FlexGrid-col-sm-3, .ols-ui--FlexGrid-col-sm-4, .ols-ui--FlexGrid-col-sm-5, .ols-ui--FlexGrid-col-sm-6, .ols-ui--FlexGrid-col-sm-7, .ols-ui--FlexGrid-col-sm-8, .ols-ui--FlexGrid-col-sm-9, .ols-ui--FlexGrid-col-sm-10, .ols-ui--FlexGrid-col-sm-11, .ols-ui--FlexGrid-col-sm-12, .ols-ui--FlexGrid-col-sm, .ols-ui--FlexGrid-col-md-1, .ols-ui--FlexGrid-col-md-2, .ols-ui--FlexGrid-col-md-3, .ols-ui--FlexGrid-col-md-4, .ols-ui--FlexGrid-col-md-5, .ols-ui--FlexGrid-col-md-6, .ols-ui--FlexGrid-col-md-7, .ols-ui--FlexGrid-col-md-8, .ols-ui--FlexGrid-col-md-9, .ols-ui--FlexGrid-col-md-10, .ols-ui--FlexGrid-col-md-11, .ols-ui--FlexGrid-col-md-12, .ols-ui--FlexGrid-col-md, .ols-ui--FlexGrid-col-lg-1, .ols-ui--FlexGrid-col-lg-2, .ols-ui--FlexGrid-col-lg-3, .ols-ui--FlexGrid-col-lg-4, .ols-ui--FlexGrid-col-lg-5, .ols-ui--FlexGrid-col-lg-6, .ols-ui--FlexGrid-col-lg-7, .ols-ui--FlexGrid-col-lg-8, .ols-ui--FlexGrid-col-lg-9, .ols-ui--FlexGrid-col-lg-10, .ols-ui--FlexGrid-col-lg-11, .ols-ui--FlexGrid-col-lg-12, .ols-ui--FlexGrid-col-lg, .ols-ui--FlexGrid-col-xl-1, .ols-ui--FlexGrid-col-xl-2, .ols-ui--FlexGrid-col-xl-3, .ols-ui--FlexGrid-col-xl-4, .ols-ui--FlexGrid-col-xl-5, .ols-ui--FlexGrid-col-xl-6, .ols-ui--FlexGrid-col-xl-7, .ols-ui--FlexGrid-col-xl-8, .ols-ui--FlexGrid-col-xl-9, .ols-ui--FlexGrid-col-xl-10, .ols-ui--FlexGrid-col-xl-11, .ols-ui--FlexGrid-col-xl-12, .ols-ui--FlexGrid-col-xl {
                            padding-right: 8px;
                            padding-left: 8px; } }
                        @media (min-width: 1200px) {
                          .ols-ui--FlexGrid-col-1, .ols-ui--FlexGrid-col-2, .ols-ui--FlexGrid-col-3, .ols-ui--FlexGrid-col-4, .ols-ui--FlexGrid-col-5, .ols-ui--FlexGrid-col-6, .ols-ui--FlexGrid-col-7, .ols-ui--FlexGrid-col-8, .ols-ui--FlexGrid-col-9, .ols-ui--FlexGrid-col-10, .ols-ui--FlexGrid-col-11, .ols-ui--FlexGrid-col-12, .ols-ui--FlexGrid-col, .ols-ui--FlexGrid-col-sm-1, .ols-ui--FlexGrid-col-sm-2, .ols-ui--FlexGrid-col-sm-3, .ols-ui--FlexGrid-col-sm-4, .ols-ui--FlexGrid-col-sm-5, .ols-ui--FlexGrid-col-sm-6, .ols-ui--FlexGrid-col-sm-7, .ols-ui--FlexGrid-col-sm-8, .ols-ui--FlexGrid-col-sm-9, .ols-ui--FlexGrid-col-sm-10, .ols-ui--FlexGrid-col-sm-11, .ols-ui--FlexGrid-col-sm-12, .ols-ui--FlexGrid-col-sm, .ols-ui--FlexGrid-col-md-1, .ols-ui--FlexGrid-col-md-2, .ols-ui--FlexGrid-col-md-3, .ols-ui--FlexGrid-col-md-4, .ols-ui--FlexGrid-col-md-5, .ols-ui--FlexGrid-col-md-6, .ols-ui--FlexGrid-col-md-7, .ols-ui--FlexGrid-col-md-8, .ols-ui--FlexGrid-col-md-9, .ols-ui--FlexGrid-col-md-10, .ols-ui--FlexGrid-col-md-11, .ols-ui--FlexGrid-col-md-12, .ols-ui--FlexGrid-col-md, .ols-ui--FlexGrid-col-lg-1, .ols-ui--FlexGrid-col-lg-2, .ols-ui--FlexGrid-col-lg-3, .ols-ui--FlexGrid-col-lg-4, .ols-ui--FlexGrid-col-lg-5, .ols-ui--FlexGrid-col-lg-6, .ols-ui--FlexGrid-col-lg-7, .ols-ui--FlexGrid-col-lg-8, .ols-ui--FlexGrid-col-lg-9, .ols-ui--FlexGrid-col-lg-10, .ols-ui--FlexGrid-col-lg-11, .ols-ui--FlexGrid-col-lg-12, .ols-ui--FlexGrid-col-lg, .ols-ui--FlexGrid-col-xl-1, .ols-ui--FlexGrid-col-xl-2, .ols-ui--FlexGrid-col-xl-3, .ols-ui--FlexGrid-col-xl-4, .ols-ui--FlexGrid-col-xl-5, .ols-ui--FlexGrid-col-xl-6, .ols-ui--FlexGrid-col-xl-7, .ols-ui--FlexGrid-col-xl-8, .ols-ui--FlexGrid-col-xl-9, .ols-ui--FlexGrid-col-xl-10, .ols-ui--FlexGrid-col-xl-11, .ols-ui--FlexGrid-col-xl-12, .ols-ui--FlexGrid-col-xl {
                            padding-right: 12px;
                            padding-left: 12px; } }
                      
                      .ols-ui--FlexGrid-col {
                        max-width: 100%;
                        flex-basis: 0;
                        flex-grow: 1; }
                      
                      .ols-ui--FlexGrid-col-auto {
                        width: auto;
                        flex: 0 0 auto; }
                      
                      .ols-ui--FlexGrid-col-1 {
                        max-width: 8.33333%;
                        flex: 0 0 8.33333%; }
                      
                      .ols-ui--FlexGrid-col-2 {
                        max-width: 16.66667%;
                        flex: 0 0 16.66667%; }
                      
                      .ols-ui--FlexGrid-col-3 {
                        max-width: 25%;
                        flex: 0 0 25%; }
                      
                      .ols-ui--FlexGrid-col-4 {
                        max-width: 33.33333%;
                        flex: 0 0 33.33333%; }
                      
                      .ols-ui--FlexGrid-col-5 {
                        max-width: 41.66667%;
                        flex: 0 0 41.66667%; }
                      
                      .ols-ui--FlexGrid-col-6 {
                        max-width: 50%;
                        flex: 0 0 50%; }
                      
                      .ols-ui--FlexGrid-col-7 {
                        max-width: 58.33333%;
                        flex: 0 0 58.33333%; }
                      
                      .ols-ui--FlexGrid-col-8 {
                        max-width: 66.66667%;
                        flex: 0 0 66.66667%; }
                      
                      .ols-ui--FlexGrid-col-9 {
                        max-width: 75%;
                        flex: 0 0 75%; }
                      
                      .ols-ui--FlexGrid-col-10 {
                        max-width: 83.33333%;
                        flex: 0 0 83.33333%; }
                      
                      .ols-ui--FlexGrid-col-11 {
                        max-width: 91.66667%;
                        flex: 0 0 91.66667%; }
                      
                      .ols-ui--FlexGrid-col-12 {
                        max-width: 100%;
                        flex: 0 0 100%; }
                      
                      .ols-ui--FlexGrid-pull-0 {
                        right: auto; }
                      
                      .ols-ui--FlexGrid-pull-1 {
                        right: 8.33333%; }
                      
                      .ols-ui--FlexGrid-pull-2 {
                        right: 16.66667%; }
                      
                      .ols-ui--FlexGrid-pull-3 {
                        right: 25%; }
                      
                      .ols-ui--FlexGrid-pull-4 {
                        right: 33.33333%; }
                      
                      .ols-ui--FlexGrid-pull-5 {
                        right: 41.66667%; }
                      
                      .ols-ui--FlexGrid-pull-6 {
                        right: 50%; }
                      
                      .ols-ui--FlexGrid-pull-7 {
                        right: 58.33333%; }
                      
                      .ols-ui--FlexGrid-pull-8 {
                        right: 66.66667%; }
                      
                      .ols-ui--FlexGrid-pull-9 {
                        right: 75%; }
                      
                      .ols-ui--FlexGrid-pull-10 {
                        right: 83.33333%; }
                      
                      .ols-ui--FlexGrid-pull-11 {
                        right: 91.66667%; }
                      
                      .ols-ui--FlexGrid-pull-12 {
                        right: 100%; }
                      
                      .ols-ui--FlexGrid-push-0 {
                        left: auto; }
                      
                      .ols-ui--FlexGrid-push-1 {
                        left: 8.33333%; }
                      
                      .ols-ui--FlexGrid-push-2 {
                        left: 16.66667%; }
                      
                      .ols-ui--FlexGrid-push-3 {
                        left: 25%; }
                      
                      .ols-ui--FlexGrid-push-4 {
                        left: 33.33333%; }
                      
                      .ols-ui--FlexGrid-push-5 {
                        left: 41.66667%; }
                      
                      .ols-ui--FlexGrid-push-6 {
                        left: 50%; }
                      
                      .ols-ui--FlexGrid-push-7 {
                        left: 58.33333%; }
                      
                      .ols-ui--FlexGrid-push-8 {
                        left: 66.66667%; }
                      
                      .ols-ui--FlexGrid-push-9 {
                        left: 75%; }
                      
                      .ols-ui--FlexGrid-push-10 {
                        left: 83.33333%; }
                      
                      .ols-ui--FlexGrid-push-11 {
                        left: 91.66667%; }
                      
                      .ols-ui--FlexGrid-push-12 {
                        left: 100%; }
                      
                      .ols-ui--FlexGrid-offset-1 {
                        margin-left: 8.33333%; }
                      
                      .ols-ui--FlexGrid-offset-2 {
                        margin-left: 16.66667%; }
                      
                      .ols-ui--FlexGrid-offset-3 {
                        margin-left: 25%; }
                      
                      .ols-ui--FlexGrid-offset-4 {
                        margin-left: 33.33333%; }
                      
                      .ols-ui--FlexGrid-offset-5 {
                        margin-left: 41.66667%; }
                      
                      .ols-ui--FlexGrid-offset-6 {
                        margin-left: 50%; }
                      
                      .ols-ui--FlexGrid-offset-7 {
                        margin-left: 58.33333%; }
                      
                      .ols-ui--FlexGrid-offset-8 {
                        margin-left: 66.66667%; }
                      
                      .ols-ui--FlexGrid-offset-9 {
                        margin-left: 75%; }
                      
                      .ols-ui--FlexGrid-offset-10 {
                        margin-left: 83.33333%; }
                      
                      .ols-ui--FlexGrid-offset-11 {
                        margin-left: 91.66667%; }
                      
                      @media (min-width: 576px) {
                        .ols-ui--FlexGrid-col-sm {
                          max-width: 100%;
                          flex-basis: 0;
                          flex-grow: 1; }
                        .ols-ui--FlexGrid-col-sm-auto {
                          width: auto;
                          flex: 0 0 auto; }
                        .ols-ui--FlexGrid-col-sm-1 {
                          max-width: 8.33333%;
                          flex: 0 0 8.33333%; }
                        .ols-ui--FlexGrid-col-sm-2 {
                          max-width: 16.66667%;
                          flex: 0 0 16.66667%; }
                        .ols-ui--FlexGrid-col-sm-3 {
                          max-width: 25%;
                          flex: 0 0 25%; }
                        .ols-ui--FlexGrid-col-sm-4 {
                          max-width: 33.33333%;
                          flex: 0 0 33.33333%; }
                        .ols-ui--FlexGrid-col-sm-5 {
                          max-width: 41.66667%;
                          flex: 0 0 41.66667%; }
                        .ols-ui--FlexGrid-col-sm-6 {
                          max-width: 50%;
                          flex: 0 0 50%; }
                        .ols-ui--FlexGrid-col-sm-7 {
                          max-width: 58.33333%;
                          flex: 0 0 58.33333%; }
                        .ols-ui--FlexGrid-col-sm-8 {
                          max-width: 66.66667%;
                          flex: 0 0 66.66667%; }
                        .ols-ui--FlexGrid-col-sm-9 {
                          max-width: 75%;
                          flex: 0 0 75%; }
                        .ols-ui--FlexGrid-col-sm-10 {
                          max-width: 83.33333%;
                          flex: 0 0 83.33333%; }
                        .ols-ui--FlexGrid-col-sm-11 {
                          max-width: 91.66667%;
                          flex: 0 0 91.66667%; }
                        .ols-ui--FlexGrid-col-sm-12 {
                          max-width: 100%;
                          flex: 0 0 100%; }
                        .ols-ui--FlexGrid-pull-sm-0 {
                          right: auto; }
                        .ols-ui--FlexGrid-pull-sm-1 {
                          right: 8.33333%; }
                        .ols-ui--FlexGrid-pull-sm-2 {
                          right: 16.66667%; }
                        .ols-ui--FlexGrid-pull-sm-3 {
                          right: 25%; }
                        .ols-ui--FlexGrid-pull-sm-4 {
                          right: 33.33333%; }
                        .ols-ui--FlexGrid-pull-sm-5 {
                          right: 41.66667%; }
                        .ols-ui--FlexGrid-pull-sm-6 {
                          right: 50%; }
                        .ols-ui--FlexGrid-pull-sm-7 {
                          right: 58.33333%; }
                        .ols-ui--FlexGrid-pull-sm-8 {
                          right: 66.66667%; }
                        .ols-ui--FlexGrid-pull-sm-9 {
                          right: 75%; }
                        .ols-ui--FlexGrid-pull-sm-10 {
                          right: 83.33333%; }
                        .ols-ui--FlexGrid-pull-sm-11 {
                          right: 91.66667%; }
                        .ols-ui--FlexGrid-pull-sm-12 {
                          right: 100%; }
                        .ols-ui--FlexGrid-push-sm-0 {
                          left: auto; }
                        .ols-ui--FlexGrid-push-sm-1 {
                          left: 8.33333%; }
                        .ols-ui--FlexGrid-push-sm-2 {
                          left: 16.66667%; }
                        .ols-ui--FlexGrid-push-sm-3 {
                          left: 25%; }
                        .ols-ui--FlexGrid-push-sm-4 {
                          left: 33.33333%; }
                        .ols-ui--FlexGrid-push-sm-5 {
                          left: 41.66667%; }
                        .ols-ui--FlexGrid-push-sm-6 {
                          left: 50%; }
                        .ols-ui--FlexGrid-push-sm-7 {
                          left: 58.33333%; }
                        .ols-ui--FlexGrid-push-sm-8 {
                          left: 66.66667%; }
                        .ols-ui--FlexGrid-push-sm-9 {
                          left: 75%; }
                        .ols-ui--FlexGrid-push-sm-10 {
                          left: 83.33333%; }
                        .ols-ui--FlexGrid-push-sm-11 {
                          left: 91.66667%; }
                        .ols-ui--FlexGrid-push-sm-12 {
                          left: 100%; }
                        .ols-ui--FlexGrid-offset-sm-0 {
                          margin-left: 0%; }
                        .ols-ui--FlexGrid-offset-sm-1 {
                          margin-left: 8.33333%; }
                        .ols-ui--FlexGrid-offset-sm-2 {
                          margin-left: 16.66667%; }
                        .ols-ui--FlexGrid-offset-sm-3 {
                          margin-left: 25%; }
                        .ols-ui--FlexGrid-offset-sm-4 {
                          margin-left: 33.33333%; }
                        .ols-ui--FlexGrid-offset-sm-5 {
                          margin-left: 41.66667%; }
                        .ols-ui--FlexGrid-offset-sm-6 {
                          margin-left: 50%; }
                        .ols-ui--FlexGrid-offset-sm-7 {
                          margin-left: 58.33333%; }
                        .ols-ui--FlexGrid-offset-sm-8 {
                          margin-left: 66.66667%; }
                        .ols-ui--FlexGrid-offset-sm-9 {
                          margin-left: 75%; }
                        .ols-ui--FlexGrid-offset-sm-10 {
                          margin-left: 83.33333%; }
                        .ols-ui--FlexGrid-offset-sm-11 {
                          margin-left: 91.66667%; } }
                      
                      @media (min-width: 768px) {
                        .ols-ui--FlexGrid-col-md {
                          max-width: 100%;
                          flex-basis: 0;
                          flex-grow: 1; }
                        .ols-ui--FlexGrid-col-md-auto {
                          width: auto;
                          flex: 0 0 auto; }
                        .ols-ui--FlexGrid-col-md-1 {
                          max-width: 8.33333%;
                          flex: 0 0 8.33333%; }
                        .ols-ui--FlexGrid-col-md-2 {
                          max-width: 16.66667%;
                          flex: 0 0 16.66667%; }
                        .ols-ui--FlexGrid-col-md-3 {
                          max-width: 25%;
                          flex: 0 0 25%; }
                        .ols-ui--FlexGrid-col-md-4 {
                          max-width: 33.33333%;
                          flex: 0 0 33.33333%; }
                        .ols-ui--FlexGrid-col-md-5 {
                          max-width: 41.66667%;
                          flex: 0 0 41.66667%; }
                        .ols-ui--FlexGrid-col-md-6 {
                          max-width: 50%;
                          flex: 0 0 50%; }
                        .ols-ui--FlexGrid-col-md-7 {
                          max-width: 58.33333%;
                          flex: 0 0 58.33333%; }
                        .ols-ui--FlexGrid-col-md-8 {
                          max-width: 66.66667%;
                          flex: 0 0 66.66667%; }
                        .ols-ui--FlexGrid-col-md-9 {
                          max-width: 75%;
                          flex: 0 0 75%; }
                        .ols-ui--FlexGrid-col-md-10 {
                          max-width: 83.33333%;
                          flex: 0 0 83.33333%; }
                        .ols-ui--FlexGrid-col-md-11 {
                          max-width: 91.66667%;
                          flex: 0 0 91.66667%; }
                        .ols-ui--FlexGrid-col-md-12 {
                          max-width: 100%;
                          flex: 0 0 100%; }
                        .ols-ui--FlexGrid-pull-md-0 {
                          right: auto; }
                        .ols-ui--FlexGrid-pull-md-1 {
                          right: 8.33333%; }
                        .ols-ui--FlexGrid-pull-md-2 {
                          right: 16.66667%; }
                        .ols-ui--FlexGrid-pull-md-3 {
                          right: 25%; }
                        .ols-ui--FlexGrid-pull-md-4 {
                          right: 33.33333%; }
                        .ols-ui--FlexGrid-pull-md-5 {
                          right: 41.66667%; }
                        .ols-ui--FlexGrid-pull-md-6 {
                          right: 50%; }
                        .ols-ui--FlexGrid-pull-md-7 {
                          right: 58.33333%; }
                        .ols-ui--FlexGrid-pull-md-8 {
                          right: 66.66667%; }
                        .ols-ui--FlexGrid-pull-md-9 {
                          right: 75%; }
                        .ols-ui--FlexGrid-pull-md-10 {
                          right: 83.33333%; }
                        .ols-ui--FlexGrid-pull-md-11 {
                          right: 91.66667%; }
                        .ols-ui--FlexGrid-pull-md-12 {
                          right: 100%; }
                        .ols-ui--FlexGrid-push-md-0 {
                          left: auto; }
                        .ols-ui--FlexGrid-push-md-1 {
                          left: 8.33333%; }
                        .ols-ui--FlexGrid-push-md-2 {
                          left: 16.66667%; }
                        .ols-ui--FlexGrid-push-md-3 {
                          left: 25%; }
                        .ols-ui--FlexGrid-push-md-4 {
                          left: 33.33333%; }
                        .ols-ui--FlexGrid-push-md-5 {
                          left: 41.66667%; }
                        .ols-ui--FlexGrid-push-md-6 {
                          left: 50%; }
                        .ols-ui--FlexGrid-push-md-7 {
                          left: 58.33333%; }
                        .ols-ui--FlexGrid-push-md-8 {
                          left: 66.66667%; }
                        .ols-ui--FlexGrid-push-md-9 {
                          left: 75%; }
                        .ols-ui--FlexGrid-push-md-10 {
                          left: 83.33333%; }
                        .ols-ui--FlexGrid-push-md-11 {
                          left: 91.66667%; }
                        .ols-ui--FlexGrid-push-md-12 {
                          left: 100%; }
                        .ols-ui--FlexGrid-offset-md-0 {
                          margin-left: 0%; }
                        .ols-ui--FlexGrid-offset-md-1 {
                          margin-left: 8.33333%; }
                        .ols-ui--FlexGrid-offset-md-2 {
                          margin-left: 16.66667%; }
                        .ols-ui--FlexGrid-offset-md-3 {
                          margin-left: 25%; }
                        .ols-ui--FlexGrid-offset-md-4 {
                          margin-left: 33.33333%; }
                        .ols-ui--FlexGrid-offset-md-5 {
                          margin-left: 41.66667%; }
                        .ols-ui--FlexGrid-offset-md-6 {
                          margin-left: 50%; }
                        .ols-ui--FlexGrid-offset-md-7 {
                          margin-left: 58.33333%; }
                        .ols-ui--FlexGrid-offset-md-8 {
                          margin-left: 66.66667%; }
                        .ols-ui--FlexGrid-offset-md-9 {
                          margin-left: 75%; }
                        .ols-ui--FlexGrid-offset-md-10 {
                          margin-left: 83.33333%; }
                        .ols-ui--FlexGrid-offset-md-11 {
                          margin-left: 91.66667%; } }
                      
                      @media (min-width: 992px) {
                        .ols-ui--FlexGrid-col-lg {
                          max-width: 100%;
                          flex-basis: 0;
                          flex-grow: 1; }
                        .ols-ui--FlexGrid-col-lg-auto {
                          width: auto;
                          flex: 0 0 auto; }
                        .ols-ui--FlexGrid-col-lg-1 {
                          max-width: 8.33333%;
                          flex: 0 0 8.33333%; }
                        .ols-ui--FlexGrid-col-lg-2 {
                          max-width: 16.66667%;
                          flex: 0 0 16.66667%; }
                        .ols-ui--FlexGrid-col-lg-3 {
                          max-width: 25%;
                          flex: 0 0 25%; }
                        .ols-ui--FlexGrid-col-lg-4 {
                          max-width: 33.33333%;
                          flex: 0 0 33.33333%; }
                        .ols-ui--FlexGrid-col-lg-5 {
                          max-width: 41.66667%;
                          flex: 0 0 41.66667%; }
                        .ols-ui--FlexGrid-col-lg-6 {
                          max-width: 50%;
                          flex: 0 0 50%; }
                        .ols-ui--FlexGrid-col-lg-7 {
                          max-width: 58.33333%;
                          flex: 0 0 58.33333%; }
                        .ols-ui--FlexGrid-col-lg-8 {
                          max-width: 66.66667%;
                          flex: 0 0 66.66667%; }
                        .ols-ui--FlexGrid-col-lg-9 {
                          max-width: 75%;
                          flex: 0 0 75%; }
                        .ols-ui--FlexGrid-col-lg-10 {
                          max-width: 83.33333%;
                          flex: 0 0 83.33333%; }
                        .ols-ui--FlexGrid-col-lg-11 {
                          max-width: 91.66667%;
                          flex: 0 0 91.66667%; }
                        .ols-ui--FlexGrid-col-lg-12 {
                          max-width: 100%;
                          flex: 0 0 100%; }
                        .ols-ui--FlexGrid-pull-lg-0 {
                          right: auto; }
                        .ols-ui--FlexGrid-pull-lg-1 {
                          right: 8.33333%; }
                        .ols-ui--FlexGrid-pull-lg-2 {
                          right: 16.66667%; }
                        .ols-ui--FlexGrid-pull-lg-3 {
                          right: 25%; }
                        .ols-ui--FlexGrid-pull-lg-4 {
                          right: 33.33333%; }
                        .ols-ui--FlexGrid-pull-lg-5 {
                          right: 41.66667%; }
                        .ols-ui--FlexGrid-pull-lg-6 {
                          right: 50%; }
                        .ols-ui--FlexGrid-pull-lg-7 {
                          right: 58.33333%; }
                        .ols-ui--FlexGrid-pull-lg-8 {
                          right: 66.66667%; }
                        .ols-ui--FlexGrid-pull-lg-9 {
                          right: 75%; }
                        .ols-ui--FlexGrid-pull-lg-10 {
                          right: 83.33333%; }
                        .ols-ui--FlexGrid-pull-lg-11 {
                          right: 91.66667%; }
                        .ols-ui--FlexGrid-pull-lg-12 {
                          right: 100%; }
                        .ols-ui--FlexGrid-push-lg-0 {
                          left: auto; }
                        .ols-ui--FlexGrid-push-lg-1 {
                          left: 8.33333%; }
                        .ols-ui--FlexGrid-push-lg-2 {
                          left: 16.66667%; }
                        .ols-ui--FlexGrid-push-lg-3 {
                          left: 25%; }
                        .ols-ui--FlexGrid-push-lg-4 {
                          left: 33.33333%; }
                        .ols-ui--FlexGrid-push-lg-5 {
                          left: 41.66667%; }
                        .ols-ui--FlexGrid-push-lg-6 {
                          left: 50%; }
                        .ols-ui--FlexGrid-push-lg-7 {
                          left: 58.33333%; }
                        .ols-ui--FlexGrid-push-lg-8 {
                          left: 66.66667%; }
                        .ols-ui--FlexGrid-push-lg-9 {
                          left: 75%; }
                        .ols-ui--FlexGrid-push-lg-10 {
                          left: 83.33333%; }
                        .ols-ui--FlexGrid-push-lg-11 {
                          left: 91.66667%; }
                        .ols-ui--FlexGrid-push-lg-12 {
                          left: 100%; }
                        .ols-ui--FlexGrid-offset-lg-0 {
                          margin-left: 0%; }
                        .ols-ui--FlexGrid-offset-lg-1 {
                          margin-left: 8.33333%; }
                        .ols-ui--FlexGrid-offset-lg-2 {
                          margin-left: 16.66667%; }
                        .ols-ui--FlexGrid-offset-lg-3 {
                          margin-left: 25%; }
                        .ols-ui--FlexGrid-offset-lg-4 {
                          margin-left: 33.33333%; }
                        .ols-ui--FlexGrid-offset-lg-5 {
                          margin-left: 41.66667%; }
                        .ols-ui--FlexGrid-offset-lg-6 {
                          margin-left: 50%; }
                        .ols-ui--FlexGrid-offset-lg-7 {
                          margin-left: 58.33333%; }
                        .ols-ui--FlexGrid-offset-lg-8 {
                          margin-left: 66.66667%; }
                        .ols-ui--FlexGrid-offset-lg-9 {
                          margin-left: 75%; }
                        .ols-ui--FlexGrid-offset-lg-10 {
                          margin-left: 83.33333%; }
                        .ols-ui--FlexGrid-offset-lg-11 {
                          margin-left: 91.66667%; } }
                      
                      @media (min-width: 1200px) {
                        .ols-ui--FlexGrid-col-xl {
                          max-width: 100%;
                          flex-basis: 0;
                          flex-grow: 1; }
                        .ols-ui--FlexGrid-col-xl-auto {
                          width: auto;
                          flex: 0 0 auto; }
                        .ols-ui--FlexGrid-col-xl-1 {
                          max-width: 8.33333%;
                          flex: 0 0 8.33333%; }
                        .ols-ui--FlexGrid-col-xl-2 {
                          max-width: 16.66667%;
                          flex: 0 0 16.66667%; }
                        .ols-ui--FlexGrid-col-xl-3 {
                          max-width: 25%;
                          flex: 0 0 25%; }
                        .ols-ui--FlexGrid-col-xl-4 {
                          max-width: 33.33333%;
                          flex: 0 0 33.33333%; }
                        .ols-ui--FlexGrid-col-xl-5 {
                          max-width: 41.66667%;
                          flex: 0 0 41.66667%; }
                        .ols-ui--FlexGrid-col-xl-6 {
                          max-width: 50%;
                          flex: 0 0 50%; }
                        .ols-ui--FlexGrid-col-xl-7 {
                          max-width: 58.33333%;
                          flex: 0 0 58.33333%; }
                        .ols-ui--FlexGrid-col-xl-8 {
                          max-width: 66.66667%;
                          flex: 0 0 66.66667%; }
                        .ols-ui--FlexGrid-col-xl-9 {
                          max-width: 75%;
                          flex: 0 0 75%; }
                        .ols-ui--FlexGrid-col-xl-10 {
                          max-width: 83.33333%;
                          flex: 0 0 83.33333%; }
                        .ols-ui--FlexGrid-col-xl-11 {
                          max-width: 91.66667%;
                          flex: 0 0 91.66667%; }
                        .ols-ui--FlexGrid-col-xl-12 {
                          max-width: 100%;
                          flex: 0 0 100%; }
                        .ols-ui--FlexGrid-pull-xl-0 {
                          right: auto; }
                        .ols-ui--FlexGrid-pull-xl-1 {
                          right: 8.33333%; }
                        .ols-ui--FlexGrid-pull-xl-2 {
                          right: 16.66667%; }
                        .ols-ui--FlexGrid-pull-xl-3 {
                          right: 25%; }
                        .ols-ui--FlexGrid-pull-xl-4 {
                          right: 33.33333%; }
                        .ols-ui--FlexGrid-pull-xl-5 {
                          right: 41.66667%; }
                        .ols-ui--FlexGrid-pull-xl-6 {
                          right: 50%; }
                        .ols-ui--FlexGrid-pull-xl-7 {
                          right: 58.33333%; }
                        .ols-ui--FlexGrid-pull-xl-8 {
                          right: 66.66667%; }
                        .ols-ui--FlexGrid-pull-xl-9 {
                          right: 75%; }
                        .ols-ui--FlexGrid-pull-xl-10 {
                          right: 83.33333%; }
                        .ols-ui--FlexGrid-pull-xl-11 {
                          right: 91.66667%; }
                        .ols-ui--FlexGrid-pull-xl-12 {
                          right: 100%; }
                        .ols-ui--FlexGrid-push-xl-0 {
                          left: auto; }
                        .ols-ui--FlexGrid-push-xl-1 {
                          left: 8.33333%; }
                        .ols-ui--FlexGrid-push-xl-2 {
                          left: 16.66667%; }
                        .ols-ui--FlexGrid-push-xl-3 {
                          left: 25%; }
                        .ols-ui--FlexGrid-push-xl-4 {
                          left: 33.33333%; }
                        .ols-ui--FlexGrid-push-xl-5 {
                          left: 41.66667%; }
                        .ols-ui--FlexGrid-push-xl-6 {
                          left: 50%; }
                        .ols-ui--FlexGrid-push-xl-7 {
                          left: 58.33333%; }
                        .ols-ui--FlexGrid-push-xl-8 {
                          left: 66.66667%; }
                        .ols-ui--FlexGrid-push-xl-9 {
                          left: 75%; }
                        .ols-ui--FlexGrid-push-xl-10 {
                          left: 83.33333%; }
                        .ols-ui--FlexGrid-push-xl-11 {
                          left: 91.66667%; }
                        .ols-ui--FlexGrid-push-xl-12 {
                          left: 100%; }
                        .ols-ui--FlexGrid-offset-xl-0 {
                          margin-left: 0%; }
                        .ols-ui--FlexGrid-offset-xl-1 {
                          margin-left: 8.33333%; }
                        .ols-ui--FlexGrid-offset-xl-2 {
                          margin-left: 16.66667%; }
                        .ols-ui--FlexGrid-offset-xl-3 {
                          margin-left: 25%; }
                        .ols-ui--FlexGrid-offset-xl-4 {
                          margin-left: 33.33333%; }
                        .ols-ui--FlexGrid-offset-xl-5 {
                          margin-left: 41.66667%; }
                        .ols-ui--FlexGrid-offset-xl-6 {
                          margin-left: 50%; }
                        .ols-ui--FlexGrid-offset-xl-7 {
                          margin-left: 58.33333%; }
                        .ols-ui--FlexGrid-offset-xl-8 {
                          margin-left: 66.66667%; }
                        .ols-ui--FlexGrid-offset-xl-9 {
                          margin-left: 75%; }
                        .ols-ui--FlexGrid-offset-xl-10 {
                          margin-left: 83.33333%; }
                        .ols-ui--FlexGrid-offset-xl-11 {
                          margin-left: 91.66667%; } }
                      
                      .ols-ui--FlexGrid-order-first {
                        order: -1; }
                      
                      .ols-ui--FlexGrid-order-last {
                        order: 1; }
                      
                      .ols-ui--FlexGrid-order-0 {
                        order: 0; }
                      
                      .ols-ui--FlexGrid-flex-row {
                        flex-direction: row !important; }
                      
                      .ols-ui--FlexGrid-flex-column {
                        flex-direction: column !important; }
                      
                      .ols-ui--FlexGrid-flex-row-reverse {
                        flex-direction: row-reverse !important; }
                      
                      .ols-ui--FlexGrid-flex-column-reverse {
                        flex-direction: column-reverse !important; }
                      
                      .ols-ui--FlexGrid-flex-wrap {
                        flex-wrap: wrap !important; }
                      
                      .ols-ui--FlexGrid-flex-nowrap {
                        flex-wrap: nowrap !important; }
                      
                      .ols-ui--FlexGrid-flex-wrap-reverse {
                        flex-wrap: wrap-reverse !important; }
                      
                      .ols-ui--FlexGrid-justify-content-start {
                        justify-content: flex-start !important; }
                      
                      .ols-ui--FlexGrid-justify-content-end {
                        justify-content: flex-end !important; }
                      
                      .ols-ui--FlexGrid-justify-content-center {
                        justify-content: center !important; }
                      
                      .ols-ui--FlexGrid-justify-content-between {
                        justify-content: space-between !important; }
                      
                      .ols-ui--FlexGrid-justify-content-around {
                        justify-content: space-around !important; }
                      
                      .ols-ui--FlexGrid-align-items-start {
                        align-items: flex-start !important; }
                      
                      .ols-ui--FlexGrid-align-items-end {
                        align-items: flex-end !important; }
                      
                      .ols-ui--FlexGrid-align-items-center {
                        align-items: center !important; }
                      
                      .ols-ui--FlexGrid-align-items-baseline {
                        align-items: baseline !important; }
                      
                      .ols-ui--FlexGrid-align-items-stretch {
                        align-items: stretch !important; }
                      
                      .ols-ui--FlexGrid-align-content-start {
                        align-content: flex-start !important; }
                      
                      .ols-ui--FlexGrid-align-content-end {
                        align-content: flex-end !important; }
                      
                      .ols-ui--FlexGrid-align-content-center {
                        align-content: center !important; }
                      
                      .ols-ui--FlexGrid-align-content-between {
                        align-content: space-between !important; }
                      
                      .ols-ui--FlexGrid-align-content-around {
                        align-content: space-around !important; }
                      
                      .ols-ui--FlexGrid-align-content-stretch {
                        align-content: stretch !important; }
                      
                      .ols-ui--FlexGrid-align-self-auto {
                        align-self: auto !important; }
                      
                      .ols-ui--FlexGrid-align-self-start {
                        align-self: flex-start !important; }
                      
                      .ols-ui--FlexGrid-align-self-end {
                        align-self: flex-end !important; }
                      
                      .ols-ui--FlexGrid-align-self-center {
                        align-self: center !important; }
                      
                      .ols-ui--FlexGrid-align-self-baseline {
                        align-self: baseline !important; }
                      
                      .ols-ui--FlexGrid-align-self-stretch {
                        align-self: stretch !important; }
                      
                      @media (min-width: 576px) {
                        .ols-ui--FlexGrid-order-sm-first {
                          order: -1; }
                        .ols-ui--FlexGrid-order-sm-last {
                          order: 1; }
                        .ols-ui--FlexGrid-order-sm-0 {
                          order: 0; }
                        .ols-ui--FlexGrid-flex-sm-row {
                          flex-direction: row !important; }
                        .ols-ui--FlexGrid-flex-sm-column {
                          flex-direction: column !important; }
                        .ols-ui--FlexGrid-flex-sm-row-reverse {
                          flex-direction: row-reverse !important; }
                        .ols-ui--FlexGrid-flex-sm-column-reverse {
                          flex-direction: column-reverse !important; }
                        .ols-ui--FlexGrid-flex-sm-wrap {
                          flex-wrap: wrap !important; }
                        .ols-ui--FlexGrid-flex-sm-nowrap {
                          flex-wrap: nowrap !important; }
                        .ols-ui--FlexGrid-flex-sm-wrap-reverse {
                          flex-wrap: wrap-reverse !important; }
                        .ols-ui--FlexGrid-justify-content-sm-start {
                          justify-content: flex-start !important; }
                        .ols-ui--FlexGrid-justify-content-sm-end {
                          justify-content: flex-end !important; }
                        .ols-ui--FlexGrid-justify-content-sm-center {
                          justify-content: center !important; }
                        .ols-ui--FlexGrid-justify-content-sm-between {
                          justify-content: space-between !important; }
                        .ols-ui--FlexGrid-justify-content-sm-around {
                          justify-content: space-around !important; }
                        .ols-ui--FlexGrid-align-items-sm-start {
                          align-items: flex-start !important; }
                        .ols-ui--FlexGrid-align-items-sm-end {
                          align-items: flex-end !important; }
                        .ols-ui--FlexGrid-align-items-sm-center {
                          align-items: center !important; }
                        .ols-ui--FlexGrid-align-items-sm-baseline {
                          align-items: baseline !important; }
                        .ols-ui--FlexGrid-align-items-sm-stretch {
                          align-items: stretch !important; }
                        .ols-ui--FlexGrid-align-content-sm-start {
                          align-content: flex-start !important; }
                        .ols-ui--FlexGrid-align-content-sm-end {
                          align-content: flex-end !important; }
                        .ols-ui--FlexGrid-align-content-sm-center {
                          align-content: center !important; }
                        .ols-ui--FlexGrid-align-content-sm-between {
                          align-content: space-between !important; }
                        .ols-ui--FlexGrid-align-content-sm-around {
                          align-content: space-around !important; }
                        .ols-ui--FlexGrid-align-content-sm-stretch {
                          align-content: stretch !important; }
                        .ols-ui--FlexGrid-align-self-sm-auto {
                          align-self: auto !important; }
                        .ols-ui--FlexGrid-align-self-sm-start {
                          align-self: flex-start !important; }
                        .ols-ui--FlexGrid-align-self-sm-end {
                          align-self: flex-end !important; }
                        .ols-ui--FlexGrid-align-self-sm-center {
                          align-self: center !important; }
                        .ols-ui--FlexGrid-align-self-sm-baseline {
                          align-self: baseline !important; }
                        .ols-ui--FlexGrid-align-self-sm-stretch {
                          align-self: stretch !important; } }
                      
                      @media (min-width: 768px) {
                        .ols-ui--FlexGrid-order-md-first {
                          order: -1; }
                        .ols-ui--FlexGrid-order-md-last {
                          order: 1; }
                        .ols-ui--FlexGrid-order-md-0 {
                          order: 0; }
                        .ols-ui--FlexGrid-flex-md-row {
                          flex-direction: row !important; }
                        .ols-ui--FlexGrid-flex-md-column {
                          flex-direction: column !important; }
                        .ols-ui--FlexGrid-flex-md-row-reverse {
                          flex-direction: row-reverse !important; }
                        .ols-ui--FlexGrid-flex-md-column-reverse {
                          flex-direction: column-reverse !important; }
                        .ols-ui--FlexGrid-flex-md-wrap {
                          flex-wrap: wrap !important; }
                        .ols-ui--FlexGrid-flex-md-nowrap {
                          flex-wrap: nowrap !important; }
                        .ols-ui--FlexGrid-flex-md-wrap-reverse {
                          flex-wrap: wrap-reverse !important; }
                        .ols-ui--FlexGrid-justify-content-md-start {
                          justify-content: flex-start !important; }
                        .ols-ui--FlexGrid-justify-content-md-end {
                          justify-content: flex-end !important; }
                        .ols-ui--FlexGrid-justify-content-md-center {
                          justify-content: center !important; }
                        .ols-ui--FlexGrid-justify-content-md-between {
                          justify-content: space-between !important; }
                        .ols-ui--FlexGrid-justify-content-md-around {
                          justify-content: space-around !important; }
                        .ols-ui--FlexGrid-align-items-md-start {
                          align-items: flex-start !important; }
                        .ols-ui--FlexGrid-align-items-md-end {
                          align-items: flex-end !important; }
                        .ols-ui--FlexGrid-align-items-md-center {
                          align-items: center !important; }
                        .ols-ui--FlexGrid-align-items-md-baseline {
                          align-items: baseline !important; }
                        .ols-ui--FlexGrid-align-items-md-stretch {
                          align-items: stretch !important; }
                        .ols-ui--FlexGrid-align-content-md-start {
                          align-content: flex-start !important; }
                        .ols-ui--FlexGrid-align-content-md-end {
                          align-content: flex-end !important; }
                        .ols-ui--FlexGrid-align-content-md-center {
                          align-content: center !important; }
                        .ols-ui--FlexGrid-align-content-md-between {
                          align-content: space-between !important; }
                        .ols-ui--FlexGrid-align-content-md-around {
                          align-content: space-around !important; }
                        .ols-ui--FlexGrid-align-content-md-stretch {
                          align-content: stretch !important; }
                        .ols-ui--FlexGrid-align-self-md-auto {
                          align-self: auto !important; }
                        .ols-ui--FlexGrid-align-self-md-start {
                          align-self: flex-start !important; }
                        .ols-ui--FlexGrid-align-self-md-end {
                          align-self: flex-end !important; }
                        .ols-ui--FlexGrid-align-self-md-center {
                          align-self: center !important; }
                        .ols-ui--FlexGrid-align-self-md-baseline {
                          align-self: baseline !important; }
                        .ols-ui--FlexGrid-align-self-md-stretch {
                          align-self: stretch !important; } }
                      
                      @media (min-width: 992px) {
                        .ols-ui--FlexGrid-order-lg-first {
                          order: -1; }
                        .ols-ui--FlexGrid-order-lg-last {
                          order: 1; }
                        .ols-ui--FlexGrid-order-lg-0 {
                          order: 0; }
                        .ols-ui--FlexGrid-flex-lg-row {
                          flex-direction: row !important; }
                        .ols-ui--FlexGrid-flex-lg-column {
                          flex-direction: column !important; }
                        .ols-ui--FlexGrid-flex-lg-row-reverse {
                          flex-direction: row-reverse !important; }
                        .ols-ui--FlexGrid-flex-lg-column-reverse {
                          flex-direction: column-reverse !important; }
                        .ols-ui--FlexGrid-flex-lg-wrap {
                          flex-wrap: wrap !important; }
                        .ols-ui--FlexGrid-flex-lg-nowrap {
                          flex-wrap: nowrap !important; }
                        .ols-ui--FlexGrid-flex-lg-wrap-reverse {
                          flex-wrap: wrap-reverse !important; }
                        .ols-ui--FlexGrid-justify-content-lg-start {
                          justify-content: flex-start !important; }
                        .ols-ui--FlexGrid-justify-content-lg-end {
                          justify-content: flex-end !important; }
                        .ols-ui--FlexGrid-justify-content-lg-center {
                          justify-content: center !important; }
                        .ols-ui--FlexGrid-justify-content-lg-between {
                          justify-content: space-between !important; }
                        .ols-ui--FlexGrid-justify-content-lg-around {
                          justify-content: space-around !important; }
                        .ols-ui--FlexGrid-align-items-lg-start {
                          align-items: flex-start !important; }
                        .ols-ui--FlexGrid-align-items-lg-end {
                          align-items: flex-end !important; }
                        .ols-ui--FlexGrid-align-items-lg-center {
                          align-items: center !important; }
                        .ols-ui--FlexGrid-align-items-lg-baseline {
                          align-items: baseline !important; }
                        .ols-ui--FlexGrid-align-items-lg-stretch {
                          align-items: stretch !important; }
                        .ols-ui--FlexGrid-align-content-lg-start {
                          align-content: flex-start !important; }
                        .ols-ui--FlexGrid-align-content-lg-end {
                          align-content: flex-end !important; }
                        .ols-ui--FlexGrid-align-content-lg-center {
                          align-content: center !important; }
                        .ols-ui--FlexGrid-align-content-lg-between {
                          align-content: space-between !important; }
                        .ols-ui--FlexGrid-align-content-lg-around {
                          align-content: space-around !important; }
                        .ols-ui--FlexGrid-align-content-lg-stretch {
                          align-content: stretch !important; }
                        .ols-ui--FlexGrid-align-self-lg-auto {
                          align-self: auto !important; }
                        .ols-ui--FlexGrid-align-self-lg-start {
                          align-self: flex-start !important; }
                        .ols-ui--FlexGrid-align-self-lg-end {
                          align-self: flex-end !important; }
                        .ols-ui--FlexGrid-align-self-lg-center {
                          align-self: center !important; }
                        .ols-ui--FlexGrid-align-self-lg-baseline {
                          align-self: baseline !important; }
                        .ols-ui--FlexGrid-align-self-lg-stretch {
                          align-self: stretch !important; } }
                      
                      @media (min-width: 1200px) {
                        .ols-ui--FlexGrid-order-xl-first {
                          order: -1; }
                        .ols-ui--FlexGrid-order-xl-last {
                          order: 1; }
                        .ols-ui--FlexGrid-order-xl-0 {
                          order: 0; }
                        .ols-ui--FlexGrid-flex-xl-row {
                          flex-direction: row !important; }
                        .ols-ui--FlexGrid-flex-xl-column {
                          flex-direction: column !important; }
                        .ols-ui--FlexGrid-flex-xl-row-reverse {
                          flex-direction: row-reverse !important; }
                        .ols-ui--FlexGrid-flex-xl-column-reverse {
                          flex-direction: column-reverse !important; }
                        .ols-ui--FlexGrid-flex-xl-wrap {
                          flex-wrap: wrap !important; }
                        .ols-ui--FlexGrid-flex-xl-nowrap {
                          flex-wrap: nowrap !important; }
                        .ols-ui--FlexGrid-flex-xl-wrap-reverse {
                          flex-wrap: wrap-reverse !important; }
                        .ols-ui--FlexGrid-justify-content-xl-start {
                          justify-content: flex-start !important; }
                        .ols-ui--FlexGrid-justify-content-xl-end {
                          justify-content: flex-end !important; }
                        .ols-ui--FlexGrid-justify-content-xl-center {
                          justify-content: center !important; }
                        .ols-ui--FlexGrid-justify-content-xl-between {
                          justify-content: space-between !important; }
                        .ols-ui--FlexGrid-justify-content-xl-around {
                          justify-content: space-around !important; }
                        .ols-ui--FlexGrid-align-items-xl-start {
                          align-items: flex-start !important; }
                        .ols-ui--FlexGrid-align-items-xl-end {
                          align-items: flex-end !important; }
                        .ols-ui--FlexGrid-align-items-xl-center {
                          align-items: center !important; }
                        .ols-ui--FlexGrid-align-items-xl-baseline {
                          align-items: baseline !important; }
                        .ols-ui--FlexGrid-align-items-xl-stretch {
                          align-items: stretch !important; }
                        .ols-ui--FlexGrid-align-content-xl-start {
                          align-content: flex-start !important; }
                        .ols-ui--FlexGrid-align-content-xl-end {
                          align-content: flex-end !important; }
                        .ols-ui--FlexGrid-align-content-xl-center {
                          align-content: center !important; }
                        .ols-ui--FlexGrid-align-content-xl-between {
                          align-content: space-between !important; }
                        .ols-ui--FlexGrid-align-content-xl-around {
                          align-content: space-around !important; }
                        .ols-ui--FlexGrid-align-content-xl-stretch {
                          align-content: stretch !important; }
                        .ols-ui--FlexGrid-align-self-xl-auto {
                          align-self: auto !important; }
                        .ols-ui--FlexGrid-align-self-xl-start {
                          align-self: flex-start !important; }
                        .ols-ui--FlexGrid-align-self-xl-end {
                          align-self: flex-end !important; }
                        .ols-ui--FlexGrid-align-self-xl-center {
                          align-self: center !important; }
                        .ols-ui--FlexGrid-align-self-xl-baseline {
                          align-self: baseline !important; }
                        .ols-ui--FlexGrid-align-self-xl-stretch {
                          align-self: stretch !important; } }
                      .ols-ui--Links-sr-only {
                        position: absolute;
                        overflow: hidden;
                        width: 1px;
                        height: 1px;
                        padding: 0;
                        border: 0;
                        margin: -1px;
                        clip: rect(1px, 1px, 1px, 1px);
                        -webkit-clip-path: inset(50%);
                                clip-path: inset(50%);
                        word-wrap: normal; }
                      
                      a:focus {
                        outline: 3px solid #2491ff;
                        outline-offset: 0; }
                      
                      .ols-ui--Links-link {
                        color: #00599c !important;
                        text-decoration: underline; }
                        .ols-ui--Links-link:hover {
                          color: #002d62 !important; }
                        .ols-ui--Links-link:focus {
                          outline: 3px solid #2491ff;
                          outline-offset: 0; }
                        .ols-ui--Links-link:active {
                          color: #002346; }
                        .ols-ui--Links-link:visited {
                          color: #6e41a0; }
                      
                      .ols-ui--Links-externalLink {
                        margin-right: 6px;
                        margin-left: 1px;
                        color: #00599c !important;
                        background: transparent !important;
                        padding: none; }
                        .ols-ui--Links-externalLink:hover {
                          color: #002d62 !important; }
                        .ols-ui--Links-externalLink:focus {
                          outline: 3px solid #2491ff;
                          outline-offset: 0; }
                        .ols-ui--Links-externalLink:active {
                          color: #002346; }
                        .ols-ui--Links-externalLink:visited {
                          color: #6e41a0; }
                        .ols-ui--Links-externalLink:visited svg {
                          fill: #6e41a0; }
                      
                      .ols-ui--Links-externalLinkIcon {
                        margin-left: 4px; }
                      
                      .ols-ui--Links-emailLinkIcon {
                        margin-left: 4px;
                        top: 0 !important; }
                      .ols-ui--Footer-srOnly {
                        position: absolute;
                        overflow: hidden;
                        width: 1px;
                        height: 1px;
                        padding: 0;
                        border: 0;
                        margin: -1px;
                        clip: rect(1px, 1px, 1px, 1px);
                        -webkit-clip-path: inset(50%);
                                clip-path: inset(50%);
                        word-wrap: normal; }
                      
                      .ols-ui--Footer-footer {
                        flex-shrink: 0;
                        padding: 1em 0;
                        background: #1b1b1b;
                        text-align: center; }
                        @media (min-width: 768px) {
                          .ols-ui--Footer-footer {
                            text-align: left; } }
                      
                      .ols-ui--Footer-logo {
                        width: 80px;
                        height: 28px;
                        fill: #ffffff;
                        vertical-align: middle; }
                      
                      .ols-ui--Footer-linksContainer {
                        display: flex;
                        justify-content: center; }
                        @media (min-width: 768px) {
                          .ols-ui--Footer-linksContainer {
                            align-items: center;
                            justify-content: flex-end; } }
                      
                      .ols-ui--Footer-linksContainer ul {
                        padding-left: 0;
                        margin-top: 0;
                        margin-bottom: 0;
                        list-style: none !important;
                        list-style-type: none !important; }
                        .ols-ui--Footer-linksContainer ul > li {
                          margin-bottom: 0; }
                      
                      .ols-ui--Footer-linksContainer li {
                        display: block;
                        border: none;
                        margin: 0.75em 0; }
                        @media (min-width: 768px) {
                          .ols-ui--Footer-linksContainer li {
                            display: inline-block;
                            padding: 0 1em;
                            border-right: solid 1px rgba(255, 255, 255, 0.5);
                            margin: 0; } }
                        @media (max-width: 991px) {
                          .ols-ui--Footer-linksContainer li {
                            font-size: 12px; } }
                        .ols-ui--Footer-linksContainer li:first-of-type {
                          padding-left: 0; }
                        .ols-ui--Footer-linksContainer li:last-of-type {
                          padding-right: 0;
                          border-right: none; }
                        .ols-ui--Footer-linksContainer li a {
                          font-weight: normal;
                          font-size: 15px; }
                        .ols-ui--Footer-linksContainer li a,
                        .ols-ui--Footer-linksContainer li a:visited {
                          color: #ffffff !important;
                          text-decoration: none; }
                        .ols-ui--Footer-linksContainer li a:hover,
                        .ols-ui--Footer-linksContainer li a:focus {
                          color: #ffffff;
                          text-decoration: underline; }
                        .ols-ui--Footer-linksContainer li a:visited svg {
                          color: #ffffff !important;
                          fill: #ffffff !important; }
                      
                      .ols-ui--Footer-footerTop {
                        background: #f3f3f3;
                        border-top: 5px solid #1b1b1b;
                        color: #1b1b1b;
                        flex-shrink: 0;
                        padding: 1.5em 0;
                        text-align: left;
                        display: block; }
                      
                      .ols-ui--Footer-footerTop,
                      .ols-ui--Footer-footerTop a {
                        color: #1b1b1b; }
                      
                      .ols-ui--Footer-footerTop a {
                        text-decoration: none; }
                        .ols-ui--Footer-footerTop a:hover {
                          text-decoration: underline; }
                      
                      .ols-ui--Footer-footerTop .ols-ui--Footer-menuGroup {
                        padding-bottom: 32px;
                        padding-top: 32px; }
                      
                      .ols-ui--Footer-footerTopGroup .ols-ui--Footer-groupLabel {
                        font-weight: bold;
                        font-size: 14px;
                        padding: 0;
                        line-height: 24px;
                        text-transform: uppercase; }
                      
                      .ols-ui--Footer-footerTopGroup li,
                      .ols-ui--Footer-footerTopGroup .ols-ui--Footer-groupLabel {
                        margin-bottom: 16px; }
                      
                      .ols-ui--Footer-footerTopRight img {
                        display: inline-block;
                        width: 25px;
                        vertical-align: middle; }
                      
                      .ols-ui--Footer-footerTopLeft div span {
                        display: inline-block;
                        line-height: 21px;
                        height: 21px;
                        vertical-align: middle;
                        font-size: 14px;
                        font-style: italic;
                        margin-left: 10px; }
                      
                      .ols-ui--Footer-footerTopRight {
                        text-align: right; }
                      
                      .ols-ui--Footer-footerTopRight ul {
                        list-style-type: none;
                        padding-left: 0;
                        margin-left: 0; }
                      
                      .ols-ui--Footer-footerTopRight li {
                        display: inline-block;
                        margin-right: 10px; }
                        .ols-ui--Footer-footerTopRight li:last-child {
                          margin-right: 0; }
                      
                      /* For 508 Sanbox testing -- please remove when done */
                      .ols-ui--Footer-footer, .ols-ui--Footer-footerTop {
                        z-index: 10; }
                      
                      /* FOOTERTOP ACCORDION GROUP */
                      .ols-ui--Footer-MobileFooterGroup [data-component="AccordionItem"] h4 {
                        line-height: 24px; }
                      
                      .ols-ui--Footer-MobileFooterGroup [data-component="TriggerCollapseIcon"],
                      .ols-ui--Footer-MobileFooterGroup [data-component="TriggerExpandIcon"] {
                        width: 16px;
                        height: 16px;
                        display: inline-block;
                        position: relative;
                        top: 0;
                        margin-right: 8px;
                        font-size: 16px; }
                    `}
                  </DocsCode>
                </Panel>
              </Tab>

            </TabView>
            <span className={appStyles.disclaimer}><strong>Note:</strong> Use browser inspect tool to view the component at various breakpoints.</span>
          </DocsSection>

          <DocsSection title="When to use">
            <p>
              Use this footer with the IRS logo to offer a small number important links.
            </p>
          </DocsSection>

          <DocsSection title="Specifications">
            <h3>Typography</h3>
            <Table
              caption="Footer Typography Specifications"
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
                  <TableHeaderCell>Logo</TableHeaderCell>
                  <TableCell>
                    <Link to="/styles/typography/#display-type">
                      Body Text
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Link to="/styles/colors">
                      White
                    </Link>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableHeaderCell>Footer links</TableHeaderCell>
                  <TableCell>
                    <Link to="/styles/typography/#display-type">
                      Body Text
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Link to="/styles/colors">
                      White
                    </Link>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableHeaderCell>Footer Site Map links</TableHeaderCell>
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
              </tbody>
            </Table>

            <h3>Footer Elements</h3>
            <Table
              caption="Footer Elements Specifications"
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
                      Gray Darkest
                    </Link>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableHeaderCell>Footer link divider</TableHeaderCell>
                  <TableCell>1px solid</TableCell>
                  <TableCell>
                    <code>rgba(<Link to="/styles/colors">White</Link>, 0.5)
                    </code>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableHeaderCell>Text Align</TableHeaderCell>
                  <TableCell>left</TableCell>
                  <TableCell>N/A</TableCell>
                </TableRow>
                <TableRow>
                  <TableHeaderCell>Gutter (left/right)</TableHeaderCell>
                  <TableCell>20px</TableCell>
                  <TableCell>N/A</TableCell>
                </TableRow>
                <TableRow>
                  <TableHeaderCell>Gutter (top/bottom)</TableHeaderCell>
                  <TableCell>16px</TableCell>
                  <TableCell>N/A</TableCell>
                </TableRow>
                <TableRow>
                  <TableHeaderCell>Link gutter (left/right)</TableHeaderCell>
                  <TableCell>16px</TableCell>
                  <TableCell>N/A</TableCell>
                </TableRow>
                <TableRow>
                  <TableHeaderCell>Min-width</TableHeaderCell>
                  <TableCell>768px</TableCell>
                  <TableCell>N/A</TableCell>
                </TableRow>
                <TableRow>
                  <TableHeaderCell>Vertical-align</TableHeaderCell>
                  <TableCell>baseline</TableCell>
                  <TableCell>N/A</TableCell>
                </TableRow>
              </tbody>
            </Table>

            <h3>Footer Site Map Elements</h3>
            <Table
              caption="Footer Site Map Elements Specifications"
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
                      Gray Lighter
                    </Link>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableHeaderCell>Footer Site Map Border</TableHeaderCell>
                  <TableCell>5px solid</TableCell>
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
            <List>
              <ListItem>
                Footers are always located full width, across the bottom of the webpage just below the final piece of content on the page. They are the final element on the bottom of the webpage.
              </ListItem>
              <ListItem>
                IRS footers can include an optional footer site map and a footer bar with privacy policy information and links to relevant external sites.
                <List type="ol">
                  <ListItem><strong>Footer Site Map (optional)</strong><br />
                    Typically located on IRS.gov pages, the Footer Site Map contains a list of categories with links related to those categories listed as columns underneath each category title. The link category titles are displayed in a bolded typeface and in all caps.
                    <br />
                    The Footer Site Map includes links to the IRS homepage and IRS social
                    media sites. Each of these links is denoted by the site's icon.
                  </ListItem>
                  <ListItem><strong>Footer Bar</strong>
                    <br />The footer bar is comprised of a single bar and includes:
                    <List type="ol">
                      <ListItem>The IRS logo (link to IRS.gov homepage),</ListItem>
                      <ListItem>"Privacy Policy" with external website link logo (link to privacy policy), and</ListItem>
                      <ListItem>"Accessibility" with external website link logo (link to Accessibility tools and information).</ListItem>
                    </List>
                  </ListItem>
                </List>
              </ListItem>
            </List>
          </DocsSection>

          <DocsSection title="Accessibility">
            <h3>Use "ContentInfo" landmark</h3>
            <p>
              A "contentinfo" landmark is a way to identify common information at the bottom of each page within a website, typically called the "footer" of the page, including information such as copyrights and links to privacy and accessibility statements. Landmarks help assistive technology (AT) users orient themselves to a page and help them navigate easily to various sections of a page. They also provide an easy way for users of assistive technology to skip over blocks of content that are repeated on multiple pages and notify them of programmatic structure of a page.
            </p>

            <h3>Ensure footer links are in the logical tabbing order</h3>
            <p>
              The header links need to receive focus in an order that follows sequences and relationships in the content.  The list structure <code>(ul/ol)</code> is useful to group footer links. When this is done, it helps screen reader users to navigate from the first item in a list to the end of the list or jump to the next list. This helps them to bypass groups of links if they choose to.
            </p>

            <h3>Ensure footer links functionality is available from a keyboard.</h3>
            <p>
              When all functionality can be operated through a keyboard or keyboard interface, it can be operated by those with no vision as well as by those who must use alternate keyboards or input devices that act as keyboard emulators like speech input software or on-screen keyboards.
            </p>

            <h3>Ensure footer links display visible focus when they receive focus</h3>
            <p>
              The objective of this technique is to ensure that the focused component can be visually identified by the user. For example, when footer links receive focus, they are surrounded by a dotted focus highlight rectangle.
            </p>

            <h3>Applicable Standards</h3>

            <p>Web Content Accessibility Guidelines (WCAG) 2.0</p>

            <ul>
              <li>
                2.1.1 Keyboard Accessibility
              </li>
              <li>
                2.4.3 Focus Order
              </li>
              <li>
                2.4.1 Bypass Blocks
              </li>
              <li>
                3.2.3 Consistent Navigation
              </li>
            </ul>
          </DocsSection>
        </DocsPage>
      </DocsPage>
    </div>
  );
}
