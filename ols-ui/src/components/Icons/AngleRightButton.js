import React from "react";
import Icon from "./IconBase";
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AngleRightButton = (props) => (
  <Icon {...props}>
    <FontAwesomeIcon viewBox="64.005 32.005 256 447.995" preserveAspectRatio="none" icon={ faChevronRight } />
  </Icon>
);

export default AngleRightButton;
