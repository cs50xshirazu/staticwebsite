import Image from "next/image";
import LinkedinImage from "@/assets/icons/linkedin-footer.svg";
import Link from "next/link";

export type EmployeeProps = TeamType

const Employee = ({
                      name,
                      team_socials,
                      team_categories,
                      id,
                      name_image,
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
            <div className="flex flex-col items-center justify-center gap-4 -translate-y-4 xs:-translate-y-8">
                <div className="flex flex-col items-center">
                    {/*<span className="text-lg xs:text-xl font-bold pb-2 text-black text-center">*/}
                    {/*   {name}*/}
                    {/*</span>*/}
                    <Image src={name_image ?? ""} alt={name} className="w-[75%]" width={300} height={300} />
                </div>
                <div
                    className={`w-full flex justify-center items-center gap-4 ${!linkedin ? "grayscale opacity-60" : ""}`}>
                    {linkedin ? (
                        <Link href={linkedin} className="hover:scale-[115%] transition-all hover:brightness-125">
                            <Image src={LinkedinImage} alt="linkedin" className="w-6" />
                        </Link>
                    ) : (
                        <div>
                            <Image src={LinkedinImage} alt="linkedin" className="w-6" />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Employee;