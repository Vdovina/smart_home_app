import React from "react";
import "./styles.scss";

function TextInput(props) {
  const { label, type, value, onChange } = props;

  return (
    <div className="input-wrapper">
      <label className="input-label">{label}</label>
      <input
        className="input"
        value={value}
        type={type}
        onChange={(e) => onChange(e.currentTarget.value)}
      />
    </div>
  );
}

export default TextInput;
