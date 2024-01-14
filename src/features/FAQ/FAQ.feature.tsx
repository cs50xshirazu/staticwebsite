import { CustomAccordion, HeadingPrimay } from "@/components";
import React from "react";

type Props = {};

const Faq = (props: Props) => {
  return (
    <section
      id="faq"
      className="w-full p-page flex flex-col gap-10 mt-10 min-h-[650px] sm:min-h-[800px]">
      <HeadingPrimay title="سوالات متداول" />
      <CustomAccordion />
    </section>
  );
};

export { Faq };
