import { useMutation } from "@tanstack/react-query";
import axios from "@/utils/axios";
import { useSession } from "next-auth/react";
import createAuthHeader from "@/utils/createAuthHeader";

export type CreateTeamRequest = {
    title: string;
    link: string;
    icon: FileList;
    photo: FileList;
}

const useCreateTeam = () => {
    const session = useSession();

    return useMutation({
        mutationFn: async (variables: CreateTeamRequest) => {
            await axios.post(`teams/`, {
                ...variables,
                icon: variables?.icon[0],
                photo: variables?.photo[0]
            }, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    ...createAuthHeader(session.data)
                }
            });
        }
    });
};

export default useCreateTeam;