import { redirect } from "next/navigation";
import { auth } from "@/configs/auth";
import SignInForm from "./components/SignInForm";

const SignInPage = async () => {
    const session = await auth();
    if (session) redirect("/admin");

    return (
        <div>
            <SignInForm />
        </div>
    );

};

export default SignInPage;