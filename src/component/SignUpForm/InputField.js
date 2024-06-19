// src/components/InputField/InputField.js
import React from 'react';

const InputField = ({ id, type, placeholder }) => (
  <div className="mb-4">
    <input
      className="appearance-none border rounded text-xl w-full p-8 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id={id}
      type={type}
      placeholder={placeholder}
    />
  </div>
);

export default InputField;
