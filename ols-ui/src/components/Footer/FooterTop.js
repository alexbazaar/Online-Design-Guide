import React from "react";
import PropTypes from "prop-types";
import { FlexContainer, FlexRow, FlexCol } from "../FlexGrid";
import Link from "../Links";
import facebookIcon from '../../assets/images/facebook-icon.png';
import twitterIcon from '../../assets/images/twitter-icon.png';
import youtubeIcon from '../../assets/images/youtube-icon.png';
import IRSFooterTopIcon from '../../assets/images/IRS-icon.png';
import styles from "./Footer.scss";

/**
 * IRS FooterTop
 * @returns {node} The rendered DOM node
 * @param {fluid} bool  makes layout fluid if true
 *
 * This is a basic FooterTop component.
 * Any modificadtions to the logos/social media icons,
 * please create a new component specific to your project.
 */
export default function FooterTop({ fluid, children, noDefaultSocialLinks, customsociallinks, ...props }) {

  return (
    <div className={styles.footerTop} {...props} data-component="FooterTop" role="navigation">
      <FlexContainer fluid={fluid} className={styles.menuGroup}>
        <FlexRow align="start" justify="between">
          {children}
        </FlexRow>
      </FlexContainer>
      <FlexContainer fluid={fluid}>
        <FlexRow align="center">
          <FlexCol md="6" mdOffset="6" className={styles.footerTopRight}>
            {/*
              TO-DO: Create a social media menu/link component
            */}
            {customsociallinks || noDefaultSocialLinks ? customsociallinks : (
              <ul>
                <li><Link href="#"><img src={facebookIcon} alt="IRS Facebook Profile" /></Link></li>
                <li><Link href="#"><img src={twitterIcon} alt="IRS Twitter Profile" /></Link></li>
                <li><Link href="#"><img src={youtubeIcon} alt="IRS YouTube Channel" /></Link></li>
                <li><Link href="#"><img src={IRSFooterTopIcon} alt="IRS Logo" /></Link></li>
              </ul>
            )}
          </FlexCol>
        </FlexRow>
      </FlexContainer>
    </div>
  );
}

FooterTop.propTypes = {
  fluid: PropTypes.bool,
  noDefaultSocialLinks: PropTypes.bool,
  children: PropTypes.node,
  customsociallinks: PropTypes.node
};

FooterTop.defaultProps = {
  fluid: false,
  noDefaultSocialLinks: false
};
