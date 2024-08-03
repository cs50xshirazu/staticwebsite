import { useMutation } from "@tanstack/react-query";
import axios from "@/utils/axios";
import createAuthHeader from "@/utils/createAuthHeader";
import { useSession } from "next-auth/react";

export type CreateFaqRequest = {
    title: string;
    answer: string;
}

const useCreateFaq = () => {
    const session = useSession();

    return useMutation({
        mutationFn: async (variables: CreateFaqRequest) => {
            console.log({ headers: createAuthHeader(session.data) });
            await axios.post(`qas/`, variables, { headers: createAuthHeader(session.data) });
        }
    });
};

export default useCreateFaq;