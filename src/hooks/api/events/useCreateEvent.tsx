import { useMutation } from "@tanstack/react-query";
import axios from "@/utils/axios";
import { useSession } from "next-auth/react";
import createAuthHeader from "@/utils/createAuthHeader";

export type CreateEventRequest = {
    title: string;
    link: string;
    photo: FileList;
}

const useCreateEvent = () => {
    const session = useSession();

    return useMutation({
        mutationFn: async (variables: CreateEventRequest) => {
            await axios.post(`events/`, {
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

export default useCreateEvent;