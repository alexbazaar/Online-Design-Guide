import React from "react";
import Icon from "./IconBase";
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AngleLeft = (props) => (
  <Icon {...props}>
    <FontAwesomeIcon icon={ faChevronLeft } />
  </Icon>
);

export default AngleLeft;
