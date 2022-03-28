import React from "react";
import User from "../user";
import "./styles.scss";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">System</div>
        <User />
      </div>
    </header>
  );
}

export default Header;
