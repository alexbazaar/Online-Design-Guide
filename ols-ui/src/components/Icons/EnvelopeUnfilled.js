import React from "react";
import Icon from "./IconBase";
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const EnvelopeUnfilled = (props) => (
  <Icon {...props} cropViewBox="0 0 512 512">
    <FontAwesomeIcon icon={ faEnvelope } />
  </Icon>
);



export default EnvelopeUnfilled;
