import { useMutation } from "@tanstack/react-query";
import axios from "@/utils/axios";

export type CreateFaqRequest = {
    title: string;
    answer: string;
}

const useCreateFaq = () => {
    return useMutation({
        mutationFn: async (variables: CreateFaqRequest) => {
            await axios.post(`qas/`, variables);
        }
    });
};

export default useCreateFaq;