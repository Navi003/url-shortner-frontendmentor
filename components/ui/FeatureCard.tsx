import { FC } from "react";
import React from "react";
import Image from "next/image";
interface PropTypes {
  src: string;
  className?: string;
}
const FeatureCard: FC<PropTypes> = ({ className, src }): JSX.Element => {
  return (
    <div
      className={`relative lg:w-[25%] flex flex-col  items-center justify-center rounded-md bg-primary-50 shadow-md p-7 ${
        className && className
      }`}
    >
      <div className="absolute flex items-center justify-center w-24 h-24 p-2 transform -translate-x-1/2  rounded-full  top-[-3rem] lg:left-[5rem] left-1/2 bg-primary-700">
        <Image width="50" height="50" src={src} alt="brand-Recognition" />
      </div>
      <div className="mt-11">
        <h3 className="mb-4 text-xl font-semibold text-center">
          Brand Recognition
        </h3>
        <p className="font-medium text-center text-primary-300">
          Boost your brand recognition with each click. Generi links dont meana
          thing. Branded links help instil confidence in your content
        </p>
      </div>
    </div>
  );
};
export default FeatureCard;
