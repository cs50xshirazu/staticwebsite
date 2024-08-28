import { create } from "zustand";

interface States {
    selectedCategory: string;
}

interface Actions {
    changeCategory: (category: string) => void;
}

export const useCategoryStore = create<States & Actions>((set) => ({
    selectedCategory: "",
    changeCategory: (category) => set(() => ({
        selectedCategory: category
    }))
}));