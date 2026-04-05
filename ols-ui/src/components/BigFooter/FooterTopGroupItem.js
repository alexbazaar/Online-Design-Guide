import PropTypes from 'prop-types';
import React from 'react';
import Link from '../Links';

const FooterTopGroupItem = ({ children, href, dataTestId, to, ...props }) => {

  if (typeof href === 'string' && href.length) {
    return (
      <li {...props}>
        <Link href={href}>{children}</Link>
      </li>
    );
  }

  if (typeof to === 'string' && to.length) {
    return (
      <li {...props}>
        <Link to={to}>{children}</Link>
      </li>
    );
  }

  return <li {...props}>{children}</li>;
};

FooterTopGroupItem.propTypes = {
  children: PropTypes.any,
  dataTestId: PropTypes.any,
  href: PropTypes.shape({
    length: PropTypes.any
  }),
  to: PropTypes.shape({
    length: PropTypes.any
  })
};

export default FooterTopGroupItem;
