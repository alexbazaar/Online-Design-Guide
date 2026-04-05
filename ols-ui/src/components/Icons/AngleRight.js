import React from "react";
import Icon from "./IconBase";
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AngleRight = (props) => (
  <Icon {...props}>
    <FontAwesomeIcon icon={ faChevronRight } />
  </Icon>
);

export default AngleRight;
