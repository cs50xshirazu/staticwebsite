import LoadingIndicator from "@/app/admin/components/LoadingIndicator";
import FaqsTable from "@/app/admin/faqs/components/FaqsTable";
import CreateFaqButton from "@/app/admin/faqs/components/CreateFaqButton";
import { auth } from "@/configs/auth";
import { redirect } from "next/navigation";

const FaqsPage = async () => {
    const session = await auth()
    if(!session) redirect("/admin/auth/signin");

    return (
        <>
            <LoadingIndicator queries={["faqs"]} />
            <div>
                <FaqsTable />
                <CreateFaqButton />
            </div>
        </>
    );
};

export default FaqsPage;