import React from "react";
import Icon from "./IconBase";
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ExclamationCircle = (props) => (
  <Icon cropViewBox="0 0 16 16" {...props}>
    {/* <g> */}
    <FontAwesomeIcon aria-label="Exclamation circle icon" aria-hidden="false" icon={ faCircleExclamation } />
    {/* </g> */}
  </Icon>
);

export default ExclamationCircle;
