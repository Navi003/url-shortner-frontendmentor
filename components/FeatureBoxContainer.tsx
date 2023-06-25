import { FC } from "react";
import React from "react";
import FeatureCard from "./ui/FeatureCard";
interface PropTypes {}
const FeatureBoxContainer: FC<PropTypes> = (): JSX.Element => {
  return (
    <div className="features | mt-52 flex lg:justify-center flex-col lg:flex-row items-center">
      <FeatureCard src="icon-brand-recognition.svg" />
      <div className="w-5 h-24 lg:mb-20 lg:w-20 lg:h-5 bg-secondary-600"></div>
      <FeatureCard className="lg:mt-10" src="icon-detailed-records.svg" />
      <div className="w-5 h-24 lg:w-20 lg:h-5 bg-secondary-600"></div>
      <FeatureCard className="lg:mt-20" src="icon-fully-customizable.svg" />
    </div>
  );
};
export default FeatureBoxContainer;
