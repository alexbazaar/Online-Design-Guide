import React, { Fragment } from "react";
import IRSHeader, { IRSHeaderNavGroup, IRSHeaderNavItem } from "./index";
import { NavBarItem } from "../NavBar";
import { StaticRouter as Router } from "react-router-dom";
import styles from "./IRSHeader.scss";

module.exports = (
  <div>
    <Router>
      <IRSHeader
        showOfficialSiteBanner={true}
        headerNavLinks={
          <Fragment>
            <IRSHeaderNavItem navtype="link" to="#">Link 1</IRSHeaderNavItem>
            <IRSHeaderNavItem navtype="link" to="#">Link 2</IRSHeaderNavItem>
            <IRSHeaderNavGroup id="dropdown-button" label="Dropdown Menu">
              <IRSHeaderNavItem navtype="link" to="#">Item 1</IRSHeaderNavItem>
              <IRSHeaderNavItem navtype="link" to="#">Item 2</IRSHeaderNavItem>
              <IRSHeaderNavItem navtype="link" to="#">Item 3</IRSHeaderNavItem>
            </IRSHeaderNavGroup>
          </Fragment>
        }
        headerNavButtons={
          <Fragment>
            <IRSHeaderNavItem navtype="button">
              <button className="navBarButton">Button 1</button>
            </IRSHeaderNavItem>
            <IRSHeaderNavItem navtype="button">
              <button className="navBarButton">Button 2</button>
            </IRSHeaderNavItem>
          </Fragment>
        }
        navBar={
          <Fragment>
            <NavBarItem to="/installation"  activeClassName={styles.navBarActiveClass}>Desktop Nav 1</NavBarItem>
            <NavBarItem to="#" activeClassName={styles.navBarActiveClass}>Desktop Nav 2</NavBarItem>
            <NavBarItem to="#" activeClassName={styles.navBarActiveClass}>Desktop Nav 3</NavBarItem>
            <NavBarItem to="#" activeClassName={styles.navBarActiveClass}>Desktop Nav 4</NavBarItem>
            <NavBarItem to="#" activeClassName={styles.navBarActiveClass}>Desktop Nav 5</NavBarItem>
          </Fragment>
        }
      />
    </Router>
  </div>
);
