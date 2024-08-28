import { useMutation } from "@tanstack/react-query";
import axios from "@/utils/axios";
import createAuthHeader from "@/utils/createAuthHeader";
import { useSession } from "next-auth/react";

export type UpdateTeamRequest = {
    title: string;
    icon: FileList;
    photo: FileList;
    link: string;
}

const useUpdateTeam = (id: number) => {
    const session = useSession();

    return useMutation({
        mutationFn: async (variables: UpdateTeamRequest) => {
            await axios.patch(`teams/${id}/`, {
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

export default useUpdateTeam;