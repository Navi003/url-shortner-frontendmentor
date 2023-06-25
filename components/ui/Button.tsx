import { CSSProperties, FC, HTMLProps } from "react";
import React from "react";

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  children: React.ReactNode;
  style?: CSSProperties;
}

const Button: FC<ButtonProps> = ({
  children,
  onClick,
  style,
  className,
}): JSX.Element => {
  return (
    <button
      onClick={onClick}
      style={style}
      className={`${
        className ? className : ""
      } bg-secondary-600 px-4 py-1 text-secondary-200 hover:bg-secondary-500 tracking-wide font-medium rounded-3xl`}
    >
      {children}
    </button>
  );
};

export default Button;
