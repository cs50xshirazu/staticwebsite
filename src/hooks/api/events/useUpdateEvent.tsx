import { useMutation } from "@tanstack/react-query";
import axios from "@/utils/axios";
import createAuthHeader from "@/utils/createAuthHeader";
import { useSession } from "next-auth/react";

export type UpdateEventRequest = {
    title: string;
    photo: FileList;
    link: string;
}

const useUpdateEvent = (id: number) => {
    const session = useSession();

    return useMutation({
        mutationFn: async (variables: UpdateEventRequest) => {
            await axios.patch(`events/${id}/`, {
                ...variables,
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

export default useUpdateEvent;