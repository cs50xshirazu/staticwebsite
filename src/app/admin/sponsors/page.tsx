import RenderSponsors from "@/app/admin/sponsors/components/RenderSponsors";
import AddSponsorButton from "@/app/admin/sponsors/components/AddSponsorButton";
import LoadingIndicator from "@/app/admin/components/LoadingIndicator";
import { auth } from "@/configs/auth";
import { redirect } from "next/navigation";

const SponsorsPage = async () => {
    const session = await auth()
    if(!session) redirect("/admin/auth/signin");

    return (
        <>
            <LoadingIndicator queries={["sponsors"]} />
            <div>
                <RenderSponsors />
                <AddSponsorButton />
            </div>
        </>
    )
}

export default SponsorsPage;