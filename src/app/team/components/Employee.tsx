import Image from "next/image";
import DividerShape from "@/components/DividerShape";

export type EmployeeProps = Employee & {}

const Employee = ({ image, socialMedias, job, name }: EmployeeProps) => {
    return (
        <div className="w-full h-[150px] 2xs:h-[180px] lg:h-[230px] relative bg-primary p-4 flex flex-col justify-between rounded-xl">
            <div className="w-full flex items-center justify-center">
                <div className="aspect-square max-w-[110px] 2xs:max-w-[130px] lg:max-w-[175px] w-full absolute top-[-40%]">
                    <Image src={image} alt={name} className="object-cover rounded-xl" fill />
                </div>
            </div>
            <div className="flex flex-col items-center pt-[50px] 2xs:pt-[60px] lg:pt-[80px]">
                <span className="text-lg font-bold pb-1 text-white">
                    {name}
                </span>
                <span className="pb-3 text-white">
                    {job}
                </span>
            </div>
            <DividerShape simple color="cream" />
        </div>
    );
};

export default Employee;