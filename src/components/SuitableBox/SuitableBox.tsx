import React from "react";

type Props = {
  title: string;
  items: string[];
  isSutable: boolean;
};

const SuitableBox = (props: Props) => {
  const { isSutable, items, title } = props;
  return (
    <div className="w-full h-fit">
      <div className="flex items-center gap-3">
        <img
          src={isSutable ? "/icons/suitable.svg" : "/icons/notSuitable.svg"}
          alt=""
        />
        <h3 className="text-3xl font-extrabold text-black">{title}</h3>
      </div>
      <ul className="mt-2">
        {items.map((item) => (
          <li className="text-xl font-semibold">{item}</li>
        ))}
      </ul>
    </div>
  );
};

export { SuitableBox };
