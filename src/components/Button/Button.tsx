import React from "react";

interface ButtonProps {
  HandleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ counter }: { counter: ButtonProps["HandleClick"] }) => {
  return <button onClick={counter}>버튼</button>;
};

export default Button;
