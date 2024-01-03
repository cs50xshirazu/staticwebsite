import React from "react";
import { ButtonSecondary } from "../";

type Props = {};

export const ShirazUAbout = (props: Props) => {
  return (
    <div className="w-full flex flex-col gap-7">
      <ButtonSecondary title="CS50x SHIRAZU چیست؟" />
      <p className="text-quinary text-2xl font-semibold text-justify">
        CS50 دوره آموزش مقدماتی برنامه نویسی و مبانی علوم کامپیوتر هاروارد است
        که هرساله علاوه بر دانشگاه هاروارد و یِل، در سایر نقاط دنیا توسط
        نمایندگان محلی دارای لایسنس برگزار می‌شود.
      </p>
    </div>
  );
};
