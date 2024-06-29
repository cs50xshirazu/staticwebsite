import { ButtonPrimary, HeadingPrimay, HeadingPrimayText } from "@/components";
import Image from "next/image";
import React, { useState } from "react";
import { HamMenu } from "..";
type Props = {};

export const NavBar = (props: Props) => {
  return (
    <>
      <nav className="w-full h-32 px-28 2xl:px-10 md:!px-2 py-2.5 flex justify-center items-center flex-col md:hidden">
        <div className="w-full h-fit flex justify-between items-center">
          <ButtonPrimary title="ورود به پنل کاربری" onClick={() =>location.href="https://panel.cs50xshirazu.ir"} />
          <img src="/images/logo.png" className="h-20 w-14" alt="" />
          <ButtonPrimary title="ثبت نام آنلاین" onClick={() =>window.open('https://cs50xshirazu.ir','_blank')} />
        </div>
        <HeadingPrimay>
          <HeadingPrimayText
            isHeading={false}
            link="#whatIsCs50"
            title="Cs50 چیست؟"
          />
          <HeadingPrimayText
            isHeading={false}
            link="#team"
            title="تیم ما"
          />
          <HeadingPrimayText
            isHeading={false}
            link="#faq"
            title="سوالات متداول"
          />
        </HeadingPrimay>
      </nav>
      <HamMenu />
    </>
  );
};
