import { auth } from "@/configs/auth";
import axios from "@/utils/axios";
import { redirect } from "next/navigation";

export type AuthValidationProviderProps = {
    children?: React.ReactNode;
}

const AuthValidationProvider = async ({ children }: AuthValidationProviderProps) => {
    const session = await auth();

    try {
        if (session) {
            await axios.post("verify-token/", {
                token: session?.user?.accessToken
            });
        } else {
            redirect("/admin/auth/signin");
        }
    } catch (e) {
        redirect("/admin/auth/signin");
    }

    return (
        <>
            {children}
        </>
    );
};

export default AuthValidationProvider;