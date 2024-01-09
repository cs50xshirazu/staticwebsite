"use client";
import { AccordionItem } from "@nextui-org/react";
import { randomUUID } from "crypto";
import React from "react";

type Props = {
  title: string;
  content: string;
  // key: number;
};

export const CustomAccordionItem = (props: Props) => {
  return (
    <AccordionItem
      key={1}
      aria-label={"props.content"}
      title={"props.content"}
      indicator={<img src="/icons/indicator.svg" />}
      className="!p-0 overflow-hidden font-medium !rounded-none shadow-primary"
      startContent={<img src="/icons/accordionStart.svg" alt="" />}
      classNames={{
        content: "accordion-content px-10 text-center text-2xl font-normal",
        heading: "!bg-primary w-full px-5 font-medium shadow-primary",
        title: "text-white",
      }}
    >
      {"props.content"}
    </AccordionItem>
  );
};
 