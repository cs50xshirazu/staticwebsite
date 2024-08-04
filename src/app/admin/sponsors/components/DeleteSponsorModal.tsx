import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Spinner } from "@nextui-org/react";
import useSponsor from "@/hooks/api/sponsors/useSponsor";
import Image from "next/image";
import useDeleteSponsor from "@/hooks/api/sponsors/useDeleteSponsor";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";
import useSponsors from "@/hooks/api/sponsors/useSponsors";

export type DeleteSponsorModalProps = {
    id: number;
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    onOpenChange: () => void;
}

const DeleteSponsorModal = ({ onOpen, onClose, isOpen, onOpenChange, id }: DeleteSponsorModalProps) => {
    const queryClient = useQueryClient();
    const { data: sponsor, isLoading } = useSponsor(id);

    const {
        mutateAsync: deleteSponsor,
        isPending: isDeletingSponsor
    } = useDeleteSponsor(id);

    const onDeleteSponsorClick = async () => {
        await deleteSponsor();
        onClose();
        queryClient.refetchQueries({
            queryKey: ["sponsors"]
        });
        toast.success(`اسپانسر ${sponsor?.title} دیلیت شد`);
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
                    sponsor ? (
                        <div>
                            <ModalHeader className="flex gap-1 text-foreground">
                                حذف اسپانسر
                                <span>{sponsor.title}</span>
                            </ModalHeader>
                            <ModalBody>
                                <div className="w-full aspect-square rounded-xl overflow-hidden relative">
                                    <Image src={sponsor.photo} alt={sponsor.title} className="object-cover" fill />
                                </div>
                                <p className="text-foreground py-2">
                                    از حذف اسپانسر
                                    <span className="px-2 inline-block text-primary">{sponsor.title}</span>
                                    مطمئنید؟
                                </p>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    بستن
                                </Button>
                                <Button onPress={onDeleteSponsorClick} isLoading={isDeletingSponsor} color="danger">
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

export default DeleteSponsorModal;