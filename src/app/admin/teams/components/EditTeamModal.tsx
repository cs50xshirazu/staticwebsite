import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Spinner } from "@nextui-org/react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useTeam from "@/hooks/api/teams/useTeam";
import { useEffect } from "react";
import useUpdateTeam, { UpdateTeamRequest } from "@/hooks/api/teams/useUpdateTeam";
import { useQueryClient } from "@tanstack/react-query";

export type EditTeamModalProps = {
    id: number;
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    onOpenChange: () => void;
}

type EditTeamForm = UpdateTeamRequest;

const EditTeamModal = ({ onOpenChange, isOpen, id, onClose }: EditTeamModalProps) => {
    const queryClient = useQueryClient();
    const { data: team } = useTeam(id);
    const { mutateAsync: updateTeam, isPending: isUpdatingTeam } = useUpdateTeam(id);
    const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm<EditTeamForm>();

    useEffect(() => {
        if (team && isOpen) {
            setValue("link", team.link);
            setValue("title", team.title);
        }
    }, [team, isOpen]);

    const onSubmit: SubmitHandler<EditTeamForm> = async (data) => {
        await updateTeam(data);
        toast.success("اسبانسر ابدیت شد");
        queryClient.refetchQueries({
            queryKey: ["teams"]
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
                    team ? (
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <ModalHeader className="flex gap-1 text-foreground">
                                ویرایش اسپانسر
                                <span>{team.title}</span>
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
                                <Button isLoading={isUpdatingTeam} type="submit" color="primary">
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

export default EditTeamModal;