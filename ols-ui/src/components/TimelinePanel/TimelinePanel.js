import React from 'react';
import PropTypes from 'prop-types';
import Panel from '../Panel';

/**
 * The timeline container
 * @param {node} children - One or more TimelinePanelItem's
 * @param {string} title - The panel title
 * @param {object} props - Additional props to pass to Panel.
 * @returns {node} Rendered DOM node
 */
export default function TimelinePanel({ title, children, ...props }) {
  return (
    <div data-component="TimelinePanel">
      <Panel
        title={title}
        padding="none"
        data-component="TimelinePanel"
        {...props}
      >
        {children}
      </Panel>
    </div>
  );
}

TimelinePanel.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string
};
