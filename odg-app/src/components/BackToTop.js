import React from "react";
import Helmet from "react-helmet";
import heredoc from "../utils/heredocument";
import { buildClassList, EmbedStyles } from "../../../ols-ui/src/helpers/utilities.js";

import { DocsPage, DocsSection, DocsCode } from "../../../ols-ui/src/components/DocsFoundations";

import Table, { TableRow, TableHeaderCell, TableCell } from "../../../ols-ui/src/components/Tables";

import Panel from "../../../ols-ui/src/components/Panel";
import TabView, { Tab } from "../../../ols-ui/src/components/TabView";

import Link, { ExternalLink } from "../../../ols-ui/src/components/Links";
import List, { ListItem } from "../../../ols-ui/src/components/List";
import { ArrowUpIcon } from "../../../ols-ui/src/components/Icons";

import BackToTopSpacing from "../assets/images/spacing-specs/BackToTop_Spacing.png";

import styles from "../styles/Docs.scss";

import typographyStyles from "../styles/Typography.scss";

import appStyles from "../styles/App.scss";

/**
 * *****************************************************************************
 * Content for the Back to Top Component
 *
 * @returns {node} node
 * *****************************************************************************
 */
function BackToTopPage() {
  return (
    <div>
      <Helmet title="Back to top" />
      <DocsPage
        className="docs-styles"
        title="Back to top"
        subtitle="Back to top buttons allows users to quickly return to the top of the page."
        emphasisTag={[ "IRAP APPROVED" ]}
      >
        <DocsSection>
          <TabView id="preview-tabs">
            <Tab label="Preview">
              <Panel>
                <div data-component="BackToTopPreviewTab">
                  <BackToTop relative></BackToTop>
                </div>
              </Panel>
            </Tab>
            <Tab label="Spacing">
              <Panel maxheight="medium">
                <img
                  style={{ maxWidth: "280px", height: "auto" }}
                  src={BackToTopSpacing}
                  alt="This is a marked up graphic of the Back To Top spacing"
                  className={appStyles.previewSpacingDesktopFluid}
                />
                <br className={appStyles.previewSpacingDesktopFluid} />
                <img
                  style={{ width: "100%", maxWidth: "280px", height: "auto" }}
                  src={BackToTopSpacing}
                  alt="This is a marked up graphic of the Back To Top spacing"
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
              <Panel className="panel-code" padding="none">
                <DocsCode language="xml">
                  {heredoc`
                      <BackToTop relative></BackToTop>
                  `}
                </DocsCode>
              </Panel>
            </Tab>
            <Tab label="CSS">
              <Panel className="panel-code" padding="none" maxheight="medium">
                <DocsCode language="scss">
                  {heredoc`
                  .backToTop {
                    @include button;
                    background-color: #ffffff;
                    color: #00599c;
                    text-decoration: none;
                    border: 2px solid #00599c;
                    border-right: none;
                    height: 44px;
                    border-radius: 32px 0 0 32px;
                    display: flex;
                    align-items: center;
                    position: fixed;
                    right: 0;
                    transition: right 0.75s ease-in-out;
                    bottom: 80px;
                    z-index: 100;
                    padding-left: 32px;
                    cursor: pointer;

                    svg {
                      width: 15px;
                      height: 16px;
                      position: absolute;
                      top: 12px;
                      left: 8px;
                      z-index: 2;
                      color: #ffffff;
                    }

                    &:after {
                      content: "";
                      display: inline-block;
                      position: absolute;
                      height: 32px;
                      width: 32px;
                      background-color: #00599c;
                      border-radius: 50%;
                      z-index: 1;
                      left: 4px;
                      margin-right: 16px;
                    }

                    &.relative {
                      position: relative;
                      top: 0;
                      right: 0;
                      transition: right 0.75s ease-in-out;
                      &.hidden {
                        right: 0;
                        transition: right 0.75s ease-in-out;
                      }
                    }

                    &.hover,
                    &:hover {
                      @include media-breakpoint-up(lg) {
                        color: #002d62;
                        border-color: #002d62;
                        svg g path:first-of-type {
                          fill: #002d62;
                        }
                      }
                    }

                    &.active,
                    &:active,
                    &.focus,
                    &:focus {
                      outline: none;
                    }

                    &.hidden {
                      right: -120px;
                      transition: 0.75s ease-in-out;
                    }

                    padding: 4px 16px 4px 4px;

                    span {
                      vertical-align: baseline;
                      margin-right: 0;
                      padding-left: 16px;
                      font-size: 16px;
                      line-height: 24px;
                    }
                  
                    span,
                    svg {
                      pointer-events: none;
                      position: relative;
                    }
                  
                    span + svg {
                      margin-left: 15px;
                    }
                  
                    svg + span {
                      margin-left: 0px;
                    }
                  
                    > svg {
                      position: relative;
                      width: 32px;
                      height: 32px;
                    }
                  
                  }
                  
                  // Custom focus outline for Back to Top
                  .backToTop:focus {
                    outline: none;
                  
                    &:before {
                      box-sizing: border-box;
                      border: 3px solid #2491ff;
                      content: "";
                      display: block;
                      height: calc(100% - -18px);
                      width: calc(100% - -18px);
                      position: absolute;
                      top: -9px !important;
                      left: -8px;
                      outline: none;
                      padding: 0px;
                    }
                  }

                  .backToTop svg {
                    position: relative;
                  }
                `}
                </DocsCode>
              </Panel>
            </Tab>
          </TabView>
          <span className={appStyles.disclaimer}><strong>Note:</strong> Use browser inspect tool to view the component at various breakpoints.</span>
        </DocsSection>

        <DocsSection title="When to use">
          <p>
            Back to top buttons should be used on any page that requires an excessive amount of scrolling. 
            Although the button could be deployed on every screen for consistency, it is recommended that 
            a back to top button be used on pages that are longer than four screens. 
          </p>
        </DocsSection>

        <DocsSection title="Specifications">
          <h3>Typography</h3>
          <Table caption="Back to top typography specifications">
            <thead>
              <TableRow>
                <TableHeaderCell scope="col">Content</TableHeaderCell>
                <TableHeaderCell scope="col">Reference</TableHeaderCell>
                <TableHeaderCell scope="col">Color name</TableHeaderCell>
                <TableHeaderCell scope="col">Hex</TableHeaderCell>
              </TableRow>
            </thead>
            <tbody>
              <TableRow>
                <TableHeaderCell>Back to top text (default)</TableHeaderCell>
                <TableCell>
                  <Link to="/styles/typography/#display-type">Body text</Link>
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">Blue</Link>
                </TableCell>
                <TableCell>
                  #00599c
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Back to top text (hover)</TableHeaderCell>
                <TableCell>
                  <Link to="/styles/typography/#display-type">Body text</Link>
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">Blue dark</Link>
                </TableCell>
                <TableCell>
                  #002d62
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Line-height</TableHeaderCell>
                <TableCell>24px</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
            </tbody>
          </Table>

          <h3>Button elements</h3>
          <Table caption="Back to top button elements specifications">
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
                <TableHeaderCell>Back to top border (default)</TableHeaderCell>
                <TableCell>2px solid</TableCell>
                <TableCell>
                  <Link to="/styles/colors">Blue</Link>
                </TableCell>
                <TableCell>
                  #00599c
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Back to top border (hover)</TableHeaderCell>
                <TableCell>2px solid</TableCell>
                <TableCell>
                  <Link to="/styles/colors">Blue dark</Link>
                </TableCell>
                <TableCell>
                  #002d62
                </TableCell>
              </TableRow>
            </tbody>
          </Table>

          <h3>Icon elements</h3>
          <Table caption="Back to top icon elements specifications">
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
                <TableHeaderCell>Circle height</TableHeaderCell>
                <TableCell>32px</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Circle width</TableHeaderCell>
                <TableCell>32px</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Arrow height</TableHeaderCell>
                <TableCell>16px</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Arrow width</TableHeaderCell>
                <TableCell>15px</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Circle color (default)</TableHeaderCell>
                <TableCell>N/A</TableCell>
                <TableCell>
                  <Link to="/styles/colors">Blue</Link>
                </TableCell>
                <TableCell>
                  #00599c
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Circle color (hover)</TableHeaderCell>
                <TableCell>N/A</TableCell>
                <TableCell>
                  <Link to="/styles/colors">Blue dark</Link>
                </TableCell>
                <TableCell>
                  #002d62
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Arrow</TableHeaderCell>
                <TableCell>
                  <Link to="/styles/iconography">arrow-up-solid</Link>
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">White</Link>
                </TableCell>
                <TableCell>
                  #ffffff
                </TableCell>
              </TableRow>
            </tbody>
          </Table>

          <h3>Focus state</h3>
          <Table caption="Back to top focus state specifications">
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
                <TableHeaderCell>Padding</TableHeaderCell>
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
              Back to top buttons should be placed in the lower-righthand corner 
              of the page where people are accustomed to seeing it. Putting it in 
              the center or on the left side could lead to participants ignoring 
              or not noticing it.
            </ListItem>
            <ListItem>
              The button should be sticky and persistent, rather than using a
              separate back to top link or button for every page's subsection.
            </ListItem>
            <ListItem>
              The button should be given proper visual affordance to be noticed
              by users, but should not stand out so much that it detracts or
              distracts from the rest of the page's content. Likewise, the
              button should be small enough to not block too much of the screen,
              but large enough to allow users on mobile to easily tap or select
              it.
            </ListItem>
            <ListItem>
              Include a text label (either the full phrase "Back to top" or an
              abbreviated version, "Top") on the button, as opposed to an
              icon-only approach. An arrow icon could also be used, but the text
              also needs to be present so users who are less familiar with the
              concept can easily understand what the button does.
            </ListItem>
            <ListItem>
              The button should appear in the same location (the lower-righthand
              corner) on every page, regardless of how many columns of content
              are on the page. Some sections of IRS.gov utilize two columns (a
              leftnav and a main content section), while others have three
              (leftnav, main content, and a right rail). Regardless, the back to
              top button should geometrically appear in the same location in
              relation to the rest of the screen, whether it covers the right
              rail (3-column layout) or the main content window (2-column
              layout).
            </ListItem>
          </List>
        </DocsSection>

        <DocsSection title="Accessibility guidance">
          <List>
            <ListItem>
              Back to top button should follow accessibility best practices
              listed in the ODG buttons section.
            </ListItem>
            <ListItem>
              The visible button text (Top) matches the beginning of the
              accessible name to allow speech input users interact with a web
              page. They usually speak a command followed by the reference to
              some visible label (like text in a button, the link text, or the
              text labelling input fields). For example, they may speak "click
              search" to activate a search button. When speech recognition
              software processes speech input and looks for matches, it uses the
              "accessible name" of controls, which can be different from the
              visible label.
            </ListItem>
            <ListItem>
              The name and role can be programmatically determined for all user
              interface components (including but not limited to: buttons, form
              elements, links and components generated by scripts).
            </ListItem>
            <ListItem>
              The size of the target for pointer inputs is at least 44 by 44 CSS
              pixels except when:
              <List>
                <ListItem>
                  The target is available through an equivalent link or control
                  on the same page that is at least 44 by 44 CSS pixels;
                </ListItem>
                <ListItem>The target is in a sentence or block of text;</ListItem>
                <ListItem>
                  The size of the target is determined by the user agent and is
                  not modified by the author;
                </ListItem>
                <ListItem>
                  A particular presentation of the target is essential to the
                  information being conveyed.
                </ListItem>
              </List>
            </ListItem>
          </List>
          <h3>Applicable standards</h3>

          <h4 className={appStyles.applicableStandardsh4}>
            Web Content Accessibility Guidelines (WCAG) 2.0/2.1
          </h4>
          <List>
            <ListItem>
              <ExternalLink
                href="https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships"
                target="_blank"
              >
                1.3.1 Info and Relationships
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink
                href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&currentsidebar=%23col_overview#contrast-minimum"
                target="_blank"
              >
                1.4.3. Contrast Minimum
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink
                href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&currentsidebar=%23col_overview&levels=aaa#reflow"
                target="_blank"
              >
                1.4.10 Reflow
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink
                href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&currentsidebar=%23col_overview#non-text-contrast"
                target="_blank"
              >
                1.4.11 Non-text Contrast
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink
                href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#keyboard"
                target="_blank"
              >
                2.1.1 Keyboard{" "}
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink
                href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&showtechniques=143&currentsidebar=%23col_overview#no-keyboard-trap"
                target="_blank"
              >
                2.1.2 No Keyboard Trap
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink
                href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&showtechniques=143&currentsidebar=%23col_overview#focus-order"
                target="_blank"
              >
                2.4.3 Focus Order
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
              <ExternalLink
                href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&currentsidebar=%23col_overview#label-in-name"
                target="_blank"
              >
                2.5.3 Label in Name
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink
                href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&currentsidebar=%23col_overview#target-size"
                target="_blank"
              >
                2.5.5 Target Size
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink
                href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&currentsidebar=%23col_overview#on-focus"
                target="_blank"
              >
                3.2.1 On Focus Level
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
          <h3>Known accessibility issues</h3>
          <p>
            A known accessibility issue is a technical issue that platform or
            assistive technology (AT) engineers are working to fix with each new
            release of iOS/Android or AT. For example, a role or state not being
            announced by a screen reader on a given platform.
          </p>
          <List>
            <ListItem>
              <strong>Issue:</strong> When the top button displays, JAWS 2021
              announces the button that was in focus before the top button in
              addition to announcing the top button. For example, if the
              previous button was in focus before the top button, JAWS might
              announce "previous button top button."
            </ListItem>
          </List>
        </DocsSection>
      </DocsPage>
    </div>
  );
}

/**
 * [Back To Top Component description]
 */
class BackToTop extends React.Component {
  /**
   *
   * @param {*} props
   */
  constructor(props) {
    super(props);
    this.checkHidden = this.checkHidden.bind(this);
    this.setHeight = this.setHeight.bind(this);

    this.state = {
      hidden: true,
      windowHeight: 400,
      belowFold: false,
      previousTop: 0
    };
  }

  static defaultProps = {
    relative: false,
    iconOnly: false,
    children: "Top"
  };

  /**
   * componentDidMount
   */
  componentDidMount() {
    window.addEventListener("scroll", this.checkHidden);
    window.addEventListener("resize", this.setHeight);
  }

  /**
   * componentWillUnmount()
   */
  componentWillUnmount() {
    window.removeEventListener("scroll", this.checkHidden);
    window.removeEventListener("resize", this.setHeight);
  }

  /**
   * checkHidden()
   */
  checkHidden() {
    // Check if Below Fold
    if (window.pageYOffset > this.state.windowHeight) {
      this.setState({
        hidden: this.state.hidden,
        windowHeight: window.innerHeight,
        belowFold: true,
        previousTop: this.state.previousTop
      });
    } else {
      this.setState({
        hidden: this.state.hidden,
        windowHeight: window.innerHeight,
        belowFold: false,
        previousTop: this.state.previousTop
      });
    }

    // Check if Hidden
    if (this.state.hidden) {
      // Check if should show
      if (this.state.belowFold && window.pageYOffset < this.state.previousTop) {
        this.setState({
          hidden: false,
          windowHeight: window.innerHeight,
          belowFold: true,
          previousTop: this.state.previousTop
        });
      }

      // Set New Previous Top
      this.setState({
        hidden: this.state.hidden,
        windowHeight: window.innerHeight,
        belowFold: this.state.belowFold,
        previousTop: window.pageYOffset
      });
    } else {
      // If already visible...
      // Check to reset
      if (window.pageYOffset == 0) {
        this.setState({
          hidden: true,
          windowHeight: window.innerHeight,
          belowFold: false,
          previousTop: this.state.previousTop
        });
        if ((document.activeElement.id = "backToTop")) {
          setTimeout(function() {
            document.activeElement.blur();
          }, 750);
        }
      }
    }
  }

  /**
   * setHeight()
   */
  setHeight() {
    this.setState({
      hidden: this.state.hidden,
      windowHeight: window.innerHeight
    });
  }

  /**
   * goToTop()
   */
  goToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    console.log(document.activeElement.id);
  }

  /**
   *
   * @returns {node}
   */
  render() {
    const mainClasses = buildClassList({
      [appStyles.hidden]: this.state.hidden,
      [appStyles.relative]: this.props.relative,
      [appStyles.backToTop]: true
    });

    return (
      <button id="backToTop" className={mainClasses} onClick={this.goToTop}>
        <ArrowUpIcon crop className={appStyles["backToTop-arrow-icon"]} />
        <span className={appStyles["backToTop-label"]}>Top</span>
      </button>
    );
  }
}

export default EmbedStyles(styles, typographyStyles, appStyles)(BackToTopPage);
