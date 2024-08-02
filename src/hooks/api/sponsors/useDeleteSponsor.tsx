import { useMutation } from "@tanstack/react-query";
import axios from "@/utils/axios";

const useDeleteSponsor = (id: number) => {
    return useMutation({
        mutationFn: async () => {
            await axios.delete(`sponsors/${id}`);
        }
    });
};

export default useDeleteSponsor;