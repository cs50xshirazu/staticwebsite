"use client";

import { Card, CardBody, CardFooter } from "@nextui-org/react";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export type TeamCardProps = TeamType & {
    onEditModalOpen: () => void;
    onDeleteModalOpen: () => void;
    setSelectedTeamId: (id: number) => void;
};

const TeamCard = ({
                      id,
                      name,
                      ordering,
                      photo,
                      setSelectedTeamId,
                      onEditModalOpen,
                      onDeleteModalOpen
                  }: TeamCardProps) => {

    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition
    } = useSortable({
        id
    });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    };

    const onTeamPress = () => {
        setSelectedTeamId(id);
        onEditModalOpen();
    };

    const onDeleteButtonClick = () => {
        setSelectedTeamId(id);
        onDeleteModalOpen();
    };

    return (
        <div
            className="w-min"
            ref={setNodeRef}
            {...attributes}
            {...listeners}
            style={style}
        >
            <Card
                className="w-[200px]"
                shadow="sm"
                // isPressable
                // onPress={onTeamPress}
            >
                <CardBody className="overflow-visible p-0">
                    <div className="w-full relative aspect-square overflow-hidden rounded-2xl">
                        <Image src={photo} alt="test" fill className="object-cover" />
                    </div>
                </CardBody>
                <CardFooter className="text-small justify-between">
                    <b className="text-start line-clamp-2 text-ellipsis">{name} - {ordering}</b>
                    <Button
                        onPress={onDeleteButtonClick}
                        variant="light"
                        color="danger"
                        isIconOnly
                        startContent={<i className="pi pi-trash"></i>}
                    />
                </CardFooter>
            </Card>
        </div>
    );
};

export default TeamCard;