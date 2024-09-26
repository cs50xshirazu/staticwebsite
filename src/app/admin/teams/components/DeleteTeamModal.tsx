import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Spinner } from "@nextui-org/react";
import useTeam from "@/hooks/api/teams/useTeam";
import Image from "next/image";
import useDeleteTeam from "@/hooks/api/teams/useDeleteTeam";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";
import useTeams from "@/hooks/api/teams/useTeams";

export type DeleteTeamModalProps = {
    id: number;
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    onOpenChange: () => void;
}

const DeleteTeamModal = ({ onOpen, onClose, isOpen, onOpenChange, id }: DeleteTeamModalProps) => {
    const queryClient = useQueryClient();
    const { data: team, isLoading } = useTeam(id);

    const {
        mutateAsync: deleteTeam,
        isPending: isDeletingTeam
    } = useDeleteTeam(id);

    const onDeleteTeamClick = async () => {
        await deleteTeam();
        onClose();
        queryClient.refetchQueries({
            queryKey: ["teams"]
        });
        toast.success(`اسپانسر ${team?.title} دیلیت شد`);
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
                    team ? (
                        <div>
                            <ModalHeader className="flex gap-1 text-foreground">
                                حذف اسپانسر
                                <span>{team.title}</span>
                            </ModalHeader>
                            <ModalBody>
                                <div className="w-full aspect-square rounded-xl overflow-hidden relative">
                                    <Image src={team.photo} alt={team.title} className="object-cover" fill />
                                </div>
                                <p className="text-foreground py-2">
                                    از حذف اسپانسر
                                    <span className="px-2 inline-block text-primary">{team.title}</span>
                                    مطمئنید؟
                                </p>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    بستن
                                </Button>
                                <Button onPress={onDeleteTeamClick} isLoading={isDeletingTeam} color="danger">
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

export default DeleteTeamModal;