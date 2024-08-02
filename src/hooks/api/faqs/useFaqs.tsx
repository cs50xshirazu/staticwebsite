import { useQuery } from "@tanstack/react-query";
import customFetch from "@/utils/fetch";

export type FaqsResponse = FaqType[];

const useFaqs = () => {
    return useQuery({
        queryKey: ["faqs"],
        queryFn: async () => {
            return customFetch<FaqsResponse>("qas/");
        }
    });
};

export default useFaqs;