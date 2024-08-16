import { useQuery } from "@tanstack/react-query";
import customFetch from "@/utils/fetch";

export type EventsResponse = EventType[];

const useEvents = () => {
    return useQuery({
        queryKey: ["events"],
        queryFn: async () => {
            return customFetch<EventsResponse>("api/events/");
        }
    });
};

export default useEvents;