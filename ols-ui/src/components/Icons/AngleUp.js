import React from "react";
import Icon from "./IconBase";
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AngleUp = (props) => (
  <Icon {...props}>
    <FontAwesomeIcon icon={ faChevronUp } />
  </Icon>
);

export default AngleUp;
