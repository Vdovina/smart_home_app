import React from "react";
import classNames from "classnames";
import "./styles.scss";

function TextInput(props) {
  const { className, label, type, value, onChange } = props;

  return (
    <div className={classNames(className || "input-wrapper")}>
      <label className="input-label">{label}</label>
      <input
        className='input'
        value={value}
        type={type || 'text'}
        onChange={(e) => onChange(e.currentTarget.value)}
      />
    </div>
  );
}

export default TextInput;
