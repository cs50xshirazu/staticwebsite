import React from "react";
import { ButtonPrimary } from "..";
import { useRouter } from "next/navigation";

type Props = {
  name: string;
  imageSrc: string;
  link?: string;
  title?: string;
};

const BoxPrimary = ({ imageSrc, name, link, title }: Props) => {
  const navigate = useRouter();
  return (
    <div className="w-full h-fit flex flex-col gap-4 items-center">
      <div className="w-full h-fit relative before:absolute before:w-full before:h-full before:imagePrimary">
        <img src={imageSrc} className="w-full h-full" alt="" />
        <img
          src="./images/imageFrame.svg"
          className="absolute w-full h-full inset-0"
          alt=""
        />
      </div>
      {title && <h3 className="text-3xl font-bold">{title}</h3>}
      <h5 className="text-2xl font-bold text-center">{name}</h5>
      {link && (
        <ButtonPrimary
          onClick={() => {
            link && navigate.push(link);
          }}
          className="text-xl font-bold"
          title="ثبت نام"
        />
      )}
    </div>
  );
};

export { BoxPrimary };
