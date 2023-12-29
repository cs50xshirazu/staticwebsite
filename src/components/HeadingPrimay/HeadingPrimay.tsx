import React from "react";
import { HeadingPrimayText } from "..";
type Props = {
  title?: string;
  children?: React.ReactNode;
};

export const HeadingPrimay = ({ title, children }: Props) => {
  return (
    <div className="w-full min-h-10 bg-headeangImage bg-center bg-cover bg-no-repeat flex justify-center items-center gap-4">
      {children && children}
      {title && <HeadingPrimayText isHeading={true} title={title} />}
    </div>
  );
};
