import TitleBar from "@/components/TitleBar";
import Paragraph from "@/components/Paragraph";
import DividerShape from "@/components/DividerShape";
import VideoSection from "@/app/components/About/VideoSection";
import ShapeTitle from "@/components/ShapeTitle";
import FeaturesSection from "@/app/components/About/FeaturesSection";

const About = () => {
    return (
        <section className="container mt-[40px]">
            <TitleBar className="gap-6">
                <span className="font-geo-slab-703 font-bold whitespace-nowrap text-2xl sm:text-4xl">
                    CS50x SHIRAZ
                </span>
            </TitleBar>
            <Paragraph className="my-8">
                CS50 دوره آموزش مبانی علوم کامپیوتر و آشنایی با منطق و الفبای برنامه نویسی است که نخستین بار در دانشگاه
                های هاروارد و ییل ارائه شد. دوره ی سی اس فیفتی یک دوره ی Open-License است که به تمام دنیا این اجازه را
                میدهد تا به صورت رایگان و با اسم CS50x همراه با پسوند اسم مکان برگزاری، محتوای دوره را با زبان و فرهنگ
                خودشان هماهنگ کنند و برگزار کنند.
            </Paragraph>
            <DividerShape simple />
            <div className="flex max-lg:flex-col-reverse gap-14 mt-[40px]">
                <VideoSection />
                <div className="flex-1">
                    <ShapeTitle className="py-9 sm:py-11 w-fit" textClassName="text-brand-cream text-xl sm:text-2xl font-bold">
                        <span className="flex gap-2 items-center">
                            <span className="font-geo-slab-703">
                                CS50x SHIRAZ
                            </span>
                            چیست؟
                        </span>
                    </ShapeTitle>
                    <Paragraph className="mt-6">
                        CS50 دوره آموزش مقدماتی برنامه نویسی و مبانی علوم کامپیوتر هاروارد است که هرساله علاوه بر
                        دانشگاه هاروارد و یِل، در سایر نقاط دنیا توسط نمایندگان محلی دارای لایسنس برگزار می‌شود.
                    </Paragraph>
                </div>
            </div>
            <FeaturesSection />
        </section>
    );
};

export default About;