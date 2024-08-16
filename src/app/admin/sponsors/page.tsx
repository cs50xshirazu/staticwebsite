import RenderSponsors from "@/app/admin/sponsors/components/RenderSponsors";
import AddSponsorButton from "@/app/admin/sponsors/components/AddSponsorButton";
import LoadingIndicator from "@/app/admin/components/LoadingIndicator";
import AuthValidationProvider from "@/providers/AuthValidationProvider";
import SectionTitle from "@/app/admin/components/SectionTitle";

const SponsorsPage = async () => {
    return (
        <AuthValidationProvider>
            <LoadingIndicator queries={["sponsors"]} />
            <SectionTitle title="اسپانسر ها" />
            <div>
                <RenderSponsors />
                <AddSponsorButton />
            </div>
        </AuthValidationProvider>
    )
}

export default SponsorsPage;