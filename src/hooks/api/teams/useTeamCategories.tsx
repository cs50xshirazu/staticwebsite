import { useQuery } from "@tanstack/react-query";
import customFetch from "@/utils/fetch";

export type TeamCategoriesResponse = ApiPaginatedResponse<TeamCategoryType>;

const useTeamCategories = () => {
    return useQuery({
        queryKey: ["team-categories"],
        queryFn: async () => {
            return customFetch<TeamCategoriesResponse>("api/team-category/?limit=100&offset=0");
        }
    });
};

export default useTeamCategories;
