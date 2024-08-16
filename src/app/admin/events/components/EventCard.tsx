"use client";

import { Card, CardBody, CardFooter } from "@nextui-org/react";
import Image from "next/image";
import { Button } from "@nextui-org/button";

export type EventCardProps = EventType & {
    onEditModalOpen: () => void;
    onDeleteModalOpen: () => void;
    setSelectedEventId: (id: number) => void;
};

const EventCard = ({
                         id,
                         title,
                         photo,
                         setSelectedEventId,
                         onEditModalOpen,
                         onDeleteModalOpen
                     }: EventCardProps) => {

    const onEventPress = () => {
        setSelectedEventId(id);
        onEditModalOpen();
    };

    const onDeleteButtonClick = () => {
        setSelectedEventId(id);
        onDeleteModalOpen();
    };

    return (
        <>
            <Card className="w-[200px]" shadow="sm" isPressable onPress={onEventPress}>
                <CardBody className="overflow-visible p-0">
                    <div className="w-full relative aspect-square overflow-hidden rounded-2xl">
                        <Image src={photo} alt="test" fill className="object-cover" />
                    </div>
                </CardBody>
                <CardFooter className="text-small justify-between">
                    <b className="text-start line-clamp-2 text-ellipsis">{title}</b>
                    <Button
                        onPress={onDeleteButtonClick}
                        variant="light"
                        color="danger"
                        isIconOnly
                        startContent={<i className="pi pi-trash"></i>}
                    />
                </CardFooter>
            </Card>
        </>
    );
};

export default EventCard;