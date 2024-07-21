import TitleBar from "@/components/TitleBar";
import Paragraph from "@/components/Paragraph";
import CertificatePaperImage from "@/assets/images/certificate-paper.webp";

import Image from "next/image";

const Features = () => {
    return (
        <section className="mt-[50px] sm:mt-[120px]">
            <TitleBar className="container gap-6">
                <span className="font-black whitespace-nowrap text-xl sm:text-2xl">
                    ویژگی های دوره ی ما
                </span>
            </TitleBar>
            <Paragraph className="container mt-[40px]">
                در پایان دوره های ما میتوانید گواهی معتبر پایان دوره برای دوره ی ثبت نامی خود را از دانشگاه هاروارد و
                گواهی حضور در دوره را از دانشگاه شیراز دریافت کنید. گواهی پایان دوره تحت دامنه دانشگاه هاروارد و گواهی
                حضور تحت دامنه دانشگاه شیراز صادر می گردد.
            </Paragraph>
            <div className="bg-primary py-12 mt-[40px]">
                <div className="container flex max-lg:flex-col items-center gap-12">
                    <div className="flex-1">
                        <h2 className="text-2xl xs:text-3xl font-bold text-white">
                            درباره مدرس
                        </h2>
                        <Paragraph className="!text-lg xs:!text-xl !leading-[180%] font-medium text-white opacity-80 mt-6">
                            محمدحسین طباطبائی فرد دانشجو رشته مهندسی فناوری اطلاعات دانشگاه شیراز است. او در سال 2023
                            دوره
                            مدرسین سی اس فیفتی هاروارد را پشت سر گذاشته و گواهی تدریس این دوره ی ارزشمند را از واحد
                            تحصیلات
                            تکمیلی دانشگاه هاروارد کسب کرده است. از اصلی ترین سوابق کاری و تحصیلی او میتوان به موارد زیر
                            اشاره کرد:
                        </Paragraph>
                        <ul className="flex flex-col gap-4 text-white list-disc mt-10 mr-4">
                            <li>
                                سابقه تدریس به عنوان TA در دانشگاه شیراز.
                            </li>
                            <li>
                                موسس و دبیر انجمن علمی مهندسی فناوری اطلاعات دانشگاه شیراز.
                            </li>
                            <li>
                                طراحی و پیاده سازی سامانه LMS اتاق اصناف استان فارس.
                            </li>
                            <li>
                                طراحی سامانه کلاس های مجازی اتاق اصناف استان فارس.
                            </li>
                            <li>
                                همکاری به عنوان فریلسنر با مرکز نوآوری و کارآفرینی دانشگاه شیراز.
                            </li>
                            <li>
                                و...
                            </li>
                        </ul>
                    </div>
                    <div className="flex-1">
                        <Image src={CertificatePaperImage} alt="certificate-paper" className="w-full" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;