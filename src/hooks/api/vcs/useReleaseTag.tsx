import { useQuery } from "@tanstack/react-query";
import fetch from "@/utils/fetch";

export type ReleaseTagResponse = {
    latest_api_version: string
    latest_website_version: string
}

const useReleaseTag = () => {
    return useQuery({
        queryKey: ["release-tag"],
        queryFn: async () => {
            return await fetch<ReleaseTagResponse>("api/latest_release_tag/");
        }
    });
};

export default useReleaseTag;