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
        className={`text-quinary text-3xl font-extrabold ${
          props.className ? props.className : ""
        }`}>
        {props.title}
      </h2>
    );
  } else {
    return (
      <span className="text-quinary text-xl font-extrabold">{props.title}</span>
    );
  }
};
