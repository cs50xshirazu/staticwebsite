import DividerShape from "@/components/DividerShape";

export type TitleBarProps = {
    children?: React.ReactNode;
    className?: string;
}

const TitleBar = ({ children, className }: TitleBarProps) => {
    return (
        <div className={`flex items-center gap-6 lg:gap-8 ${className}`}>
            <DividerShape />
            {children}
            <DividerShape reverse />
        </div>
    );
};

export default TitleBar;