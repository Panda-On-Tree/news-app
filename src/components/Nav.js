import React from "react";

const Nav = () => {
  return (
    <div className="navbar">
      <nav>
        <div id="logo">
          <h2>Logo</h2>
        </div>
        <form className="search-bar" action="">
          <span className="material-icons">search</span>
          <input type="text" placeholder="Search" />
        </form>
      </nav>
    </div>
  );
};

export default Nav;
