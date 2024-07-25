import DividerShape from "@/components/DividerShape";
import GithubIconImage from "@/assets/icons/github.svg";
import TwitterIconImage from "@/assets/icons/twitter.svg";
import LinkedinIconImage from "@/assets/icons/linkedin.svg";
import InstagramIconImage from "@/assets/icons/instagram.svg";

import Cs50xShirazImage from "@/assets/images/brands/cs50xShiraz.svg";
import ShirazUniversityImage from "@/assets/images/brands/shirazUniversity.svg";
import ShirazUImage from "@/assets/images/brands/shirazu.svg";
import FooterBgImage from "@/assets/images/footer-bg.jpg";
import Image from "next/image";
import Link from "next/link";

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
                            <a href="https://cs50.harvard.edu">cs50</a>
                            <a href="#">virgool</a>
                            <a href="https://shirazu.ac.ir/">دانشگاه شیراز</a>
                        </div>
                        <div className="flex justify-start items-center gap-4 w-fit">
                            <Link target="_blank" href="https://github.com/cs50xshirazu" className="hover:brightness-150 transition-all">
                                <Image src={GithubIconImage} alt="github" className="size-[20px] md:size-[25px]" />
                            </Link>
                            <Link target="_blank" href="https://twitter.com/cs50xshiraz" className="hover:brightness-150 transition-all">
                                <Image src={TwitterIconImage} alt="twitter" className="size-[20px] md:size-[25px]" />
                            </Link>
                            <Link target="_blank" href="https://www.instagram.com/cs50xshiraz/" className="hover:brightness-150 transition-all">
                                <Image src={InstagramIconImage} alt="instagram" className="size-[20px] md:size-[25px]" />
                            </Link>
                            <Link target="_blank" href="https://ir.linkedin.com/company/cs50xshiraz" className="hover:brightness-150 transition-all">
                                <Image src={LinkedinIconImage} alt="linkedin" className="size-[20px] md:size-[25px]" />
                            </Link>
                        </div>
                    </div>
                </div>
                <DividerShape simple color="cream" />
                <div className="flex justify-between items-center px-4 py-5 max-sm:flex-col gap-6">
                    <div className="flex items-center gap-2 text-white max-sm:text-center">
                        &copy;
                        2023 تمامی حقوق برای CS50xShiraz محفوظ می باشد.
                    </div>
                    {/*<div className="text-white max-sm:text-center">*/}
                    {/*    ساخته شده با ♥ توسط <Link href='https://byeto.net' className="hover:underline" target="_blank">بایتو</Link>*/}
                    {/*</div>*/}
                </div>
            </div>
        </footer>
    );
};

export default Footer;