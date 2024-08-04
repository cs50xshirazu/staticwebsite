import { auth } from "@/configs/auth";
import { Avatar } from "@nextui-org/avatar";

const UserDetails = async () => {
    const session = await auth();

    return (
        <div className="flex items-center gap-4 pb-2 border-t border-divider pt-4">
            <Avatar name="M" size="md"/>
            <span className="text-foreground">
                {session ? session.user?.name : "لطفا وارد شوید"}
            </span>
        </div>
    );
};

export default UserDetails;