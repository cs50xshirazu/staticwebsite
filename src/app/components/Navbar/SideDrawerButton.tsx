"use client";

import { toggleSideDrawer } from "@/utils";

const SideDrawerButton = () => {

    return (
        <button className="sm:hidden" onClick={toggleSideDrawer}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-[30px] active:scale-[0.85] transition-all"
                 viewBox="0 0 448 512">
                <path
                    d="M0 88C0 74.7 10.7 64 24 64H424c13.3 0 24 10.7 24 24s-10.7 24-24 24H24C10.7 112 0 101.3 0 88zM0 248c0-13.3 10.7-24 24-24H424c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24zM448 408c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24H424c13.3 0 24 10.7 24 24z" />
            </svg>
        </button>
    );
};

export default SideDrawerButton;