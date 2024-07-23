import TitleBar from "@/components/TitleBar";
import Image from "next/image";
import BookImage from "@/assets/images/cs50book.webp";
import Employee from "./Employee";

const Employees = () => {

    const employees: Employee[] = [
        {
            job : "برنامه نویس",
            name : "نام و نام خوانوادگی",
            image: "/images/employees/user.png",
        },
        {
            job : "برنامه نویس",
            name : "نام و نام خوانوادگی",
            image: "/images/employees/user.png",
        },
        {
            job : "برنامه نویس",
            name : "نام و نام خوانوادگی",
            image: "/images/employees/user.png",
        },
        {
            job : "برنامه نویس",
            name : "نام و نام خوانوادگی",
            image: "/images/employees/user.png",
        },
        {
            job : "برنامه نویس",
            name : "نام و نام خوانوادگی",
            image: "/images/employees/user.png",
        },
        {
            job : "برنامه نویس",
            name : "نام و نام خوانوادگی",
            image: "/images/employees/user.png",
        },
        {
            job : "برنامه نویس",
            name : "نام و نام خوانوادگی",
            image: "/images/employees/user.png",
        },
        {
            job : "برنامه نویس",
            name : "نام و نام خوانوادگی",
            image: "/images/employees/user.png",
        }
    ];

    const renderEmployees = () => {
        return employees.map((employee) => <Employee {...employee} key={employee.name} />);
    };

    return (
        <section className="mt-[40px]" id="our-courses">
            <TitleBar className="container gap-6">
                <span className="font-black whitespace-nowrap text-xl sm:text-2xl">
                    همکاران ما
                </span>
            </TitleBar>

            <div className="container mt-[40px] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 pt-[80px] lg:pt-[120px] pb-[60px] justify-items-stretch gap-x-6 sm:gap-x-10 gap-y-[95px] sm:gap-y-[110px] lg:gap-y-[170px]">
                {renderEmployees()}
            </div>

        </section>
    );
};

export default Employees;