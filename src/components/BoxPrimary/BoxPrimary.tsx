import React from "react";
import { ButtonPrimary, ImageCreator } from "..";
import { useRouter } from "next/navigation";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import IconBox from "../IconBox/IconBox";
type Props = {
  name: string;
  imageSrc: string;
  link?: string;
  title?: string;
  isTeam: boolean;
};

const BoxPrimary = ({ imageSrc, name, link, title, isTeam }: Props) => {
  const navigate = useRouter();
  return (
    <div className="w-full h-fit flex flex-col gap-4 items-center">
      <ImageCreator varient="primary" imageSrc={imageSrc} />
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
      {isTeam && (
        <div className="flex justify-center items-center gap-2">
          <IconBox icon={faEnvelope} link="" />
          <IconBox icon={faEnvelope} link="" />
          <IconBox icon={faEnvelope} link="" />
        </div>
      )}
    </div>
  );
};

export { BoxPrimary };
