import React from "react";
import Icon from "./IconBase";
import { faCircleMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MinusCircle = (props) => (
  <Icon {...props}>
    <FontAwesomeIcon icon={ faCircleMinus } />
  </Icon>
);

export default MinusCircle;
