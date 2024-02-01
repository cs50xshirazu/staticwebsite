import { ImageCreator, SuitableBox } from "@/components";
import React from "react";

type Props = {};

const SuitableFor = (props: Props) => {
  return (
    <section className="w-full p-page grid grid-cols-5 gap-10 md:grid-cols-1 place-items-center md:gap-x-0">
      <div className="h-full flex flex-col gap-5 col-span-3 justify-evenly md:w-11/12">
        <SuitableBox
          title="این دوره برای چه کسانی مناسب است؟"
          items={[
            "کسانی که به یادگیـری مهارت مهم و پردرآمد در ایران و خارج از کشور علاقه دارند.",
            "کسانی که قصد دارند در ادامه‌ی مسیر حــرفه‌ای خود در زمینه برنامه‌نویسی فعالیت کنند.",
            "کسانی که در حال افزایش سطح توانمندی خود با هدف مهاجرت شغلی یا تحصیلی هستند.",
          ]}
          isSutable={true}
        />
        <SuitableBox
          title="این دوره برای چه کسانی مناسب نیست؟"
          items={[
            "افرادی که به کار ذهنی و حل مسئله علاقه‌ای ندارند.",
            "کسانی که وقت کافی برای یادگیری مستمر و تمرین کافی ندارند.",
            "کسانی که چالش و ریسک را در ازای پیشرفت ‌های بزرگ نمی‌پذیرند.",
            "کسانی که بدون شناخت از این حوزه و فقط با انگیزه درآمد بالا قصد ورود دارند.",
            "افـرادی که به دنبال یک‌شبه نتیجه گـرفتن هستند و تلاشی بـرای پیشرفت نمی‌کنند.",
          ]}
          isSutable={false}
        />
      </div>
      <div className="w-full aspect-square col-span-2 md:mx-auto -order-1 md:w-11/12 flex justify-center items-center">
        <img src="/images/sepehrCertidicate.png" className="w-full" alt="" />
        {/* <ImageCreator
          varient="secondary"
          imageSrc="/images/sepehrCertidicate.png"
        /> */}
      </div>
    </section>
  );
};

export { SuitableFor };
