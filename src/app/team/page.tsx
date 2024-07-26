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
                        title: "رویدادها و دوره‌ها",
                        link: "/#our-courses"
                    },
                    {
                        title: "سوالات متداول",
                        link: "/#frequently-asked-questions"
                    },
                    {
                        title: "تیم ما",
                        link: "/team"
                    },
                    {
                        title: "اسپانسرها",
                        link: "/#spnsor"
                    },
                    {
                        title: "بلاگ",
                        link: "https://blog.cs50xshiraz.ir"
                    },
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
