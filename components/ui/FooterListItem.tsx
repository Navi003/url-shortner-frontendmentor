import Link from "next/link";
import { FC } from "react";
import React from "react";
interface PropTypes {
  children: React.ReactNode;
  href: string;
}
const FooterListItem: FC<PropTypes> = ({ children, href }): JSX.Element => {
  return (
    <li className="text-primary-600 hover:text-primary-200">
      <Link href={href}>{children}</Link>
    </li>
  );
};
export default FooterListItem;
