import LoadingIndicator from "@/app/admin/components/LoadingIndicator";
import FaqsTable from "@/app/admin/faqs/components/FaqsTable";
import CreateFaqButton from "@/app/admin/faqs/components/CreateFaqButton";
import AuthValidationProvider from "@/providers/AuthValidationProvider";
import SectionTitle from "@/app/admin/components/SectionTitle";

const FaqsPage = async () => {
    return (
        <AuthValidationProvider>
            <LoadingIndicator queries={["faqs"]} />
            <SectionTitle title="سوالات متداول" />
            <div>
                <FaqsTable />
                <CreateFaqButton />
            </div>
        </AuthValidationProvider>
    );
};

export default FaqsPage;