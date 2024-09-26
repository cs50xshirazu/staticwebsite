import RippleEffect from "@/app/admin/components/RippleEffect";
import { Chip } from "@nextui-org/chip";
import { useCategoryStore } from "@/stores";

export type CategoryProps = {
    id: string;
    children: React.ReactNode;
}

const Category = ({ children, id }: CategoryProps) => {
    const { changeCategory, selectedCategory } = useCategoryStore();

    return (
        <RippleEffect>
            <button onClick={() => changeCategory(id)}>
                <Chip color={selectedCategory === id ? "primary" : "default"} variant="solid">
                    {children}
                </Chip>
            </button>
        </RippleEffect>
    );
};

export default Category;