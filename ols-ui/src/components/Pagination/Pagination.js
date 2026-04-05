import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Pagination.scss';
import PageSize from './PageSize';
import PageJumper from './PageJumper';
import PageSelector from './PageSelector';
import variables from '../../styles/_variables.scss';
import { buildClassList } from "../../helpers/utilities";
/**
 * Constructor for Pagination Component
 * @param {*} props props for pagination
 * @returns {Node}
 */
function Pagination(props) {
  const {
    id,
    className,
    totalResults,
    pageSizes,
    currentPage,
    pageSize,
    onPageChange,
    onPageSizeChange,
    focusBodyOnPageChange,
    ...otherProps
  } = props;

  const navRef = useRef(null);
  const [ totalPages, setTotalPages ] = useState(0);
  const [ isMobile, setIsMobile ] = useState(false);
  let mediaQuery;


  const handleMobileChange = (evt) => {
    if (evt.matches) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  const handlePageSizeChange = (change) => {
    const { newValue } = change;
    const pageSize = newValue === 'All' ?
      totalResults : parseInt(newValue);
    if (pageSize === props.pageSize) {
      return;
    }
    onPageSizeChange(pageSize);
    handlePageChange(0);
    setTotalPages(calcTotalPages(totalResults, pageSize));
  };

  const handlePageChange = (newPage) => {
    if (newPage === currentPage) {
      return;
    }
    onPageChange(newPage);
  };

  const handleGo = (newPage) => {
    handlePageChange(newPage);
  };

  const calcTotalPages = (totalResults, pageSize) => Math.ceil(totalResults / pageSize);

  useEffect(() => {

    if (focusBodyOnPageChange) {
      // focus body
      document.activeElement.blur();
      document.body.focus();
      return;
    }


    if (navRef && navRef.current) {
      const activePage = navRef.current.querySelector('[aria-current]');
      if (activePage &&
          !navRef.current.contains(document.activeElement)) {
        activePage.focus();
      }
    }
  }, [ currentPage ]);

  // re-render when parent changes props.
  useEffect(() => {
    setTotalPages(calcTotalPages(totalResults, pageSize));
  }, [ totalResults, pageSize ]);

  useEffect(() => {
    mediaQuery = window.matchMedia(`(max-width: calc(${variables['md']} - 1px))`);
    try {
      mediaQuery.addEventListener('change', handleMobileChange);
    } catch (e) {
      // ie 11
      mediaQuery.addListener(handleMobileChange);
    }

    if (mediaQuery.matches) {
      setIsMobile(true);
    }
    return () => {
      try {
        mediaQuery.removeEventListener('change', handleMobileChange);
      } catch (e) {
        mediaQuery.removeListener(handleMobileChange);
      }
    };
  }, []);

  if (props.totalResults <= 25) {
    return null;
  }

  return (
    <nav
      className={buildClassList([ className, styles.pagination ])}
      id={id}
      data-component="Pagination"
      {...otherProps}
      ref={navRef}
    >
      {isMobile &&
        <div className={styles.mobile}>
          <PageSelector
            id={id + '-mobile'}
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
          <div className={styles.utils}>
            <PageSize
              id={id + '-mobile'}
              pageSize={pageSize}
              pageSizes={pageSizes}
              onPageSizeChange={handlePageSizeChange}
            />
            <PageJumper
              id={id + '-mobile'}
              totalPages={totalPages}
              onGo={handleGo}
            />
          </div>
        </div>
      }
      {!isMobile &&
      <div className={styles.basic}>
        <PageSize
          id={id + '-basic'}
          pageSize={pageSize}
          pageSizes={pageSizes}
          onPageSizeChange={handlePageSizeChange}
        />
        <PageSelector
          id={id + '-basic'}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
        <PageJumper
          id={id + '-basic'}
          totalPages={totalPages}
          onGo={handleGo}
        />
      </div>
      }
    </nav>
  );
}

Pagination.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  totalResults: PropTypes.number.isRequired,
  pageSizes: PropTypes.array,
  pageSize: PropTypes.number,
  currentPage: PropTypes.number,
  onPageSizeChange: PropTypes.func,
  onPageChange: PropTypes.func,
  focusBodyOnPageChange: PropTypes.bool
};

Pagination.defaultProps = {
  totalResults: 0,
  currentPage: 0,
  pageSize: 25,
  focusBodyOnPageChange: false,
  onPageSizeChange: () => {},
  onPageChange: () => {}
};

export default Pagination;
