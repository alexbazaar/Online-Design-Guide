import React from "react";
import Helmet from "react-helmet";
import { EmbedStyles } from "../../../ols-ui/src/helpers/utilities.js";
import { DocsPage, DocsSection } from "../../../ols-ui/src/components/DocsFoundations";
import { FlexContainer, FlexRow } from "../../../ols-ui/src/components/FlexGrid";
import List, { ListItem } from "../../../ols-ui/src/components/List";
import Link, { ExternalLink } from "../../../ols-ui/src/components/Links";
import { FilledButton } from "../../../ols-ui/src/components/Buttons";
import Card from "../../../ols-ui/src/components/Card";
import Modal from "../../../ols-ui/src/components/Modal";

import {
  ICON_DATA as iconLibrary,
  CUSTOM_ICON_DATA as customIconLibrary,
} from "../data/iconData";

import styles from "../styles/Icons.scss";
import appStyles from "../styles/App.scss";

/**
 * *****************************************************************************
 * Content for Icon
 *
 * @returns {[node]} The rendered DOM node
 * *****************************************************************************
 */
class IconsPage extends React.Component {
  state = {
    modalOpen: false,
    iconData: null,
    triggerEl: null,
  };

  /**
   * ShowIconDetails
   * @param {Object} iconData contains data for modal.
   * @param {Node} triggerEl element that should get focus after modal closes.
   */
  showIconDetails(iconData, triggerEl) {
    this.setState({
      modalOpen: true,
      iconData,
      triggerEl,
    });
  }

  /**
   * HandleKeyPressed
   * @param {Object} iconData contains data for modal.
   * @param {Node} evt element that should get focus after modal closes.
   */
    handleKeyPressed(iconData, evt) {
      if (evt.keyCode === 13) {
        this.showIconDetails(iconData, evt.currentTarget);
      }
    }

  /**
   * Render
   * @returns {Node}
   */
  render() {
    return (
      <div>
        <Helmet title="Iconography" />
        <DocsPage
          className="docs-styles"
          title="Iconography"
          subtitle="Icons are the visual representation of an idea or object."
        >
          <FilledButton
            className={styles.buttonSpacing}
            href={"/ODG-Icon-Library.zip"}
            icon="download"
            leadingIcon={true}
          >
            Download icon library
          </FilledButton>
          <DocsSection title="Font Awesome 6 icons">
            <p>
              The ODG uses select icons from the Font Awesome 6 library. Select
              an icon to view the code and download the icon.
            </p>

            <div className={styles['icon-grid']}>
              {iconLibrary &&
                iconLibrary.map((iconData, i) => (
                  <div
                    className={styles["grid-icon"]}
                    key={`icon-wrapper=${i}`}
                  >
                    <Card
                      headinglevel="2"
                      secondary
                      key={`icon-${i}`}
                      tabIndex="0"
                      onClick={(evt) => {
                        this.showIconDetails(iconData, evt.currentTarget);
                      }}
                      onKeyDown={(evt) => {
                        this.handleKeyPressed(iconData, evt);
                      }}
                    >
                      <div className={styles.iconBlock}>
                        {iconData.component}
                      </div>
                      <div className={styles.iconTitle}>{iconData.title}</div>
                    </Card>
                  </div>
                ))}
            </div>
            {this.state.modalOpen && (
              <Modal
                title={this.state.iconData.title}
                closeModal={() => {
                  this.setState({ modalOpen: false });
                  this.state.triggerEl.focus();
                }}
              >
                {this.state.iconData.importName && this.state.iconData.package && (
                  <div>
                    <div className={styles.codeTitle}>Code implementation</div>
                    <div className={styles.codeContent}>
                      import ReactDOM from "react-dom"
                      <br />
                      import {"{ library }"} from
                      "@fortawesome/fontawesome-svg-core"
                      <br />
                      import {`{ ${this.state.iconData.importName} }`} from
                      "@fortawesome/{this.state.iconData.package}"<br />
                      library.add( {this.state.iconData.importName} )
                    </div>
                  </div>
                )}

                <Link
                  href={this.state.iconData.download}
                  download={`${this.state.iconData.title}.svg`}
                  className={styles.modalLink}
                >
                  Download {this.state.iconData.title} icon
                </Link>
              </Modal>
            )}
          </DocsSection>
          <DocsSection title="Custom icons">
            <p>
              In addition to Font Awesome 6, the following custom icons are
              used. Select an icon to view the code and download the icon.
            </p>

            <div className={styles['icon-grid']}>
              {customIconLibrary &&
                customIconLibrary.map((iconData, i) => (
                  <div
                    className={styles["grid-icon"]}
                    key={`icon-wrapper=${i}`}
                  >
                    <Card
                      headinglevel="2"
                      secondary
                      key={`icon-${i}`}
                      tabIndex="0"
                      onClick={(evt) => {
                        this.showIconDetails(iconData, evt.currentTarget);
                      }}
                      onKeyDown={(evt) => {
                        this.handleKeyPressed(iconData, evt);
                      }}
                      aria-label={iconData.title}
                    >
                      <div className={styles.iconBlock}>
                        {iconData.component}
                      </div>
                      <div className={styles.iconTitle}>{iconData.title}</div>
                    </Card>
                  </div>
                ))}
            </div>
          </DocsSection>
          <DocsSection title="When to use">
            <p>
              Use icons to enhance visual interest and to quickly communicate
              ideas.
            </p>
          </DocsSection>
          <DocsSection title="SVG format">
            <p>
              Scalable Vector Graphics (SVG) is an XML-based markup language for
              describing two-dimensional vector graphics. There are many
              advantages of using SVG over other image formats (like PNG or
              JPEG). Most importantly, SVG images are completely scalable and
              zoomable without image degradation.
            </p>
          </DocsSection>

          <DocsSection title="Usability guidance">
            <List>
              <ListItem>
                Use icons sparingly and only to aide in usability. Icons should
                not be used solely for decoration.
              </ListItem>
              <ListItem>
                Use icons that are effortless to understand. When in doubt, skip
                the icon and use simple copy.
              </ListItem>
              <ListItem>
                Be consistent with icon meaning. For example, a magnifier icon
                used in the search bar should not be used elsewhere to visually
                communicate another idea or object.
              </ListItem>
              <ListItem>
                Place icons to the left of text labels. Exceptions to this rule
                include navigation icons and hyperlink cue icons like the
                external link icon.
              </ListItem>
              <ListItem>
                Use labels to dramatically increase the usability of icons.
              </ListItem>
            </List>
          </DocsSection>
          <DocsSection title="Accessibility guidance">
            <List>
              <ListItem>
                Icons must be simple, consistent, and easy to understand by all
                users regardless of impairments or disabilities.
              </ListItem>
              <ListItem>
                Consider adding a text label next to the icon as universally
                understood icons are rare.
              </ListItem>
              <ListItem>
                To be accessible, icons should be visible. If they require
                interactions to be seen, they may be missed.
              </ListItem>
              <ListItem>
                The icons or graphics text should meet 4.5:1 contrast.
              </ListItem>
              <ListItem>
                Meaningful icons should have a text alternative.
              </ListItem>
              <ListItem>
                If the icon is pure decoration, is used only for visual
                formatting, or is not presented to users, then it is implemented
                in a way that it can be ignored by assistive technology.
              </ListItem>
              <ListItem>
                The icons that are used as links should have a target size of at
                least 44 x 44 CSS pixels.
              </ListItem>
              <ListItem>
                Interactive accessible icons must be keyboard and touch
                accessible as well as clickable via a mouse.
              </ListItem>
            </List>
            <h3>Applicable standards</h3>
            <h4 className={appStyles.applicableStandardsh4}>Web Content Accessibility Guidelines (WCAG) 2.0/2.1</h4>
            <List>
              <ListItem>
                <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#non-text-content">
                  1.1.1 Non-text Content
                </ExternalLink>
              </ListItem>
              <ListItem>
                <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships">
                  1.3.1 Info and Relationships
                </ExternalLink>
              </ListItem>
              <ListItem>
                <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&amp;showtechniques=143&amp;currentsidebar=%23col_overview#use-of-color">
                  1.4.1 Use of Color
                </ExternalLink>
              </ListItem>
              <ListItem>
                <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#contrast-minimum">
                  1.4.3. Contrast Minimum
                </ExternalLink>
              </ListItem>
              <ListItem>
                <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&amp;currentsidebar=%23col_overview#non-text-contrast">
                  1.4.11 Non-text Contrast
                </ExternalLink>
              </ListItem>
              <ListItem>
                <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#keyboard">
                  2.1.2 Keyboard
                </ExternalLink>
              </ListItem>
              <ListItem>
                <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#focus-order">
                  2.4.3 Focus Order
                </ExternalLink>
              </ListItem>
              <ListItem>
                <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#link-purpose-in-context">
                  2.4.4 Link Purpose
                </ExternalLink>
              </ListItem>
              <ListItem>
                <ExternalLink
                  href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#focus-visible"
                  target="_blank"
                >
                  2.4.7 Focus Visible
                </ExternalLink>
              </ListItem>
              <ListItem>
                <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#location">
                  2.4.8 Location
                </ExternalLink>
              </ListItem>
              <ListItem>
                <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#target-size">
                  2.5.5 Target Size
                </ExternalLink>
              </ListItem>
              <ListItem>
                <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#on-focus">
                  3.2.1 On Focus
                </ExternalLink>
              </ListItem>
              <ListItem>
                <ExternalLink
                  href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#name-role-value"
                  target="_blank"
                >
                  4.1.2 Name, Role, Value
                </ExternalLink>
              </ListItem>
            </List>
          </DocsSection>
        </DocsPage>
      </div>
    );
  }
}

export default EmbedStyles(styles)(IconsPage);
