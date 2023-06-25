import { FC } from "react";
import React from "react";
import Button from "./ui/Button";
import Link from "next/link";
import FooterListItem from "./ui/FooterListItem";
import Image from "next/image";
interface PropTypes {}
const Footer: FC<PropTypes> = (): JSX.Element => {
  return (
    <footer className="h-80">
      <div
        className="
      
      bg-cover bg-center bg-no-repeat bg-url('./public/bg-shorten-mobile.svg')
      flex flex-col items-center justify-center p-12  bg-primary-700"
      >
        <h3 className="mb-6 text-2xl font-bold text-center text-primary-100">
          Boost your links today
        </h3>
        <Button>Get Started</Button>
      </div>
      <div className="flex flex-col items-center justify-center w-full p-3 mx-auto mt-0 md:p-10 md:flex-row md:justify-start md:gap-40 md:items-start lg:justify-between lg:gap-0 bg-primary-900 pb-9">
        <h2 className="text-3xl font-semibold text-center md:hidden text-primary-200 pt-9 pb-9">
          Shortly
        </h2>
        <div className="flex flex-col items-center sm:justify-center sm:flex-row sm:gap-8">
          <div className="text-center">
            <h5 className="mb-4 text-primary-100">Features</h5>
            <ul className="flex flex-col gap-2 text-center">
              <FooterListItem href="/">Link Shortning</FooterListItem>
              <FooterListItem href="/">Branded Links</FooterListItem>
              <FooterListItem href="/">Analytics</FooterListItem>
            </ul>
          </div>
          <div className="text-center">
            <h5 className="mb-4 text-primary-100">Recources</h5>
            <ul className="flex flex-col gap-2 text-center">
              <FooterListItem href="/">Blog</FooterListItem>
              <FooterListItem href="/">Developers</FooterListItem>
              <FooterListItem href="/">Support</FooterListItem>
            </ul>
          </div>
          <div className="flex flex-col text-center">
            <h5 className="mb-2 text-primary-100">Company</h5>
            <ul className="flex flex-col gap-2 text-center">
              <FooterListItem href="/">About</FooterListItem>
              <FooterListItem href="/">Our Team</FooterListItem>
              <FooterListItem href="/">Contact</FooterListItem>
            </ul>
          </div>
        </div>
        <div className="icons | md:mt-0 mt-9 flex gap-4 justify-center items-center ">
          <div>
            <Image
              className="hover:bg-secondary-600"
              src="icon-facebook.svg"
              width="25"
              height="25"
              alt="facebook logo"
            />
          </div>
          <div>
            <Image
              className="hover:bg-secondary-600"
              src="icon-pinterest.svg"
              width="25"
              height="25"
              alt="facebook logo"
            />
          </div>
          <div>
            <Image
              className="hover:bg-secondary-600"
              src="icon-twitter.svg"
              width="25"
              height="25"
              alt="facebook logo"
            />
          </div>
          <div>
            <Image
              className="hover:bg-secondary-600"
              src="icon-instagram.svg"
              width="25"
              height="25"
              alt="facebook logo"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
