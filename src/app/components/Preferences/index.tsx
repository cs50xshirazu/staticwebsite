import Image from "next/image";
import CertificateImage from "@/assets/images/certificate-section.jpg";
import Paragraph from "@/components/Paragraph";
import ShapeFrame from "@/components/ShapeFrame";

const Preferences = () => {
    return (
        <div className="flex container gap-16 my-[40px] max-lg:flex-col">
            <div className="flex-1 space-y-8">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                        <svg className="size-[30px] xs:size-[40px]" width="40" height="40" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M47 11.2039V11.6858C46.9021 13.1239 46.343 14.3531 45.3229 15.3733C37.3127 23.3822 29.3028 31.3912 21.2932 39.4002C19.1231 41.5703 15.6945 41.5482 13.5208 39.3772C9.56248 35.4263 5.60665 31.4723 1.65326 27.5152C0.640436 26.5018 0.089349 25.2748 0 23.8342V23.3614C0.0948568 21.8884 0.634928 20.677 1.62021 19.7272C3.51398 17.8995 6.36795 17.6168 8.54813 19.114C8.86452 19.3313 9.2418 19.6602 9.67998 20.1008C11.9627 22.3951 14.2242 24.6576 16.4647 26.8883C16.8668 27.2885 17.5103 27.373 18.0105 27.1288C18.1758 27.0486 18.3343 26.9326 18.4861 26.7809C24.738 20.5246 31.1351 14.1267 37.6771 7.58707C39.514 5.75113 42.4221 5.46105 44.5454 6.87931C46.0447 7.88112 46.8629 9.32264 47 11.2039Z"
                                fill="#4E6C50" />
                        </svg>

                        <h3 className="text-xl xs:text-2xl font-black">این دوره برای چه کسانی مناسب است؟</h3>
                    </div>
                    <Paragraph className="!text-xl lg:!text-lg !leading-[35px] lg:!leading-[40px] mr-2">
                        <div className="flex gap-4">
                            <span className="bg-primary size-2 rounded-full shrink-0 mt-4"></span>
                            <span>
                                کسانی که به یادگیـری مهارت مهم و پردرآمد در ایران و خارج از کشور علاقه دارند.
                            </span>
                        </div>
                        <div className="flex gap-4">
                            <span className="bg-primary size-2 rounded-full shrink-0 mt-4"></span>
                            <span>
                                کسانی که قصد دارند در ادامه‌ی مسیر حــرفه‌ای خود در زمینه برنامه‌نویسی فعالیت کنند.
                            </span>
                        </div>
                        <div className="flex gap-4">
                            <span className="bg-primary size-2 rounded-full shrink-0 mt-4"></span>
                            <span>
                                کسانی که در حال افزایش سطح توانمندی خود با هدف مهاجرت شغلی یا تحصیلی هستند.
                            </span>
                        </div>
                    </Paragraph>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                        <svg className="size-[25px] xs:size-[35px]" width="35" height="35" viewBox="0 0 35 35"
                             fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_261_308)">
                                <path
                                    d="M35 4.40242V4.75105C34.9326 5.54766 34.6078 6.23695 34.0259 6.81892C30.4484 10.3969 26.8721 13.9732 23.2969 17.5479C23.2827 17.5616 23.2825 17.5753 23.2962 17.5889C26.8746 21.1664 30.4539 24.7457 34.0341 28.3268C34.6179 28.9102 34.9398 29.6052 35 30.4118V30.7262C34.9344 31.5384 34.6151 32.2279 34.0423 32.7948C33.561 33.2706 33.0802 33.747 32.5999 34.2242C32.2194 34.6015 31.734 34.8602 31.1438 35.0001H29.8238C29.2264 34.8483 28.713 34.5578 28.2837 34.1285C24.6939 30.5346 21.1039 26.943 17.5137 23.3537C17.5119 23.3518 17.5098 23.3503 17.5074 23.3493C17.5051 23.3483 17.5025 23.3477 17.4999 23.3477C17.4973 23.3477 17.4946 23.3483 17.4922 23.3493C17.4898 23.3503 17.4875 23.3518 17.4856 23.3537C13.9214 26.9175 10.3562 30.4824 6.79014 34.0485C6.30342 34.5348 5.76292 34.852 5.16865 35.0001H3.84863C3.24525 34.8524 2.72686 34.5608 2.29346 34.1251C1.8359 33.6652 1.37858 33.2054 0.921484 32.7456C0.370964 32.1919 0.0638021 31.5215 0 30.7344V30.3694C0.0701823 29.5856 0.378711 28.92 0.925586 28.3726C4.52038 24.7769 8.1138 21.183 11.7059 17.591C11.7089 17.588 11.7113 17.5844 11.713 17.5805C11.7146 17.5766 11.7155 17.5724 11.7155 17.5681C11.7155 17.5638 11.7146 17.5596 11.713 17.5557C11.7113 17.5517 11.7089 17.5482 11.7059 17.5452C8.11426 13.9531 4.52106 10.3593 0.92627 6.76355C0.371647 6.20893 0.0628906 5.53513 0 4.74216V4.39353C0.065625 3.61469 0.37028 2.95069 0.913965 2.40154C1.40479 1.90616 1.86507 1.44679 2.29482 1.02341C3.21494 0.116057 4.29137 -0.14257 5.52412 0.247534C5.9443 0.380152 6.35241 0.644475 6.74844 1.0405C9.97865 4.27162 13.5584 7.85115 17.4877 11.7791C17.4977 11.7891 17.5075 11.7891 17.5171 11.7791C21.1155 8.18018 24.7142 4.58266 28.3131 0.986499C29.5237 -0.222095 31.4187 -0.239184 32.6464 0.968042C33.0985 1.41192 33.5663 1.87335 34.0498 2.35232C34.6167 2.91332 34.9335 3.59669 35 4.40242Z"
                                    fill="#820000" />
                            </g>
                            <defs>
                                <clipPath id="clip0_261_308">
                                    <rect width="35" height="35" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                        <h3 className="text-xl xs:text-2xl font-black">این دوره برای چه کسانی مناسب نیست؟</h3>
                    </div>
                    <Paragraph className="!text-xl lg:!text-lg !leading-[35px] lg:!leading-[40px] mr-2">
                        <div className="flex gap-4">
                            <span className="bg-primary size-2 rounded-full shrink-0 mt-4"></span>
                            <span>
                                کسانی که وقت کافی برای یادگیری مستمر و تمرین کافی ندارند.
                            </span>
                        </div>
                        <div className="flex gap-4">
                            <span className="bg-primary size-2 rounded-full shrink-0 mt-4"></span>
                            <span>
                                افرادی که به کار ذهنی و حل مسئله علاقه‌ای ندارند.
                            </span>
                        </div>
                        <div className="flex gap-4">
                            <span className="bg-primary size-2 rounded-full shrink-0 mt-4"></span>
                            <span>
                                کسانی که چالش و ریسک را در ازای پیشرفت ‌های بزرگ نمی‌پذیرند.
                            </span>
                        </div>
                        <div className="flex gap-4">
                            <span className="bg-primary size-2 rounded-full shrink-0 mt-4"></span>
                            <span>
                                کسانی که بدون شناخت از این حوزه و فقط با انگیزه درآمد بالا قصد ورود دارند.
                            </span>
                        </div>
                        <div className="flex gap-4">
                            <span className="bg-primary size-2 rounded-full shrink-0 mt-4"></span>
                            <span>
                                افـرادی که به دنبال یک‌شبه نتیجه گـرفتن هستند و تلاشی بـرای پیشرفت نمی‌کنند.
                            </span>
                        </div>
                    </Paragraph>
                </div>
            </div>
            <div className="flex-1">
                <div className="relative">
                    <ShapeFrame className="absolute z-20 p-4 inset-0" shapesClassName="max-sm:size-[35px]" />
                    <Image src={CertificateImage} alt="certificate" />
                </div>
            </div>
        </div>
    );
};

export default Preferences;