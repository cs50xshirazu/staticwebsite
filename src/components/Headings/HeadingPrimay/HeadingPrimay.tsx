import React from "react";
import { HeadingPrimayText } from "../../HeadingPrimayText/HeadingPrimayText";
type Props = {
  title?: string;
  children?: React.ReactNode;
  className?: string;
};

export const HeadingPrimay = ({ title, children, className }: Props) => {
  return (
    <div className="w-full min-h-10 grid grid-cols-3 gap-4 place-items-center">
      <img src="/images/line.svg" className="w-full h-full" alt="" />
      <div className="w-full flex justify-center gap-5">
        {children && children}
        {title && (
          <HeadingPrimayText
            className={className ? className : ""}
            isHeading={true}
            title={title}
          />
        )}
      </div>
      <img src="/images/line.svg" className="w-full h-full rotate-180" alt="" />
    </div>
  );
};
