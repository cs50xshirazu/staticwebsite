import { useMutation } from "@tanstack/react-query";
import axios from "@/utils/axios";
import { useSession } from "next-auth/react";
import createAuthHeader from "@/utils/createAuthHeader";

export type CreateSponsorRequest = {
    title: string;
    link: string;
    icon: FileList;
    photo: FileList;
}

const useCreateSponsor = () => {
    const session = useSession();

    return useMutation({
        mutationFn: async (variables: CreateSponsorRequest) => {
            await axios.post(`sponsors/`, {
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

export default useCreateSponsor;