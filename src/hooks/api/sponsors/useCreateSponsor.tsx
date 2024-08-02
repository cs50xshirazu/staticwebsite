import { useMutation } from "@tanstack/react-query";
import axios from "@/utils/axios";

export type CreateSponsorRequest = {
    title: string;
    link: string;
    icon: FileList;
    photo: FileList;
}

const useCreateSponsor = () => {
    return useMutation({
        mutationFn: async (variables: CreateSponsorRequest) => {
            await axios.post(`sponsors/`, {
                ...variables,
                icon: variables?.icon[0],
                photo: variables?.photo[0]
            }, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
        }
    });
};

export default useCreateSponsor;