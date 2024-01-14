import { IconDefinition, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type Props = {
  icon: IconDefinition;
  link: string;
};

const IconBox = (props: Props) => {
  return (
    <a
      href={props.link}
      className=" w-fit h-fit p-2 rounded-full flex justify-center items-center">
      <FontAwesomeIcon icon={props.icon} className="size-7 text-primary" />
    </a>
  );
};

export default IconBox;
