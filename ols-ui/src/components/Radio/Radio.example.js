import React from "react";
import Radio from './Radio';

module.exports = (
  <div>
    <Radio id="truth" label="Sojourner Truth" />
    <Radio id="douglass" label="Frederick Douglass" defaultChecked />
    <Radio id="washington" label="Booker T. Washington" disabled />
    <Radio id="carver" label="George Washington Carver" />
  </div>
);
