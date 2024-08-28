import { useQuery } from "@tanstack/react-query";
import customFetch from "@/utils/fetch";
import { useCategoryStore } from "@/stores";

export type TeamsResponse = ApiPaginatedResponse<TeamType>;

const useTeams = () => {
    const { selectedCategory } = useCategoryStore();

    return useQuery({
        queryKey: ["teams", selectedCategory],
        queryFn: async () => {
            return customFetch<TeamsResponse>(`api/teams/?limit=100&offset=0&category_id=${selectedCategory}`, { next: { revalidate: 3600 } });
        }
    });
};

export default useTeams;
