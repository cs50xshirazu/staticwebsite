"use client";

import EventCard from "@/app/admin/events/components/EventCard";
import EventsPlaceholder from "@/app/admin/events/components/EventsPlaceholder";
import useEvents from "@/hooks/api/events/useEvents";
import { useMemo, useState } from "react";
import EditEventModal from "@/app/admin/events/components/EditEventModal";
import { useDisclosure } from "@nextui-org/react";
import DeleteEventModal from "@/app/admin/events/components/DeleteEventModal";

const RenderEvents = () => {
    const [selectedEventId, setSelectedEventId] = useState(-1);

    const {
        isOpen: isEditModalOpen,
        onOpen: onEditModalOpen,
        onClose: onEditModalClose,
        onOpenChange: onEditModalOpenChange
    } = useDisclosure();

    const {
        isOpen: isDeleteModalOpen,
        onOpen: onDeleteModalOpen,
        onClose: onDeleteModalClose,
        onOpenChange: onDeleteModalOpenChange
    } = useDisclosure();

    const { data: events, isLoading } = useEvents();

    const renderEvents = useMemo(() => {
        return events?.map((item, index) => {
            return (
                <EventCard
                    {...item}
                    onEditModalOpen={onEditModalOpen}
                    onDeleteModalOpen={onDeleteModalOpen}
                    setSelectedEventId={setSelectedEventId}
                    key={index}
                />
            );
        });
    }, [events]);

    return (
        <div className="w-full flex flex-wrap gap-10">
            {isLoading ? <EventsPlaceholder /> : renderEvents}
            <EditEventModal
                isOpen={isEditModalOpen}
                onClose={onEditModalClose}
                onOpen={onEditModalOpen}
                onOpenChange={onEditModalOpenChange}
                id={selectedEventId}
            />
            <DeleteEventModal
                isOpen={isDeleteModalOpen}
                onClose={onDeleteModalClose}
                onOpen={onDeleteModalOpen}
                onOpenChange={onDeleteModalOpenChange}
                id={selectedEventId}
            />
        </div>
    );
};

export default RenderEvents;