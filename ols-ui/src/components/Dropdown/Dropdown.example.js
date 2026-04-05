import React from "react";
import Dropdown from "./Dropdown";

module.exports = (
  <div>
    <Dropdown label="Dropdown label" id="dropdown1">
      <option value="value1">Option A</option>
      <option value="value2">Option B</option>
      <option value="value3">Option C</option>
    </Dropdown>

    <Dropdown
      label="Dropdown Disabled"
      required
      id="dropdown2"
    />
    <Dropdown
      label="Dropdown Options"
      required
      id="dropdown3"
      // options={states}
    />

    <Dropdown
      label="Invalid Dropdown"
      errorMessage="Wrong choice!"
      // value={'value3'}
      id="dropdown4"
    >
      <option value="value1">Option A</option>
      <option value="value2">Option B</option>
      <option value="value3">Option C</option>
    </Dropdown>
  </div>
);
