import {
    Button,
    Input,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    Spinner,
    Textarea
} from "@nextui-org/react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useFaq from "@/hooks/api/faqs/useFaq";
import { useEffect } from "react";
import useUpdateFaq, { UpdateFaqRequest } from "@/hooks/api/faqs/useUpdateFaq";
import { useQueryClient } from "@tanstack/react-query";

export type EditFaqModalProps = {
    id: number;
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    onOpenChange: () => void;
}

type EditFaqForm = UpdateFaqRequest;

const EditFaqModal = ({ onOpenChange, isOpen, id, onClose }: EditFaqModalProps) => {
    const queryClient = useQueryClient();
    const { data: faq } = useFaq(id);
    const { mutateAsync: updateFaq, isPending: isUpdatingFaq } = useUpdateFaq(id);
    const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm<EditFaqForm>();

    useEffect(() => {
        if (faq && isOpen) {
            setValue("answer", faq.answer);
            setValue("title", faq.title);
        }
    }, [faq, isOpen]);

    const onSubmit: SubmitHandler<EditFaqForm> = async (data) => {
        await updateFaq(data);
        toast.success("سوال ابدیت شد");
        queryClient.refetchQueries({
            queryKey: ["faqs"]
        });
        reset();
        onClose();
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
                    faq ? (
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <ModalHeader className="flex gap-1 text-foreground">
                                ویرایش سوال
                                <span>{faq.title}</span>
                            </ModalHeader>
                            <ModalBody>
                                <div className="flex flex-col gap-6">
                                    <Input
                                        className="text-foreground"
                                        variant="bordered"
                                        label="عنوان سوال"
                                        isInvalid={!!errors.title}
                                        {...register("title", { required: true })}
                                    />
                                    <Textarea
                                        className="text-foreground"
                                        variant="bordered"
                                        dir="ltr"
                                        label="جواب سوال"
                                        isInvalid={!!errors.answer}
                                        {...register("answer", { required: true })}
                                    />
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    بستن
                                </Button>
                                <Button isLoading={isUpdatingFaq} type="submit" color="primary">
                                    ذخیره
                                </Button>
                            </ModalFooter>
                        </form>
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

export default EditFaqModal;