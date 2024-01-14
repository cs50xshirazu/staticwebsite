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
          className="size-12 md:size-8"
        />
        <h3 className="text-3xl font-extrabold md:text-xl text-black">
          {title}
        </h3>
      </div>
      <ul className="mt-2">
        {items.map((item, i) => (
          <li key={item + i} className="text-xl md:text-base font-semibold">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export { SuitableBox };
