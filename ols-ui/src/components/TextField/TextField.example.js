import React from "react";
import TextField from "./TextField";

module.exports = (
    <div>
        <TextField label="Last name" id="last-name" value="" />
        <TextField label="Last name" required id="last-name" value="Smith" />
        <TextField label="Last name" data-component="helpText" required id="last-name" value="Smith">Must match your last tax return</TextField>
        <TextField label="Last name" required id="last-name" value="" />
    </div>
);
