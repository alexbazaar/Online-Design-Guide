import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlexContainer, FlexRow, FlexCol } from '../FlexGrid';
import styles from './OfficialSiteBanner.scss';
import usFlagIcon from './us-flag-icon.svg';
import { EmbedStyles } from '../../helpers/utilities';

/**
 * Renders the standard official site banner indicating that this site is an
 * official government site.
 *
 * This component is usually rendered in the common {@link Header}. You should
 * only need to add this manually if you are implementing your own header.
 * In that case, this should be the element that is at the very top of the
 * window.
 *
 * For more information, please consult the
 * [U.S. Web Design Standards](https://standards.usa.gov).
 */
class OfficialSiteBanner extends Component {
  static propTypes = {
    fluid: PropTypes.bool
  };

  /**
   * Constructor.
   *
   * @param {Object} props The props that will be applied to this component.
   */
  constructor(props) {
    super(props);
  }

  /**
   * Renders the component.
   *
   * @returns {Node|null} The rendered DOM node.
   */
  render() {
    return (
      <div className={styles.banner} data-component="BannerHeader">
        <div>
          <FlexContainer fluid={this.props.fluid}>
            <FlexRow>
              <FlexCol>
                <div
                  className={styles.bannerHeader}
                  aria-label="Banner"
                >
                  <img src={usFlagIcon} alt="U.S. Flag" />
                  <span>An official website of the United States government</span>
                </div>
              </FlexCol>
            </FlexRow>
          </FlexContainer>
        </div>
      </div>
    );
  }
}

export default EmbedStyles(styles)(OfficialSiteBanner);
