import React from "react";

type Props = {
  title: string;
  items: { name: string; link: string; icon?: React.ReactNode }[];
};

const FooterBox = (props: Props) => {
  const { items, title } = props;
  return (
    <div className="w-full flex flex-col">
      <h5 className="text-2xl font-bold md:text-lg">{title}</h5>
      <ul className="mt-10">
        {items.map((item, i) => (
          <li className="mt-4" key={item.name + i}>
            <a
              href={item.link}
              className="text-2xl md:text-lg font-normal flex gap-2 items-center">
              {item.name}
              {item.icon && <span className="mr-5 size-10">{item.icon}</span>}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { FooterBox };
