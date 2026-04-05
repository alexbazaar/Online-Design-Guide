import React from "react";
import Icon from "./IconBase";
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ExclamationTriangle = (props) => (
  <Icon cropViewBox="0.035 0 511.982 448.10" {...props}>
    <FontAwesomeIcon aria-label="Exclamation triangle icon" aria-hidden="false" icon={ faTriangleExclamation } />
  </Icon>
);

export default ExclamationTriangle;
