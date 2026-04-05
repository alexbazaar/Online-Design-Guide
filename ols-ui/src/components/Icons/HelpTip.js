import React from "react";
import Icon from "./IconBase";
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HelpTip = (props) => (
  <Icon {...props}>
    <FontAwesomeIcon icon={ faCircleQuestion } />
  </Icon>
);

export default HelpTip;
