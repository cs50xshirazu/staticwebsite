import LogoImage from "../../../public/images/logo.png";
import Image from "next/image";

const Logo = () => {
    return (
        <div>
            <Image src={LogoImage} alt="logo" className="w-[32px] sm:w-[42px] lg:w-[58px]"/>
        </div>
    );
};

export default Logo;