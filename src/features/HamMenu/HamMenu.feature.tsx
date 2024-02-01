"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import cs50ShirazU from "../../../public/images/cs50ShirazU.svg";
import {
  ButtonPrimary,
  HeadingPrimayText,
  HeadingSecondary,
} from "@/components";

type Props = {};

const HamMenu = (props: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const hamBtnRef = useRef(null) as any;
  const hamMenuBtnRef = useRef(null) as any;

  const onHamToggle = () => {
    setIsMenuOpen((prev) => !prev);
    hamBtnRef.current.classList.toggle("active");
    hamMenuBtnRef.current.classList.toggle("active");
  };
  return (
    <>
      <nav
        className={`w-full h-20 px-28 2xl:px-10 md:!px-4 py-2.5 md:flex justify-between items-center hidden sticky z-20 bg-BodyImage top-0 right-0`}>
        <Image src={cs50ShirazU} alt="LOGO" className="h-14 w-10" />
        <svg
          className="ham hamRotate ham1"
          viewBox="0 0 100 100"
          width="80"
          ref={hamBtnRef}
          onClick={onHamToggle}>
          <path
            className="line top"
            d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
          />
          <path className="line middle" d="m 30,50 h 40" />
          <path
            className="line bottom"
            d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
          />
        </svg>
      </nav>
      <div
        className={`fixed h-dvh top-0 left-0 z-40 bg-quaternary overflow-hidden transition-all py-2.5 duration-1000 ${
          isMenuOpen ? "w-10/12 px-2 " : "w-0 px-0"
        }`}>
        <div className="w-full h-20  md:flex justify-end items-center">
          <svg
            className="ham hamRotate ham1 z-50"
            viewBox="0 0 100 100"
            width="80"
            ref={hamMenuBtnRef}
            onClick={onHamToggle}>
            <path
              className="line top"
              d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
            />
            <path className="line middle" d="m 30,50 h 40" />
            <path
              className="line bottom"
              d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
            />
          </svg>
        </div>
        <div onClick={onHamToggle} className="flex flex-col gap-4">
          <HeadingPrimayText
            link="#whatIsCs50"
            isHeading={false}
            title="Cs50 چیست؟"
          />
          <HeadingPrimayText
            link="#courses"
            isHeading={false}
            title="دوره ها"
          />
          <HeadingPrimayText
            link="#faq"
            isHeading={false}
            title="سوالات متداول"
          />
          <ButtonPrimary title="ورود به پنل کاربری" />
          <ButtonPrimary title="ثبت نام آنلاین" />
        </div>
      </div>
    </>
  );
};

export { HamMenu };
