import React from "react";
import "./input.css";
const InputField = (props) => {
  // Destructure props to access individual values
  const { label, errorMessage, value, onChange, ...input } = props;

  return (
    <>
      <div className="input_container">
        <label htmlFor={label}>{label}</label>
        <input {...input} value={value} onChange={onChange} />
        <span>{errorMessage}</span>
      </div>
    </>
  );
};

export default InputField;
