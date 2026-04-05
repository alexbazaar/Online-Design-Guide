import React from 'react';
import PropTypes from 'prop-types';
import { buildClassList } from '../../helpers/utilities';
import styles from './Badge.scss';

/**
 * The Badge component shows a colored pill of text.
 * Comes in two sizes: regular and big. Specify big by passing a 'big' attribute.
 * @returns {node} The rendered DOM node
 * @param {string} size  If 'big', makes the font size larger
 * @param {node} children required. Expected to be the text to display inside the pill
 */
export default function Badge({ size, children, className, ...props }) {
  const style = size === 'big' ? styles.badgeBig : styles.badge;

  return (
    <span
      className={buildClassList([ style, className ])}
      data-component="Badge"
      data-component-size={size ? size : "normal"}
      {...props}
    >
      {children}
    </span>
  );
}

const SIZE_BIG = 'big';
const SIZE_NORMAL = 'normal';

Badge.propTypes = {
  size: PropTypes.oneOf([
    SIZE_BIG,
    SIZE_NORMAL
  ]),
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

Badge.defaultProps = {
  size: SIZE_NORMAL
};
