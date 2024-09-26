"use client";

import TitleBar from "@/components/TitleBar";
import Employee from "@/app/team/components/Employee";
import { useMemo } from "react";

export type TeamDividerProps = {
    title: string;
    employees: TeamType[];
}

const TeamDivider = ({ employees, title }: TeamDividerProps) => {

    const renderEmployees = useMemo(() => {
        return employees.map((employee) => <Employee {...employee} key={employee.name} />);
    }, [employees]);

    return (
        <div className="container">
            <TitleBar className="gap-6">
                <span className="font-black whitespace-nowrap text-xl sm:text-2xl">
                    {title}
                </span>
            </TitleBar>
            <div
                className="container grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 justify-items-stretch items-baseline gap-x-6 sm:gap-x-10 py-16 gap-y-6">
                {renderEmployees}
            </div>
        </div>
    );
};

export default TeamDivider;