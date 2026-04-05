import React, { Component } from "react";
import PropTypes from "prop-types";
import Accordion, {
  AccordionItem,
  AccordionItemTrigger,
  AccordionItemBody
} from "../Accordion";
import { buildClassList } from "../../helpers/utilities";
import styles from "./Footer.scss";

/**
 * MobileFooterGroup - description
 *
 * @param  {type} props description
 * @returns {type}       description
 */
export default class MobileFooterGroup extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    label: PropTypes.string
  };

  /**
   * render - description
   *
   * @returns {type}  description
   */
  render() {

    const { label, children } = this.props;

    if (React.Children.count(children) === 0) return null;

    return (
      <div data-component="MobileFooterGroup">
        <Accordion className={buildClassList({
          [styles.footerTopGroup]: true,
          [styles.MobileFooterGroup]: true
        })}>
          <AccordionItem>
            <AccordionItemTrigger
              headingLevel="4"
              className={styles.groupLabel}
              footer={true}
            >
              {label}
            </AccordionItemTrigger>
            <AccordionItemBody>
              <ul className={styles.groupList}>{children}</ul>
            </AccordionItemBody>
          </AccordionItem>
        </Accordion>
      </div>
    );

  }
}
