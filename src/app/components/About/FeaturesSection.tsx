import Paragraph from "@/components/Paragraph";
import ExperienceIconImage from "@/assets/icons/experience.svg";
import CertificateIconImage from "@/assets/icons/certificate.svg";
import EducationIconImage from "@/assets/icons/education.svg";
import SupportIconImage from "@/assets/icons/support.svg";
import Image from "next/image";

const FeaturesSection = () => {
    return (
        <div className="">
            <Paragraph className="lg:!text-center my-[40px]">
                در این دوره به سبکی متفاوت و جذاب هنر برنامه نویسی را از پایه، اصولی و مطابق استانداردهای دانشگاه
                هاروارد فرا خواهید گرفت.
            </Paragraph>
            <div className="flex justify-start lg:justify-evenly max-lg:flex-wrap gap-8">
                <div className="flex items-center gap-4">
                    <Image className="size-[50px] sm:size-[60px] lg:size-[80px]" src={ExperienceIconImage} alt="experient-icon" />
                    <Paragraph className="text-start text-xl lg:!text-lg leading-8">
                        تجربه یادگیری علوم کامپیوتر
                        به سبک دانشگاه هاروارد
                    </Paragraph>
                </div>
                <div className="flex items-center gap-4">
                    <Image className="size-[50px] sm:size-[60px] lg:size-[80px]" src={CertificateIconImage} alt="certificate-icon" />
                    <Paragraph className="text-start text-xl lg:!text-lg leading-8">
                        ارائه گواهی حضور
                        از دانشگاه شیراز
                    </Paragraph>
                </div>
                <div className="flex items-center gap-4">
                    <Image className="size-[50px] sm:size-[60px] lg:size-[80px]" src={EducationIconImage} alt="education-icon" />
                    <Paragraph className="text-start text-xl lg:!text-lg leading-8">
                        برگزاری office hours
                        در هر هفته
                    </Paragraph>
                </div>
                <div className="flex items-center gap-4">
                    <Image className="size-[50px] sm:size-[60px] lg:size-[80px]" src={SupportIconImage} alt="support-icon" />
                    <Paragraph className="text-start text-xl lg:!text-lg leading-8">
                        پشتیبانی تا پایان دوره
                    </Paragraph>
                </div>
            </div>
        </div>
    );
};

export default FeaturesSection;