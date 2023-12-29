"use client";
import { NextUIProvider } from "@nextui-org/react";
import React, { PropsWithChildren } from "react";

type Props = {};

export const NextUiProvider = ({ children }: PropsWithChildren) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};
