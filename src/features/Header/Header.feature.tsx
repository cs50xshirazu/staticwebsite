import React from "react";

type Props = {};

export const Header = (props: Props) => {
  return (
    <header className="w-full h-[calc(100vh-8rem)] px-32 md:px-10 bg-headerImage bg-cover bg-center header-bg bg-blend-multiply flex justify-start relative">
      <div className="absolute bottom-5 right-24 text-quaternary font-GEO703 flex flex-col items-end font-bold md:right-5">
        <span className="text-2.5xl w-fit md:text-xl">Welcome to</span>
        <h1 className="text-7xl xl:text-5xl md:!text-4xl">CS50x SHIRAZU</h1>
      </div>
    </header>
  );
};
