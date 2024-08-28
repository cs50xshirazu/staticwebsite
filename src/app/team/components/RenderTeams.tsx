"use client";

import useTeams from "@/hooks/api/teams/useTeams";
import TeamDivider from "@/app/team/components/TeamDivider";
import { useMemo } from "react";

const RenderTeams = () => {
    const { data: teams, isLoading } = useTeams();

    const renderTeams = useMemo(() => {
        const employeesGroups: {
            categoryName: string;
            employee: TeamType
        }[] = [];

        const items = teams?.results.filter(item => item.photo !== null);

        items?.forEach(item => {
            item.team_categories.forEach(category => {
                employeesGroups.push({
                    categoryName: category.name,
                    employee: item
                });
            });
        });

        const grouped = Object.groupBy(employeesGroups, ({ categoryName }) => categoryName);

        return Object.keys(grouped).sort((a, b) => {
            if (a === "مدرسین" || a === "تیم مدیریت" || a === "تیم فنی") return -1;
            return 1;
        }).map(categoryName => {
            return (
                <TeamDivider
                    key={categoryName}
                    title={categoryName}
                    employees={
                        grouped[categoryName]?.map(item => item.employee) ?? []
                    }
                />
            );
        });
    }, [teams]);

    return (
        <div>
            {renderTeams}
        </div>
    );
};

export default RenderTeams;