export type SectionTitleProp = {
    title: string;
}

const SectionTitle = ({ title }: SectionTitleProp) => {
    return (
        <div className="w-full flex items-center pb-10 pr-2">
            <span className="text-3xl font-bold text-foreground">
                {title}
            </span>
        </div>
    );
};

export default SectionTitle;