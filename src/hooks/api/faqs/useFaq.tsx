import { useQuery } from "@tanstack/react-query";
import customFetch from "@/utils/fetch";

export type FaqResponse = FaqType;

const useFaq = (id: number) => {
    return useQuery({
        enabled: id > 0,
        queryKey: ["faq", id],
        queryFn: async () => {
            return customFetch<FaqResponse>(`api/qas/${id}`);
        }
    });
};

export default useFaq;