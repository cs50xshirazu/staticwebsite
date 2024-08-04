"use client";

import {
    getKeyValue,
    Table,
    TableBody,
    TableCell,
    TableColumn,
    TableHeader,
    TableRow,
    Tooltip,
    useDisclosure
} from "@nextui-org/react";
import useFaqs from "@/hooks/api/faqs/useFaqs";
import { useMemo, useState } from "react";
import { Button } from "@nextui-org/button";
import DeleteFaqModal from "@/app/admin/faqs/components/DeleteFaqModal";
import EditFaqModal from "@/app/admin/faqs/components/EditFaqModal";

const FaqsTable = () => {
    const [selectedFaqId, setSelectedFaqId] = useState(-1);
    const { data: faqs, isLoading } = useFaqs();

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

    const rows = useMemo(() => {
        return faqs?.map((item) => {
            return {
                key: item.id,
                title: item.title,
                answer: item.answer,
                actions: (
                    <div className="relative flex items-center gap-2">
                        <Tooltip className="dark text-foreground" content="ویرایش سوال">
                            <Button
                                onPress={() => {
                                    setSelectedFaqId(item.id);
                                    onEditModalOpen();
                                }}
                                variant="flat"
                                color="primary"
                                isIconOnly
                            >
                                <i className="pi pi-pencil"></i>
                            </Button>
                        </Tooltip>
                        <Tooltip className="dark text-foreground" content="حذف سوال">
                            <Button
                                onPress={() => {
                                    setSelectedFaqId(item.id);
                                    onDeleteModalOpen();
                                }}
                                variant="flat"
                                color="danger"
                                isIconOnly
                            >
                                <i className="pi pi-trash"></i>
                            </Button>
                        </Tooltip>
                    </div>
                )
            };
        });
    }, [faqs]);

    const columns = [
        {
            label: "عنوان سوال",
            key: "title"
        },
        {
            label: "پاسخ سوال",
            key: "answer"
        },
        {
            label: "عملیات ها",
            key: "actions"
        }
    ];

    return (
        <>
            <Table aria-label="Example table with dynamic content">
                <TableHeader columns={columns}>
                    {(column) => (
                        <TableColumn key={column.key}>
                            {column.label}
                        </TableColumn>
                    )}
                </TableHeader>
                <TableBody items={rows ?? []}>
                    {(item) => (
                        <TableRow key={item.key}>
                            {(columnKey) => (
                                <TableCell className="text-foreground">
                                    {getKeyValue(item, columnKey)}
                                </TableCell>
                            )}
                        </TableRow>
                    )}
                </TableBody>
            </Table>
            <DeleteFaqModal
                id={selectedFaqId}
                isOpen={isDeleteModalOpen}
                onOpen={onDeleteModalOpen}
                onClose={onDeleteModalClose}
                onOpenChange={onDeleteModalOpenChange}
            />
            <EditFaqModal
                id={selectedFaqId}
                isOpen={isEditModalOpen}
                onOpen={onEditModalOpen}
                onClose={onEditModalClose}
                onOpenChange={onEditModalOpenChange}
            />
        </>
    );
};

export default FaqsTable;