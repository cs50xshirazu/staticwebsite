import Image from "next/image";
import LinkedinImage from "@/assets/icons/linkedin-footer.svg";
import Link from "next/link";

export type EmployeeProps = TeamType

const Employee = ({
                      name,
                      team_socials,
                      team_categories,
                      id,
                      linkedin,
                      photo
                  }: EmployeeProps) => {
    return (
        <div
            className="w-full relative flex flex-col justify-between rounded-xl">
            <div className="w-full flex items-center justify-center">
                <div
                    className="aspect-square w-[300px] relative">
                    <Image src={photo} alt={name} className="object-cover rounded-xl" fill />
                </div>
            </div>
            <div className="flex flex-col items-center translate-y-[-16px] xs:translate-y-[-28px]">
                <span className="text-lg xs:text-xl font-bold pb-2 text-black text-center">
                   {name}
                </span>
            </div>

            <div className={`w-full flex justify-center items-center gap-4 -translate-y-4 ${!linkedin ? 'grayscale opacity-60' : ''}`}>

                {linkedin ? (
                    <Link href={linkedin}>
                        <Image src={LinkedinImage} alt="linkedin" className="w-6" />
                    </Link>
                ) : (
                    <div>
                        <Image src={LinkedinImage} alt="linkedin" className="w-6" />
                    </div>
                )}
            </div>

        </div>
    );
};

export default Employee;