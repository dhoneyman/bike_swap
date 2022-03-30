import React from "react";
import withAuth from "../../utils/auth";
// const withAuth = require('../../utils/auth')
import { Link } from "react-router-dom";

function Nav() {
  function showNavigation() {
    // if (withAuth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/profile">Profile</Link>
          </li>
          <li className="mx-1">
            <Link to="/orderHistory">Order History</Link>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <Link to='/logout'>Logout</Link>
          </li>
        </ul>
      );
    // } else {
    //   return (
    //     <ul className="flex-row">
    //       <li className="mx-1">
    //         <Link to="/signup">Signup</Link>
    //       </li>
    //       <li className="mx-1">
    //         <Link to="/login">Login</Link>
    //       </li>
    //     </ul>
    //   );
    // }
  }

  const styles = {
    title: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      // marginTop: "40px"
    },
    navBar: {
      display: "inline"
    },
  };

  return (
    <header className="flex-row">
      <nav className="right">
        <div className="nav-wrapper">
          <Link className="brand-logo" to="/">
            Bike Swap
          </Link>
          <div className="right hide-on-med-and-down" style={styles.navBar}>
            {showNavigation()}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
