import ShapeFrame from "@/components/ShapeFrame";
import Image from "next/image";

export type SponsorProps = Sponsor & {}

const Sponsor = ({image, title } : SponsorProps) => {
    return (
        <div className="max-w-[200px] sm:max-w-[250px] w-full flex flex-col items-stretch gap-4">
            <div className="aspect-square relative">
                <ShapeFrame className="z-20 absolute p-3" shapesClassName="size-[35px] sm:size-[45px]" />
                <Image src={image} alt={title} className="object-cover" fill />
            </div>
            <span className="text-xl font-bold text-center">{title}</span>
        </div>
    );
};

export default Sponsor;