import { Link } from "react-router-dom";
import React from "react";

const NavBar = (props) => {
  return (
    <>
      <ul className="session-nav">
        <img src={window.logo} className="splash-picture" />

        <a className="navbar-link" href="https://github.com/rvsin8" target="_blank">
          <p>GitHub</p>
        </a>
        <a
          className="navbar-link"
          href="https://www.linkedin.com/in/ravneet-singh-20b978a4/" target="_blank"
        >
          LinkedIn
        </a>

       
          <Link to="/login" className="navbar-link">
            Log In{" "}
          </Link>
       
        <div className="tired">
          
            <Link to="/signup" className="navbar-right">
              Try For Free{" "}
            </Link>
    
        </div>
      </ul>
    </>
  );
};
export default NavBar;
