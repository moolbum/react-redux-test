import React from "react";

export interface InputProps {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputText = ({
  value,
  onChange,
}: {
  value: InputProps["value"];
  onChange: InputProps["handleChange"];
}) => {
  return <input type="text" value={value} onChange={onChange} />;
};

export default InputText;
