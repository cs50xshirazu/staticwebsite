import Paragraph from "@/components/Paragraph";
import React, { useEffect, useRef, useState } from "react";

export type FaqBoxProps = {
    title: string;
    children?: React.ReactNode;
    id: number;
    activeId: number;
    setActiveId: (id: number) => void;
}

const FaqBox = ({ title, children, activeId, setActiveId, id }: FaqBoxProps) => {
    const descriptionRef = useRef<HTMLDivElement>(null);
    const [descriptionHeight, setDescriptionHeight] = useState(0);

    useEffect(() => {
        if (descriptionRef.current) {
            setDescriptionHeight(descriptionRef.current.scrollHeight);
        }
    }, [descriptionRef.current]);

    const isActive = activeId === id;

    const style: React.CSSProperties = {
        padding: `${isActive ? "16px" : "0px"} 20px`,
        opacity: isActive ? 1 : 0,
        height: isActive ? (id === 0 ? descriptionHeight : descriptionHeight + 32) : 0
    };

    return (
        <div>
            <button
                className="w-full py-3 px-5 ring ring-offset-[-4px] active:ring-offset-2 ring-primary transition-all hover:bg-primary/85 bg-primary flex items-center justify-between gap-6"
                onClick={() => setActiveId(id)}>
                <div className="flex items-center gap-4">
                    <svg className="w-[18px] lg:w-[25px]" height="27" viewBox="0 0 25 27" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5005 3L3 13.5001L12.5005 24L22 13.5001L12.5005 3Z" stroke="#FFDEDE" strokeWidth="4"
                              strokeMiterlimit="10" />
                    </svg>

                    <span className="text-white text-xl text-right leading-[180%]">{title}</span>
                </div>

                <svg
                    className={`${isActive ? "rotate-0" : "rotate-180"} shrink-0 transition-all duration-300 w-[14px] xs:w-[20px]`}
                    height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 8.6L1.53945 10L9.2367 2.6L16.9339 10L18.4734 8.6L9.2367 -0.4L0 8.6Z" fill="#F2DEBA" />
                </svg>
            </button>
            <div ref={descriptionRef} className="w-full px-5 transition-all duration-500 overflow-hidden ease-in-out"
                 style={style}>
                <Paragraph className="!text-xl !leading-[30px] xs:!leading-[40px]">
                    {children}
                </Paragraph>
            </div>
        </div>
    );
};

export default FaqBox;