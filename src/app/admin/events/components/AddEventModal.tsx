import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useCreateEvent, { CreateEventRequest } from "@/hooks/api/events/useCreateEvent";
import { useQueryClient } from "@tanstack/react-query";

export type AddEventModalProps = {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    onOpenChange: () => void;
}

type AddEventForm = CreateEventRequest;

const AddEventModal = ({ onOpenChange, isOpen, onClose }: AddEventModalProps) => {
    const queryClient = useQueryClient();
    const { mutateAsync: createEvent, isPending: isCreatingEvent } = useCreateEvent();
    const { register, handleSubmit, reset, formState: { errors } } = useForm<AddEventForm>();

    const onSubmit: SubmitHandler<AddEventForm> = async (data) => {
        await createEvent(data);
        queryClient.refetchQueries({
            queryKey: ["events"]
        });
        reset();
        onClose();
        toast.success("رویداد افزوده شد");
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
                            افزودن رویداد
                        </ModalHeader>
                        <ModalBody>
                            <Input
                                isRequired
                                className="text-foreground"
                                variant="bordered"
                                label="نام رویداد"
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
                                label="تصویر رویداد"
                                isInvalid={!!errors.photo}
                                {...register("photo", { required: true })}
                            />
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="light" onPress={onClose}>
                                بستن
                            </Button>
                            <Button isLoading={isCreatingEvent} type="submit" color="primary">
                                افزودن
                            </Button>
                        </ModalFooter>
                    </form>
                )}
            </ModalContent>
        </Modal>
    );
};

export default AddEventModal;