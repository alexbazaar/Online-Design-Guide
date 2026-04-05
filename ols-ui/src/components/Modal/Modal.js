import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { buildClassList } from "../../helpers/utilities";
import findTabbable from "tabbable";
import { CloseIcon } from "../Icons";
import styles from "./Modal.scss";

/**
 * Modal wrapper component provides the overlay, modal container and modal title.
 * The remainder of the modal's content should be provided as children
 * Options available via props:
 *   • closeOnOverlaylick: bool - if true, clicking on overlay will close the modal
 *   • width: string - defaults to 50% - the width of the modal in % or px
 *
 * 508 compliance inspired by https://github.com/gdkraus/accessible-modal-dialog/blob/master/modal-window.js
 */
export default class Modal extends Component {
  /**
   * Constructor.
   * @param {Object} props The props that will be applied to this component.
   */
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleOverlayClick = this.handleOverlayClick.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.el = document.createElement('div');
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    closeOnOverlayClick: PropTypes.bool,
    width: PropTypes.string.isRequired,
    closeModal: PropTypes.func.isRequired,
    triggerEl: PropTypes.object,
    className: PropTypes.string
  };

  static defaultProps = {
    closeOnOverlayClick: true,
    width: "50%"
  };


  /**
   * Click handler for overlay
   * @param  {event} event - React synthetic event
   */
  handleOverlayClick(event) {
    event.preventDefault();
    event.stopPropagation();

    if (this.props.closeOnOverlayClick) {
      this.closeModal();
    }
  }

  /**
   * Key press handler
   * @param {event} event - React synthetic event
   */
  handleKeyDown(event) {
    if (event.defaultPrevented) {
      return;
    }

    const ESCAPE_KEY = 27;
    const TAB_KEY = 9;

    const key = event.key || event.keyCode;

    if (key === 'Escape' || key === 'Esc' || key === ESCAPE_KEY) {
      event.preventDefault();
      this.closeModal();
    }

    if (event.which === TAB_KEY) {
      // get list of focusable items
      const focusableItems = findTabbable(this.modalEl);
      // get currently focused item
      const focusedItem = document.activeElement;
      // get the number of focusable items
      const numberOfFocusableItems = focusableItems.length;
      // get the index of the currently focused item
      const focusedItemIndex = focusableItems.indexOf(focusedItem);

      if (event.shiftKey) {
        // Shift tab - if first item has focus, go to the last focusable item
        if (focusedItemIndex === 0) {
          event.preventDefault();
          focusableItems[numberOfFocusableItems - 1].focus();
        }
      } else {
        // Tab - if last item has focus, go to the first focusable item
        if (focusedItemIndex === numberOfFocusableItems - 1) {
          event.preventDefault();
          focusableItems[0].focus();
        }
      }
    }
  }

  /**
   * Close the modal actions
   */
  closeModal() {
    // Dispatch action creator
    this.props.closeModal();
  }

  /**
   * Actions taken after component mounts
   */
  componentDidMount() {
    // Animate opening. SetTimeout to make sure element is in DOM.
    setTimeout(() => {
      this.overlayEl.setAttribute("data-modal-open", "");
      this.modalEl.setAttribute("data-modal-open", "");
      document.body.classList.add("modal__open");
    }, 0);
    // Move focus to modal
    setTimeout(() => {
      this.modalEl.focus();
    }, 250);
    document.getElementById("root").setAttribute("aria-hidden", true);
    document.body.appendChild(this.el);
  }


  /**
   * cleans up portal element
   */
  componentWillUnmount() {
    document.getElementById("root").removeAttribute("aria-hidden");
    document.body.classList.remove("modal__open");
    document.body.removeChild(this.el);
  }

  /**
   * Renders the component.
   * @returns {Node|null} The rendered DOM node.
   */
  render() {
    return ReactDOM.createPortal((
      /* eslint-disable jsx-a11y/no-static-element-interactions */
      /* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
      /* eslint-disable jsx-a11y/click-events-have-key-events */
      <div>
        <div
          id="modal__overlay"
          ref={(i) => {
            this.overlayEl = i;
          }}
          className={styles.overlay}
          tabIndex="-1"
          onClick={this.handleOverlayClick}
          data-component="ModalOverlay"
        />
        <div
          role="dialog"
          aria-modal="true"
          id="modal__modal"
          aria-label={this.props.title}
          ref={(i) => {
            this.modalEl = i;
          }}
          tabIndex="-1"
          aria-describedby="modalDescription"
          className={buildClassList([ styles.modal, this.props.className ])}
          onKeyDown={this.handleKeyDown}
          style={{ width: this.props.width }}
          data-component="Modal"
        >
          <div data-component="ModalBody">
            <div id="modalDescription" hidden>
              Escape will cancel and close the window.
            </div>

            <button
              id="modalCloseButton"
              className={styles.closeButton}
              onClick={this.closeModal}
              data-component="ModalCloseButton"
              aria-label="Close the dialog window"
              ref={(i) => {
                this.closeButtonEl = i;
              }}
            >
              <span className={styles.closeButtonIcon}>
                <CloseIcon unstyled />
              </span>
            </button>

            <h1
              id="modalTitle"
              ref={(i) => {
                this.modalTitle = i;
              }}
              className={styles.modalTitle}
              data-component="ModalTitle"
            >
              {this.props.title}
            </h1>

            <div data-component="ModalContent">{this.props.children}</div>

          </div>
        </div>
      </div>
    ), this.el);
  }
}
