import { useMutation } from "@tanstack/react-query";
import axios from "@/utils/axios";
import createAuthHeader from "@/utils/createAuthHeader";
import { useSession } from "next-auth/react";

const useDeleteEvent = (id: number) => {
    const session = useSession();

    return useMutation({
        mutationFn: async () => {
            await axios.delete(`events/${id}`, { headers: createAuthHeader(session.data) });
        }
    });
};

export default useDeleteEvent;