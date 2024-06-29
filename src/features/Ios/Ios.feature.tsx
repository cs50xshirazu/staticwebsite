import {
    HeadingPrimay,
    HeadingSecondary,
    Video,
    ShirazUAbout,
    CourseFeatures,
    Slider,
    CustomAccordion,
  } from "@/components";
  import React from "react";
import { ControlBar, Player } from "video-react";
import { AboutTeacher } from "../AboutTeacher/AboutTeacher.feature";
import { teamMembers } from "../TeamAndSponsers/TeamAndSponsers.feature";
import { SuitableFor } from "../SuitableFor/SuitableFor.feature";
  
  type Props = {
  };

  export const Ios = (props: Props) => {
    return (
      <section
        id="whatIsCs50"
        className="w-full flex flex-col gap-6 mt-14 md:mt-5 p-page">
        <h1 className="section-title flex justify-center font-GEO703 text-4.5xl lg:text-3xl">CS50xShirazU</h1>

        <p className="text-justify p-5 text-quinary text-2xl font-semibold lg:text-lg">
          CS50 دوره آموزش مبانی علوم کامپیوتر و آشنایی با منطق و الفبای برنامه
          نویسی است که نخستین بار در دانشگاه های هاروارد و ییل ارائه شد. دوره ی سی
          اس فیفتی یک دوره ی Open-License است که به تمام دنیا این اجازه را میدهد
          تا به صورت رایگان و با اسم CS50x همراه با پسوند اسم مکان برگزاری، محتوای
          دوره را با زبان و فرهنگ خودشان هماهنگ کنند و برگزار کنند.
        </p>
        <div className="section-line flex justify-center font-GEO703 text-4.5xl lg:text-3xl"></div>

        <div className="w-full grid grid-cols-2 gap-10 lg:grid-cols-1 lg:gap-0 px-5">
        <div className="w-full aspect-video rounded overflow-hidden xl:mt-5">
      <Player
        aspectRatio="16:9"
        fluid={true}
        src="https://cdn.cs50xshirazu.ir/intro.mp4"
        poster="/images/iosVideoPoster.png">
        <ControlBar autoHide={false} className="my-class" />
      </Player>
    </div>          
    <ShirazUAbout />
        </div>
        <h1 className="section-title flex justify-center font-IranYekan font-extrabold text-3xl">ویژگی های دوره های ما</h1>
        <CourseFeatures />
        <p className="text-justify p-5 text-quinary text-2xl font-semibold lg:text-lg">
          در پایان دوره های ما میتوانید گواهی معتبر پایان دوره برای دوره ی ثبت
          نامی خود را از دانشگاه هاروارد و گواهی حضور در دوره را از دانشگاه شیراز
          دریافت کنید. گواهی پایان دوره تحت دامنه دانشگاه هاروارد و گواهی حضور تحت
          دامنه دانشگاه شیراز صادر می گردد.
        </p>
        <AboutTeacher />
        <section id="team" className="w-full p-page mt-12 flex flex-col gap-20 ">
        <h1 className="section-title flex justify-center font-IranYekan font-extrabold text-3xl">تیم ما</h1>
      <Slider
        isTeam={false}
        slidesPerView={1}
        slidesPerViewon700={2}
        slidesPerViewon1200={4}
        spaceBetween={50}
        items={teamMembers}
      />
        <div className="section-line flex justify-center font-GEO703 text-4.5xl lg:text-3xl"></div>
    </section>
    <SuitableFor />
    <section
      id="faq"
      className="w-full p-page flex flex-col gap-10 mt-10 min-h-[650px] sm:min-h-[800px]">
    <h1 className="section-title flex justify-center font-IranYekan font-extrabold text-3xl">سوالات متداول</h1>
      <CustomAccordion />
    </section>
      </section>
      

    );
  };
  