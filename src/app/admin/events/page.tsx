import RenderEvents from "@/app/admin/events/components/RenderEvents";
import AddEventButton from "@/app/admin/events/components/AddEventButton";
import LoadingIndicator from "@/app/admin/components/LoadingIndicator";
import AuthValidationProvider from "@/providers/AuthValidationProvider";
import SectionTitle from "@/app/admin/components/SectionTitle";

const EventsPage = async () => {
    return (
        <AuthValidationProvider>
            <LoadingIndicator queries={["events"]} />
            <SectionTitle title="رویداد ها و دوره ها" />
            <div>
                <RenderEvents />
                <AddEventButton />
            </div>
        </AuthValidationProvider>
    )
}

export default EventsPage;