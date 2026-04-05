import React from "react";
import Icon from "./IconBase";
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AccordionPlus = (props) => (
  <Icon viewBox="0 0 40 40" {...props}>
    <FontAwesomeIcon icon={ faChevronDown } />
  </Icon>
);

export default AccordionPlus;
