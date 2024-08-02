import Image from "next/image";
import DividerShape from "@/components/DividerShape";

export type EmployeeProps = TeamType

const Employee = ({
                      job,
                      name,
                      team_socials,
                      team_category,
                      category,
                      id,
                      photo
                  }: EmployeeProps) => {
    return (
        <div
            className="w-full min-h-[150px] 2xs:min-h-[180px] lg:min-h-[230px] relative bg-brand-primary p-4 flex flex-col justify-between rounded-xl">
            <div className="w-full flex items-center justify-center">
                <div
                    className="aspect-square max-w-[110px] 2xs:max-w-[130px] lg:max-w-[175px] w-full absolute top-[-40%]">
                    <Image src={photo} alt={name} className="object-cover rounded-xl" fill />
                </div>
            </div>
            <div className="flex flex-col items-center pt-[40px] 2xs:pt-[60px] lg:pt-[80px]">
                <span className="text-lg font-bold pb-2 text-white text-center">
                    {name}
                </span>
                <span className="pb-3 text-white text-center">
                    {job}
                </span>
            </div>
            <DividerShape simple color="cream" />
        </div>
    );
};

export default Employee;