import LogoImage from "../../../public/images/logo.png";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return (
        <Link href="/">
            <Image src={LogoImage} alt="logo" className="w-[32px] sm:w-[42px] lg:w-[58px]"/>
        </Link>
    );
};

export default Logo;