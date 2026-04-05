import PropTypes from "prop-types";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faLinkedinIn,
  faTwitterSquare,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";

import createIRSLinkPath  from "../../helpers/createIRSLinkPath";
import FooterTopGroup from "./FooterTopGroup";
import Link from "../Links";
import IRSEagle from "../Icons/IRSEagle";
import IconBase from "../Icons/IconBase";

import styles from "./IRSFooter.scss";
import { FlexContainer, FlexRow } from "../FlexGrid";
import { ExternalLink } from "../Links/Links";

const icons = {
  facebookIcon: faFacebookSquare,
  twitterIcon: faTwitterSquare,
  youtubeIcon: faYoutube,
  linkin: faLinkedinIn,
  instagram: faInstagram
};

/**
 * Footer Top
 */
class FooterTop extends React.Component {

  /**
   * @returns {node}
   */
  render()
  {
    const { sitemap, socialLinks = [], langCode, ...props } = this.props;

    /**
     * Renders sitemap links
     */
    const sitemapGroup = sitemap.map(({ text, list, key }) => (
      <FooterTopGroup className={styles.footerTopGroup} key={key} text={text}>
        {list.map(({ text, href, key, linkLangCode, irsSite, dataTestId, externalIcon }) => (
          <li className={styles.groupListItem} key={key} id={text} lang={linkLangCode}>
            {externalIcon ? <ExternalLink
              href={irsSite ? createIRSLinkPath(href, langCode) : href}
              data-testid={dataTestId}
              
            >{text}
            </ExternalLink>
              :
              <Link
                href={irsSite ? createIRSLinkPath(href, langCode) : href}
                data-testid={dataTestId}
              >
                {text}
              </Link>
            }
          </li>
        ))}
      </FooterTopGroup>
    ));

    /**
     * Renders social media icon with links
     * @type {unknown[]}
     */
    const socialLinksGroup = socialLinks.map((link) => (
      <li key={link.key} className={styles.socialListItem}>
        <Link
          tabIndex="0"
          aria-label={`${link.title} This link will open in a new window.`}
          href={link.irsSite ? createIRSLinkPath(link.href, langCode) : link.href}
          data-testid={link.dataTestId}
        >
          {link.src === "IRSFooterTopIcon" && (
            <IRSEagle width="32px" height="29px" focusable="false" crop className={styles["irs-2go"]} />
          )}
          {link.src !== "IRSFooterTopIcon" && (
            <IconBase crop cropViewBox={link.cropViewBox}>
              <FontAwesomeIcon
                icon={icons[link.src]}
                className={styles.socialIcon}
                focusable="false"
                data-testid={link.dataTestId}
              />
            </IconBase>
          )}
        </Link>
      </li>
    ));

    return (
      <div className={styles.footerTop} {...props}>
        <FlexContainer className={styles.menuGroup} fluid>
          <FlexRow className={styles.menuGroupRow}>
            {sitemapGroup}
          </FlexRow>
          <ul className={styles.socialList}>{socialLinksGroup}</ul>
        </FlexContainer>
      </div>
    );
  }
}


FooterTop.propTypes = {
  sitemap: PropTypes.any,
  dataTestId: PropTypes.any,
  socialLinks: PropTypes.array
};

export default FooterTop;
