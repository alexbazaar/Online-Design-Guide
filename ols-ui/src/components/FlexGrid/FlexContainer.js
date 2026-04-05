import React from 'react';
import PropTypes from "prop-types";
import { buildClassList } from '../../helpers/utilities';
import styles from './FlexGrid.scss';

const propTypes = {
  children: PropTypes.node,
  fluid: PropTypes.bool,
  id: PropTypes.string,
  className: PropTypes.string,
  role: PropTypes.string
};

/**
 * Makes a container
 * @param {object} props - the props
 * @param {[node]} children contents of container
 * @param {[bool]} fluid if true, container is 100% wide all the time
 * @param {[string]} role sets the role property
 * @param {[string]} id sets the id
 * @returns {node} rendered dom node
 */
export default function FlexContainer(props) {
  const { children, className, fluid, role, id } = props;
  const style = buildClassList({
    [styles.container]: !fluid,
    [styles['container-fluid']]: fluid
  });

  return (
    <div id={id}
      className={buildClassList([ style, className ])}
      role={role}
      data-component="FlexContainer"
    >
      {children}
    </div>
  );
}

FlexContainer.propTypes = propTypes;
