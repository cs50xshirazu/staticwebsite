"use client";

import TeamCard from "@/app/admin/teams/components/TeamCard";
import TeamsPlaceholder from "@/app/admin/teams/components/TeamsPlaceholder";
import useTeams from "@/hooks/api/teams/useTeams";
import { useEffect, useMemo, useRef, useState } from "react";
import EditTeamModal from "@/app/admin/teams/components/EditTeamModal";
import { useDisclosure } from "@nextui-org/react";
import DeleteTeamModal from "@/app/admin/teams/components/DeleteTeamModal";
import { closestCenter, DndContext, KeyboardSensor, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates
} from "@dnd-kit/sortable";
import useUpdateTeamOrder from "@/hooks/api/teams/useUpdateTeamOrder";

const RenderTeams = () => {
    const timer = useRef<any>(null);
    const { mutateAsync: updateTeamOrder, isPending } = useUpdateTeamOrder();

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates
        })
    );

    const [selectedTeamId, setSelectedTeamId] = useState(-1);

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

    const [isMounted, setIsMounted] = useState(false);
    const { data: teams, isLoading } = useTeams();

    const [teamsTemp, setTeamsTemp] = useState<TeamType[]>([]);

    useEffect(() => {
        if (teams) {
            setTeamsTemp(teams.results.sort((a, b) => a.ordering > b.ordering ? 1 : -1));
        }
    }, [teams, isMounted]);

    const renderTeams = useMemo(() => {
        return teamsTemp.map((item, index) => {
            return (
                <TeamCard
                    {...item}
                    onEditModalOpen={onEditModalOpen}
                    onDeleteModalOpen={onDeleteModalOpen}
                    setSelectedTeamId={setSelectedTeamId}
                    key={item.id}
                />
            );
        });
    }, [teamsTemp]);

    function handleDragEnd(event: any) {
        const { active, over } = event;

        if (active.id !== over.id) {
            setTeamsTemp((items) => {
                const oldIndex = items.findIndex(item => item.id === active.id);
                const newIndex = items.findIndex(item => item.id === over.id);

                const editedArray = arrayMove(items, oldIndex, newIndex);

                // if (timer.current) clearTimeout(timer.current);
                // timer.current = setTimeout(async () => {
                //     await updateTeamOrder({
                //         movedItemOrdering: editedArray.findIndex(item => item.id === over.id) + 1,
                //         draggedItemOrdering: editedArray.findIndex(item => item.id === active.id) + 1,
                //         draggedItemId: active.id,
                //         movedItemId: over.id
                //     });
                // }, 500);

                return editedArray;
            });
        }
    }

    return (
        <>
            {isPending && (
                <span className="text-white bg-foreground-100 p-4 fixed top-0">
                    Applying order
                </span>
            )}
            <DndContext
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd}
            >
                {!isLoading ?
                    (
                        <SortableContext
                            items={teamsTemp}
                        >
                            {renderTeams}
                        </SortableContext>
                    )
                    : <TeamsPlaceholder />
                }
                <EditTeamModal
                    isOpen={isEditModalOpen}
                    onClose={onEditModalClose}
                    onOpen={onEditModalOpen}
                    onOpenChange={onEditModalOpenChange}
                    id={selectedTeamId}
                />
                <DeleteTeamModal
                    isOpen={isDeleteModalOpen}
                    onClose={onDeleteModalClose}
                    onOpen={onDeleteModalOpen}
                    onOpenChange={onDeleteModalOpenChange}
                    id={selectedTeamId}
                />
            </DndContext>
        </>
    );
};

export default RenderTeams;