import Image from "next/image";
import HeaderBackgroundImage from "@/assets/images/home-img.webp";

const Header = () => {
    return (
        <div className="w-full h-[calc(100vh-140px)] relative">
            <Image src={HeaderBackgroundImage} className="object-cover" fill alt="header-background" />
            <div className="font-geo-slab-703 absolute bottom-5 w-full z-10 font-black text-white">
                <div className="container max-xs:flex justify-center items-center">
                    <div className="flex flex-col items-end w-fit">
                        <span className="ml-2 text-xl sm:text-2xl">
                            Welcome to
                        </span>
                        <h1 className="text-5xl sm:text-7xl font-black">
                            CS50x SHIRAZ
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;