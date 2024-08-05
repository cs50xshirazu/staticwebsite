import { ReactNode } from "react";
import axios from "@/utils/axios";
import { auth } from "@/configs/auth";
import createAuthHeader from "@/utils/createAuthHeader";
import { headers } from "next/headers";

export type AnalyticsProviderProps = {
    children: ReactNode;
}

const AnalyticsProvider = async ({ children }: AnalyticsProviderProps) => {
    const headersList = headers();
    const session = await auth();

    axios.post("/analytics_post/log/", {
        url: headersList.get("x-forwarded-host")
    }, {
        headers: createAuthHeader(session)
    });

    return (
        <>
            {children}
        </>
    );
};

export default AnalyticsProvider;