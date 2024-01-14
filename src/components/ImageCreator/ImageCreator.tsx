import React from "react";

type Props = {
  imageSrc: string;
  varient: "primary" | "secondary";
  className?: string;
};

const ImageCreator = (props: Props) => {
  const { imageSrc, className, varient } = props;

  return (
    <div className="w-full h-fit relative before:absolute before:w-full before:h-full before:imagePrimary">
      <img
        src={imageSrc}
        className={`w-full h-full ${className ? className : ""}`}
        alt=""
      />
      <img
        src={
          varient === "primary"
            ? "./images/imageFrame.svg"
            : "./images/imageFrame2.svg"
        }
        className="absolute w-11/12 h-[90%] inset-1/2 translate-x-1/2 -translate-y-1/2 object-fill"
        alt=""
      />
    </div>
  );
};

export { ImageCreator };
