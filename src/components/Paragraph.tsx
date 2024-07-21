export type ParagraphProps = {
    children?: React.ReactNode;
    className?: string;
}

const Paragraph = ({children,className} : ParagraphProps) => {
    return (
        <p className={`text-xl sm:text-2xl font-semibold leading-[30px] sm:leading-[33px] lg:leading-[40px] text-justify ${className}`}>
            {children}
        </p>
    )
}

export default Paragraph;