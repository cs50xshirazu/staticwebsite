import ShapeFrame from "@/components/ShapeFrame";
import Image from "next/image";

export type SponsorProps = Sponsor & {}

const Sponsor = ({image, title, link } : SponsorProps) => {
    return (
        <div className="max-w-[200px] sm:max-w-[250px] w-full flex flex-col items-stretch gap-4">
            <div className="aspect-square relative">
                <ShapeFrame className="z-20 absolute p-3" shapesClassName="size-[35px] sm:size-[45px]" />
                <Image src={image} alt={title} className="object-cover" fill />
            </div>
            <a href={link} target="_blank" className="text-xl font-bold text-center">{title}</a>
        </div>
    );
};

export default Sponsor;