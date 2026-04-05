import React from "react";
import Icon from "./IconBase";
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AngleLeftCalendar = (props) => (
  <Icon cropViewBox="0 64.005 223.995 383.99" unstyled {...props}>
    <FontAwesomeIcon icon={ faAngleLeft } />
  </Icon>
);

export default AngleLeftCalendar;
