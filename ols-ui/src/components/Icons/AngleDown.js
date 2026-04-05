import React from "react";
import Icon from "./IconBase";
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AngleDown = (props) => (
  <Icon {...props}>
    <FontAwesomeIcon icon={ faAngleDown } />
  </Icon>
);

export default AngleDown;
