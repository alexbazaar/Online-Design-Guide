import React from "react";
import Helmet from "react-helmet";
import { EmbedStyles } from "../../../ols-ui/src/helpers/utilities.js";
import Table, { TableRow, TableHeaderCell, TableCell } from "../../../ols-ui/src/components/Tables";
import { DocsPage, DocsSection } from "../../../ols-ui/src/components/DocsFoundations";
import styles from "../styles/Colors.scss";

import TabView, { Tab } from "../../../ols-ui/src/components/TabView";
import List, { ListItem } from "../../../ols-ui/src/components/List";
import { ExternalLink } from "../../../ols-ui/src/components/Links";

import { themeColors, alertColors, changedColors } from "../data/colorData";
import { CheckCircleIcon, ClipboardIcon } from "../../../ols-ui/src/components/Icons";

import appStyles from "../styles/App.scss";

/**
 * *****************************************************************************
 * Content for colors.
 *
 * @returns {node} - DOM node
 * *****************************************************************************
 */
class ColorsPage extends React.Component {
  state = {
    copyStatus: "idle"
  };

  /**
   * Copy hex code to clipboard
   * @param {Object} colorData contains color information
   */
  async writeToClipboard(colorData) {
    try {
      await navigator.clipboard.writeText(colorData.hex);
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * HandleKeyPressed
   * @param {Object} colorData contains data for copy/paste.
   * @param {Node} evt element that should get focus after copy/paste.
   */
  handleKeyPressed(colorData, evt) {
    const newId = colorData.hex.substring(1);
    const curr = document.getElementById(newId);
    const copyNotice = document.getElementById(`copiedNotice-${newId}`);
    const copiedEle = document.getElementById(`copiedText-${newId}`);

    if (evt.keyCode === 13) {
      if (copiedEle) {
        copiedEle.remove();
      }

      const message = document.createElement("span");
      message.setAttribute("id", `copiedText-${newId}`);
      message.innerHTML = "Copied to clipboard";
      copyNotice.append(message);

      curr.setAttribute("keyboardEnter", true);
      this.writeToClipboard(colorData);
    }
  }

  /**
   *
   * @param {*} colorData contains color data
   * @returns {Object} returns needed data
   */
  renderCardInfo(colorData) {
    return (
      <React.Fragment>
        <div aria-hidden="true" className={styles.copySquare}>
          <ClipboardIcon />
          <div>Copy to clipboard</div>
        </div>
        <div className={styles.copiedSquare}>
          <CheckCircleIcon aria-hidden="true" />
          <div>Copied to clipboard</div>
        </div>
        <div aria-hidden="true" className={styles.originalSquare}>
          <div>{colorData.name}</div>
          {colorData.subtitle ? (
            <div style={{ fontStyle: "italic" }}>{colorData.subtitle}</div>
          ) : null}
          <div>{colorData.hex}</div>
        </div>
      </React.Fragment>
    );
  }

  /**
   * Render
   * @returns {Node}
   */
  render() {
    return (
      <div>
        <Helmet title="Colors" />
        <DocsPage
          className="docs-styles"
          title="Colors"
          subtitle="Colors use the IRS patriotic color theme promoting a cohesive and accessible experience for taxpayers."
        >
          <DocsSection title="Introduction">
            <p>
              Colors play a vital role in creating a consistent experience for
              American taxpayers. The ODG design system adopted a patriotic
              color theme from design standards set by the IRS Design Office.
              These colors visually represent the IRS's service to America and
              role the IRS plays in the overall success of the United States.
              Select a color swatch to copy the hex code to clipboard.
            </p>
          </DocsSection>
          <DocsSection id="primary">
            <TabView>
              <Tab label="Theme colors">
                <span className={"sr-only"}>Theme colors tab</span>
                <div className={styles["icon-grid"]}>
                  {themeColors &&
                    themeColors.map((colorData, i) => (
                      <div
                        className={styles["grid-icon"]}
                        key={`theme-color-wrapper=${i}`}
                        role="region"
                        aria-atomic="true"
                      >
                        <button
                          data-component="Colors"
                          key={`theme-color-${i}`}
                          id={colorData.hex.substring(1)}
                          tabIndex="0"
                          aria-label={`${colorData.name}. Select the color to copy to the clipboard.`}
                          style={{
                            color: colorData.textColor,
                            backgroundColor: colorData.hex,
                            border:
                              colorData.name === "White"
                                ? `1px solid #D6D7D9`
                                : `1px solid ${colorData.hex}`
                          }}
                          onClick={() => {
                            this.writeToClipboard(colorData);
                          }}
                          onBlur={() => {
                            const newId = colorData.hex.substring(1);
                            const removeAttr = document.getElementById(newId);
                            removeAttr.removeAttribute("keyboardEnter");
                          }}
                          onMouseLeave={() => {
                            const newId = colorData.hex.substring(1);
                            const removeFocus = document.getElementById(newId);
                            removeFocus.blur();
                          }}
                          onKeyDown={(evt) => {
                            this.handleKeyPressed(colorData, evt);
                          }}
                        >
                          {this.renderCardInfo(colorData)}
                        </button>
                        <span
                          id={`copiedNotice-${colorData.hex.substring(1)}`}
                          aria-live="assertive"
                          className="sr-only"
                        ></span>
                      </div>
                    ))}
                </div>
              </Tab>

              <Tab label="Alert colors">
                <span className={"sr-only"}>Alert colors tab</span>
                <div className={styles["icon-grid"]}>
                  {alertColors &&
                    alertColors.map((colorData, i) => (
                      <div
                        className={styles["grid-icon"]}
                        key={`alert-color-wrapper=${i}`}
                        role="region"
                        aria-atomic="true"
                      >
                        <button
                          data-component="Colors"
                          key={`alert-color-${i}`}
                          id={colorData.hex.substring(1)}
                          tabIndex="0"
                          aria-label={`${colorData.name} Select the color and Press Enter to copy the color to the clipboard.`}
                          style={{
                            color: colorData.textColor,
                            background: colorData.hex,
                            border:
                              colorData.name === "White"
                                ? `1px solid ##D6D7D9`
                                : `1px solid ${colorData.hex}`
                          }}
                          onClick={() => {
                            this.writeToClipboard(colorData);
                          }}
                          onBlur={() => {
                            const newId = colorData.hex.substring(1);
                            const removeAttr = document.getElementById(newId);
                            removeAttr.removeAttribute("keyboardEnter");
                          }}
                          onMouseLeave={() => {
                            const newId = colorData.hex.substring(1);
                            const removeFocus = document.getElementById(newId);
                            removeFocus.blur();
                          }}
                          onKeyDown={(evt) => {
                            this.handleKeyPressed(colorData, evt);
                          }}
                        >
                          {this.renderCardInfo(colorData)}
                        </button>
                        <span
                          id={`copiedNotice-${colorData.hex.substring(1)}`}
                          aria-live="assertive"
                          className="sr-only"
                        ></span>
                      </div>
                    ))}
                </div>
              </Tab>

              <Tab label="What's changed">
                <span className={"sr-only"}>What's changed tab</span>
                <h2>What's changed</h2>
                <p style={{ margin: "25px 0px" }}>
                  On June 30, 2020, the Online Design Guide adopted the new IRS
                  patriotic color theme. All components have been updated to
                  reflect the new theme.
                </p>

                <Table
                  className={styles.colorTable}
                  caption="New colors usage specifications"
                >
                  <thead>
                    <TableRow>
                      <TableHeaderCell scope="col">Old color</TableHeaderCell>
                      <TableHeaderCell scope="col">New color</TableHeaderCell>
                      <TableHeaderCell scope="col">Usage</TableHeaderCell>
                    </TableRow>
                  </thead>
                  <tbody>
                    {changedColors &&
                      changedColors.map((colorData, i) => (
                        <TableRow key={`changed-color=${i}`}>
                          <TableCell>
                            <div className={styles.mobileHeading}>
                              Old color
                            </div>
                            <div
                              className={styles.changedColor}
                              style={{
                                color: colorData.textColor,
                                background: colorData.oldHex
                              }}
                            >
                              <div>{colorData.oldName}</div>
                              <div>{colorData.oldHex}</div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className={styles.mobileHeading}>
                              New color
                            </div>
                            <div
                              className={styles.changedColor}
                              style={{
                                color: colorData.textColor,
                                background: colorData.newHex
                              }}
                            >
                              <div>{colorData.newName}</div>
                              <div>{colorData.newHex}</div>
                            </div>
                          </TableCell>
                          <TableCell data-th="Usage">
                            <div className={styles.mobileHeading}>Usage</div>
                            <div className={styles.changedUsage}>
                              {colorData.usage &&
                                colorData.usage.map((u, i) => (
                                  <div key={`color-usage=${i}`}>{u}</div>
                                ))}
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                  </tbody>
                </Table>
              </Tab>
            </TabView>
          </DocsSection>
          <DocsSection title="Accessibility guidance" id="max-width">
            <List>
              <ListItem>
                When used properly, color can help to organize information, aid
                navigation, and add distinction for elements such as indicating
                focus or active states.
              </ListItem>
              <ListItem>
                Ensure the web content is accessible and easy to read for
                everyone, including users with vision impairments, color
                deficiencies, and users using limited-color or monochrome
                displays and browsers.
              </ListItem>
              <ListItem>
                Use sRGB ("standard red green blue") color space as it is the
                current standard for the Web. sRGB color primaries are better
                suited for accessibility concerns.
              </ListItem>
              <ListItem>
                Color should not be used as the only visual means of conveying
                information, indicating an action, prompting a response, or
                distinguishing a visual element.
              </ListItem>
              <ListItem>
                When color differences are used to convey information, such as
                required form fields, the information conveyed by the color
                differences are also conveyed explicitly in text.
              </ListItem>
              <ListItem>
                For users with color deficiency or color blindness, it is
                important that color-coded information be available with another
                visual cue such as changes in shape, line texture or a text
                label.
              </ListItem>
              <ListItem>
                Contrast is a measure of the difference in perceived brightness
                between two colors and between the content and the background.
                Note: If text and background colors are swapped, the contrast
                ratio remains the same.
              </ListItem>
              <ListItem>
                The visual presentation of text and images of text has a
                contrast ratio of at least 4.5.1
              </ListItem>
              <ListItem>
                Text effects, like outlines, can impact perceived contrast. The
                color of a text outline or border can be used as the text or
                foreground color when measuring contrast. A text glow around the
                letters can be used as the background color.
              </ListItem>
              <ListItem>
                Text over gradients, semi-transparent colors, and background
                images still need to meet contrast requirements. It is
                recommended to test the area where contrast is lowest.
              </ListItem>
              <ListItem>
                When CSS is used to define text in hover, focus, or active
                states for interactive elements it must meet the same contrast
                requirements.
              </ListItem>
              <ListItem>
                Use unique color codes for creating digital colors.
              </ListItem>
              <ListItem>
                Check in greyscale if there is enough contrast between the most
                important information in the design.
              </ListItem>
            </List>
            <p>
              There are three exceptions to the 4.5:1 contrast requirement rule:
            </p>
            <List>
              <ListItem>
                <b>Large text:</b> Large-scale text and images of large-scale
                text (at least 18-point normal or 14-point bold) have a contrast
                ratio of at least <b>3:1</b>.
                <List>
                  <ListItem>
                    18 points maps to 24 pixels and 14 points to 18.67 pixels.
                  </ListItem>
                  <ListItem>
                    Images of text have the same contrast ratio requirements;
                    however it can be difficult or even impossible to measure text
                    size or font weight in an image.
                  </ListItem>
                </List>
              </ListItem>
              
              <ListItem>
                <b>Incidental:</b> Text or images of text that are part of an
                inactive user interface component, that are pure decoration,
                that are not visible to anyone, or that are part of a picture
                that contains significant other visual content, have no contrast
                requirement.
              </ListItem>
              <ListItem>
                <b>Logotypes:</b> Text that is part of a logo or brand name has
                no contrast requirement.
              </ListItem>
            </List>
            <p>
              The visual presentation of the following has a contrast ratio of
              at least 3:1 against adjacent color(s):
            </p>
            <List>
              <ListItem>
                <b>User interface components:</b> Visual information required to identify user interface components
              and states, except for inactive components or where the appearance
              of the component is determined by the user agent and not modified
              by the author:
                <List>
                  <ListItem>Use custom visible focus indicator.</ListItem>
                </List>
              </ListItem>
              
              <ListItem>
                <b>Graphical objects:</b> Parts of graphics required to understand the content, except when
              a particular presentation of graphics is essential to the
              information being conveyed.
                <List>
                  <ListItem>
                    When choosing the colors for graphics, consider the color(s)
                    adjacent to that graphic, and test that the contrast ratio is
                    at least 3:1.
                  </ListItem>
                  <ListItem>
                    When selecting colors for graphics with multiple colors,
                    consider adjoining colors and test that the contrast ratio is
                    at least 3:1. If adjoining colors have less than 3:1 color
                    contrast ratio difference, add a border with at least a 3:1
                    color contrast to each color.
                  </ListItem>
                </List>
              </ListItem>
             
            </List>

            <h3>Applicable standards</h3>
            <h4 className={appStyles.applicableStandardsh4}>Web Content Accessibility Guidelines (WCAG) 2.0/2.1</h4>
            <List>
              <ListItem>
                <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&showtechniques=143&currentsidebar=%23col_overview#use-of-color">
                  1.4.1 Use of Color
                </ExternalLink>
              </ListItem>
              <ListItem>
                <ExternalLink
                  href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&amp;currentsidebar=%23col_overview#contrast-minimum"
                  target="_blank"
                >
                  1.4.3 Contrast (Minimum)
                </ExternalLink>
              </ListItem>
              <ListItem>
                <ExternalLink
                  href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&amp;currentsidebar=%23col_overview#non-text-contrast"
                  target="_blank"
                >
                  1.4.11 Non-text Contrast
                </ExternalLink>
              </ListItem>
              <ListItem>
                <ExternalLink
                  href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&amp;currentsidebar=%23col_overview#focus-visible"
                  target="_blank"
                >
                  2.4.7 Focus Visible
                </ExternalLink>
              </ListItem>
            </List>

            <h3>Known accessibility issues</h3>

            <p>
            A known accessibility issue is a technical issue that platform or 
            assistive technology (AT) engineers are working to fix with each 
            new release of iOS/Android or AT. For example, a role or state 
            not being announced by a screen reader on a given platform.
            </p>
            <List>
              <ListItem>
                <strong>Issue:</strong> When selecting the color swatches with 
                JAWS 2021, JAWS does not display or announce “Copied to clipboard” 
                when the user presses Enter.
              </ListItem>
            </List>
          </DocsSection>
        </DocsPage>
      </div>
    );
  }
}

export default EmbedStyles(styles)(ColorsPage);
