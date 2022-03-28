import React from "react";
import "./styles.scss";

function Button(props) {
  const { label, onClick } = props;
  return (
    <button className="button" onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
