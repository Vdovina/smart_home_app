import React from "react";
import { useSelector } from "react-redux";
import User from "../user";
import "./styles.scss";

function Header() {
  const { residentalData } = useSelector((state) => state);

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">{residentalData.name}</div>
        <User />
      </div>
    </header>
  );
}

export default Header;
