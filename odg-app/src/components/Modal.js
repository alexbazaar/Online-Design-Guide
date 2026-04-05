import React from "react";
import Helmet from "react-helmet";
import heredoc from "../utils/heredocument";
import { EmbedStyles } from "../../../ols-ui/src/helpers/utilities.js";
import List, { ListItem } from "../../../ols-ui/src/components/List";

import Modal from "../../../ols-ui/src/components/Modal";

import {
  DocsPage,
  DocsSection,
  DocsCode
} from "../../../ols-ui/src/components/DocsFoundations";

import Table, {
  TableRow,
  TableHeaderCell,
  TableCell
} from "../../../ols-ui/src/components/Tables";

import Panel from "../../../ols-ui/src/components/Panel";
import TabView, { Tab } from "../../../ols-ui/src/components/TabView";
import Link, { ExternalLink } from "../../../ols-ui/src/components/Links";
import ModalSpacingDeskTop from '../assets/images/spacing-specs/General_Elements_Modal_Desktop.png';
import ModalSpacingMobile from '../assets/images/spacing-specs/General_Elements_Modal_Mobile.png';
import { CloseIcon } from "../../../ols-ui/src/components/Icons";
import { FilledButton, OutlinedButton } from "../../../ols-ui/src/components/Buttons";
import styles from "../styles/Modal.scss";
import appStyles from "../styles/App.scss";


/**
 * *****************************************************************************
 * Content for Modal.
 *
 * @returns {[node]} The rendered DOM node
 * *****************************************************************************
 */
class ModalPage extends React.Component {

  state = {
    modalOpen: false,
    launchBtn: null
  }

  /**
   * closeDemoModal
   * return focus back to launch button``
   */
  closeDemoModal() {
    this.setState({ modalOpen: false });
    setTimeout(() => {
      this.state.launchBtn.focus();
    }, 0);
  }

  /**
   * *****************************************************************************
   * @returns {[node]}
   * *****************************************************************************
   */
  render() {

    const imgStyle = {
      width: '100%',
      maxWidth: '400px',
      margin: '0 auto',
      display: 'block'
    };

    return (
      <div>
        <Helmet title="Modal" />
        <DocsPage
          className="docs-styles"
          title="Modal"
          subtitle="Modals are pop-up &quot;windows&quot; that appear over the page content."
          emphasisTag={[ "IRAP APPROVED" ]}
        >
          <DocsSection>
            <TabView id="preview-tabs">
              <Tab label="Preview">
                <Panel className={styles.background}>
                  <div className={styles.overlay}></div>
                  <div className={styles.modal}
                    tabIndex="-1"
                    aria-label="modal title"
                    aria-describedby="modalDescription-preview"
                    role="dialog">
                    <div data-component="ModalBody">
                      <div id="modalDescription-preview" hidden>
                        Escape will cancel and close the dialog.
                      </div>

                      <button
                        className={styles.closeButton}
                        aria-label="Close the dialog window"
                      >
                        <span className={styles.closeButtonIcon}>
                          <CloseIcon unstyled />
                        </span>
                      </button>

                      <h2 id="modal-title-preview" className={`${styles.modalTitle} ${styles.modalTitlePreview}`}>
                        Modal title
                      </h2>

                      <div className={styles.modalBody}
                        data-component="ModalContent"
                      >
                        <p lang="la">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ea aliquip laboris.
                        </p>
                        <div className={styles.button__wrapper}>
                          <OutlinedButton>Button</OutlinedButton>
                          <FilledButton>Button</FilledButton>
                        </div>
                      </div>
                    </div>
                  </div>
                </Panel>
              </Tab>
              <Tab label="Spacing">
                <Panel>
                  <img
                    style={imgStyle}
                    className={appStyles.previewSpacingDesktopFluid}
                    src={ModalSpacingDeskTop}
                    alt="This is a marked up graphic of the Modal spacing for Desktop."
                  />
                  <img
                    style={imgStyle}
                    className={appStyles.previewSpacingMobileFluid}
                    src={ModalSpacingMobile}
                    alt="This is a marked up graphic of the Modal spacing for Mobile." />

                  <div>
                    <span style={{ marginTop: "16px", fontSize: '12px', lineHeight: "16px", display: "inline-block" }}><br /><strong>Note:</strong> Please refer to the specifications section for more detail.</span>
                  </div>
                </Panel>
              </Tab>
              <Tab label="HTML">
                <Panel className="panel-code" padding="none">
                  <DocsCode language="xml">
                    {heredoc`
                    <Modal title="Modal title" closeModal={this.closeDemoModal.bind(this)}>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ea aliquip laboris.
                      </p>
                      <div className="button__wrapper">
                        <OutlinedButton>Button</OutlinedButton>
                        <FilledButton>Button</FilledButton>
                      </div>
                    </Modal>
                    `}
                  </DocsCode>
                </Panel>
              </Tab>
              <Tab label="CSS">
                <Panel className="panel-code" padding="none" maxheight="medium">
                  <DocsCode language="scss">
                    {heredoc`

                    $open-transition-time: 250ms;
                    $close-transition-time: 125ms;
                    $ease-in-out-back: cubic-bezier(0.68, -0.55, 0.265, 1.55);
                    $ease-in-out-quad: cubic-bezier(0.455, 0.03, 0.515, 0.955);
                    $modalCloseIconWidth: 35px;
                    $modalCloseIconHeight: 35px;

                    .overlay {
                      @include overlay;
                      background: #000000;
                      opacity: 0;
                      transition: opacity $close-transition-time $ease-in-out-quad;

                      &[data-modal-open] {
                        opacity: 0.5;
                        transition: opacity $open-transition-time $ease-in-out-quad;
                      }

                      &[data-modal-open="false"] {
                        opacity: 0;
                        transition: opacity $close-transition-time $ease-in-out-quad;
                      }
                    }

                    .modal {
                      position: fixed;
                      z-index: $z-index-modal;
                      top: 20%;
                      right: 0;
                      left: 0;
                      min-width: 350px;
                      max-width: 900px;
                      color: #1b1b1b;
                      padding: $module-spacing * 2;
                      margin: ($module-spacing * 2) auto;
                      background-color: #ffffff;
                      box-shadow: 0 1px 5px 0 rgba(0,0,0,0.20), 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12);
                      opacity: 0;
                      outline: none;
                      transform: scale(0.5);
                      transition: all $close-transition-time $ease-in-out-quad;

                      &[data-modal-open] {
                        opacity: 1;
                        transform: scale(1);
                        transition: all $open-transition-time $ease-in-out-quad;
                      }

                      &[data-modal-open="false"] {
                        opacity: 0;
                        transition: all $close-transition-time $ease-in-out-quad;
                      }

                      @include media-breakpoint-down(sm) {
                        width: auto !important;
                        min-width: auto;
                        margin: 20px;
                      }
                    }

                    .modalTitle {
                      @include heading1;
                      padding-right: $module-spacing * 3;
                      margin-bottom: baselines(3);
                    }

                    [data-component="ModalContent"] {
                      font-size: 16px;
                      line-height: 24px;
                    }

                    .closeButton {
                      @include button-unstyled;
                      position: absolute;
                      top: -($modalCloseIconHeight /2);
                      right: -($modalCloseIconWidth /2);
                      text-align: center;
                      color: #00599c;

                      &:focus {
                        outline: 3px solid #2491ff;
                        outline-offset: 4px;
                      }

                      .closeButtonIcon {
                        border: none;
                        height: $modalCloseIconHeight;
                        width: $modalCloseIconWidth;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        position: relative;

                        &:after {
                          content: "";
                          display: block;
                          background-color: #ffffff;
                          border-radius: 50%;
                          position: absolute;
                          top: 2px;
                          left: 2px;
                          bottom: 2px;
                          right: 2px;
                          z-index: -1;
                        }

                        [data-component="icon-wrapper"] {
                          line-height: 0;
                        }

                        svg {
                          height: $modalCloseIconHeight;
                          width: $modalCloseIconWidth;
                        }
                      }

                    }

                    .srOnly {
                      @include sr-only;
                    }

                    :global {

                      // stylelint-disable selector-no-qualifying-type
                      body.modal__open {
                        overflow: hidden;
                      }

                      [data-component="ModalContent"] .button__wrapper {
                        margin-top: $module-spacing * 2;

                        button {
                          margin-right: $module-spacing;
                          font-size: $font-size-base - 2px;
                          line-height: 20px;
                        }

                        button:last-child:first-child {
                          margin-right: 0;
                        }
                      }

                      @include media-breakpoint-down(sm) {

                        [data-component="ModalContent"] .button__wrapper button {
                          display: block;
                          width: 100%;
                          margin: 0 0 $module-spacing;
                        }
                        [data-component="ModalContent"] .button__wrapper button:last-child {
                          margin-bottom: 0;
                        }
                      }
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
            Modal windows are best used when you need to grab a user's attention
              or show additional information that would not necessarily fit thematically within the confines of the main page. They are also commonly used when user input is required (such as a sign up or login form).
              They should only be used if their content requires 100% of the user's focus.
            </p>
            <div>
              <FilledButton
                onClick={(evt) => {
                  this.setState({ modalOpen: true, launchBtn: evt.target });
                }}
              >View modal demo</FilledButton>
            </div>
          </DocsSection>

          <DocsSection title="Specifications">

            <h3>Typography</h3>
            <Table
              caption="Modal typography specifications"
            >
              <thead>
                <TableRow>
                  <TableHeaderCell scope="col">Context</TableHeaderCell>
                  <TableHeaderCell scope="col">Reference</TableHeaderCell>
                  <TableHeaderCell scope="col">Color name</TableHeaderCell>
                  <TableHeaderCell scope="col">Hex</TableHeaderCell>
                </TableRow>
              </thead>
              <tbody>
                <TableRow>
                  <TableHeaderCell>Title</TableHeaderCell>
                  <TableCell>
                    <Link to="/styles/typography/#display-type">
                      Heading 28
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Link to="/styles/colors">
                      Gray darkest
                    </Link>
                  </TableCell>
                  <TableCell>
                    #1b1b1b
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableHeaderCell>Content</TableHeaderCell>
                  <TableCell>
                    <Link to="/styles/typography/#display-type">
                      Body text
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Link to="/styles/colors">
                      Gray darkest
                    </Link>
                  </TableCell>
                  <TableCell>
                    #1b1b1b
                  </TableCell>
                </TableRow>
              </tbody>
            </Table>

            <h3>Modal box</h3>
            <Table
              caption="Modal box specifications"
              className={styles["modal-box-spec-table"]}
            >
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
                    <Link to="/styles/colors">
                      White
                    </Link>
                  </TableCell>
                  <TableCell>
                    #ffffff
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableHeaderCell>Content margin (bottom)</TableHeaderCell>
                  <TableCell>32px auto</TableCell>
                  <TableCell>N/A</TableCell>
                  <TableCell>N/A</TableCell>
                </TableRow>
                <TableRow>
                  <TableHeaderCell>Padding</TableHeaderCell>
                  <TableCell>32px</TableCell>
                  <TableCell>N/A</TableCell>
                  <TableCell>N/A</TableCell>
                </TableRow>
                <TableRow>
                  <TableHeaderCell>Box shadow</TableHeaderCell>
                  <TableCell>0 1px 5px 0,<br />0 2px 2px 0,<br />0 3px 1px -2px<br /></TableCell>
                  <TableCell>rgba(0,0,0,0.20),<br />rgba(0,0,0,0.14),<br />rgba(0,0,0,0.12)</TableCell>
                  <TableCell>N/A</TableCell>
                </TableRow>
                <TableRow>
                  <TableHeaderCell>Background: Overlay </TableHeaderCell>
                  <TableCell>N/A</TableCell>
                  <TableCell>
                    Black
                  </TableCell>
                  <TableCell>
                    #000000
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableHeaderCell>Background: Overlay opacity</TableHeaderCell>
                  <TableCell>0.54</TableCell>
                  <TableCell>
                    N/A
                  </TableCell>
                  <TableCell>N/A</TableCell>
                </TableRow>

              </tbody>
            </Table>

            <h3>Icon elements</h3>
            <Table
              caption="Modal icon elements specifications"
            >
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
                  <TableHeaderCell>Icon</TableHeaderCell>
                  <TableCell>
                    <Link to="/styles/iconography">
                    circle-xmark-regular
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Link to="/styles/colors">
                      Blue
                    </Link>
                  </TableCell>
                  <TableCell>
                    #00599c
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableHeaderCell>Position</TableHeaderCell>
                  <TableCell>absolute</TableCell>
                  <TableCell>N/A</TableCell>
                  <TableCell>N/A</TableCell>
                </TableRow>
                <TableRow>
                  <TableHeaderCell>Width</TableHeaderCell>
                  <TableCell>35px</TableCell>
                  <TableCell>N/A</TableCell>
                  <TableCell>N/A</TableCell>
                </TableRow>
                <TableRow>
                  <TableHeaderCell>Height</TableHeaderCell>
                  <TableCell>35px</TableCell>
                  <TableCell>N/A</TableCell>
                  <TableCell>N/A</TableCell>
                </TableRow>
                <TableRow>
                  <TableHeaderCell>Margin (left)</TableHeaderCell>
                  <TableCell>N/A</TableCell>
                  <TableCell>N/A</TableCell>
                  <TableCell>N/A</TableCell>
                </TableRow>
              </tbody>
            </Table>

            <h3>Focus state</h3>
            <Table caption="Modal focus state specifications">
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
                  <TableCell><Link to="/styles/colors">Blue vivid</Link></TableCell>
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
                Ensure that users can exit the modal easily by using an X in the upper-right corner or a "Cancel" button. Users should also be able to exit the modal by clicking anywhere outside of it (i.e., anywhere on the parent page behind it). Multiple exit strategies are especially important on mobile, as only using an X in the upper right may be too small for many people to select it effectively.
              </ListItem>
              <ListItem>
                Content should fit the size of the modal and the modal should not take up the entire screen. If there is so much content that a scrollbar is necessary, then a different page instead of a modal might be better. On mobile, the modal can stretch most of the width of the screen (though should still have small side margins) but it should not also stretch the height of the screen.            </ListItem>
              <ListItem>
                Locate the modal in the upper half of the screen. The user should not have to scroll down to see the modal.
              </ListItem>
              <ListItem>
                When a modal is used, a dark overlay layer should become visible for better visibility of the modal and to ensure that the user is not going to interact with the content on the parent page before modal is dismissed.            </ListItem>
              <ListItem>
                When possible, modals should be user-initiated. That is, they should not be automatically opened. Users should be able to trigger them by selecting a link or a button.
              </ListItem>
              <ListItem>
                Modals should have a descriptive title so that users can easily tell the purpose of them.
              </ListItem>
              <ListItem>
                Ensure that modals adhere to the site's responsiveness. Users should never have to scroll horizontally because a modal did not resize itself with the page.
              </ListItem>
            </List>
          </DocsSection>

          <DocsSection title="Accessibility guidance">

            <h3>Behavior</h3>
            <List>
              <ListItem>
                Users cannot interact with content outside an active <code>&lt;dialog&gt;</code> window.
              </ListItem>
              <ListItem>
                Modal dialogs do not provide means for moving keyboard focus outside the dialog window without closing the dialog.
              </ListItem>
            </List>

            <h3>Keyboard</h3>
            <List>
              <ListItem>Dialogs can be opened and closed via the keyboard.</ListItem>
              <ListItem>All interactive content inside a modal is keyboard accessible.</ListItem>
              <ListItem>
                Tab and shift + tab do not move focus outside the dialog.
                <List>
                  <ListItem><strong>Tab</strong>
                    <List>
                      <ListItem>Moves focus to the next tabbable element inside the dialog.</ListItem>
                      <ListItem>If focus is on the last tabbable element inside the dialog, moves focus to the first tabbable element inside the dialog.</ListItem>
                    </List>
                  </ListItem>
                  <ListItem><strong>Shift + tab</strong>
                    <List>
                      <ListItem>
                        Moves focus to the previous tabbable element inside the dialog.
                      </ListItem>
                      <ListItem>
                        If focus is on the first tabbable element inside the dialog, moves focus to the last tabbable element inside the dialog.
                      </ListItem>
                      <ListItem>
                        The tab sequence of all dialogs includes a visible element with role button that closes the dialog, such as a close icon or cancel button.
                      </ListItem>
                    </List>
                  </ListItem>
                  <ListItem><strong>Escape:</strong> Closes the dialog</ListItem>
                </List>
              </ListItem>
            </List>
            <h3>Focus</h3>
            <List>
              <ListItem>
                Each interactive element within the modal will display a visible border when it receives keyboard focus.
              </ListItem>
              <ListItem>
                When a dialog opens, focus moves to an element contained in the dialog.
              </ListItem>
              <ListItem>
                When a dialog closes, focus returns to the element that invoked the dialog unless either:
                <List>
                  <ListItem>
                    In some contexts, such as a session timeout warning dialog, the movement of focus to the dialog can be supplemented with playing a system beep or other appropriate audio file. This would call the assistive technology user's attention to the dialog, particularly if a timely response is required.
                  </ListItem>
                  <ListItem>
                    Users (and keyboard-only users who are sighted) do not have difficulty locating the new content or understanding its relationship to the activating control.
                  </ListItem>
                </List>
              </ListItem>
            </List>

            <h3>Structure</h3>
            <List>
              <ListItem>
                Dialogs require a programmatic title so that screen reader users understand their purpose.
              </ListItem>
              <ListItem>
                Use of appropriate dialog markup will allow users of screen reader users to know the beginning and ending boundaries of the dialog:
                <List>
                  <ListItem>
                    The best way to indicate the beginning and end of a dialog is to use semantic structures such as the <code>&lt;dialog&gt;</code> element or an ARIA role of dialog.
                  </ListItem>
                  <ListItem>
                    ARIA role of dialog or region with <code>aria-labelledby</code> or <code>aria-label</code> inserts the boundaries of the dialog/region into the browser mode/virtual cursor mode of the screen reader and will communicate where the dialog begins and ends to the screen reader user.
                  </ListItem>
                </List>
              </ListItem>
              <ListItem>
                Non-modal dialogs are rendered inline with the controls that activate them i.e., they must appear directly after the link that activates them in the source code to ensure screen reader.
              </ListItem>
            </List>

            <h3>Applicable standards</h3>
            <h4 className={appStyles.applicableStandardsh4}>Web Content Accessibility Guidelines (WCAG) 2.0/2.1</h4>
            <List>
              <ListItem><ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships">1.3.1 Info and Relationships</ExternalLink></ListItem>
              <ListItem><ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#meaningful-sequence">1.3.2 Meaningful Sequence</ExternalLink></ListItem>
              <ListItem><ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#keyboard">2.1.1 Keyboard</ExternalLink></ListItem>
              <ListItem><ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#page-titled">2.4.2 Page Titled</ExternalLink></ListItem>
              <ListItem><ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#focus-order">2.4.3 Focus Order</ExternalLink></ListItem>
              <ListItem><ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#focus-visible">2.4.7 Focus Visible</ExternalLink></ListItem>
              <ListItem><ExternalLink href="https://www.w3.org/WAI/WCAG21/quickref/#name-role-value">4.1.2 Name, Role, Value</ExternalLink></ListItem>
            </List>

            <h4 className={appStyles.applicableStandardsh4}>WAI-ARIA Authoring Practices 1.1</h4>
            <List>
              <ListItem><ExternalLink href="https://www.w3.org/TR/wai-aria-practices-1.1/examples/dialog-modal/dialog.html">Modal Dialog Example</ExternalLink></ListItem>
            </List>
          </DocsSection>
        </DocsPage>
        {this.state.modalOpen &&
          <Modal
            title="Exit application?"
            closeModal={this.closeDemoModal.bind(this)}>
            <p>
              You are about to leave the application. If you leave now, your data will be erased, and you will have to start the process over again. Are you sure you want to continue?
            </p>
            <div className="button__wrapper">
              <OutlinedButton onClick={this.closeDemoModal.bind(this)}>Yes</OutlinedButton>
              <FilledButton onClick={this.closeDemoModal.bind(this)}>No</FilledButton>
            </div>
          </Modal>
        }
      </div>
    );
  }
}

export default EmbedStyles(styles)(ModalPage);
