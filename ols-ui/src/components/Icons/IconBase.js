import { default as React, Fragment } from "react";
import PropTypes from "prop-types";

/**
 * Base element for all other icons.
 * Adapted from react-icon-base by Goran Gajić
 * MIT License
 * https://github.com/gorangajic/react-icon-base
 *
 * @returns {Node} rendered svg element
 * @param {object} theProps - props
 * @param {Object} reactIconBase [description]
 */
const IconBase = (theProps, { reactIconBase = {}}) => {
  const {
    children,
    color,
    size,
    style,
    width,
    height,
    unstyled,
    focusable,
    crop,
    cropViewBox,
    ...props
  } = theProps;
  const computedSize = size || reactIconBase.size || "1em";

  const svgProps = {
    fill: "currentColor",
    preserveAspectRatio: "xMidYMid meet",
    focusable: focusable,
    height: height || computedSize,
    width: width || computedSize,
    ...reactIconBase,
    ...props,
    style: unstyled ?
      null :
      {
        verticalAlign: "middle",
        position: "relative",
        top: "0",
        color: color || reactIconBase.color,
        ...(reactIconBase.style || {}),
        ...style
      }
  };

  if (crop) {
    svgProps.viewBox = cropViewBox || "0 0 40 40";
    svgProps.preserveAspectRatio = "none";
  }

  // maintain original implementation if using old icons.
  if (children.type === 'g') {
    return (
      <svg
        {...svgProps}
      >
        {children}
      </svg>
    );
  }

  // wrap font awesome icons in span and attach props
  return (
    <Fragment>
      {React.cloneElement(children, svgProps)}
    </Fragment>
  );
};

IconBase.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
  width: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
  height: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
  style: PropTypes.object,
  focusable: PropTypes.string,
  unstyled: PropTypes.bool,
  crop: PropTypes.bool,
  cropViewBox: PropTypes.string
};

IconBase.defaultProps = {
  focusable: "true",
  unstyled: false,
  crop: false
};

IconBase.contextTypes = {
  reactIconBase: PropTypes.shape(IconBase.propTypes)
};

export default IconBase;
