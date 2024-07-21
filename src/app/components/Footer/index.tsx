import DividerShape from "@/components/DividerShape";
import DiscordIconImage from "@/assets/icons/discord.svg";
import GithubIconImage from "@/assets/icons/github.svg";
import TwitterIconImage from "@/assets/icons/twitter.svg";

import FrontChapterImage from "@/assets/images/brands/frontchapter.svg";
import Cs50xShirazImage from "@/assets/images/brands/cs50xShiraz.svg";
import ShirazUniversityImage from "@/assets/images/brands/shirazUniversity.svg";
import ShirazUImage from "@/assets/images/brands/shirazu.svg";
import FooterBgImage from "@/assets/images/footer-bg.jpg";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="py-6 mt-[100px] relative">
            <Image src={FooterBgImage} className="object-cover -z-10" alt="footer-bg" fill />
            <div className="bg-primary/90 -z-[5] absolute w-full h-full inset-0" />

            <div className="container">
                <DividerShape simple color="cream" />
                <div className="px-4 py-11 flex items-center justify-between max-sm:flex-col-reverse max-sm:gap-8">
                    <div className="flex items-center gap-4">
                        <a href="#" className="shrink-0">
                            <Image className="size-[35px] sm:size-[40px] md:size-[50px]" src={FrontChapterImage} alt="frontchapter" />
                        </a>
                        <a href="#" className="shrink-0">
                            <Image className="size-[35px] sm:size-[40px] md:size-[50px]" src={Cs50xShirazImage} alt="cs50xshiraz" />
                        </a>
                        <a href="#" className="shrink-0">
                            <Image className="size-[35px] sm:size-[40px] md:size-[50px]" src={ShirazUniversityImage} alt="shiraz-university" />
                        </a>
                        <a href="#" className="shrink-0">
                            <Image className="size-[35px] sm:size-[40px] md:size-[50px]" src={ShirazUImage} alt="shirazu" />
                        </a>
                    </div>
                    <div className="flex items-center gap-6 sm:gap-12 md:gap-16 max-sm:flex-col">
                        <div className="text-white font-bold flex items-center gap-6 md:gap-10 md:text-lg">
                            <a href="#">cs50</a>
                            <a href="#">virgool</a>
                            <a href="#">دانشگاه شیراز</a>
                        </div>
                        <div className="flex justify-start items-center gap-4 w-fit">
                            <a href="#" className="hover:brightness-150 transition-all">
                                <Image src={DiscordIconImage} alt="discord" className="size-[26px] md:size-[32px]" />
                            </a>
                            <a href="#" className="hover:brightness-150 transition-all">
                                <Image src={GithubIconImage} alt="github" className="size-[20px] md:size-[25px]" />
                            </a>
                            <a href="#" className="hover:brightness-150 transition-all">
                                <Image src={TwitterIconImage} alt="twitter" className="size-[20px] md:size-[25px]" />
                            </a>
                        </div>
                    </div>
                </div>
                <DividerShape simple color="cream" />
                <div className="flex justify-between items-center px-4 py-5 max-sm:flex-col gap-6">
                    <div className="flex items-center gap-2 text-white max-sm:text-center">
                        &copy;
                        2023 تمامی حقوق برای Cs50xShiraz و دانشگاه شیراز محفوظ می باشد.
                    </div>
                    <div className="text-white max-sm:text-center">
                        ساخته شده با عشق توسط <a href='https://byeto.net'>بایتو</a> 
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;