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
                <span className="font-black whitespace-nowrap  text-xl sm:text-2xl">
                    {title}
                </span>
            </TitleBar>
            <div
                className="container mt-[40px] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 pt-[80px] lg:pt-[120px] pb-[60px] justify-items-stretch gap-x-6 sm:gap-x-10 gap-y-[95px] sm:gap-y-[110px] lg:gap-y-[170px]">
                {renderEmployees}
            </div>
        </div>
    );
};

export default TeamDivider;