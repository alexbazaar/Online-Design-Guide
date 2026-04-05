import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FilledButton, OutlinedButton } from '../Buttons/index';
import styles from './Pagination.scss';
import variables from '../../styles/_variables.scss';
import { buildClassList } from "../../helpers/utilities";

/**
 * Constructor for PageJumper
 * @param {*} props props for pagination
 * @returns {Node}
 */
function PageSelector(props) {

  const {
    id,
    currentPage,
    totalPages,
    onPageChange
  } = props;

  const MAX_DESKTOP_BTNS = 6;
  const MIN_DESKTOP_BTNS = 5;
  const MAX_DESKTOP_LEAD_BTNS = 1;
  const MAX_TABLET_BTNS = 4;
  const MIN_TABLET_BTNS = 3;
  const MAX_TABLET_LEAD_BTNS = 0;

  const [ _maxButtons, setMaxButtons ] = useState(MAX_DESKTOP_BTNS);
  const [ _maxLeadButtons, setMaxLeadButtons ] = useState(MAX_DESKTOP_LEAD_BTNS);
  let mediaQuery;

  const handleTabletChange = (evt) => {
    if (evt.matches) {
      setMaxButtons(MAX_TABLET_BTNS);
      setMaxLeadButtons(MAX_TABLET_LEAD_BTNS);
    } else {
      setMaxButtons(MAX_DESKTOP_BTNS);
      setMaxLeadButtons(MAX_DESKTOP_LEAD_BTNS);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      onPageChange(currentPage + 1);
    }
  };

  const getPageButtons = () => {
    // buttons are visually labled 1 through X but
    // have 0 based values.

    const pageButtons = [];

    // only show a max of 6 page buttons
    let maxButtons =  totalPages < _maxButtons ? totalPages : _maxButtons;

    // if page one is not in range, show the first page with ellipsis
    const showFirstPage = totalPages !== maxButtons && currentPage >= _maxLeadButtons + 2;

    // always show last page button if current page is farther
    // away from last page than max amount of buttons
    const showLastPage = totalPages !== maxButtons && currentPage <= totalPages - maxButtons;

    // if showing double ellipses, reduce the total amount of buttons
    // so total width is maintained.
    if (showFirstPage && showLastPage) {
      maxButtons = _maxButtons === MAX_DESKTOP_BTNS ? // quick check for desktop vs tablet
        MIN_DESKTOP_BTNS : MIN_TABLET_BTNS;
    }

    // minimum amount of buttons to group
    // usually a group of buttons, an ellipse, and last page button
    let minGroupButtons;
    if (showLastPage && showFirstPage) {
      // make room for 2 ellipsis
      minGroupButtons = maxButtons - 2;
    } else {
      // make room for 1 ellipsis if needed
      minGroupButtons = (showLastPage || showFirstPage) ? maxButtons - 1 : maxButtons;
    }

    // show first page and ellipsis.
    if (showFirstPage) {
      pageButtons.push(
        <OutlinedButton
          key={`page-button-${0}`}
          className={styles['page-button']}
          onClick={() => onPageChange(0)}
          aria-label={`Page ${0 + 1}`}
        >{0 + 1}</OutlinedButton>
      );
      pageButtons.push(
        <span className={styles.ellipsis} key="ellipsis-1">…</span>
      );
    }

    // show page [1-5] ... [last page] by default
    let start = 0;
    // if current page >= 4 then show current page as second button
    // but if current page is within 5 pages of the last page,
    // show the last four pages
    if (currentPage >= minGroupButtons - 1) {
      start = currentPage >= totalPages - minGroupButtons ?
        totalPages - minGroupButtons : currentPage - _maxLeadButtons;
    }
    const end = start + minGroupButtons;
    let label;

    for (let i = start; i < end; i++) {
      label = `${i === totalPages - 1 ? 'Last page, ' : ''} Page ${i + 1}`;

      if (currentPage === i) {
        pageButtons.push(
          <FilledButton
            key={`page-button-${i}`}
            className={buildClassList([ styles['page-button'], styles.current ])}
            aria-label={label}
            aria-current="page"
          >{i + 1}</FilledButton>
        );
      } else {
        pageButtons.push(
          <OutlinedButton
            key={`page-button-${i}`}
            className={styles['page-button']}
            onClick={() => onPageChange(i)}
            aria-label={label}
          >{i + 1}</OutlinedButton>
        );
      }
    }

    // render ellipsis and last page if needed
    if (showLastPage) {
      pageButtons.push(
        <span className={styles.ellipsis} key="ellipsis-2">…</span>
      );

      pageButtons.push(
        <OutlinedButton
          key={`page-button-${totalPages - 1}`}
          className={styles['page-button']}
          onClick={() => onPageChange(totalPages - 1)}
          aria-label={`Last page, page ${totalPages}`}
        >{totalPages}</OutlinedButton>
      );
    }

    useEffect(() => {
      mediaQuery = window.matchMedia(`(max-width: calc(${variables['lg']} - 1px))`);
      try {
        mediaQuery.addEventListener('change', handleTabletChange);
      } catch (e) {
        mediaQuery.addListener(handleTabletChange);
      }

      // if page loaded in tablet mode, set defaults.
      if (mediaQuery.matches) {
        setMaxButtons(MAX_TABLET_BTNS);
        setMaxLeadButtons(MAX_TABLET_LEAD_BTNS);
      }
      return () => {
        try {
          mediaQuery.removeEventListener('change', handleTabletChange);
        } catch (e) {
          // ie 11
          mediaQuery.removeListener(handleTabletChange);
        }
      };
    }, []);

    return (
      <div className={styles['page-buttons']}>
        {pageButtons}
      </div>
    );
  };

  return (
    <div id={`${id}-page-selector`} className={styles['page-selector']} data-component="PageSelector">
      <div
        className={'page-selector-description'}
        style={{ textAlign: "center", marginBottom: "8px" }}
        aria-live="polite"
      >{`Page ${currentPage + 1} of ${totalPages}`}</div>
      <div
        className={styles['page-selector-buttons']}
      >
        <OutlinedButton
          className={styles['previous']}
          icon="externalLink"
          leadingIcon
          onClick={handlePrevious}
          disabled={currentPage === 0}
        >Previous</OutlinedButton>
        {getPageButtons()}
        <OutlinedButton
          className={styles['next']}
          icon="externalLink"
          onClick={handleNext}
          disabled={currentPage === totalPages - 1}
        >Next</OutlinedButton>
      </div>
    </div>
  );
}

PageSelector.propTypes = {
  id: PropTypes.string.isRequired,
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number,
  onPageChange: PropTypes.func
};

PageSelector.defaultProps = {
  totalPages: 0,
  currentPage: 0,
  onPageChange: () => {}
};

export default PageSelector;
