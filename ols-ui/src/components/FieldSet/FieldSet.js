/**
 * The Field set is used to group two or more checkboxes or radio buttons together.
 *
 * This component returns a <fieldset> with a legend, which is necessary for screen readers.
 * Many screen readers will read the legend for each control, so it shoud be
 * brief and descriptive.
 *
 * As a convenience, passing a name property will give that name to each
 * Checkbox or radio button child so they will all be the same.
 */

import React from "react";
import PropTypes from "prop-types";
import { buildClassList } from "../../helpers/utilities";
import styles from "./FieldSet.scss";

const propTypes = {
  legend: PropTypes.string,
  children: PropTypes.node,
  name: PropTypes.string,
  className: PropTypes.string,
  showLegend: PropTypes.bool
};

const defaultProps = {
  showLegend: true
};

/**
 * FieldSet
 * @returns {node} The rendered DOM node
 * @param {object} props  The props
 */
export default function FieldSet(props) {
  const {
    name,
    className,
    legend,
    showLegend,
    children,
    ...otherProps
  } = props;

  let newChildren;

  if (name) {
    newChildren = React.Children.map(children, (child) =>
      React.cloneElement(child, { name })
    );
  } else {
    newChildren = children;
  }

  return (
    <fieldset
      className={buildClassList([ styles.fieldset, className ])}
      data-component="FieldSet"
      {...otherProps}
    >
      <legend
        data-component="legend"
        className={showLegend ? styles.legend : styles.sr}>
        {legend}
      </legend>

      {newChildren}
    </fieldset>
  );
}

FieldSet.propTypes = propTypes;
FieldSet.defaultProps = defaultProps;
