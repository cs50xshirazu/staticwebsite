import { IClickableElem } from "@/interfaces";
import React from "react";

type Props = {
  title: string;
  className?: string;
} & Partial<IClickableElem>;

export const ButtonPrimary = (props: Props) => {
  return (
    <button
      onClick={props.onClick}
      className={`relative grid place-items-center w-40 h-10 text-sm font-extrabold text-quaternary ${
        props.className ? props.className : ""
      }`}>
      <img
        src="/images/buttonBg.svg"
        className="w-full h-full absolute inset-0 object-cover object-center"
      />
      <span className="z-10">{props.title}</span>
    </button>
  );
};
