import PropTypes from 'prop-types';
import React from 'react';

import Footer from "./Footer";


import { FlexContainer, FlexRow } from "../FlexGrid";

import FooterContext, { footerDefaults } from './FooterContext';

import styles from "./IRSFooter.scss";
/**
 * TODO: Not really using the context to pass data between all the children components in the Footer. I will leave it here
 * in case it needs to be implemented. Right now props are just being drilled to each component.
 */

class SlimFooter extends React.Component {
  state = footerDefaults;

  render() {
    const { ...rest } = this.props;
    return (

      <FooterContext.Provider value={this.state}>
       
        <Footer footerLinks={this.state.site.footerLinks} lang="en" {...rest}>

          
        </Footer>
        
              
      </FooterContext.Provider>

    );
  }
}

SlimFooter.contextType = FooterContext;

SlimFooter.propTypes = {
  children: PropTypes.any,
  dataTestId: PropTypes.any,
  footerLinks: PropTypes.any
};

export default SlimFooter;
