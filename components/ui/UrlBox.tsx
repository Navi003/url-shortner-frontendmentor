import Link from "next/link";
import { FC, useRef } from "react";
import React from "react";
import Button from "./Button";

import { useState } from "react";
interface PropTypes {
  href?: string;
  shortedLink?: string;
  original?: string;
  createdAt?: number;
}
const UrlBox: FC<PropTypes> = ({
  href,
  shortedLink,
  createdAt,
  original,
}): JSX.Element => {
  console.log(shortedLink);
  const [textCopy, setTextCopy] = useState(false);
  const textRef: any = useRef(null);

  const handleCopy = () => {
    if (textRef.current) {
      const textToCopy = textRef.current.innerText;

      navigator.clipboard
        .writeText(textToCopy)

        .then(() => {
          setTextCopy((state) => !state);
          console.log("Text copied to clipboard: 😍", textToCopy);
        })
        .catch((error) => {
          console.error("Failed to copy text: 😫", error);
        });
    }
  };

  return (
    <li className="flex items-center justify-between px-6 py-4 rounded-md shadow-md outline outline-1 outline-primary-300">
      <p className="font-medium">
        {" "}
        <i>{original}</i>
      </p>

      <div className="flex gap-3">
        <Link
          ref={textRef}
          target={href}
          className="text-lg font-bold text-secondary-600 hover:underline"
          href={href || "/"}
        >
          {shortedLink}
        </Link>
        {/* <time className="text-primary-500">{createdAt || "2015/2/1"}</time> */}

        <Button
          onClick={handleCopy}
          className="rounded-sm active:focus:bg-primary-700"
          style={{
            backgroundColor: textCopy ? "#2D2640" : "",
          }}
        >
          {!textCopy ? "Copy" : "Copied!"}
        </Button>
      </div>
    </li>
  );
};
export default UrlBox;
