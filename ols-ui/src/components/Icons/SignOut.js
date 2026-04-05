import React from "react";
import Icon from "./IconBase";
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const SignOut = (props) => (
  <Icon {...props}>
    <FontAwesomeIcon icon={ faSignOut } />
  </Icon>
);

export default SignOut;
