import React from "react";
import Icon from "./IconBase";
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HelpTipClose = (props) => (
  <Icon {...props}>
    <FontAwesomeIcon icon={ faCircleXmark } />
  </Icon>
);

export default HelpTipClose;
