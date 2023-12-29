import { ButtonPrimary, HeadingPrimay, HeadingPrimayText } from "@/components";
import Image from "next/image";
import React from "react";
import cs50ShirazU from "../../../public/images/cs50ShirazU.svg";
type Props = {};

const NavBar = (props: Props) => {
  return (
    <nav className="w-full h-32 px-28 py-2.5 flex justify-center items-center flex-col">
      <div className="w-full h-fit flex justify-between items-center">
        <ButtonPrimary title="ورود به پنل کاربری" />
        <Image src={cs50ShirazU} alt="LOGO" className="h-20 w-14" />
        <ButtonPrimary title="ثبت نام آنلاین" />
      </div>
      <HeadingPrimay>
        <HeadingPrimayText isHeading={false} title="ثبت نام" />
        <HeadingPrimayText isHeading={false} title="دوره ها" />
        <HeadingPrimayText isHeading={false} title="سوالات متداول" />
      </HeadingPrimay>
    </nav>
  );
};

export default NavBar;
