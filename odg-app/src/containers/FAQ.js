import React from "react";
import Helmet from "react-helmet";
import { withRouter } from "react-router";
import { FlexContainer } from "../../../ols-ui/src/components/FlexGrid";
import { EmbedStyles } from "../../../ols-ui/src/helpers/utilities.js";
import Panel from "../../../ols-ui/src/components/Panel";
import MainContentTemplate from "../components/MainContentTemplate";
import { DocsPage, DocsSection } from "../../../ols-ui/src/components/DocsFoundations";
import Link, { ExternalLink, EmailLink } from "../../../ols-ui/src/components/Links";

import styles from "../styles/FAQ.scss";

/**
 * *****************************************************************************
 * Design Principles section.
 *
 * @returns {node} - DOM node
 * *****************************************************************************
 */
function FAQ() {
  return (
    <div>
      <Helmet title="FAQ" />
      <div className={styles.mainContentMargin}>

        <div className={styles.outerWrapper}>
          <div id="main-content" className={styles.contentWrapper}>
            <Panel className="body-panel" padding="none" borderless>
              <DocsPage
                className="docs-styles"
                title="Frequently Asked Questions (FAQ)"
              >
                <DocsSection title="What is the Online Design Guide?">
                  <p>
                      The <Link to="/">Online Design Guide</Link> (ODG) is a tool that provides web design and user experience standards for digital IRS applications, products, and services. It seeks to create a consistent online experience for IRS customers by using a design system developed with industry best practice, validated by user testing, and driven by the IRS brand.
                  </p>
                </DocsSection>
                <DocsSection title="How do I access the ODG?">
                  <p>
                      The Online Design Guide can be found at <Link to="/">https://online-design-guide-master-pl.irslabs.org/</Link>. It is available on the IRS network without the need to enter username or password. If you need off-IRS network access, please email <EmailLink href="mailto:ols.online.design.guide@irs.gov?subject=ODG FAQ Contact">OLS Online Design Guide</EmailLink>.
                  </p>
                </DocsSection>
                <DocsSection title="When do I apply ODG design standards and how can I check if I've applied them correctly?">
                  <p>
                      Design standards in the ODG should be applied to new or redesigned digital products, applications, and services built for the IRS's external customers. These products, applications, and services include pages on IRS.gov and customer-facing web applications. The Office of Online Services provides ad-hoc consultation and review for teams looking to apply the ODG and to review consistency with its standards.
                  </p>
                </DocsSection>
                <DocsSection title="How does the ODG align to the 21st Century Integrated Digital Experience Act (IDEA) and the US Web Design System (USWDS)?">
                  <p>
                      The ODG was developed based on patterns from the USWDS and then updated to reflect design needs for IRS applications. The ODG was specified as the guidance for the consistent appearance criteria in the 21st Century Integrated Digital Experience Act report to Congress and OMB.
                  </p>
                </DocsSection>
                <DocsSection title="Is the ODG just for customer-facing IRS applications?">
                  <p>
                      In accordance with the 21st Century Integrated Digital Experience Act all digital products, both internal and customer-facing, to the greatest extent practicable must maintain a consistent design.
                  </p>
                </DocsSection>
                <DocsSection title="What are my ODG resources?">
                  <p>
                      The Online Design Guide is a resource in the design and development of applications. User Experience and Design within Online Services can provide additional consultation and resources related to consistent, user-centered design as needed. Employees can contact <EmailLink href="mailto:ols.online.design.guide@irs.gov?subject=ODG FAQ Contact">OLS Online Design Guide</EmailLink> for additional questions related to the Online Design Guide.
                  </p>
                </DocsSection>
                <DocsSection title="Where can I find information on design standards for Print and Electronic Materials for internal and external use?">
                  <p>
                    Please visit the Media & Public Relations site at <Link href="https://publish.no.irs.gov/pubsys/design/" target="_blank" rel="noopener noreferrer">https://publish.no.irs.gov/pubsys/design/</Link>. Please note this link is only accessible from the IRS network.
                  </p>
                </DocsSection>
              </DocsPage>
            </Panel>
          </div>
        </div>

      </div>
    </div>
  );
}

export default withRouter(EmbedStyles(styles)(FAQ));
