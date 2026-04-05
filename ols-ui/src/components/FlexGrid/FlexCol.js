import React from 'react';
import PropTypes from "prop-types";
import { buildClassList } from '../../helpers/utilities';
import styles from './FlexGrid.scss';

const propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  className: PropTypes.string,
  xs: PropTypes.string,
  sm: PropTypes.string,
  md: PropTypes.string,
  lg: PropTypes.string,
  xl: PropTypes.string,
  xsOffset: PropTypes.string,
  smOffset: PropTypes.string,
  mdOffset: PropTypes.string,
  lgOffset: PropTypes.string,
  xlOffset: PropTypes.string,
  xsPull: PropTypes.string,
  smPull: PropTypes.string,
  mdPull: PropTypes.string,
  lgPull: PropTypes.string,
  xlPull: PropTypes.string,
  xsPush: PropTypes.string,
  smPush: PropTypes.string,
  mdPush: PropTypes.string,
  lgPush: PropTypes.string,
  xlPush: PropTypes.string,
  alignSelf: PropTypes.oneOf([
    'start',
    'center',
    'end'
  ])
};

/**
 * Makes a column
 * @param {[array]} props The props
 * @returns {node} rendered dom node
 */
export default function FlexCol(props) {
  let sizeClassName = buildClassList({
    [styles[`col-${props.xs}`]]: props.xs,
    [styles[`col-sm-${props.sm}`]]: props.sm,
    [styles[`col-md-${props.md}`]]: props.md,
    [styles[`col-lg-${props.lg}`]]: props.lg,
    [styles[`col-xl-${props.xl}`]]: props.xl
  });

  if (!props.xs && !props.sm && !props.md && !props.lg && !props.xl) {
    sizeClassName = styles.col;
  }

  const alignmentClassName = buildClassList({
    [styles[`align-self-${props.alignSelf}`]]: props.alignSelf
  });

  const offsetClassName = buildClassList({
    [styles[`offset-${props.xsOffset}`]]: props.xsOffset,
    [styles[`offset-sm-${props.smOffset}`]]: props.smOffset,
    [styles[`offset-md-${props.mdOffset}`]]: props.mdOffset,
    [styles[`offset-lg-${props.lgOffset}`]]: props.lgOffset,
    [styles[`offset-xl-${props.xlOffset}`]]: props.xlOffset
  });

  const pullClassName = buildClassList({
    [styles[`pull-${props.xsPull}`]]: props.xsPull,
    [styles[`pull-sm-${props.smPull}`]]: props.smPull,
    [styles[`pull-md-${props.mdPull}`]]: props.mdPull,
    [styles[`pull-lg-${props.lgPull}`]]: props.lgPull,
    [styles[`pull-xl-${props.xlPull}`]]: props.xlPull
  });

  const pushClassName = buildClassList({
    [styles[`push-${props.xsPush}`]]: props.xsPush,
    [styles[`push-sm-${props.smPush}`]]: props.smPush,
    [styles[`push-md-${props.mdPush}`]]: props.mdPush,
    [styles[`push-lg-${props.lgPush}`]]: props.lgPush,
    [styles[`push-xl-${props.xlPush}`]]: props.xlPush
  });

  return (
    <div
      id={props.id}
      className={buildClassList(
        sizeClassName, alignmentClassName, offsetClassName, pullClassName,
        pushClassName, props.className
      )}
      data-component="FlexCol"
    >
      {props.children}
    </div>
  );
}

FlexCol.propTypes = propTypes;
