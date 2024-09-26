"use client";

import { Button } from "@nextui-org/button";
import { useDisclosure } from "@nextui-org/react";
import AddTeamModal from "@/app/admin/teams/components/AddTeamModal";

const AddTeamButton = () => {
    const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();

    return (
        <>
            <div className="fixed left-[50px] bottom-[25px]">
                <Button
                    size="lg"
                    isIconOnly
                    color="primary"
                    variant="solid"
                    aria-label="Take a photo"
                    onPress={onOpen}
                >
                    <i className="pi pi-plus"></i>
                </Button>
            </div>
            <AddTeamModal
                isOpen={isOpen}
                onOpen={onOpen}
                onClose={onClose}
                onOpenChange={onOpenChange}
            />
        </>
    );
};

export default AddTeamButton;