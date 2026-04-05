import React from "react";
import Icon from "./IconBase";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Search = (props) => (
  <Icon {...props}>
    <FontAwesomeIcon icon={ faMagnifyingGlass } />
  </Icon>
);

export default Search;
