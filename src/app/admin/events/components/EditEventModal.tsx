import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Spinner } from "@nextui-org/react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useEvent from "@/hooks/api/events/useEvent";
import { useEffect } from "react";
import useUpdateEvent, { UpdateEventRequest } from "@/hooks/api/events/useUpdateEvent";
import { useQueryClient } from "@tanstack/react-query";

export type EditEventModalProps = {
    id: number;
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    onOpenChange: () => void;
}

type EditEventForm = UpdateEventRequest;

const EditEventModal = ({ onOpenChange, isOpen, id, onClose }: EditEventModalProps) => {
    const queryClient = useQueryClient();
    const { data: event } = useEvent(id);
    const { mutateAsync: updateEvent, isPending: isUpdatingEvent } = useUpdateEvent(id);
    const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm<EditEventForm>();

    useEffect(() => {
        if (event && isOpen) {
            setValue("link", event.link);
            setValue("title", event.title);
        }
    }, [event, isOpen]);

    const onSubmit: SubmitHandler<EditEventForm> = async (data) => {
        await updateEvent(data);
        toast.success("رویداد ابدیت شد");
        queryClient.refetchQueries({
            queryKey: ["events"]
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
                    event ? (
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <ModalHeader className="flex gap-1 text-foreground">
                                ویرایش اسپانسر
                            </ModalHeader>
                            <ModalBody>
                                <div className="flex flex-col gap-6">
                                    <Input
                                        className="text-foreground"
                                        variant="bordered"
                                        label="نام رویداد"
                                        isInvalid={!!errors.title}
                                        {...register("title", { required: true })}
                                    />
                                    <Input
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
                                        className="text-foreground"
                                        variant="bordered"
                                        type="file"
                                        multiple={false}
                                        label="تصویر رویداد"
                                        isInvalid={!!errors.photo}
                                        {...register("photo")}
                                    />
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    بستن
                                </Button>
                                <Button isLoading={isUpdatingEvent} type="submit" color="primary">
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

export default EditEventModal;