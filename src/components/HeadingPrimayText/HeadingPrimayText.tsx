import React from "react";

type Props = {
  isHeading: boolean;
  title: string;
  className?: string;
};

export const HeadingPrimayText = (props: Props) => {
  if (props.isHeading) {
    return (
      <h2
        className={`text-quinary text-3xl xl:text-2xl md:!text-lg whitespace-nowrap font-extrabold ${
          props.className ? props.className : ""
        }`}>
        {props.title}
      </h2>
    );
  } else {
    return (
      <span className="text-quinary text-xl xl:text-base md:!text-xs xl:font-bold whitespace-nowrap  font-extrabold">
        {props.title}
      </span>
    );
  }
};
