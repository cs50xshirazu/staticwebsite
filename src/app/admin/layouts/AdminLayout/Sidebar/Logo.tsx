import LogoImage from "@/assets/images/logo.webp";
import Image from "next/image";

const Logo = () => {
    return (
        <div className="text-white flex items-center gap-4 px-4">
            <Image src={LogoImage} alt="logo" className="w-auto h-[45px] mt-1" />
            <span className="font-bold text-lg">
                CS50x Admin
            </span>
        </div>
    );
};

export default Logo;