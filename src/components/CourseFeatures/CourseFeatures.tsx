import React from "react";
import { CourseFeaturesItem } from "./CourseFeaturesItem/CourseFeaturesItem";

type Props = {};

export const CourseFeatures = (props: Props) => {
  return (
    <div className="w-full mt-8 flex flex-col gap-10">
      <h2 className="text-black text-2xl font-semibold text-center lg:text-justify">
        در این دوره به سبکی متفاوت و جذاب هنر برنامه نویسی را از پایه، اصولی و
        مطابق استانداردهای دانشگاه هاروارد فرا خواهید گرفت.
      </h2>
      <div className="w-full grid grid-cols-4 gap-8 md:grid-cols-1 md:grid-rows-4 md:place-items-start md:gap-4">
        <CourseFeaturesItem
          icon="/icons/support.svg"
          title="پشتیبانی تا پایان دوره"
        />
        <CourseFeaturesItem
          icon="/icons/education.svg"
          title="برگزاری office hours در هر هفته"
        />
        <CourseFeaturesItem
          icon="/icons/support.svg"
          title="ارائه گواهی حضور از دانشگاه شیراز"
        />
        <CourseFeaturesItem
          icon="/icons/support.svg"
          title="تجربه یادگیری علوم کامپیوتر به سبک دانشگاه هاروارد"
        />
      </div>
    </div>
  );
};
