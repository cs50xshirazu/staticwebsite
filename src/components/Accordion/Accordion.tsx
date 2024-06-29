"use client";
import { Accordion, AccordionItem } from "@nextui-org/react";
import React from "react";
import { CustomAccordionItem } from "./AccordionItem/AccordionItem";

type Props = {};
const questions: { title: string; content: string }[] = [
  {
    title: "آیا برای ثبت نام حتما باید ساکن شیراز باشم؟",
    content:
      "در صورتی که تمایل دارید به صورت حضوری در دوره شرکت کنید،بله،نیاز است به شیراز بیایید؛ اما در صورتی که تمایل دارید به صورت آنلاین شرکت کنید، نیازی به حضور در شیراز نیست.",
  },
  {
    title: "پیش نیازهای علمی شرکت در این رویداد چیست؟",
    content:
      "این دوره هیچ پیش نیازی ندارد و بیش از هشتاد درصد شرکت کنندگان هیچ دوره ای مرتبط به برنامه نویسی و علوم کامپیوتر را پشت سر نگذاشته اند.",
  },
  {
    title: "چگونه سرتیفیکیت هاروارد را دریافت کنیم؟",
    content:
      "برای هر یک از مدارک یاد شده دانشجویان دوره باید چند مجموعه سوال را پشت سر گذارند. در تمامی این مجموعه سوالات باید نمره ی بالای 70 کسب شود. البته جای نگرانی نیست هر چند بار که بخواهید میتوانید تمرینات را آپلود کنید تا نمره ی کافی را کسب کنید. همچنین پس از پایان جلسه ی آخر یک پروژه ی پایانی نیز باید تحویل دهند تا موفق به دریافت سرتیفیکیت رسمی از هاروارد شوند. به لحاظ زمانی نیز تا پایان سال جاری میلادی یعنی تا 10 دی 1403 برای آپلود تمرین ها زمان دارید!",
  },
  {
    title: "سرتیفیکیت چه اعتباری داره؟",
    content:
      "این گواهی به این علت معتبر است که می توانید آن را در وبسایت دانشگاه هاروارد استعلام کنید و همچنین تمام فرایند تصحیح تمرینات و صدور گواهی از طریق سی اس فیفتی دانشگاه هاروارد آمریکا انجام خواهد شد.",
  },
  {
    title: "برای ثبت نام حتما باید دانشجوی دانشگاه شیراز باشیم؟",
    content:
      "خیر. برای ثبت نام در این دوره نیازی نیست دانشجوی دانشگاه شیراز باشید. میتوانید دانشجوی دانشگاه های دیگر باشید و یا اصلا دانشجو نباشید و به صورت آزاد در دوره ثبت نام کنید.",
  },
  {
    title: "تفاوت سرتیفیکیت edx با این گواهی چیه؟",
    content:
      "گواهی CS50x هاروارد کاملا رایگان است و دانشجویان بعد از گذراندن دوره و انجام تمرینات و پروژه پایانی و کسب نمره حد نصاب موفق به دریافت آن میشوند؛ اما سرتیفیکیت سایت edx با استفاده از پاسپورت دانشجو را به لحاظ هویتی تایید می کند. البته پاسپورت ایرانی از طرف وبسایت edx در فهرست تحریم قرار دارد و شما حتی با پرداخت مبلغ نیز نمیتوانید این مدرک را دریافت کنید. درضمن سرتیفیکیت edx از نظر اعتبار علمی با مدرک CS50x یکسان است.",
  },
  {
    title: "اگه سوالی داشتم از کی باید بپرسم؟",
    content:
      "سوالاتتون را میتوانید در گروهی که در تلگرام و دیسکورد تشکیل میشه بپرسید و هم در جلسات رفع اشکال میتوانید سوالتون را از ta بپرسید.",
  },
];
export const CustomAccordion = (props: Props) => {
  return (
    <Accordion variant="splitted">
      {questions.map((que, i) => (
        <AccordionItem
          key={i}
          aria-label={que.title}
          title={que.title}
          indicator={<img src="/icons/indicator.svg" className="md:size-5" />}
          className="!p-0 overflow-hidden font-medium !rounded-none shadow-primary"
          startContent={
            <img src="/icons/accordionStart.svg" alt="" className="md:size-5" />
          }
          classNames={{
            content:
              "accordion-content px-10 md:px-3 text-center text-2xl md:text-sm font-normal",
            heading: "!bg-primary w-full px-5 shadow-primary",
            title: "text-white text-2xl md:text-base font-medium ",
          }}>
          {que.content}
        </AccordionItem>
      ))}

      {/* <CustomAccordionItem content="aa" key={2} title="11" /> */}
    </Accordion>
  );
};
