import Sidebar from "./Sidebar";
import Navbar from "@/app/admin/layouts/AdminLayout/Navbar";
import { Toaster } from "react-hot-toast";

export type AdminLayoutProps = {
    children?: React.ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
    return (
        <div className="dark flex w-full h-screen bg-background custom-scrollbar">
            <Sidebar />
            <div className="flex-1">
                <Navbar />
                <div className="h-[calc(100%-80px)] px-[40px] pt-8">
                    {children}
                </div>
            </div>
            <Toaster
                position="bottom-right"
                toastOptions={{
                    className: "!bg-content1 !text-foreground !rounded-[12px]",
                }}
                reverseOrder={false}
            />
        </div>
    );
};

export default AdminLayout;