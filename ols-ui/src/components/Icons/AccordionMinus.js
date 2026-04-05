import React from "react";
import Icon from "./IconBase";
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AccordionMinus = (props) => (
  <Icon viewBox="0 0 40 40" {...props}>
    <FontAwesomeIcon icon={ faChevronUp } />
  </Icon>
);

export default AccordionMinus;
