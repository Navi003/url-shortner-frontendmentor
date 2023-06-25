"use client";
import { ChangeEvent, FC, FormEvent } from "react";
import React from "react";
import Button from "./Button";
import useStore from "@/store/useStore";
import { useState } from "react";
interface PropTypes {}
const LinkShortenBox: FC<PropTypes> = (): JSX.Element => {
  const [url, setUrl] = useState<string>("");

  const urlChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
  };
  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    useStore.getState().getUrl(url);
  };
  return (
    //https://chilp.it/api.php?url=<YOUR_URL>

    <form
      className="flex flex-col w-full gap-3 md:flex-row "
      onSubmit={submitHandler}
    >
      <input
        onChange={urlChangeHandler}
        className="w-full p-3 rounded-md"
        type="text"
        placeholder="Shorten a link here"
      />
      <Button style={{ padding: ".5rem" }} className="flex-1 rounded-md">
        Shorten!!!
      </Button>
    </form>
  );
};
export default LinkShortenBox;
