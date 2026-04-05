import React from "react";
import Icon from "./IconBase";
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Envelope = (props) => (
  <Icon {...props}>
    <FontAwesomeIcon icon={ faEnvelope } />
  </Icon>
);

export default Envelope;
