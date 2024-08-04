"use client";

import { Card, CardBody, CardFooter } from "@nextui-org/react";
import Image from "next/image";
import { Button } from "@nextui-org/button";

export type SponsorCardProps = SponsorType & {
    onEditModalOpen: () => void;
    onDeleteModalOpen: () => void;
    setSelectedSponsorId: (id: number) => void;
};

const SponsorCard = ({
                         id,
                         title,
                         photo,
                         setSelectedSponsorId,
                         onEditModalOpen,
                         onDeleteModalOpen
                     }: SponsorCardProps) => {

    const onSponsorPress = () => {
        setSelectedSponsorId(id);
        onEditModalOpen();
    };

    const onDeleteButtonClick = () => {
        setSelectedSponsorId(id);
        onDeleteModalOpen();
    };

    return (
        <>
            <Card className="w-[200px]" shadow="sm" isPressable onPress={onSponsorPress}>
                <CardBody className="overflow-visible p-0">
                    <div className="w-full relative aspect-square overflow-hidden rounded-2xl">
                        <Image src={photo} alt="test" fill className="object-cover" />
                    </div>
                </CardBody>
                <CardFooter className="text-small justify-between">
                    <b>{title}</b>
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

export default SponsorCard;