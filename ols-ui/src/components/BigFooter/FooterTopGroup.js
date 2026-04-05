import PropTypes from 'prop-types';
import React from 'react';
import { buildClassList } from '../../helpers/utilities';
import FooterContext from './FooterContext';

import styles from './IRSFooter.scss';
import Accordion, { AccordionItem, AccordionItemBody, AccordionItemTrigger } from "../Accordion";


class FooterTopGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileVisible: false,
      open: false // TODO: Can possibly remove since using CL Accordion Component.
    };
  }

  /**
   * Watches for the window width change to mobile
   * Updates the `mobileVisible` state according to logic
   *
   * @method handleResize
   */
  handleResize = () => {
    let appWidth;
    if (document.getElementById("app") !== null) {
      appWidth = document.getElementById("app").offsetWidth;
    }
    // Needs dual check for offsetWidth
    if (window.innerWidth < 768 || appWidth < 768) {
      this.setState({
        mobileVisible: true
      });
      return;
    } else {
      if (this.state.mobileVisible) {
        this.setState({
          mobileVisible: false
        });
      }
    }
  };


  /**
   * componentDidMount - watches for the window resize
   *
   */
  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  }

  /**
   * [componentWillUnmount - removes the listeners
   */
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }


  render()
  {

    const { text, children, dataTestId } = this.props;

    const id = text.replace(/\s+/g, '-').toLowerCase();

    if (React.Children.count(children) === 0) return null;

    // TODO: This can possibly be removed. Our accordion component should have the correct accessibility properties
    const opts = {};
    if (this.state.mobileVisible) {
      opts['aria-controls'] = id;
      opts['aria-expanded'] = this.state.open ? 'true' : 'false';
    } else {
      opts.role = 'heading';
      opts.focusable = false;
      opts.tabIndex = '-1';
    }

    return (
      <React.Fragment>
        {this.state.mobileVisible ? (
          <div data-component="MobileFooterGroup" className={`${styles.MobileFooterGroup} ${styles.footerTopGroup}`}>
            <Accordion>
              <AccordionItem>
                <AccordionItemTrigger
                  headingLevel="3"
                  className={styles.groupLabel}
                  footer={true}
                >
                  {text}
                </AccordionItemTrigger>
                <AccordionItemBody>
                  <ul className={styles.groupList}>{children}</ul>
                </AccordionItemBody>
              </AccordionItem>
            </Accordion>
          </div>) : (<div className={styles.footerTopGroup}>
          <h3 data-testid={text} className={styles.groupLabel}>{text}</h3>
          
          <ul id={id} className={buildClassList(styles.groupList, this.state.open ? 'block' : 'hidden')}>
            {children}
          </ul>
        </div>)}
      </React.Fragment>
    );
  }
}


FooterTopGroup.contextType = FooterContext;


FooterTopGroup.propTypes = {
  children: PropTypes.any,
  dataTestId: PropTypes.any,
  text: PropTypes.string
};

export default FooterTopGroup;
