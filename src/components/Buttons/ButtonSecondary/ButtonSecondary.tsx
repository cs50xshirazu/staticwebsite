import React from "react";

type Props = {
  title: string;
};

export const ButtonSecondary = (props: Props) => {
  return (
    <button className="w-[514px] h-[100px] text-tertiary text-4xl 2xl:text-3xl sm:!text-xl sm:w-80 sm:h-16 font-bold relative grid place-items-center">
      <img
        src="/images/buttonSec.svg"
        className="w-full h-full absolute inset-0 object-cover object-center"
      />
      <span className="z-10">{props.title}</span>
    </button>
  );
};
