import React from "react";
import Icon from "./IconBase";
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Minus = (props) => (
  <Icon {...props}>
    <FontAwesomeIcon icon={ faMinus } />
  </Icon>
);

export default Minus;
