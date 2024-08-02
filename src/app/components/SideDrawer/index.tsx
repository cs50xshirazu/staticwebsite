"use client";

import { toggleSideDrawer } from "@/utils";
import Image from "next/image";
import LogoImage from "@/assets/images/logo.webp";
import Link from "next/link";

const SideDrawer = () => {
    return (
        <div onClick={toggleSideDrawer}
             className="cursor-pointer side-drawer [&.side-drawer-open]:right-0 right-[-100%] [&.side-drawer-open]:opacity-100 opacity-0 bg-black/40 group w-full h-full fixed top-0 z-50"
             style={{
                 transition: "opacity 0.5s"
             }}
        >
            <div onClick={(e) => e.stopPropagation()}
                 className="cursor-default group-[.side-drawer-open]:right-0 right-[-100%] transition-all duration-500 absolute top-0 w-[280px] xs:w-[300px] h-full bg-white">
                <div className="p-6 w-full flex justify-between items-center bg-brand-primary">
                    <div className="flex items-center gap-4">
                        <Image src={LogoImage} alt="logo" className="w-[30px] brightness-[10000%]" />
                        <span className="text-xl font-bold text-white">
                            CS50xShiraz
                        </span>
                    </div>
                    <button onClick={toggleSideDrawer}
                            className="transition-all active:scale-[0.85]">
                        <svg className="size-[30px] fill-red-400" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 320 512">
                            <path
                                d="M313 137c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-119 119L41 103c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l119 119L7 375c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l119-119L279 409c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-119-119L313 137z" />
                        </svg>
                    </button>
                </div>
                <div className="px-8 pt-4 flex flex-col w-full gap-12 font-bold text-2xl mt-8">
                <Link href="/#our-courses" className="flex items-center gap-4 hover:text-brand-primary/80 transition-colors">
                        <span className="size-3 bg-brand-primary rounded-full"></span>
                        رویدادها و دوره‌ها
                    </Link>
                    <Link href="/#frequently-asked-questions" className="flex items-center gap-4 hover:text-brand-primary/80 transition-colors">
                        <span className="size-3 bg-brand-primary rounded-full"></span>
                            سوالات متداول
                    </Link>
                    <Link href="/team" className="flex items-center gap-4 hover:text-brand-primary/80 transition-colors">
                        <span className="size-3 bg-brand-primary rounded-full"></span>
                            تیم ما
                    </Link>
                    <Link href="/#spnsor" className="flex items-center gap-4 hover:text-brand-primary/80 transition-colors">
                        <span className="size-3 bg-brand-primary rounded-full"></span>
                            اسپانسرها
                    </Link>
                    <Link href="https://blog.cs50xshiraz.ir/" className="flex items-center gap-4 hover:text-brand-primary/80 transition-colors">
                        <span className="size-3 bg-brand-primary rounded-full"></span>
                           بلاگ 
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SideDrawer;