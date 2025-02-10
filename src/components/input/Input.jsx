import React from 'react';

const Input = ({ type, name, className, placeholder, required, value, onChange }) => {
  return (
    <input
      type={type}
      name={name}
      className={className}
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
