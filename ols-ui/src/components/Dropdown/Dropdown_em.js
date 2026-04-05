import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import InputLabel from "../InputLabel";
import { uniqueIdForComponent, buildClassList } from "../../helpers/utilities";

import styles from "./Dropdown.scss";


const Dropdown_em = (props) => {

    const { id, name, className, label, srOnlyLabel, children, required, errorState, 
           disabled, hintText, value, isValid, options, allowBlank, 
           placeholder, onChange, inline } = props;

    const [ hasId, setHasId ] = useState(id);
    const [ initValue, setInitValue ] = useState(value ? value : "");
    const [ hasError, setHasError ] = useState(errorState);
    const [ validation, setValidation ] = useState(isValid); 
    const [ isDisabled, setIsDisabled ] = useState(disabled);
    const [ errorMessage, setErrorMessage ] = useState(`Error: ERR`);
    
    useEffect(() => {
        const checkId = hasId === null ? "hi" : "bye";
        if (!children && !options) {
            setIsDisabled(true);
        }
        console.log(id);
        console.log(hasId);
        // console.log(hintText);
    }, [])

    const change = (evt) => {
        // const selected = evt.target.value;
        // setValue(selected);
        // setErr(selected === "00" ? true : false)
        console.log(evt);
    }   

    const selectStyle = buildClassList(styles.dropdown, {
        [styles.success]: validation,
        [styles.error]: hasError
    });
  
    const wrapperStyle = buildClassList({
        [styles.disabled]: isDisabled,
        [styles.inline]: inline
    });

    const labelStyle = buildClassList({
        [styles.srOnly]: srOnlyLabel
    });


    return (  
        <div className={buildClassList([ wrapperStyle, className ])}
             data-component="Dropdown"
        >
            <InputLabel 
                htmlFor={hasId}
                required={required}
                label={label}
                disabled={isDisabled}
                className={labelStyle}
            />

            {/* {hintText ? "hi" : "bye"} */}

            <select onChange={ change }
                    data-component="DropdownSelect"
                    disabled={isDisabled}
                    className={selectStyle}
                    name={name}
                    id={hasId}
                    required={required}
                    value={value}
            >
                <option value="00">Please select an option</option>
                <option value="01">Option 1</option>
                <option value="02">Option 2</option>
                <option value="03">Option 3</option>
            </select>

            {/* <p>{err && <span style={{color: "red"}}>"ERR: Please select an option"</span>}</p> */}
        </div>
    );
}

Dropdown_em.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    className: PropTypes.string,
    label: PropTypes.node.isRequired,
    srOnlyLabel: PropTypes.bool,
    children: PropTypes.node,
    required: PropTypes.bool,
    hasError: PropTypes.bool,
    errorMessage: PropTypes.string,
    hintText: PropTypes.node,
    value: PropTypes.string,
    isValid: PropTypes.bool,
    disabled: PropTypes.bool,
    options: PropTypes.array,
    allowBlank: PropTypes.bool,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    inline: PropTypes.bool
};

Dropdown_em.defaultProps = {
    id: null,
    name: "select",
    required: false,
    errorState: false,
    // errorMessage: "",
    value: "",
    isValid: false,
    disabled: false,
    placeholder: "Select an option",
    inline: false,
    allowBlank: true
};
 
export default Dropdown_em;