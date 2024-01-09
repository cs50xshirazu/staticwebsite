import React from "react";
import { ButtonPrimary, ImageCreator } from "..";
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
      <ImageCreator
        varient="primary"
        className="aspect-square"
        imageSrc={imageSrc}
      />
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
