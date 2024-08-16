import { useQuery } from "@tanstack/react-query";
import customFetch from "@/utils/fetch";

export type EventResponse = EventType;

const useEvent = (id: number) => {
    return useQuery({
        enabled: id > 0,
        queryKey: ["event", id],
        queryFn: async () => {
            return customFetch<EventResponse>(`api/events/${id}`);
        }
    });
};

export default useEvent;