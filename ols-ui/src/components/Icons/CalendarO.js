import React from "react";
import Icon from "./IconBase";
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CalendarO = (props) => (
  <Icon cropViewBox="0 0 448 512" {...props}>
    <FontAwesomeIcon icon={ faCalendarDays } />
  </Icon>
);

export default CalendarO;
