import React from "react";
import { AboutTeacherTextsItem } from "./AboutTeacherTextsItem/AboutTeacherTextsItem";

type Props = {};

export const AboutTeacherTexts = (props: Props) => {
  return (
    <div className="w-full flex flex-col gap-3">
      <h3 className="text-quaternary text-3xl font-bold">درباره مدرس</h3>
      <p className="text-quaternary text-xl font-semibold leading-9 md:text-lg">
        محمدحسین طباطبائی فرد دانشجو رشته مهندسی فناوری اطلاعات دانشگاه شیراز
        است. او در سال 2023 دوره مدرسین سی اس فیفتی هاروارد را پشت سر گذاشته و
        گواهی تدریس این دوره ی ارزشمند را از واحد تحصیلات تکمیلی دانشگاه هاروارد
        کسب کرده است. از اصلی ترین سوابق کاری و تحصیلی او میتوان به موارد زیر
        اشاره کرد:
      </p>
      <ul className="text-quaternary text-xl font-semibold mt-7 md:text-lg">
        <AboutTeacherTextsItem text="8 سال سابقه فعالیت در حوزه IT " />
        <AboutTeacherTextsItem text="سابقه تدریس به عنوان TA در دانشگاه شیراز" />
        <AboutTeacherTextsItem text="موسس و دبیر انجمن علمی مهندسی فناوری اطلاعات دانشگاه شیراز" />
        <AboutTeacherTextsItem text="طراحی و پیاده سازی سامانه LMS اتاق اصناف استان فارس" />
        <AboutTeacherTextsItem text="طراحی سامانه کلاس های مجازی اتاق اصناف استان فارس" />
        <AboutTeacherTextsItem text="و..." />
      </ul>
    </div>
  );
};
