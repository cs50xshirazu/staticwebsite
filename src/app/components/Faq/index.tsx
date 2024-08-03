"use client";

import TitleBar from "@/components/TitleBar";
import FaqBox from "@/app/components/Faq/FaqBox";
import { useState } from "react";

const Faq = () => {
    const [activeId, setActiveId] = useState(-1);

    const questions: FaqType[] = [
        {
            id: 1,
            title: "آیا محدودیت سنی داریم ؟",
            answer: `خیر! این دوره شامل هیج محدودیت سنی نمیشه.`
        },
        {
            id: 2,
            title: "آیا برای شرکت در دوره حتما باید ساکن شیراز باشیم؟",
            answer: `این دوره هم بصورت حضوری هم بصورت آنلاین برگزار میشه`
        },
        {
            id: 3,
            title: "مدرک دوره چه اعتباری داره ؟",
            answer: `در طول دوره شما یکسری تمرین‌ها رو دارید که باید اون ها رو در سایت CS50  هاروارد آپلود کنید و تمامی مراحل ائم از تصحیح تمرینات، نمره دهی و صدور مدرک هم توسط خود دانشگاه هاروارد انجام میشه.`
        },
        {
            id: 4,
            title: "چجوری مدرک رو دریافت کنیم؟",
            answer: `برای کسب این مدرک از دانشگاه هاروارد شما باید چندین مجموعه سوال (تمرین‌هاتون) رو با نمره بالای ۷۰ پشت سر بگذارین. علاوه بر اون در پایان جلسات آموزشی، یک پروژه پایانی هم باید آپلود کنید.`
        },
        {
            id: 5,
            title: "امکان استخدام یا کارآموزی با این مدرک وجود داره؟",
            answer: `بله!  در پایان دوره و طی نمایشگاه پایانی (CS50x Fair) ما از صاحبان تعدادی از کسب و کار های ایرا دعوت خواهیم کرد تا برترین دانشجویان دوره رو برای استخدام یا کارآموزی انتخاب کنند.`
        },
        {
            id: 6,
            title: "مهلت انجام و ارسال تمرینات تا چه تاریخی هست ؟",
            answer: `شما میتونید تا پایان سال جاری میلادی ( ۱۰ ام دی ماه ۱۴۰۳) هر چندبار که بخواید تمرین هاتون رو آپلود کرده تا در نهایت موفق به دریافت نمره کافی بشید و بتونید مدرکتون رو دریافت کنید`
        },
        {
            id: 7,
            title: "امکان مرور مطالب در صورت از دست دادن جلسات وجود داره ؟",
            answer: `بله تمامی جلسات دوره به طور کامل ضبط میشه و با بهترین کیفیت در پنل کاربری شما قرار میگیره تا بتونید در صورت از دست دادن جلسات، از اون ها استفاده کنید.`
        },
        {
            id: 8,
            title: "زمان برگزاری دوره چه روزهایی از هفته هست ؟",
            answer: `جمعه های هر هفته از ساعت ۱۰ الی ۱۳ در تالار فجر دانشگاه شیراز`
        },
        {
            id: 9,
            title: "زمان برگزاری Office Hours چه روز هایی از هفته هست ؟",
            answer: `سه شنبه های هر هفته از ساعت ۱۷ الی ۱۹`
        },
        {
            id: 10,
            title: "آیا بجز مدرک سی اس فیفتی هاروارد از طرف دانشگاه شیراز هم مدرک دریافت میکنیم ؟",
            answer: `بله از طرف انجمن علمی ای تی دانشگاه شیراز نیز مدرک دریافت میکنید`
        }
    ];

    const renderQuestions = () => {
        return questions.map((question, index) => {
            return (
                <FaqBox key={question.title} title={question.title} id={index} activeId={activeId}
                        setActiveId={setActiveId}>
                    {question.answer}
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