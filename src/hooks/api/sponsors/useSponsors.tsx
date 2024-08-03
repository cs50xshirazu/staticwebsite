import { useQuery } from "@tanstack/react-query";
import customFetch from "@/utils/fetch";

export type SponsorsResponse = SponsorType[];

const useSponsors = () => {
    return useQuery({
        queryKey: ["sponsors"],
        queryFn: async () => {
            return customFetch<SponsorsResponse>("api/sponsors");
        }
    });
};

export default useSponsors;