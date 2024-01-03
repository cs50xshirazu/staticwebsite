import React from "react";

type Props = {
  text: string;
};

export const AboutTeacherTextsItem = ({ text }: Props) => {
  return (
    <li className="flex gap-2 items-center mt-3">
      <span className="size-2 rounded-full bg-quaternary"></span>
      {text}
    </li>
  );
};
