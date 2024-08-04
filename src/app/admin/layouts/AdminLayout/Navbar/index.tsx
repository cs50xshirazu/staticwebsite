import SignOut from "@/app/admin/layouts/AdminLayout/Navbar/SignOut";
import { Button } from "@nextui-org/button";

const Navbar = () => {
    return (
        <div className="w-full h-[80px] border-b border-divider flex items-center gap-8 justify-between px-[40px]">
            <div className="flex items-center gap-2">
                <Button
                    isIconOnly
                    variant="flat"
                    color="default"
                    size="lg"
                >
                    <i className="pi pi-inbox"></i>
                </Button>
                <Button
                    isIconOnly
                    variant="flat"
                    color="default"
                    size="lg"
                >
                    <i className="pi pi-bell"></i>
                </Button>
            </div>
            <SignOut />
        </div>
    );
};

export default Navbar;