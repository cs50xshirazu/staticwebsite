import TitleBar from "@/components/TitleBar";
import Course from "@/app/components/Courses/Course";
import Image from "next/image";
import BookImage from "@/assets/images/home2img.png";

const Courses = () => {

    const courses: CourseType[] = [
        {
            image: "/images/courses/cs50x.jpg",
            link: "https://evnd.co/lvg3L",
            title: "دوره مبانی علوم کامپیوتر هاروارد (CS50x)"
        }
    ];

    const renderCourses = () => {
        return courses.map((course) => <Course {...course} key={course.title} />);
    };

    return (
        <section className="mt-[40px]" id="our-courses">
            <TitleBar className="container gap-6">
                <span className="font-black whitespace-nowrap  text-xl sm:text-2xl">
                      رویدادها و دوره ها 
                </span>
            </TitleBar>

            <div className="container mt-[40px] flex justify-center items-center">
                {renderCourses()}
            </div>

            <div className="w-full h-[400px] sm:h-[500px] relative mt-[40px]">
                <Image src={BookImage} alt="cs50book" className="object-cover" fill />
            </div>

        </section>
    );
};

export default Courses;