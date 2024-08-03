import { useQuery } from "@tanstack/react-query";
import customFetch from "@/utils/fetch";

export type SponsorResponse = SponsorType;

const useSponsor = (id: number) => {
    return useQuery({
        enabled: id > 0,
        queryKey: ["sponsor", id],
        queryFn: async () => {
            return customFetch<SponsorResponse>(`api/sponsors/${id}`);
        }
    });
};

export default useSponsor;