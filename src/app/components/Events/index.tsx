"use client";

import TitleBar from "@/components/TitleBar";
import Image from "next/image";
import BookImage from "@/assets/images/home2img.png";
import useEvents from "@/hooks/api/events/useEvents";
import { useMemo } from "react";
import Event from "@/app/components/Events/Event";

const Events = () => {
    const { data: events } = useEvents();

    const renderEvents = useMemo(() => {
        return events?.map((event) => <Event {...event} key={event.title} />);
    }, [events]);

    return (
        <section className="mt-[40px]" id="our-events">
            <TitleBar className="container gap-6">
                <span className="font-black whitespace-nowrap  text-xl sm:text-2xl">
                      رویدادها و دوره ها 
                </span>
            </TitleBar>

            <div className="container mt-[40px] flex justify-center items-center">
                {renderEvents}
            </div>

            <div className="w-full h-[400px] sm:h-[500px] relative mt-[40px]">
                <Image src={BookImage} alt="cs50book" className="object-cover" fill />
            </div>

        </section>
    );
};

export default Events;