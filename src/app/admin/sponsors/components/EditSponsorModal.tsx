import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Spinner } from "@nextui-org/react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useSponsor from "@/hooks/api/sponsors/useSponsor";
import { useEffect } from "react";
import useUpdateSponsor, { UpdateSponsorRequest } from "@/hooks/api/sponsors/useUpdateSponsor";
import { useQueryClient } from "@tanstack/react-query";

export type EditSponsorModalProps = {
    id: number;
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    onOpenChange: () => void;
}

type EditSponsorForm = UpdateSponsorRequest;

const EditSponsorModal = ({ onOpenChange, isOpen, id, onClose }: EditSponsorModalProps) => {
    const queryClient = useQueryClient();
    const { data: sponsor } = useSponsor(id);
    const { mutateAsync: updateSponsor, isPending: isUpdatingSponsor } = useUpdateSponsor(id);
    const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm<EditSponsorForm>();

    useEffect(() => {
        if (sponsor && isOpen) {
            setValue("link", sponsor.link);
            setValue("title", sponsor.title);
        }
    }, [sponsor, isOpen]);

    const onSubmit: SubmitHandler<EditSponsorForm> = async (data) => {
        await updateSponsor(data);
        toast.success("اسبانسر ابدیت شد");
        queryClient.refetchQueries({
            queryKey: ["sponsors"]
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
                    sponsor ? (
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <ModalHeader className="flex gap-1 text-foreground">
                                ویرایش اسپانسر
                                <span>{sponsor.title}</span>
                            </ModalHeader>
                            <ModalBody>
                                <div className="flex flex-col gap-6">
                                    <Input
                                        className="text-foreground"
                                        variant="bordered"
                                        label="نام اسبانسر"
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
                                        label="تصویر اسبانسر"
                                        isInvalid={!!errors.photo}
                                        {...register("photo")}
                                    />
                                    <Input
                                        className="text-foreground"
                                        variant="bordered"
                                        type="file"
                                        multiple={false}
                                        label="تصویر فوتر"
                                        isInvalid={!!errors.icon}
                                        {...register("icon")}
                                    />
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    بستن
                                </Button>
                                <Button isLoading={isUpdatingSponsor} type="submit" color="primary">
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

export default EditSponsorModal;