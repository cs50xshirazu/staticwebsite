import React from "react";

type Props = {};

const Loading = (props: Props) => {
  return (
    <div className="w-full bg-white h-screen flex justify-center items-center">
      <span className="loader"></span>
    </div>
  );
};
export default Loading;
