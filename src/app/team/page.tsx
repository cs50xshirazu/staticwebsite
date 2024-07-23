import Footer from "@/app/components/Footer";
import BackgroundPattern from "@/app/components/BackgroundPattern";
import Navbar from "@/app/components/Navbar";
import SideDrawer from "@/app/components/SideDrawer";
import Header from "@/app/components/Header";
import TeamDivider from "@/app/team/components/TeamDivider";

export default function Home() {

    const employees: Employee[] = [
        {
            job: "برنامه نویس",
            name: "نام و نام خوانوادگی",
            image: "/images/employees/user.png"
        },
        {
            job: "برنامه نویس",
            name: "نام و نام خوانوادگی",
            image: "/images/employees/user.png"
        },
        {
            job: "برنامه نویس",
            name: "نام و نام خوانوادگی",
            image: "/images/employees/user.png"
        },
        {
            job: "برنامه نویس",
            name: "نام و نام خوانوادگی",
            image: "/images/employees/user.png"
        },
        {
            job: "برنامه نویس",
            name: "نام و نام خوانوادگی",
            image: "/images/employees/user.png"
        },
        {
            job: "برنامه نویس",
            name: "نام و نام خوانوادگی",
            image: "/images/employees/user.png"
        },
        {
            job: "برنامه نویس",
            name: "نام و نام خوانوادگی",
            image: "/images/employees/user.png"
        },
        {
            job: "برنامه نویس",
            name: "نام و نام خوانوادگی",
            image: "/images/employees/user.png"
        }
    ];

    return (
        <>
            <BackgroundPattern />
            <Navbar
                links={[
                    {
                        title: "سوالات متداول",
                        link: "/#frequently-asked-questions"
                    },
                    {
                        title: "تیم ما",
                        link: "/team"
                    },
                    {
                        title: "چیست؟ Cs50",
                        link: "/#what-is-cs50x"
                    }
                ]}
            />
            <SideDrawer />
            <Header />
            <main className="mt-[60px]">
                <TeamDivider title="تیم توسعه" employees={employees} />
                <TeamDivider title="تیم گرافیک" employees={employees} />
                <TeamDivider title="تیم ادیت" employees={employees} />
                <Footer />
            </main>
        </>
    );
}
