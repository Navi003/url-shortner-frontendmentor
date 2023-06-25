import { FC } from "react";
import React from "react";
interface ContainerTypes {
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
const Container: FC<ContainerTypes> = ({
  className,
  children,
  style,
}): JSX.Element => {
  return (
    <div
      style={style}
      className={`xl:w-[80rem]
      w-full
      px-4
      mx-auto mt-0 ${className && className}`}
    >
      {children}
    </div>
  );
};
export default Container;
