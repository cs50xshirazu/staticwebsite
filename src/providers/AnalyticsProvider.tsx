import { ReactNode } from "react";
import axios from "@/utils/axios";
import { headers } from "next/headers";

export type AnalyticsProviderProps = {
    children: ReactNode;
}

const AnalyticsProvider = async ({ children }: AnalyticsProviderProps) => {
    const headersList = headers();

    axios.post("/analytics_post/log/", {
        url: headersList.get("x-forwarded-host")
    });

    return (
        <>
            {children}
        </>
    );
};

export default AnalyticsProvider;