"use client";

import Category from "./Category";
import useTeamCategories from "@/hooks/api/teams/useTeamCategories";
import { useMemo } from "react";

const Categories = () => {
    const { data: teamCategories, isLoading } = useTeamCategories();

    const renderTeamCategories = useMemo(() => {
        return teamCategories?.results.map(category => {
            return (
                <Category
                    id={String(category.id)}
                    key={category.id}
                >
                    {category.name}
                </Category>
            );
        });
    }, [teamCategories]);

    return (
        <div className="flex items-center gap-5 pb-8 flex-wrap w-full">
            <Category id="">همه</Category>
            {renderTeamCategories}
        </div>
    );
};

export default Categories;