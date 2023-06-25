import Image from "next/image";
import { FC } from "react";
import React from "react";
import Button from "@/components/ui/Button";
interface PropTypes {}
const HeroSection: FC<PropTypes> = (): JSX.Element => {
  return (
    <div className="relative flex flex-col-reverse items-center justify-between text-center lg:flex-row lg:pb-40">
      <div className="left-box | items-center mt-28 flex flex-col lg:items-start ">
        <h1 className="text-7xl lg:w-[70%] font-extrabold lg:text-left text-center text-primary-800">
          More then just Shorter Links
        </h1>
        <p className="mt-3 lg:w-[70%] lg:text-left text-lg text-center text-primary-300">
          Build your Brand´s recognition and get <br /> detailed insights on how
          links are performing.
        </p>
        <Button className="mt-5">Get Started</Button>
      </div>
      <div className="w-[40rem] ml-16 lg:absolute lg:right-0 lg:top-0 lg:translate-x-60">
        <img
          className="w-full"
          src="illustration-working.svg"
          alt="hero image where a girl is working on a computer screen"
        />
      </div>
    </div>
  );
};
export default HeroSection;
