import { FC } from "react";
import React from "react";
import Button from "./ui/Button";
import Link from "next/link";
interface PropTypes {}

const NavBar: FC<PropTypes> = (): JSX.Element => {
  return (
    <nav className="flex items-center justify-between py-10">
      <div className="logo | flex gap-8 items-center ">
        <strong className="text-2xl text-primary-800">Shortly</strong>

        {/* <ul className="ul | font-normal flex gap-4 text-primary-400">
          <li className="nav_li | hover:text-primary-700 ">
            <Link href="/">Pricing</Link>
          </li>
          <li className="hover:text-primary-700">
            <Link href="/">Features</Link>
          </li>
          <li className="hover:text-primary-700">
            <Link href="/">About</Link>
          </li>
        </ul> */}
      </div>
      <div className="cta |">
        <Button className="login | bg-secondary-100 text-secondary-900">
          Login
        </Button>
        <Button className="signup | mx-2">Signup</Button>
      </div>
    </nav>
  );
};
export default NavBar;
