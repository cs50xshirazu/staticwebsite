"use client";

import useTeams from "@/hooks/api/teams/useTeams";
import TeamDivider from "@/app/team/components/TeamDivider";
import { useMemo } from "react";

const RenderTeams = () => {
    const { data: teams, isLoading } = useTeams();

    const renderTeams = useMemo(() => {
        return teams?.pages.flatMap(item => item.results).flat().filter(item => item.photo !== null);
    }, [teams]);

    return (
        <div>
            <TeamDivider title="تیم توسعه" employees={renderTeams ?? []} />
        </div>
    );
};

export default RenderTeams;