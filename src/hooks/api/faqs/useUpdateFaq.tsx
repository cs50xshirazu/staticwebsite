import { useMutation } from "@tanstack/react-query";
import axios from "@/utils/axios";
import createAuthHeader from "@/utils/createAuthHeader";
import { useSession } from "next-auth/react";

export type UpdateFaqRequest = {
    title: string;
    answer: string;
}

const useUpdateFaq = (id: number) => {
    const session = useSession();

    return useMutation({
        mutationFn: async (variables: UpdateFaqRequest) => {
            await axios.patch(`qas/${id}/`, variables, {
                headers: createAuthHeader(session.data)
            });
        }
    });
};

export default useUpdateFaq;