import ShapeFrame from "@/components/ShapeFrame";
import Image from "next/image";
import ShapeTitle from "@/components/ShapeTitle";
import Link from "next/link";

export type EventProps = EventType

const Event = ({ photo, link, title }: EventProps) => {
    return (
        <div className="max-w-[200px] sm:max-w-[250px] w-full flex flex-col items-stretch justify-between gap-4">
            <div className="aspect-square relative w-full">
                {/*<ShapeFrame className="z-20 absolute p-3" shapesClassName="size-[35px] sm:size-[45px]"/>*/}
                <Image src={photo ?? ""} alt={title} className="object-cover" fill/>
            </div>
            <span className="text-xl font-bold text-center">{title}</span>
            <Link href={link} target="_blank">
                <ShapeTitle>
                    <span className="font-semibold text-lg">ثبت نام در دوره</span>
                </ShapeTitle>
            </Link>
        </div>
    );
};

export default Event;