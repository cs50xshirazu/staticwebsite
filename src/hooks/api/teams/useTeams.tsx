import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import customFetch from "@/utils/fetch";

export type TeamsResponse = ApiPaginatedResponse<TeamType>;

const useTeams = () => {
    return useInfiniteQuery({
        queryKey: ["teams"],
        queryFn: async ({ pageParam }) => {
            return customFetch<TeamsResponse>(`api/teams/?limit=${pageParam.limit}&offset=${pageParam.offset}`);
        },
        initialPageParam: {
            offset: 0,
            limit: 10
        },
        getNextPageParam: (lastPage, pages) => {
            const page = pages.length + 1;

            const limit = 10;

            const nextPageParams: any = {
                offset: page * limit - limit,
                limit
            };

            return lastPage?.next ? nextPageParams : undefined;
        }
    });
};

export default useTeams;