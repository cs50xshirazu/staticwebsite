import React from "react";

type Props = {};

export const Header = (props: Props) => {
  return (
    <header className="w-full h-[calc(100vh-8rem)] px-32 bg-headerImage bg-cover bg-center header-bg bg-blend-multiply flex justify-start">
      <div className="w-48 h-3/5">
        <div className="w-full h-4/5 bg-primary flex justify-center items-end text-quaternary text-2.5xl font-black text-center pb-10 px-2">
          اینجا CS50X دانشگاه شیرازه!!!
        </div>
        <div className="w-full h-1/5 triangle"></div>
      </div>
    </header>
  );
};
