import { useMutation } from "@tanstack/react-query";
import axios from "@/utils/axios";
import { useSession } from "next-auth/react";
import createAuthHeader from "@/utils/createAuthHeader";

const useDeleteFaq = (id: number) => {
    const session = useSession();

    return useMutation({
        mutationFn: async () => {
            await axios.delete(`qas/${id}`, { headers: createAuthHeader(session.data) });
        }
    });
};

export default useDeleteFaq;