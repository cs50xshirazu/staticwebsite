import "@/app/globals.css";
import AdminLayout from "@/app/admin/layouts/AdminLayout";
import type { Metadata } from "next";
import TanstackQueryProvider from "@/providers/TanstackQueryProvider";
import NextUIProvider from "@/providers/NextUiProvider";
import { auth } from "@/configs/auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
    title: "پنل مدیریت",
    description: "CS50xShiraz Admin Panel",
    manifest: "/site.webmanifest"
};

type LayoutProps = {
    children: React.ReactNode;
}

const Layout = async ({ children }: LayoutProps) => {
    return (
        <NextUIProvider>
            <AdminLayout>
                {children}
            </AdminLayout>
        </NextUIProvider>
    );
};

export default Layout;