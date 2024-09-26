import RenderTeams from "@/app/admin/teams/components/RenderTeams";
import AddTeamButton from "@/app/admin/teams/components/AddTeamButton";
import LoadingIndicator from "@/app/admin/components/LoadingIndicator";
import AuthValidationProvider from "@/providers/AuthValidationProvider";
import SectionTitle from "@/app/admin/components/SectionTitle";
import Categories from "./components/Categories";
import { redirect } from "next/navigation";

const TeamsPage = async () => {
    redirect("/admin");

    return (
        <AuthValidationProvider>
            <LoadingIndicator queries={["teams"]} />
            <SectionTitle title="اعضای تیم" />
            <Categories />
            <div className="w-full flex flex-wrap gap-10">
                <RenderTeams />
                <AddTeamButton />
            </div>
        </AuthValidationProvider>
    )
}

export default TeamsPage;