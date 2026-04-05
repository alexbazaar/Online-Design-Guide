import React from "react";
import Icon from "./IconBase";
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AngleRightCalendar = (props) => (
  <Icon cropViewBox="32.005 64.005 223.995 383.99" unstyled {...props}>
    <FontAwesomeIcon icon={ faAngleRight } />
  </Icon>
);

export default AngleRightCalendar; 
