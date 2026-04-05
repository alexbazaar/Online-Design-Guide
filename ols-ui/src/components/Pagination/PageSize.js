import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from '../Dropdown/index';
import styles from './Pagination.scss';

/**
 * Constructor for PageSize
 * @param {Object} props react props
 * @returns {Node}
 */
function PageSize(props) {
  const {
    id,
    pageSize,
    pageSizes,
    onPageSizeChange
  } = props;

  return (
    <div className={styles['page-size']} data-component="PageSize">
      <Dropdown
        id={`${id}-page-size`}
        name="page-size"
        label="Results per page"
        onChange={onPageSizeChange}
        value={String(pageSize)}
        allowBlank={false}
        options={pageSizes.map((size) => ({ label: size, value: size }))}
      />
    </div>
  );
}

PageSize.propTypes = {
  id: PropTypes.string.isRequired,
  pageSize: PropTypes.number,
  pageSizes: PropTypes.array,
  onPageSizeChange: PropTypes.func
};

PageSize.defaultProps = {
  pageSize: 25,
  pageSizes: [ 25, 50, 75, 100, 'All' ],
  onPageSizeChange: () => {}
};

export default PageSize;
