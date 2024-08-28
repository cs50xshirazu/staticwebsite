import { useMutation } from "@tanstack/react-query";
import axios from "@/utils/axios";
import createAuthHeader from "@/utils/createAuthHeader";
import { useSession } from "next-auth/react";

export type UpdateTeamOrderRequest = {
    draggedItemId: number;
    movedItemId: number;
    draggedItemOrdering: number;
    movedItemOrdering: number;
}

const useUpdateTeamOrder = () => {
    const session = useSession();

    return useMutation({
        mutationFn: async (variables: UpdateTeamOrderRequest) => {
            const config = {
                headers: createAuthHeader(session.data)
            };

            await axios.patch(`teams/${variables.draggedItemId}/`, {
                ordering: variables.draggedItemOrdering
            }, config);

            await axios.patch(`teams/${variables.movedItemId}/`, {
                ordering: variables.movedItemOrdering
            }, config);
        }
    });
};

export default useUpdateTeamOrder;