export type DividerShapeProps = {
    reverse?: boolean;
    simple?: boolean;
    className?: string;
    color?: "cream" | "red";
}

const DividerShape = ({ className, reverse, simple, color = "red" }: DividerShapeProps) => {
    const svgColor = color === "red" ? "#820000" : "#F2DEBA";

    return (
        <div className={`w-full flex items-center gap-2 ${reverse ? "flex-row-reverse" : ""} ${className}`}>
            <svg className="shrink-0 w-[30px] lg:w-[40px]" height="28" viewBox="0 0 51 28" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path d="M25.5081 24.4308L35.3621 13.9778L25.5081 3.52494L15.6551 13.9778L25.5081 24.4308Z"
                      stroke={svgColor} strokeWidth="4" strokeMiterlimit="10" />
                <path d="M45.558 19.1967L50.485 13.9702L45.558 8.74372L40.631 13.9702L45.558 19.1967Z"
                      fill={svgColor} />
                <path d="M5.33606 19.1988L10.2631 13.9723L5.33606 8.74579L0.410065 13.9723L5.33606 19.1988Z"
                      fill={svgColor} />
            </svg>

            <div className="w-full h-[4px] lg:h-[5px]" style={{ backgroundColor: svgColor }} />

            {simple ? (
                <svg className="shrink-0 w-[30px] lg:w-[40px]" height="28" viewBox="0 0 51 28" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M25.5081 24.4308L35.3621 13.9778L25.5081 3.52494L15.6551 13.9778L25.5081 24.4308Z"
                          stroke={svgColor} strokeWidth="4" strokeMiterlimit="10" />
                    <path d="M45.558 19.1967L50.485 13.9702L45.558 8.74372L40.631 13.9702L45.558 19.1967Z"
                          fill={svgColor} />
                    <path d="M5.33606 19.1988L10.2631 13.9723L5.33606 8.74579L0.410065 13.9723L5.33606 19.1988Z"
                          fill={svgColor} />
                </svg>
            ) : (
                <svg className="shrink-0 w-[30px] lg:w-[40px]" height="34" viewBox="0 0 47 34" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M31.193 31.0001L44 17.4137L31.193 3.82727L18.3861 17.4137L31.193 31.0001Z"
                          stroke={svgColor}
                          strokeWidth="4" strokeMiterlimit="10" />
                    <path d="M6.85306 24.0001L13.2537 17.2099L6.85306 10.4198L0.452462 17.21L6.85306 24.0001Z"
                          fill={svgColor} />
                </svg>
            )}
        </div>
    );
};

export default DividerShape;