import React from "react";
import Checkbox from "./index";
import FieldSet from "../FieldSet/index";

module.exports = (
    <FieldSet
  name="historical-figures"
  legend="Which are your favorite historial figures?"
>
        <Checkbox label="Sojourner Truth" defaultChecked />
        <Checkbox label="Frederick Douglass" defaultChecked />
        <Checkbox label="Booker T. Washington" disabled />
        <Checkbox label="George Washington Carver" />
    </FieldSet>
);
