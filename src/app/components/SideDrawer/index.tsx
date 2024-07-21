"use client";

import { toggleSideDrawer } from "@/utils";

const SideDrawer = () => {


    return (
        <div onClick={toggleSideDrawer} className="cursor-pointer side-drawer [&.side-drawer-open]:right-0 right-[-100%] [&.side-drawer-open]:opacity-100 opacity-0 bg-black/40 group w-full h-full fixed top-0 z-50" style={{
            transition : "opacity 0.5s"
        }}>
            <div onClick={(e) => e.stopPropagation()} className="cursor-default group-[.side-drawer-open]:right-0 right-[-100%] transition-all duration-500 absolute top-0 w-[300px] h-full bg-white">

            </div>
        </div>
    )
}

export default SideDrawer;