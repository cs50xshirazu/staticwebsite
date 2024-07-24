"use client";

import TitleBar from "@/components/TitleBar";
import FaqBox from "@/app/components/Faq/FaqBox";
import { useState } from "react";

const Faq = () => {
    const [activeId, setActiveId] = useState(-1);

    const questions: QuestionAnswer[] = [
        {
            title: "آیا محدودیت سنی داریم ؟",
            description: `خیر! این دوره شامل هیج محدودیت سنی نمیشه.`
        },
        {
            title: "آیا برای شرکت در دوره حتما باید ساکن شیراز باشیم؟",
            description: `این دوره هم بصورت حضوری هم بصورت آنلاین برگزار میشه`
        },
        {
            title: "مدرک دوره چه اعتباری داره ؟",
            description: `در طول دوره شما یکسری تمرین‌ها رو دارید که باید اون ها رو در سایت CS50  هاروارد آپلود کنید و تمامی مراحل ائم از تصحیح تمرینات، نمره دهی و صدور مدرک هم توسط خود دانشگاه هاروارد انجام میشه.`
        },
        {
            title: "چجوری مدرک رو دریافت کنیم؟",
            description: `برای کسب این مدرک از دانشگاه هاروارد شما باید چندین مجموعه سوال (تمرین‌هاتون) رو با نمره بالای ۷۰ پشت سر بگذارین. علاوه بر اون در پایان جلسات آموزشی، یک پروژه پایانی هم باید آپلود کنید.`
        },
        {
            title: "امکان استخدام یا کارآموزی با این مدرک وجود داره؟",
            description: `بله!  در پایان دوره و طی نمایشگاه پایانی (CS50x Fair) ما از صاحبان تعدادی از کسب و کار های ایرا دعوت خواهیم کرد تا برترین دانشجویان دوره رو برای استخدام یا کارآموزی انتخاب کنند.`
        },
        {
            title: "مهلت انجام و ارسال تمرینات تا چه تاریخی هست ؟",
            description: `شما میتونید تا پایان سال جاری میلادی ( ۱۰ ام دی ماه ۱۴۰۳) هر چندبار که بخواید تمرین هاتون رو آپلود کرده تا در نهایت موفق به دریافت نمره کافی بشید و بتونید مدرکتون رو دریافت کنید`
        },
        {
            title: "امکان مرور مطالب در صورت از دست دادن جلسات وجود داره ؟",
            description: `بله تمامی جلسات دوره به طور کامل ضبط میشه و با بهترین کیفیت در پنل کاربری شما قرار میگیره تا بتونید در صورت از دست دادن جلسات، از اون ها استفاده کنید.`
        },
        {
            title: "زمان برگزاری دوره چه روزهایی از هفته هست ؟",
            description: `جمعه های هر هفته از ساعت ۱۰ الی ۱۳ در تالار فجر دانشگاه شیراز`
        },
        {
            title: "زمان برگزاری Office Hours چه روز هایی از هفته هست ؟",
            description: `سه شنبه های هر هفته از ساعت ۱۷ الی ۱۹ در کارخانه نوآوری شیراز`
        },
        {
            title: "آیا بجز مدرک سی اس فیفتی هاروارد از طرف دانشگاه شیراز هم مدرک دریافت میکنیم ؟",
            description: `بله از طرف انجمن علمی ای تی دانشگاه شیراز نیز مدرک دریافت میکنید`
        }
    ];

    const renderQuestions = () => {
        return questions.map((question, index) => {
            return (
                <FaqBox key={question.title} title={question.title} id={index} activeId={activeId} setActiveId={setActiveId}>
                    {question.description}
                </FaqBox>
            );
        });
    };

    return (
        <section className="container" id="frequently-asked-questions">
            <TitleBar className="gap-6">
                <span className="font-black whitespace-nowrap  text-xl sm:text-2xl">
                    سوالات متداول
                </span>
            </TitleBar>
            <div className="mt-[40px] flex flex-col gap-4">
                {renderQuestions()}
            </div>
        </section>
    );
};

export default Faq;