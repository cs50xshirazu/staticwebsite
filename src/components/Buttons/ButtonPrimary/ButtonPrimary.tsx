import React from "react";

type Props = {
  title: string;
};

export const ButtonPrimary = (props: Props) => {
  return (
    <button
      className={`relative grid place-items-center w-40 h-10 text-sm font-extrabold text-quaternary`}>
      <img
        src="/images/buttonBg.svg"
        className="w-full h-full absolute inset-0 object-cover object-center -z-10"
      />
      {props.title}
    </button>
  );
};
