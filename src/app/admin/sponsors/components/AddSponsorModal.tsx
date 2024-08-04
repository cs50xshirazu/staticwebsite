import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useCreateSponsor, { CreateSponsorRequest } from "@/hooks/api/sponsors/useCreateSponsor";
import { useQueryClient } from "@tanstack/react-query";

export type AddSponsorModalProps = {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    onOpenChange: () => void;
}

type AddSponsorForm = CreateSponsorRequest;

const AddSponsorModal = ({ onOpenChange, isOpen, onClose }: AddSponsorModalProps) => {
    const queryClient = useQueryClient();
    const { mutateAsync: createSponsor, isPending: isCreatingSponsor } = useCreateSponsor();
    const { register, handleSubmit, reset, formState: { errors } } = useForm<AddSponsorForm>();

    const onSubmit: SubmitHandler<AddSponsorForm> = async (data) => {
        await createSponsor(data);
        queryClient.refetchQueries({
            queryKey: ["sponsors"]
        });
        reset();
        onClose();
        toast.success("اسپانسر افزوده شد");
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
                            افزودن اسپانسر
                        </ModalHeader>
                        <ModalBody>
                            <Input
                                isRequired
                                className="text-foreground"
                                variant="bordered"
                                label="نام اسبانسر"
                                isInvalid={!!errors.title}
                                {...register("title", { required: true })}
                            />
                            <Input
                                isRequired
                                className="text-foreground"
                                variant="bordered"
                                dir="ltr"
                                label="لینک وبسایت"
                                isInvalid={!!errors.link}
                                endContent={
                                    <div className="pointer-events-none flex items-center pr-1" dir="ltr">
                                        <span className="text-default-400 text-small">https://</span>
                                    </div>
                                }
                                {...register("link", { required: true })}
                            />
                            <Input
                                isRequired
                                className="text-foreground"
                                variant="bordered"
                                type="file"
                                label="تصویر اسبانسر"
                                isInvalid={!!errors.photo}
                                {...register("photo", { required: true })}
                            />
                            <Input
                                className="text-foreground"
                                variant="bordered"
                                type="file"
                                label="تصویر فوتر"
                                isInvalid={!!errors.icon}
                                {...register("icon")}
                            />
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="light" onPress={onClose}>
                                بستن
                            </Button>
                            <Button isLoading={isCreatingSponsor} type="submit" color="primary">
                                افزودن
                            </Button>
                        </ModalFooter>
                    </form>
                )}
            </ModalContent>
        </Modal>
    );
};

export default AddSponsorModal;