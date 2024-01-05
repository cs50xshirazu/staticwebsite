import React from "react";

type Props = {};

const ImageSection = (props: Props) => {
  return (
    <div className="w-full h-[400px]">
      <img
        src="./images/cs50book.png"
        className="w-full h-full aspect-video object-cover"
        alt=""
      />
    </div>
  );
};

export { ImageSection };
