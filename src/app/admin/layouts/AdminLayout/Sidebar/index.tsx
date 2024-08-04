import SidebarItem from "./SidebarItem";
import Logo from "./Logo";
import UserDetails from "./UserDetails";

const Sidebar = () => {
    return (
        <div className="w-[280px] h-full border-l border-divider py-4 px-6 flex flex-col justify-between">
            <div>
                <Logo />
                <div className="mt-8 flex flex-col gap-3">
                    <SidebarItem text="داشبورد" icon="pi-home" link="/admin" />
                    <SidebarItem text="اسپانسر ها" icon="pi-star" link="/admin/sponsors" />
                    <SidebarItem text="اعضای تیم" icon="pi-user" link="/admin/teams" />
                    <SidebarItem text="سوالات متداول" icon="pi-question" link="/admin/faqs" />
                    <SidebarItem text="تنظیمات" icon="pi-cog" link="/admin/setting" />
                </div>
            </div>
            <UserDetails />
        </div>

    );
};

export default Sidebar;