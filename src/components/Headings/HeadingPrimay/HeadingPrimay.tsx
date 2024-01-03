import React from "react";
import { HeadingPrimayText } from "../../HeadingPrimayText/HeadingPrimayText";
type Props = {
  title?: string;
  children?: React.ReactNode;
  className?: string;
};

export const HeadingPrimay = ({ title, children, className }: Props) => {
  return (
    <div className="w-full min-h-10 flex justify-between items-center gap-4">
      <img src="/images/line.svg" className="w-2/5 h-full " alt="" />
      <div className="w-1/5 flex justify-center gap-2">
        {children && children}
        {title && (
          <HeadingPrimayText
            className={className ? className : ""}
            isHeading={true}
            title={title}
          />
        )}
      </div>
      <img src="/images/line.svg" className="w-2/5 h-full rotate-180" alt="" />
    </div>
  );
};
