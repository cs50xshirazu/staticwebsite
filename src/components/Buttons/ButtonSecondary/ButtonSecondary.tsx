import React from "react";

type Props = {
  title: string;
};

export const ButtonSecondary = (props: Props) => {
  return (
    <button className="w-fit h-fit px-14 py-8 text-tertiary text-4xl font-bold relative grid place-items-center">
      <img
        src="/images/buttonSec.svg"
        className="w-full h-full absolute inset-0 object-cover object-center"
      />
      <span className="z-10">{props.title}</span>
    </button>
  );
};
