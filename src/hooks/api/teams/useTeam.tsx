import { useQuery } from "@tanstack/react-query";
import customFetch from "@/utils/fetch";

export type TeamResponse = TeamType;

const useTeam = (id: number) => {
    return useQuery({
        enabled: id > 0,
        queryKey: ["team", id],
        queryFn: async () => {
            return customFetch<TeamResponse>(`api/teams/${id}`);
        }
    });
};

export default useTeam;