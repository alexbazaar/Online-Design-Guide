import PropTypes from 'prop-types';
import React from 'react';

import IRSLogo from '../IRSLogo';
import Link from '../Links';
import styles from "./IRSFooter.scss";
import { FlexContainer, FlexRow } from "../FlexGrid";
import createIRSLinkPath from "../../helpers/createIRSLinkPath";

/**
 * TODO: Add prop type definitions and defaults
 */
class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.footerRef  = React.createRef(null);
  }

  render() {
    const { children, footerLinks, langCode, dataTestId, ...props } = this.props;

    /**
     * Returns footer logo link based on language code (default: 'en'). Switch of langcode not implemented.
     * @type {string|string}
     */
    const logoLink =
      langCode === 'en' ? 'https://www.irs.gov/' : `https://www.irs.gov/`;

    /**
     * Renderes footer links
     */
    const footerLinksGroup = footerLinks.map((item) => (
      <li key={item.key} className={styles.footerLinksGroupItem}>
        <Link
          className={styles.footerLink}
          external={item.external}
          href={item.irsSite ? createIRSLinkPath(item.href, item.langCode) : item.href}
          data-testid={item.dataTestId}
          aria-label={item.label}
        >
          {item.text}
        </Link>
      </li>
    ));

    return (
      <footer ref={this.footerRef} className={styles.footer} {...props} data-component="Footer" >
        {children}
          <FlexContainer className={styles.footerBottom} fluid>
            <FlexRow className={styles.footerLinks}>
              <a href={logoLink} aria-label="IRS.gov" data-component="footerLogo" data-testid="footerLogo">
                <IRSLogo aria-label="IRS logo" focusable="false" className={styles.footerLogo} />
              </a>
              <ul className={styles.footerLinksGroup}>
                {footerLinksGroup}
              </ul>
            </FlexRow>

          </FlexContainer>
      </footer>
    );
  }
}


export default Footer;
