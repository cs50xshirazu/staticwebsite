import About from "@/app/components/About";
import Features from "@/app/components/Features";
import Preferences from "@/app/components/Preferences";
import Faq from "@/app/components/Faq";
import Footer from "@/app/components/Footer";
import Courses from "@/app/components/Courses";
import Sponsors from "@/app/components/Sponsors";
import BackgroundPattern from "@/app/components/BackgroundPattern";
import Navbar from "@/app/components/Navbar";
import SideDrawer from "@/app/components/SideDrawer";
import Header from "@/app/components/Header";

export default function Home() {
    return (
        <>
            <BackgroundPattern />
            <Navbar
                links={[
                    {
                        title: "سوالات متداول",
                        link: "#frequently-asked-questions"
                    },
                    {
                        title: "تیم ما",
                        link: "#our-courses"
                    },
                    {
                        title: "چیست؟ Cs50",
                        link: "#what-is-cs50x"
                    }
                ]}
            />
            <SideDrawer />
            <Header />
            <main className="">
                <About />
                <Features />
                <Courses />
                <Sponsors />
                <Preferences />
                <Faq />
                <Footer />
            </main>
        </>
    );
}
