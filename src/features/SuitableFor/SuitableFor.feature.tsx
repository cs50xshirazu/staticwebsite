import { ImageCreator } from "@/components";
import React from "react";

type Props = {};

const SuitableFor = (props: Props) => {
  return (
    <section className="w-full p-page grid grid-cols-5 gap-10">
      <div className="flex flex-col gap-5 col-span-3">
        <div></div>
      </div>
      <div className="w-full aspect-square col-span-2">
        <ImageCreator varient="secondary" imageSrc="/images/takhtEjamsid.svg" />
      </div>
    </section>
  );
};

export { SuitableFor };
