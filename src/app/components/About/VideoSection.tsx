"use client";

import { useRef, useState } from "react";
import SymbolImage from "@/assets/images/symbol.svg";
import Image from "next/image";
import VideoPosterImage from "@/assets/images/video-poster.jpg";

const VideoSection = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [removePoster, setRemovePoster] = useState(false);
    const [showPoster, setShowPoster] = useState(true);

    const playVideo = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    const onVideoPlay = () => {
        setShowPoster(false);
        setTimeout(() => {
            setRemovePoster(true);
        }, 1000);
    };

    const onVideoEnd = () => {
        setRemovePoster(false);
        setTimeout(() => {
            setShowPoster(true);
        }, 50);
    };

    return (
        <div className="flex-1 relative bg-black">
            {!removePoster && (
                <div
                    className="w-full h-full absolute inset-0 transition-all duration-1000"
                    style={{
                        opacity: showPoster ? 1 : 0
                    }}
                >
                    <div className="p-4 xs:p-6 relative w-full h-full flex flex-col justify-between">
                        <Image src={VideoPosterImage} alt="video-poster" className="object-cover" fill />
                        <div className="z-20 w-full flex justify-between">
                            <Image src={SymbolImage} alt="symbol" className="max-xs:size-[30px] max-xl:size-[40px] rotate-90" />
                            <Image src={SymbolImage} alt="symbol" className="max-xs:size-[30px] max-xl:size-[40px] " />
                        </div>
                        <div className="z-20 flex flex-col items-center justify-center gap-3 xs:gap-4 xl:gap-8">
                            <span className="text-base xs:text-lg xl:text-2xl text-white font-bold">
                                پروفسور دیوید مالن از cs50xshiraz می گوید:
                            </span>
                            <button onClick={playVideo}
                                    className="active:scale-[0.8] ring-4 ring-offset-[-4px] hover:opacity-100 opacity-80 active:ring-offset-0 ring-brand-cream rounded-full transition-all duration-150">
                                <svg className="size-[45px] xs:size-[55px] xl:size-[70px]" viewBox="0 0 69 69" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M34.5 4.3125C28.5295 4.3125 22.693 6.08297 17.7287 9.40001C12.7644 12.7171 8.89522 17.4317 6.6104 22.9477C4.32558 28.4638 3.72777 34.5335 4.89256 40.3893C6.05735 46.2451 8.93243 51.624 13.1542 55.8458C17.376 60.0676 22.7549 62.9427 28.6107 64.1074C34.4665 65.2722 40.5362 64.6744 46.0523 62.3896C51.5683 60.1048 56.283 56.2356 59.6 51.2713C62.917 46.307 64.6875 40.4705 64.6875 34.5C64.6875 26.4938 61.507 18.8155 55.8458 13.1542C50.1845 7.49296 42.5062 4.3125 34.5 4.3125ZM50.5576 36.4298L24.6826 49.3673C24.3538 49.5317 23.9884 49.6092 23.6212 49.5925C23.254 49.5759 22.8971 49.4657 22.5845 49.2723C22.2719 49.079 22.0139 48.8089 21.835 48.4877C21.6561 48.1666 21.5623 47.8051 21.5625 47.4375V21.5625C21.5627 21.1951 21.6568 20.8338 21.8358 20.513C22.0148 20.1922 22.2729 19.9224 22.5854 19.7293C22.898 19.5362 23.2547 19.4261 23.6217 19.4096C23.9888 19.3931 24.3539 19.4706 24.6826 19.6348L50.5576 32.5723C50.9153 32.7516 51.216 33.0268 51.4262 33.3673C51.6364 33.7077 51.7477 34.0999 51.7477 34.5C51.7477 34.9001 51.6364 35.2923 51.4262 35.6327C51.216 35.9732 50.9153 36.2484 50.5576 36.4277V36.4298Z"
                                        fill="#F2DEBA" />
                                </svg>
                            </button>
                        </div>
                        <div className="z-20 w-full flex justify-between">
                            <Image src={SymbolImage} alt="symbol" className="max-xs:size-[30px] max-xl:size-[40px] rotate-180" />
                            <Image src={SymbolImage} alt="symbol" className="max-xs:size-[30px] max-xl:size-[40px] -rotate-90" />
                        </div>
                    </div>
                </div>
            )}
            <video ref={videoRef} controls={removePoster} onPlay={onVideoPlay} onEnded={onVideoEnd}
                   className="w-full h-full"
                   src="https://cdn.cs50xshirazu.ir/intro.mp4"></video>
        </div>
    );
};

export default VideoSection;