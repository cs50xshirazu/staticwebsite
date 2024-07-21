import LogoImage from "@/assets/images/logo.webp";
import Image from "next/image";

const Logo = () => {
    return (
        <div>
            <Image src={LogoImage} alt="logo" className="w-[32px] sm:w-[58px]"/>
        </div>
    );
};

export default Logo;