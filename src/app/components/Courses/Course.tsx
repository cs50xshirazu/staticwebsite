import ShapeFrame from "@/components/ShapeFrame";
import Image from "next/image";
import ShapeTitle from "@/components/ShapeTitle";

export type CourseProps = CourseType

const Course = ({ image, link, title }: CourseProps) => {
    return (
        <div className="max-w-[200px] sm:max-w-[250px] flex flex-col items-stretch gap-4">
            <div className="aspect-square relative">
                <ShapeFrame className="z-20 absolute p-3" shapesClassName="size-[35px] sm:size-[45px]"/>
                <Image src={image} alt={title} className="object-cover" fill/>
            </div>
            <span className="text-xl font-bold text-center">{title}</span>
            <a href={link} target="_blank">
                <ShapeTitle>
                    <span className="font-semibold text-lg">ثبت نام در دوره</span>
                </ShapeTitle>
            </a>
        </div>
    );
};

export default Course;