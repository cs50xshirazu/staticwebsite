import About from "@/app/components/About";
import Features from "@/app/components/Features";
import Preferences from "@/app/components/Preferences";
import Faq from "@/app/components/Faq";
import Footer from "@/app/components/Footer";
import Courses from "@/app/components/Courses";
import Sponsors from "@/app/components/Sponsors";

export default function Home() {
    return (
        <main className="">
            <About />
            <Features />
            <Courses />
            <Sponsors />
            <Preferences />
            <Faq />
            <Footer />
        </main>
    );
}
