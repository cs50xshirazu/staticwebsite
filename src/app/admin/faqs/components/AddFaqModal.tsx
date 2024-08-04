import { Button, Input,Textarea, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";
import useCreateFaq, { CreateFaqRequest } from "@/hooks/api/faqs/useCreateFaq";

export type AddFaqModalProps = {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    onOpenChange: () => void;
}

type AddFaqForm = CreateFaqRequest;

const AddFaqModal = ({ onOpenChange, isOpen, onClose }: AddFaqModalProps) => {
    const queryClient = useQueryClient();
    const { mutateAsync: createFaq, isPending: isCreatingFaq } = useCreateFaq();
    const { register, handleSubmit, reset, formState: { errors } } = useForm<AddFaqForm>();

    const onSubmit: SubmitHandler<AddFaqForm> = async (data) => {
        await createFaq(data);
        queryClient.refetchQueries({
            queryKey: ["faqs"]
        });
        reset();
        onClose();
        toast.success("سوال افزوده شد");
    };

    return (
        <Modal
            className="dark"
            backdrop="blur"
            isDismissable={false}
            isKeyboardDismissDisabled={true}
            isOpen={isOpen}
            onOpenChange={() => {
                onOpenChange();
                reset();
            }}
        >
            <ModalContent>
                {(onClose) => (
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <ModalHeader className="flex gap-1 text-foreground">
                            افزودن سوال
                        </ModalHeader>
                        <ModalBody>
                            <Input
                                isRequired
                                className="text-foreground"
                                variant="bordered"
                                label="عنوان سوال"
                                isInvalid={!!errors.title}
                                {...register("title", { required: true })}
                            />
                            <Textarea
                                isRequired
                                className="text-foreground"
                                variant="bordered"
                                dir="ltr"
                                label="پاسخ سوال"
                                isInvalid={!!errors.answer}
                                {...register("answer", { required: true })}
                            />
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="light" onPress={onClose}>
                                بستن
                            </Button>
                            <Button isLoading={isCreatingFaq} type="submit" color="primary">
                                افزودن
                            </Button>
                        </ModalFooter>
                    </form>
                )}
            </ModalContent>
        </Modal>
    );
};

export default AddFaqModal;