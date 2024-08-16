import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Spinner } from "@nextui-org/react";
import useEvent from "@/hooks/api/events/useEvent";
import Image from "next/image";
import useDeleteEvent from "@/hooks/api/events/useDeleteEvent";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";

export type DeleteEventModalProps = {
    id: number;
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    onOpenChange: () => void;
}

const DeleteEventModal = ({ onOpen, onClose, isOpen, onOpenChange, id }: DeleteEventModalProps) => {
    const queryClient = useQueryClient();
    const { data: event, isLoading } = useEvent(id);

    const {
        mutateAsync: deleteEvent,
        isPending: isDeletingEvent
    } = useDeleteEvent(id);

    const onDeleteEventClick = async () => {
        await deleteEvent();
        onClose();
        queryClient.refetchQueries({
            queryKey: ["events"]
        });
        toast.success(`رویداد ${event?.title} دیلیت شد`);
    };

    return (
        <Modal
            backdrop="blur"
            className="dark"
            isDismissable={false}
            isKeyboardDismissDisabled={true}
            isOpen={isOpen}
            onOpenChange={onOpenChange}
        >
            <ModalContent>
                {(onClose) => (
                    event ? (
                        <div>
                            <ModalHeader className="flex gap-1 text-foreground">
                                حذف رویداد
                            </ModalHeader>
                            <ModalBody>
                                <div className="w-full aspect-square rounded-xl overflow-hidden relative">
                                    <Image src={event.photo} alt={event.title} className="object-cover" fill />
                                </div>
                                <p className="text-foreground py-2">
                                    از حذف رویداد
                                    <span className="px-2 inline-block text-primary">{event.title}</span>
                                    مطمئنید؟
                                </p>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    بستن
                                </Button>
                                <Button onPress={onDeleteEventClick} isLoading={isDeletingEvent} color="danger">
                                    حذف شود
                                </Button>
                            </ModalFooter>
                        </div>
                    ) : (
                        <div className="min-h-[300px] flex items-center justify-center">
                            <Spinner />
                        </div>
                    )
                )}
            </ModalContent>
        </Modal>
    );
};

export default DeleteEventModal;