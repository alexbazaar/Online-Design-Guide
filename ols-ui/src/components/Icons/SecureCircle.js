import React from "react";
import Icon from "./IconBase";

const SecureCircle = (props) => (
  <Icon viewBox="0 0 54 54" {...props}>
    <g>
      <title id="irsLogoTitle">Secure Circle Logo</title>
      <desc id="irsLogoDesc">Secure Circle Logo with link</desc> 
      <path style={{ fill: "#549500" }} d="M34.72,34.84a1.29,1.29,0,0,1-1.29,1.29H20.57a1.29,1.29,0,0,1-1.29-1.29V27.12a1.29,1.29,0,0,1,1.29-1.29H21V23.26a6,6,0,0,1,12,0v2.57h0.43a1.29,1.29,0,0,1,1.29,1.29v7.72Zm-4.29-9V23.26a3.43,3.43,0,0,0-6.86,0v2.57h6.86Z"/>
      <circle style={{ fill: "none", stroke: "#458600", strokeMiterlimit: 10 }} cx="27" cy="27.12" r="26"/>
    </g>
  </Icon>
);

export default SecureCircle;

