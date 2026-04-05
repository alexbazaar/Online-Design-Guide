import React from "react";
import Helmet from "react-helmet";
import heredoc from "../utils/heredocument";
import { EmbedStyles } from "../../../ols-ui/src/helpers/utilities.js";

import { DocsPage, DocsSection, DocsCode } from "../../../ols-ui/src/components/DocsFoundations";

import Table, { TableRow, TableHeaderCell, TableCell } from "../../../ols-ui/src/components/Tables";

import List, { ListItem } from "../../../ols-ui/src/components/List";
import Link, { ExternalLink } from "../../../ols-ui/src/components/Links";
import Panel from "../../../ols-ui/src/components/Panel";
import TabView, { Tab } from "../../../ols-ui/src/components/TabView";

import SearchField from "../../../ols-ui/src/components/SearchField";

import SearchFieldDesktopIcon from "../assets/images/spacing-specs/Form_Elements_Search_Bar_Desktop_Icon.png";
import SearchFieldMobile from "../assets/images/spacing-specs/Form_Elements_Search_Bar_Mobile.png";

import appStyles from "../styles/App.scss";

import styles from "../styles/Typography.scss";

/**
 * *****************************************************************************
 * Content for Buttons.
 *
 * @returns {node} node
 * *****************************************************************************
 */
function SearchFieldPage() {
  return (
    <div>
      <Helmet title="Search" />
      <DocsPage
        className="docs-styles"
        title="Search"
        subtitle="Search helps users look for specific content."
      >
        <DocsSection>
          <TabView id="preview-tabs">
            <Tab label="Preview">
              <Panel>
                <SearchField id="small-search" size="small" />
                <div style={{ marginTop: "16px"}} />
                <SearchField id="normal-search" />
              </Panel>
            </Tab>
            <Tab label="Spacing">
              <Panel maxheight="medium">
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  <img
                    style={{
                      maxHeight: "auto",
                      "max-width": "400px",
                      height: "auto"
                    }}
                    src={SearchFieldDesktopIcon}
                    alt="This is a marked up graphic of the Search Field spacing"
                    className={appStyles.previewSpacingDesktopFluid}
                  />
                </div>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  <img
                    style={{
                      maxHeight: "auto",
                      "max-width": "auto",
                      height: "auto"
                    }}
                    src={SearchFieldMobile}
                    alt="This is a marked up graphic of the Mobile Search Field spacing"
                    className={appStyles.previewSpacingMobileFluid}
                  />
                </div>

                <div>
                  <span style={{ marginTop: "16px", fontSize: '12px', lineHeight: "16px", display: "inline-block" }}><br /><strong>Note:</strong> Please refer to the specifications section for more detail.</span>
                </div>
              </Panel>
            </Tab>
            <Tab label="HTML">
              <Panel className="panel-code" padding="none" maxheight="medium">
                <DocsCode language="xml">
                  {heredoc`
                  <SearchField id="small-search" size="small" />
                  <SearchField id="normal-search" />
                `}
                </DocsCode>
              </Panel>
            </Tab>
            <Tab label="CSS">
              <Panel className="panel-code" padding="none" maxheight="medium">
                <DocsCode language="scss">
                  {heredoc`
                  $btn-small-width:   50px;
                  $btn-medium-width:  130px;
                  $btn-big-width:     $btn-medium-width;

                  $input-height:      44px;

                  $search-font-size:  $font-size-base + 4px;
                  $search-line-height: baselines(4);

                  @mixin search-icon {
                    background-image: url("./search.svg");
                    background-position: 50%;
                    background-repeat: no-repeat;
                  }

                  .srOnly {
                    border: 0;
                    clip: rect(0 0 0 0);
                    height: 1px;
                    margin: -1px;
                    overflow: hidden;
                    padding: 0;
                    position: absolute;
                    width: 1px;
                  }

                  .search {
                    @include clearfix;
                    position: relative;
                    max-width: none;

                    [role="search"] & {
                      display: flex;
                    }

                    .input {
                      @include input-text;
                      border-color: #1b1b1b;
                      box-sizing: border-box;
                      padding-top: 0;
                      padding-bottom: 0;
                      border-right: none;
                      margin: 0;
                      appearance: none;
                      border-radius: 0;
                      float: left;
                    }

                    .submit {
                      @include button;
                      @include search-icon;
                      width: $btn-small-width + 4px;
                      height: $input-height;
                      padding: baselines(3) baselines(4);
                      margin: 0;
                      background-color: #00599c;
                      border-bottom-left-radius: 0;
                      border-top-left-radius: 0;
                      color: #ffffff;

                      @include media-breakpoint-up(sm) {
                        width: auto;
                        padding: baselines(3) baselines(4);
                        background-image: none;
                        font-size: $search-font-size;
                        line-height: $search-line-height;
                      }
                    }

                    .submitText {
                      display: none;
                      padding: 0;
                      text-transform: none;

                      @include media-breakpoint-up(sm) {
                        display: block;
                      }
                    }

                    &.small {
                      [type="submit"] {
                        background-image: none;
                      }

                      @include media-breakpoint-up(sm) {
                        $width: $btn-small-width;

                        [type="submit"] {
                          width: $width;
                        }
                      }
                    }

                    .searchBox,.closeIcon {
                      position: relative;
                      padding: 10px;
                    }

                    .closeIcon {
                      border: 0;
                      background-color: transparent;
                      display: inline-block;
                      vertical-align: middle;
                      outline: 0;
                      padding: 0;
                      margin: 0;
                      cursor: pointer;

                      &:after {
                        content: url("./search-close.svg");
                        display: block;
                        width: 16px;
                        height: 16px;
                        position: absolute;
                        z-index:1;
                        right: 15px;
                        top: 0;
                        bottom: 0;
                        margin: auto;
                        padding: 0;
                        cursor: pointer;
                      }
                    }

                    .searchBox:not(:valid) ~ .closeIcon {
                      display: none;
                    }

                    input[type="search"]::-webkit-search-decoration,
                    input[type="search"]::-webkit-search-cancel-button {
                        -webkit-appearance: none;
                    }
                  }

                  // Custom focus outline for Search Field
                  .search .input:focus {
                    box-shadow: 0px 0px 0px 3px #2491ff;
                    border-radius: 0;
                    outline: none;
                    z-index: 1;
                  }

                  .submit {
                    position: relative;

                    &:focus:not(.focus-visible) {
                      outline: none;
                    }
                  }

                  .search *:focus:not(.focus-visible) {
                    outline: none;
                  }

                  .search .submit:focus:not(.focus-visible):before {
                    box-sizing: border-box;
                    border: 3px solid #2491ff;
                    content: "";
                    display: block;
                    height: calc(100% + 16px);
                    width: calc(100% + 16px);
                    position: absolute;
                    top: -8px;
                    left: -8px;
                  }
                `}
                </DocsCode>
              </Panel>
            </Tab>
          </TabView>
          <span className={appStyles.disclaimer}>
            <strong>Note:</strong>
            <ul>
              <li>Use browser inspect tool to view the component at various breakpoints.</li>
              <li>There are multiple search fields on this page that are identical in functionality but differ in design (mobile version and desktop version). They each have the same accessible name because their functionality is the same. A unique identifier was not assigned since they will be used by the developers to fit respective applications or websites.</li>
            </ul>
          </span>
        </DocsSection>

        <DocsSection title="When to use">
          <p>
            A search box is typically used to search an entire website and
            should be present on every website (but especially on complex,
            content-heavy sites like IRS.gov).
          </p>
        </DocsSection>

        <DocsSection title="Specifications">
          <h3>Typography</h3>
          <Table caption="Search field typography specifications">
            <thead>
              <TableRow>
                <TableHeaderCell scope="col">Context</TableHeaderCell>
                <TableHeaderCell scope="col">Reference/Value</TableHeaderCell>
                <TableHeaderCell scope="col">Color name</TableHeaderCell>
                <TableHeaderCell scope="col">Hex</TableHeaderCell>
              </TableRow>
            </thead>
            <tbody>
              <TableRow>
                <TableHeaderCell>Text</TableHeaderCell>
                <TableCell>
                  <Link to="/styles/typography/#display-type">Body text</Link>
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">Gray darkest</Link>
                </TableCell>
                <TableCell>#1b1b1b</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Button label</TableHeaderCell>
                <TableCell>20px</TableCell>
                <TableCell>
                  <Link to="/styles/colors">White</Link>
                </TableCell>
                <TableCell>#ffffff</TableCell>
              </TableRow>
            </tbody>
          </Table>

          <h3>Search elements</h3>
          <Table caption="Search field elements specifications">
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
                <TableHeaderCell>Background</TableHeaderCell>
                <TableCell>N/A</TableCell>
                <TableCell>
                  <Link to="/styles/colors">White</Link>
                </TableCell>
                <TableCell>#ffffff</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Border</TableHeaderCell>
                <TableCell>solid 1px</TableCell>
                <TableCell>
                  <Link to="/styles/colors">Gray darkest</Link>
                </TableCell>
                <TableCell>#1b1b1b</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Padding</TableHeaderCell>
                <TableCell>16px</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Button</TableHeaderCell>
                <TableCell>Filled</TableCell>
                <TableCell>
                  <Link to="/styles/colors">Blue</Link>
                </TableCell>
                <TableCell>#00599c</TableCell>
              </TableRow>
            </tbody>
          </Table>

          <h3>Icon elements</h3>
          <Table caption="Search field icon elements specifications">
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
                <TableHeaderCell>Icon (search)</TableHeaderCell>
                <TableCell>
                  <Link to="/styles/iconography">magnifying-glass-solid</Link>
                </TableCell>
                <TableCell>
                  <Link to="/styles/colors">White</Link>
                </TableCell>
                <TableCell>#ffffff</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Icon (search)</TableHeaderCell>
                <TableCell>16px</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Icon (close)</TableHeaderCell>
                <TableCell>16px</TableCell>
                <TableCell>N/A</TableCell>
                <TableCell>N/A</TableCell>
              </TableRow>
            </tbody>
          </Table>

          <h3>Focus state</h3>
          <Table caption="Search field focus state specifications">
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
                <TableCell>#2491ff</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Padding (buttons)</TableHeaderCell>
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
            Use a magnifying glass icon, the word "Search" or both. The magnifying glass icon is one of the few that is almost universally recognized and associated with a certain functionality.
            </ListItem>
            <ListItem>
            Display the search field prominently instead of hiding it in a menu, especially if search is the primary way users interact with the site. Ensure that the search is present on every page, ideally in the same location.
            </ListItem>
            <ListItem>
            Always provide a button instead of just a field; buttons help trigger a call to action.
            </ListItem>
            <ListItem>
            Put the search where users expect to find it; this is typically at the top-right or top-left of the page.
            </ListItem>
            <ListItem>
            Ensure that the search bar is as wide as possible, a minimum of 27 characters. This allows users who are entering long or complex queries to see most or all of what they are typing without some of it "disappearing."
            </ListItem>
            <ListItem>
            Use an auto-suggestion mechanism, but only if the suggestions are useful.
            </ListItem>
            <ListItem>
            Avoid showing a "no results" page for search queries that do not turn up matching results. Consider providing alternative search queries, spelling corrections, and advice about how to modify queries using different words or fewer words for search queries.  
            </ListItem>
          </List>
        </DocsSection>

        <DocsSection title="Accessibility guidance">
          <List>
            <ListItem>The combination of the search field accessible name, accessible description, and other programmatic associations describe the search field and includes all relevant instructions and cues (textual and graphical).</ListItem>
            <ListItem>All search field and search button functionality can be accessed and executed using the keyboard.</ListItem>
            <ListItem>There is no keyboard trap.</ListItem>
            <ListItem>Placeholder text can be used in addition to the search field label and its accessible name. </ListItem>
            <ListItem>When search results are present on the screen, the assistive technology should notify the user about the number of search results listed on a page and the size of the total search set.  </ListItem>
            <ListItem>When the user selects the search button, the page moves focus to the content change, and the content itself provides adequate notification and description of the change.</ListItem>
            <ListItem>Entering text in the search field does NOT initiate an unexpected change of context such as:
            <List>
              <ListItem>A new window launching after selecting the search button.</ListItem>
              <ListItem>Anything that would look to a user as if they have moved to a new page without warning.</ListItem>
            </List>
            </ListItem>
          </List>

          <h3>Applicable standards</h3>
          <h4 className={appStyles.applicableStandardsh4}>Web Content Accessibility Guidelines (WCAG) 2.0/2.1</h4>
          <List>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships">1.3.1 Info and Relationships</ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&currentsidebar=%23col_overview#contrast-minimum">1.4.3 Contrast (Minimum)</ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&showtechniques=143&currentsidebar=%23col_overview#non-text-contrast">1.4.11 Non-text Contrast</ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#keyboard">2.1.1 Keyboard</ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&showtechniques=143&currentsidebar=%23col_overview#no-keyboard-trap">2.1.2 No Keyboard Trap</ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&currentsidebar=%23col_overview#focus-order">2.4.3 Focus Order</ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#headings-and-labels">2.4.6 Headings and Labels</ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&currentsidebar=%23col_overview#focus-visible">2.4.7 Focus Visible</ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&showtechniques=143&currentsidebar=%23col_overview#label-in-name">2.5.3 Label in Name</ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&showtechniques=143&currentsidebar=%23col_overview#target-size">2.5.5 Target Size</ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&showtechniques=143&currentsidebar=%23col_overview#on-focus">3.2.1 On Focus</ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&showtechniques=143&currentsidebar=%23col_overview#on-input">3.2.2 On Input</ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#labels-or-instructions">3.3.2 Labels or Instructions</ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&showtechniques=143&currentsidebar=%23col_overview#name-role-value">4.1.2 Name, Role, Value</ExternalLink>
            </ListItem>
          </List>

        </DocsSection>
      </DocsPage>
    </div>
  );
}

export default EmbedStyles(styles, appStyles)(SearchFieldPage);
