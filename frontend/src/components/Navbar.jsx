import React from "react";
import css from "./navbar.module.css";
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header>
        <div className={css.container}>
          <Link to="/">
            <h1>Task Planner</h1>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
