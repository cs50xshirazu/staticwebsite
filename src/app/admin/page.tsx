import { auth } from "@/configs/auth";
import { redirect } from "next/navigation";

const Admin = async () => {
    const session = await auth();
    if (!session) redirect("/admin/auth/signin");

    return (
        <main>

        </main>
    );
};

export default Admin;