import React from "react";
import Icon from "./IconBase";
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const User = (props) => (
  <Icon {...props}>
    <FontAwesomeIcon icon={ faUser } />
  </Icon>
);

export default User;
