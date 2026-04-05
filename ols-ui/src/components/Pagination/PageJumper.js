import React from 'react';
import PropTypes from 'prop-types';
import { OutlinedButton } from '../Buttons/index';
import TextField from '../TextField';
import styles from './Pagination.scss';

/**
 * Constructor for PageJumper
 * @param {*} props props for pagination
 * @returns {Node}
 */
function PageJumper(props) {
  const {
    id,
    onGo,
    totalPages
  } = props;

  const getTargetPage = () => parseInt(document.getElementById(`${id}-jump-to`).value);

  const validator = (newValue) => {
    const isValid = checkValidPage(parseInt(newValue));
    if (isValid) {
      return {
        isValid
      };
    }
    return {
      isValid,
      errorMessage: "Error: Invalid page number"
    };
  };

  const checkValidPage = (value) => (value >= 1 && value <= totalPages) || value === '';

  return (
    <div className={styles['page-jumper']} data-component="PageJumper">
      <TextField
        width="tiny"
        inline
        id={`${id}-jump-to`}
        label="Jump to"
        type="text"
        value=""
        validator={validator}
        onKeyUp={(evt) => {
          if (evt.key === 'Enter') {
            const tarPage = getTargetPage();
            if (checkValidPage(tarPage)) {
              onGo(tarPage - 1);
            }
            return;
          }
        }}/>
      <OutlinedButton
        onClick={() => {
          if (checkValidPage(getTargetPage())) {
            onGo(getTargetPage() - 1);
          }
        }}
      >Go</OutlinedButton>
    </div>
  );
}

PageJumper.propTypes = {
  id: PropTypes.string.isRequired,
  onGo: PropTypes.func,
  totalPages: PropTypes.number.isRequired
};

PageJumper.defaultProps = {
  totalPages: 0,
  onGo: () => {}
};

export default PageJumper;
