"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import RippleEffect from "@/app/admin/components/RippleEffect";

export type SidebarItemProps = {
    disabled?: boolean;
    text: string;
    icon: string,
    link: string;
}

const SidebarItem = ({ link, text, icon, disabled }: SidebarItemProps) => {
    const pathname = usePathname();

    const isActive = pathname === link;

    const classes = classNames({
        "w-full flex items-center gap-4 py-4 px-5 rounded-lg text-foreground hover:bg-default-100 transition-colors": 1,
        "bg-primary-300 hover:bg-primary-400": isActive,
        "grayscale": disabled
    });

    return (
        <RippleEffect>
            <Link href={disabled ? "" : link} className={classes + " "}>
                <i className={`pi ${icon}`}></i>
                <span>{text}</span>
            </Link>
        </RippleEffect>
    );
};

export default SidebarItem;