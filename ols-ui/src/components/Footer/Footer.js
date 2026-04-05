import React from "react";
import PropTypes from "prop-types";
import { FlexContainer, FlexRow, FlexCol } from "../FlexGrid";
import IRSLogo from '../IRSLogo';
import { ExternalLink } from "../Links";
import styles from "./Footer.scss";
// import irsstyles from "../IRSFooter.scss";


/**
 * IRS Footer
 * @returns {node} The rendered DOM node
 * @param {fluid} bool  makes layout fluid if true
 */
export default function Footer({ fluid, children, nodefaultlinks, ...props }) {
  return (
    <footer className={styles.footer} {...props} data-component="Footer">
      <FlexContainer fluid={fluid}>
        <FlexRow align="center" justify="between">
          <FlexCol xs="12" md="2">
            <IRSLogo aria-label="IRS logo" focusable="false" className={styles.logo} preserveAspectRatio="none" />
          </FlexCol>
          <FlexCol xs="12" md="10" className={styles.linksContainer}>
            {nodefaultlinks ? null : (
              <ul id="footer-links">
                <li id="feedback-link">
                  <ExternalLink href="http://survey.foreseeresults.com/survey/display?cid=BAZQsB5xRUYZtxB5gM5BUw==&amp;sid=link-online-act">Give Feedback</ExternalLink>
                </li>
                <li id="privacy-link">
                  <ExternalLink href="http://www.irs.gov/uac/IRS-Privacy-Policy">Privacy Policy</ExternalLink>
                </li>
                <li id="accessibility-link">
                  <ExternalLink href="accessibilityGuide.html">Accessibility</ExternalLink>
                </li>
              </ul>
            )}
            {children}
          </FlexCol>
        </FlexRow>
      </FlexContainer>
    </footer>
  );
}

Footer.propTypes = {
  fluid: PropTypes.bool,
  nodefaultlinks: PropTypes.bool,
  children: PropTypes.node
};

Footer.defaultProps = {
  fluid: false,
  nodefaultlinks: false
};
