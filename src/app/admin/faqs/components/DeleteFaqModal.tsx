import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Spinner } from "@nextui-org/react";
import Image from "next/image";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";
import useDeleteFaq from "@/hooks/api/faqs/useDeleteFaq";
import useFaq from "@/hooks/api/faqs/useFaq";

export type DeleteFaqModalProps = {
    id: number;
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    onOpenChange: () => void;
}

const DeleteFaqModal = ({ onOpen, onClose, isOpen, onOpenChange, id }: DeleteFaqModalProps) => {
    const queryClient = useQueryClient();
    const { data: faq, isLoading } = useFaq(id);

    const {
        mutateAsync: deleteFaq,
        isPending: isDeletingFaq
    } = useDeleteFaq(id);

    const onDeleteFaqClick = async () => {
        await deleteFaq();
        onClose();
        queryClient.refetchQueries({
            queryKey: ["faqs"]
        });
        toast.success(`سوال ${faq?.title} دیلیت شد`);
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
                    faq ? (
                        <div>
                            <ModalHeader className="flex gap-1 text-foreground">
                                حذف سوال
                                <span>{faq.title}</span>
                            </ModalHeader>
                            <ModalBody>
                                <div className="text-foreground py-2">
                                    از حذف این سوال
                                    مطمئنید؟
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    بستن
                                </Button>
                                <Button onPress={onDeleteFaqClick} isLoading={isDeletingFaq} color="danger">
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

export default DeleteFaqModal;