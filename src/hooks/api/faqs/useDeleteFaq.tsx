import { useMutation } from "@tanstack/react-query";
import axios from "@/utils/axios";

const useDeleteFaq = (id: number) => {
    return useMutation({
        mutationFn: async () => {
            await axios.delete(`qas/${id}`);
        }
    });
};

export default useDeleteFaq;