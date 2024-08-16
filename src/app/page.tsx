import About from "@/app/components/About";
import Features from "@/app/components/Features";
import Preferences from "@/app/components/Preferences";
import Faq from "@/app/components/Faq";
import Footer from "@/app/components/Footer";
import Sponsors from "@/app/components/Sponsors";
import BackgroundPattern from "@/app/components/BackgroundPattern";
import Navbar from "@/app/components/Navbar";
import SideDrawer from "@/app/components/SideDrawer";
import Header from "@/app/components/Header";
import AnalyticsProvider from "@/providers/AnalyticsProvider";
import Events from "@/app/components/Events";

export default async function Home() {
    return (
        <AnalyticsProvider>
            <BackgroundPattern />
            <Navbar
                links={[
                    {
                        title: "رویدادها و دوره‌ها",
                        link: "#our-courses"
                    },
                    {
                        title: "سوالات متداول",
                        link: "#frequently-asked-faqs"
                    },
                    {
                        title: "تیم ما",
                        link: "/team"
                    },
                    {
                        title: "اسپانسرها",
                        link: "#spnsor"
                    },
                    {
                        title: "بلاگ",
                        link: "https://blog.cs50xshiraz.ir"
                    }

                ]}
            />
            <SideDrawer />
            <Header />
            <main className="">
                <About />
                <Features />
                <Events />
                <Sponsors />
                <Preferences />
                <Faq />
                <Footer />
            </main>
        </AnalyticsProvider>
    );
}
