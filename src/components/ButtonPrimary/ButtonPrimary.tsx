import React from "react";

type Props = {
  title: string;
};

export const ButtonPrimary = (props: Props) => {
  return (
    <button className="relative w-40 h-10  text-quaternary text-sm font-extrabold grid place-items-center overflow-hidden">
      <img
        src="/images/buttonBg.svg"
        className="w-full h-full absolute inset-0 object-scale-down object-center -z-10"
      />
      {props.title}
    </button>
  );
};
