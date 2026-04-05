import React from "react";
import Icon from "./IconBase";
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Close = (props) => (
  <Icon {...props}>
    <FontAwesomeIcon icon={ faCircleXmark } />
  </Icon>
);

export default Close;
