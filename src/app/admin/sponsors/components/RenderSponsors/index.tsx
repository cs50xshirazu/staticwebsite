"use client";

import SponsorCard from "@/app/admin/sponsors/components/SponsorCard";
import SponsorsPlaceholder from "@/app/admin/sponsors/components/SponsorsPlaceholder";
import useSponsors from "@/hooks/api/sponsors/useSponsors";
import { useMemo, useState } from "react";
import EditSponsorModal from "@/app/admin/sponsors/components/EditSponsorModal";
import { useDisclosure } from "@nextui-org/react";
import DeleteSponsorModal from "@/app/admin/sponsors/components/DeleteSponsorModal";

const RenderSponsors = () => {
    const [selectedSponsorId, setSelectedSponsorId] = useState(-1);

    const {
        isOpen: isEditModalOpen,
        onOpen: onEditModalOpen,
        onClose: onEditModalClose,
        onOpenChange: onEditModalOpenChange
    } = useDisclosure();

    const {
        isOpen: isDeleteModalOpen,
        onOpen: onDeleteModalOpen,
        onClose: onDeleteModalClose,
        onOpenChange: onDeleteModalOpenChange
    } = useDisclosure();

    const { data: sponsors, isLoading } = useSponsors();

    const renderSponsors = useMemo(() => {
        return sponsors?.map((item, index) => {
            return (
                <SponsorCard
                    {...item}
                    onEditModalOpen={onEditModalOpen}
                    onDeleteModalOpen={onDeleteModalOpen}
                    setSelectedSponsorId={setSelectedSponsorId}
                    key={index}
                />
            );
        });
    }, [sponsors]);

    return (
        <div className="w-full flex flex-wrap gap-10">
            {isLoading ? <SponsorsPlaceholder /> : renderSponsors}
            <EditSponsorModal
                isOpen={isEditModalOpen}
                onClose={onEditModalClose}
                onOpen={onEditModalOpen}
                onOpenChange={onEditModalOpenChange}
                id={selectedSponsorId}
            />
            <DeleteSponsorModal
                isOpen={isDeleteModalOpen}
                onClose={onDeleteModalClose}
                onOpen={onDeleteModalOpen}
                onOpenChange={onDeleteModalOpenChange}
                id={selectedSponsorId}
            />
        </div>
    );
};

export default RenderSponsors;