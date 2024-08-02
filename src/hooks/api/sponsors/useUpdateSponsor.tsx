import { useMutation } from "@tanstack/react-query";
import axios from "@/utils/axios";

export type UpdateSponsorRequest = {
    title: string;
    icon: FileList;
    photo: FileList;
    link: string;
}

const useUpdateSponsor = (id: number) => {
    return useMutation({
        mutationFn: async (variables: UpdateSponsorRequest) => {
            await axios.patch(`sponsors/${id}`, {
                ...variables,
                icon: variables?.icon[0],
                photo: variables?.photo[0]
            }, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
        }
    });
};

export default useUpdateSponsor;