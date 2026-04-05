import React from 'react';
import PropTypes from "prop-types";
import { buildClassList } from '../../helpers/utilities';
import styles from './FlexGrid.scss';

const propTypes = {
  children: PropTypes.node.isRequired,
  align: PropTypes.oneOf([
    'start',
    'center',
    'end'
  ]),
  justify: PropTypes.oneOf([
    'start',
    'center',
    'end',
    'around',
    'between'
  ]),
  className: PropTypes.string,
  id: PropTypes.string
};

/**
 * A row
 * @param {[array]} props the props
 * @returns {node} rendered dom node
 */
export default function FlexRow(props) {
  const { children, align, justify, className, id } = props;

  const alignmentClassName = buildClassList({
    [styles.row]: true,
    [styles[`align-items-${align}`]]: align,
    [styles[`justify-content-${justify}`]]: justify
  });

  return (
    <div id={id}
      className={buildClassList(alignmentClassName, className)}
      data-component="FlexRow">
      {children}
    </div>
  );
}

FlexRow.propTypes = propTypes;
