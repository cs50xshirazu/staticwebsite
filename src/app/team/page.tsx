import Footer from "@/app/components/Footer";
import BackgroundPattern from "@/app/components/BackgroundPattern";
import Navbar from "@/app/components/Navbar";
import SideDrawer from "@/app/components/SideDrawer";
import Header from "@/app/components/Header";
import RenderTeams from "@/app/team/components/RenderTeams";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import customFetch from "@/utils/fetch";
import { TeamsResponse } from "@/hooks/api/teams/useTeams";

export default async function Team() {
    const queryClient = new QueryClient();
    await queryClient.prefetchInfiniteQuery({
        queryKey: ["teams"],
        queryFn: async () => {
            return await customFetch<TeamsResponse>("api/teams/?limit=100&offset=0");
        },
        initialPageParam: {}
    });

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
                        link: "/#frequently-asked-faqs"
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
                    }
                ]}
            />
            <SideDrawer />
            <Header />
            <main className="mt-[60px]">
                <HydrationBoundary state={dehydrate(queryClient)}>
                    <RenderTeams />
                </HydrationBoundary>
                <Footer />
            </main>
        </>
    );
}
