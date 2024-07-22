import ShapeTitle from "@/components/ShapeTitle";
import Logo from "@/app/components/Logo";
import DividerShape from "@/components/DividerShape";
import SideDrawerButton from "@/app/components/Navbar/SideDrawerButton";

const Navbar = () => {

    return (
        <nav className="h-[80px] sm:h-[140px] flex flex-col justify-center items-center">
            <div className="container flex max-sm:flex-row-reverse justify-between items-center px-10">
                <a className="max-sm:hidden" href="https://summer.cs50xshiraz.ir">
                    <ShapeTitle className="py-5" textClassName="text-sm font-bold">
                        ورود به پنل کاربری
                    </ShapeTitle>
                </a>
                <Logo />
                <span className="sm:hidden text-xl xs:text-2xl font-black !font-geo-slab-703">CS50xShiraz</span>
                <SideDrawerButton />
                <a className="max-sm:hidden" href="https://evnd.co/lvg3L" target="_blank">
                    <ShapeTitle className="py-5" textClassName="text-sm font-bold">
                        ثبت نام آنلاین
                    </ShapeTitle>
                </a>
            </div>
            <div className="max-sm:hidden flex items-center gap-8 container mt-1">
                <DividerShape />
                <ul className="flex items-center gap-12">
                    <li className="text-xl font-bold whitespace-nowrap hover:text-primary transition-all">
                        <a href="#">
                            سوالات متداول
                        </a>
                    </li>
                    <li className="text-xl font-bold whitespace-nowrap hover:text-primary transition-all">
                        <a href="#">
                            دوره ها
                        </a>
                    </li>
                    <li className="text-xl font-bold whitespace-nowrap hover:text-primary transition-all">
                        <a href="#">
                            چیست؟ Cs50
                        </a>
                    </li>
                </ul>
                <DividerShape reverse />
            </div>
        </nav>
    );
};

export default Navbar;