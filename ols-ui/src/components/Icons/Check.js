import React from "react";
import Icon from "./IconBase";
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Check = (props) => (
  <Icon cropViewBox="0 96.010 447.975 319.965" {...props}>
    <FontAwesomeIcon viewBox="0 96.01 447.975 319.965" icon={ faCheck } preserveAspectRatio="none" aria-hidden="false" aria-label="Completed" />
  </Icon>
);

export default Check;