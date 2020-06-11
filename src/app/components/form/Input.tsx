import React from 'react';

export const InputForm = ({ labelText, type, value, onChange }: {
  labelText: string;
  type: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}) => {
  return (
    <label>
      {labelText}
      <input type={type} value={value} onChange={onChange}></input>
    </label>
  );
};
