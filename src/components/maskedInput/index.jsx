import React from "react";
import InputMask from "react-input-mask";
import "./styles.scss";

function TextInput(props) {
  const { label, mask, value, onChange } = props;

  return (
    <div className="input-wrapper">
      <label className="input-label">{label}</label>
      <InputMask
        className="input"
        value={value}
        mask={mask}
        onChange={(e) => onChange(e.currentTarget.value)}
      />
    </div>
  );
}

export default TextInput;
